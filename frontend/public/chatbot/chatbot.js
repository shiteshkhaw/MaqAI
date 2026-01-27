/**
 * Makhija Quantum AI - FAQ Support Chatbot
 * Rule-based, button-driven support assistant with text-input
 * 
 * Features:
 * - Lazy-loaded on first interaction
 * - Button navigation (primary)
 * - Text input with keyword matching (secondary)
 * - AI fallback for unmatched queries (ultra-restricted)
 * - Session state management
 * - Dark mode support
 * - Keyboard accessible
 * - Mobile responsive
 */

(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    dataPath: '/chatbot/faq-data.json',
    aiEndpoint: '/api/chatbot/ai-fallback',
    lazyLoad: true,
    animationDuration: 250,
    maxAICallsPerSession: 3,
    stopwords: ['is', 'are', 'the', 'a', 'an', 'to', 'for', 'of', 'with', 'and', 'or', 'on', 'in', 'at', 'by', 'do', 'does', 'how', 'what', 'which', 'can', 'could', 'would', 'should', 'i', 'you', 'we', 'they', 'it', 'this', 'that', 'your', 'my', 'our', 'me', 'us']
  };

  // Matching Thresholds
  const MATCH_THRESHOLD = {
    STRONG: 2,  // Score >= 2 = strong match
    WEAK: 1     // Score = 1 = weak match, show clarification
  };

  // State
  let state = {
    isOpen: false,
    isLoaded: false,
    isLoading: false,
    isTyping: false,
    data: null,
    currentFlow: null,
    conversationPath: [],
    sessionId: generateSessionId(),
    aiCallCount: 0
  };

  // DOM References
  let elements = {
    container: null,
    launcher: null,
    panel: null,
    messages: null,
    inputArea: null,
    textInput: null,
    sendBtn: null
  };

  // Icons (inline SVGs for no external dependencies)
  const icons = {
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
  };

  /**
   * Generate a session ID for rate limiting
   */
  function generateSessionId() {
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Initialize the chatbot
   */
  function init() {
    createLauncher();
    attachEventListeners();
  }

  /**
   * Create the launcher button
   */
  function createLauncher() {
    const container = document.createElement('div');
    container.className = 'chatbot-container';
    container.id = 'maq-chatbot';
    container.setAttribute('role', 'complementary');
    container.setAttribute('aria-label', 'Support chatbot');

    const launcher = document.createElement('button');
    launcher.className = 'chatbot-launcher';
    launcher.setAttribute('aria-label', 'Open support chat');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.innerHTML = `
      ${icons.chat}
      <span class="chatbot-launcher-tooltip">Support & FAQs</span>
    `;

    container.appendChild(launcher);
    document.body.appendChild(container);

    elements.container = container;
    elements.launcher = launcher;
  }

  /**
   * Create the chat panel
   */
  function createPanel() {
    const panel = document.createElement('div');
    panel.className = 'chatbot-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Support chat');

    const config = state.data.config || {};

    panel.innerHTML = `
      <header class="chatbot-header">
        <div class="chatbot-header-info">
          <h2 class="chatbot-header-title">${escapeHtml(config.title || 'Support')}</h2>
          <p class="chatbot-header-subtitle">${escapeHtml(config.subtitle || 'Quick help')}</p>
        </div>
        <div class="chatbot-header-controls">
          <button class="chatbot-header-btn chatbot-reset-btn" aria-label="Reset conversation" title="Reset">
            ${icons.reset}
          </button>
          <button class="chatbot-header-btn chatbot-close-btn" aria-label="Close chat" title="Close">
            ${icons.close}
          </button>
        </div>
      </header>
      <div class="chatbot-messages" role="log" aria-live="polite" aria-atomic="false"></div>
      <div class="chatbot-input-area">
        <input type="text" class="chatbot-text-input" placeholder="Type a question..." aria-label="Type your question" autocomplete="off">
        <button class="chatbot-send-btn" aria-label="Send message" title="Send">
          ${icons.send}
        </button>
      </div>
    `;

    elements.container.appendChild(panel);
    elements.panel = panel;
    elements.messages = panel.querySelector('.chatbot-messages');
    elements.inputArea = panel.querySelector('.chatbot-input-area');
    elements.textInput = panel.querySelector('.chatbot-text-input');
    elements.sendBtn = panel.querySelector('.chatbot-send-btn');

    // Attach panel event listeners
    panel.querySelector('.chatbot-close-btn').addEventListener('click', closeChat);
    panel.querySelector('.chatbot-reset-btn').addEventListener('click', resetChat);

    // Text input listeners
    elements.sendBtn.addEventListener('click', handleTextSubmit);
    elements.textInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleTextSubmit();
      }
    });
  }

  /**
   * Attach global event listeners
   */
  function attachEventListeners() {
    // Launcher click
    elements.launcher.addEventListener('click', toggleChat);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
  }

  /**
   * Handle keyboard events
   */
  function handleKeyDown(e) {
    if (e.key === 'Escape' && state.isOpen) {
      closeChat();
    }
  }

  /**
   * Toggle chat open/closed
   */
  function toggleChat() {
    if (state.isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }

  /**
   * Open the chat panel
   */
  async function openChat() {
    if (!state.isLoaded && !state.isLoading) {
      await loadData();
    }

    if (!state.data) return;

    if (!elements.panel) {
      createPanel();
      showWelcome();
    }

    state.isOpen = true;
    elements.container.classList.add('is-open');
    elements.launcher.classList.add('is-open');
    elements.launcher.setAttribute('aria-expanded', 'true');

    // Focus first button in messages
    setTimeout(() => {
      const firstBtn = elements.messages.querySelector('.chatbot-btn');
      if (firstBtn) firstBtn.focus();
    }, CONFIG.animationDuration);
  }

  /**
   * Close the chat panel
   */
  function closeChat() {
    state.isOpen = false;
    elements.container.classList.remove('is-open');
    elements.launcher.classList.remove('is-open');
    elements.launcher.setAttribute('aria-expanded', 'false');
    elements.launcher.focus();
  }

  /**
   * Reset chat to welcome state
   * Fully clears session state without page reload
   */
  function resetChat() {
    // Clear all state
    state.currentFlow = null;
    state.conversationPath = [];
    state.aiCallCount = 0;
    state.sessionId = generateSessionId();

    // Clear messages and show welcome
    if (elements.messages) {
      elements.messages.innerHTML = '';
      showWelcome();

      // Clear input
      if (elements.textInput) {
        elements.textInput.value = '';
      }

      // Focus first button
      setTimeout(() => {
        const firstBtn = elements.messages.querySelector('.chatbot-btn');
        if (firstBtn) firstBtn.focus();
      }, CONFIG.animationDuration);
    }
  }

  /**
   * Load FAQ data
   */
  async function loadData() {
    state.isLoading = true;

    try {
      const response = await fetch(CONFIG.dataPath);
      if (!response.ok) throw new Error('Failed to load FAQ data');
      state.data = await response.json();
      state.isLoaded = true;
    } catch (error) {
      console.error('[Chatbot] Error loading data:', error);
      state.data = null;
    } finally {
      state.isLoading = false;
    }
  }

  /**
   * Show welcome message
   */
  function showWelcome() {
    const welcome = state.data.welcome;
    if (!welcome) return;

    displayMessage(welcome.message, welcome.buttons);
    state.currentFlow = 'welcome';
    state.conversationPath = ['welcome'];
  }

  /**
   * Display a message with buttons
   */
  function displayMessage(text, buttons, isUser = false, isAI = false) {
    elements.messages.innerHTML = '';

    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message';
    if (isUser) messageEl.classList.add('chatbot-message--user');
    if (isAI) messageEl.classList.add('chatbot-message--ai');

    // Message text
    const textEl = document.createElement('p');
    textEl.className = 'chatbot-message-text';
    textEl.textContent = text;
    messageEl.appendChild(textEl);

    // Buttons
    if (buttons && buttons.length > 0) {
      const buttonsEl = document.createElement('div');
      buttonsEl.className = 'chatbot-buttons';
      buttonsEl.setAttribute('role', 'group');
      buttonsEl.setAttribute('aria-label', 'Options');

      buttons.forEach(btn => {
        const buttonEl = document.createElement('button');
        buttonEl.className = 'chatbot-btn';

        // Style back buttons differently
        if (btn.id === 'main' || btn.label.toLowerCase().includes('back')) {
          buttonEl.classList.add('chatbot-btn--back');
        }

        // Determine icon
        let iconHtml = icons.arrow;
        if (btn.action === 'mailto' || btn.action === 'link') {
          iconHtml = icons.external;
        }

        buttonEl.innerHTML = `
          <span>${escapeHtml(btn.label)}</span>
          ${iconHtml}
        `;

        buttonEl.addEventListener('click', () => handleButtonClick(btn));
        buttonsEl.appendChild(buttonEl);
      });

      messageEl.appendChild(buttonsEl);
    }

    elements.messages.appendChild(messageEl);
    elements.messages.scrollTop = 0;
  }

  /**
   * Display user's question in chat
   */
  function displayUserMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message chatbot-message--user';

    const textEl = document.createElement('p');
    textEl.className = 'chatbot-message-text';
    textEl.textContent = text;
    messageEl.appendChild(textEl);

    // Clear previous messages and show user question first
    elements.messages.innerHTML = '';
    elements.messages.appendChild(messageEl);
  }

  /**
   * Show typing indicator
   */
  function showTyping() {
    state.isTyping = true;
    const typingEl = document.createElement('div');
    typingEl.className = 'chatbot-typing';
    typingEl.id = 'chatbot-typing-indicator';
    typingEl.innerHTML = `
      <span class="chatbot-typing-dot"></span>
      <span class="chatbot-typing-dot"></span>
      <span class="chatbot-typing-dot"></span>
    `;
    elements.messages.appendChild(typingEl);
    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  /**
   * Hide typing indicator
   */
  function hideTyping() {
    state.isTyping = false;
    const typingEl = document.getElementById('chatbot-typing-indicator');
    if (typingEl) typingEl.remove();
  }

  /**
   * Handle button click
   */
  function handleButtonClick(button) {
    const flowId = button.id;
    const action = button.action;

    // Handle external actions
    if (action === 'mailto') {
      const email = state.data.config?.email || 'support@example.com';
      window.location.href = `mailto:${email}`;
      return;
    }

    if (action === 'link') {
      const target = state.data.flows?.[flowId]?.target || state.data.config?.contactPage || '/#/contact';
      window.location.href = target;
      return;
    }

    // Handle navigation
    navigateToFlow(flowId);
  }

  /**
   * Navigate to a flow
   */
  function navigateToFlow(flowId) {
    // Handle main menu redirect
    if (flowId === 'main') {
      resetChat();
      return;
    }

    const flow = state.data.flows?.[flowId];

    // Handle redirects
    if (flow?.redirect) {
      navigateToFlow(flow.redirect);
      return;
    }

    // Handle external actions in flow
    if (flow?.action === 'mailto') {
      window.location.href = `mailto:${flow.target || state.data.config?.email}`;
      return;
    }

    if (flow?.action === 'link') {
      window.location.href = flow.target || state.data.config?.contactPage;
      return;
    }

    // Display flow content
    if (flow?.response && flow?.buttons) {
      state.currentFlow = flowId;
      state.conversationPath.push(flowId);
      displayMessage(flow.response, flow.buttons);
    } else {
      // Fallback if flow not found
      showFallback();
    }
  }

  /**
   * Show fallback message
   */
  function showFallback() {
    const fallback = state.data.fallback;
    if (fallback) {
      displayMessage(fallback.response, fallback.buttons);
    }
  }

  // ============================================================================
  // TEXT INPUT & FAQ MATCHING
  // ============================================================================

  /**
   * Normalize user input for matching
   * @param {string} text - Raw user input
   * @returns {string[]} - Array of normalized words
   */
  function normalizeInput(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '')  // Remove punctuation
      .split(/\s+/)
      .filter(word => word.length > 0 && !CONFIG.stopwords.includes(word));
  }

  /**
   * Match user input against FAQ keywords
   * @param {string[]} normalizedWords - Normalized user input words
   * @returns {Array} - Sorted array of matching flows with scores
   */
  function matchFAQ(normalizedWords) {
    const flows = state.data.flows;
    const results = [];

    for (const [flowId, flow] of Object.entries(flows)) {
      // Skip flows without keywords (action-only flows)
      if (!flow.keywords || !Array.isArray(flow.keywords)) continue;

      // Skip action flows
      if (flow.action || flow.redirect) continue;

      // Count keyword matches
      let score = 0;
      const matchedKeywords = [];

      for (const keyword of flow.keywords) {
        const keywordLower = keyword.toLowerCase();
        for (const word of normalizedWords) {
          // Check if the word contains the keyword or vice versa
          if (word.includes(keywordLower) || keywordLower.includes(word)) {
            score++;
            matchedKeywords.push(keyword);
            break; // One match per keyword
          }
        }
      }

      if (score > 0) {
        results.push({
          flowId,
          flow,
          score,
          matchedKeywords,
          category: flow.category || 'general'
        });
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    return results;
  }

  /**
   * Handle text input submission
   */
  async function handleTextSubmit() {
    const text = elements.textInput.value.trim();
    if (!text || state.isTyping) return;

    // Clear input
    elements.textInput.value = '';

    // Display user message
    displayUserMessage(text);

    // Normalize input
    const normalizedWords = normalizeInput(text);

    if (normalizedWords.length === 0) {
      // No meaningful words after filtering - show welcome
      setTimeout(() => showWelcome(), 500);
      return;
    }

    // Match against FAQs
    const matches = matchFAQ(normalizedWords);

    if (matches.length === 0) {
      // NO MATCH - Call AI fallback
      await handleAIFallback(text);
    } else if (matches[0].score >= MATCH_THRESHOLD.STRONG) {
      // STRONG MATCH - Show the top match directly
      setTimeout(() => {
        navigateToFlow(matches[0].flowId);
      }, 500);
    } else {
      // WEAK MATCH(ES) - Show clarification with related buttons
      showClarification(matches.slice(0, 3));
    }
  }

  /**
   * Show clarification for weak matches
   * @param {Array} matches - Top 3 weak matches
   */
  function showClarification(matches) {
    const clarificationText = "I think this might be related. Please choose an option below.";

    const buttons = matches.map(match => ({
      id: match.flowId,
      label: match.flow.seo?.question || match.flowId.replace(/_/g, ' ')
    }));

    // Add back to main menu
    buttons.push({
      id: 'main',
      label: 'Back to main menu'
    });

    setTimeout(() => {
      displayMessage(clarificationText, buttons);
    }, 500);
  }

  /**
   * Handle AI fallback for unmatched queries
   * @param {string} question - Original user question
   */
  async function handleAIFallback(question) {
    // Check rate limit
    if (state.aiCallCount >= CONFIG.maxAICallsPerSession) {
      showEscalation();
      return;
    }

    // Show typing indicator
    showTyping();

    try {
      const response = await fetch(CONFIG.aiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: question,
          sessionId: state.sessionId
        })
      });

      hideTyping();

      if (!response.ok) {
        // API error - show escalation
        showEscalation();
        return;
      }

      const data = await response.json();
      state.aiCallCount++;

      if (data.isEscalation) {
        showEscalation();
      } else {
        // Display AI response with escalation buttons
        const aiButtons = [
          {
            id: 'support_email',
            label: 'Email Support',
            action: 'mailto'
          },
          {
            id: 'support_contact',
            label: 'Contact Page',
            action: 'link'
          },
          {
            id: 'main',
            label: 'Back to main menu'
          }
        ];

        displayMessage(data.response, aiButtons, false, true);
      }

    } catch (error) {
      console.error('[Chatbot] AI fallback error:', error);
      hideTyping();
      showEscalation();
    }
  }

  /**
   * Show escalation message
   */
  function showEscalation() {
    const escalation = state.data.escalation || state.data.fallback;
    if (escalation) {
      displayMessage(escalation.response, escalation.buttons);
    } else {
      // Hardcoded fallback
      displayMessage(
        "I want to make sure you get the correct information.\n\nPlease reach out to our support team below.",
        [
          { id: 'support_email', label: 'Email Support', action: 'mailto' },
          { id: 'support_contact', label: 'Contact Page', action: 'link' },
          { id: 'main', label: 'Back to main menu' }
        ]
      );
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Check for dark mode
   */
  function isDarkMode() {
    return document.documentElement.classList.contains('dark') ||
      document.body.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
