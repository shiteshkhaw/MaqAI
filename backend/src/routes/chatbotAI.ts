import express, { Request, Response, NextFunction } from 'express';
import OpenAI from 'openai';

const router = express.Router();

// Session rate limiting: Map<sessionId, callCount>
const sessionCalls = new Map<string, number>();
const MAX_AI_CALLS_PER_SESSION = 3;
const TOKEN_CAP = 100;
const TIMEOUT_MS = 10000;

// Ultra-strict system prompt (non-negotiable)
const SYSTEM_PROMPT = `You are a support assistant for Makhija Quantum AI.

You may ONLY answer questions about:
- Company overview
- Products & services
- Pricing approach (high-level only)
- Getting started
- Security & compliance
- Support process

You MUST:
- Use only publicly safe, generic, non-speculative information
- Keep answers under 80 words
- Avoid absolute claims
- Avoid promises
- Avoid assumptions

If you are not 100% certain:
You MUST respond exactly with:
'I don't have enough confirmed information to answer that. Please contact our support team for accurate assistance.'

You are NOT:
- A sales agent
- A conversational chatbot
- A brainstorming assistant

Tone:
Professional. Neutral. Minimal.`;

// Validation patterns for unsafe AI responses
const UNSAFE_PATTERNS = [
    /\$\d+/i,                           // Dollar amounts
    /₹\d+/i,                            // Rupee amounts
    /\d+%/,                             // Percentages
    /guarantee/i,                       // Guarantees
    /promise/i,                         // Promises
    /definitely/i,                      // Absolute claims
    /certainly/i,                       // Absolute claims
    /absolutely/i,                      // Absolute claims
    /100%/i,                            // Absolute claims
    /always/i,                          // Absolute claims
    /never fail/i,                      // Absolute claims
    /within \d+ (hours?|days?|weeks?)/i, // Specific timelines
    /I think/i,                         // Assumptions
    /I believe/i,                       // Assumptions
    /probably/i,                        // Uncertainty
    /maybe/i,                           // Uncertainty
    /might be/i,                        // Uncertainty
    /could be/i,                        // Uncertainty
    /not sure/i,                        // Uncertainty
    /I don't know/i,                    // Uncertainty (except escalation phrase)
];

// Escalation response template
const ESCALATION_RESPONSE = {
    response: "I want to make sure you get the correct information.\n\nPlease reach out to our support team below.",
    isEscalation: true
};

/**
 * Validate AI response for unsafe content
 * Returns true if response is safe, false if should escalate
 */
function validateResponse(text: string): boolean {
    // Check for the exact escalation phrase from the AI (this is acceptable)
    if (text.includes("I don't have enough confirmed information")) {
        return false; // Escalate to human
    }

    // Check all unsafe patterns
    for (const pattern of UNSAFE_PATTERNS) {
        if (pattern.test(text)) {
            return false;
        }
    }

    return true;
}

/**
 * POST /api/chatbot/ai-fallback
 * Ultra-restricted AI fallback for when FAQ matching fails
 */
router.post('/ai-fallback', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { question, sessionId } = req.body;

        // Validate input
        if (!question || typeof question !== 'string' || question.trim().length === 0) {
            return res.status(400).json({ error: 'Question is required' });
        }

        if (!sessionId || typeof sessionId !== 'string') {
            return res.status(400).json({ error: 'Session ID is required' });
        }

        // Check rate limit
        const currentCalls = sessionCalls.get(sessionId) || 0;
        if (currentCalls >= MAX_AI_CALLS_PER_SESSION) {
            // Rate limit exceeded - return escalation
            return res.json(ESCALATION_RESPONSE);
        }

        // Check for API key
        const apiKey = process.env.AI_API_KEY;
        if (!apiKey) {
            console.error('[ChatbotAI] AI_API_KEY not configured');
            return res.json(ESCALATION_RESPONSE);
        }

        // Initialize OpenAI client
        const openai = new OpenAI({ apiKey });

        // Create abort controller for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        try {
            // Call OpenAI with strict constraints
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: question.trim() }
                ],
                max_tokens: TOKEN_CAP,
                temperature: 0.3, // Low temperature for deterministic responses
                top_p: 0.9,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            clearTimeout(timeoutId);

            const aiResponse = completion.choices[0]?.message?.content?.trim();

            if (!aiResponse) {
                // Empty response - escalate
                return res.json(ESCALATION_RESPONSE);
            }

            // Validate response for unsafe content
            if (!validateResponse(aiResponse)) {
                // Unsafe content detected - escalate
                console.log('[ChatbotAI] Response validation failed, escalating');
                sessionCalls.set(sessionId, currentCalls + 1);
                return res.json(ESCALATION_RESPONSE);
            }

            // Response is safe - increment call count and return
            sessionCalls.set(sessionId, currentCalls + 1);

            return res.json({
                response: aiResponse,
                isEscalation: false
            });

        } catch (error: any) {
            clearTimeout(timeoutId);

            if (error.name === 'AbortError' || error.code === 'ETIMEDOUT') {
                console.error('[ChatbotAI] Request timeout');
            } else {
                console.error('[ChatbotAI] OpenAI error:', error.message);
            }

            // Any error - escalate to human support
            return res.json(ESCALATION_RESPONSE);
        }

    } catch (error) {
        next(error);
    }
});

/**
 * GET /api/chatbot/health
 * Health check for chatbot AI service
 */
router.get('/health', (_req: Request, res: Response) => {
    const hasApiKey = !!process.env.AI_API_KEY;
    res.json({
        status: 'ok',
        aiConfigured: hasApiKey,
        provider: 'openai'
    });
});

export { router as chatbotAIRouter };
