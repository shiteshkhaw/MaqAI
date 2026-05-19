export type PageContent = {
    slug: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    structuredData: any;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    problemStatement: { title: string; description: string };
    solutionExplanation: { title: string; description: string; features: string[] };
    useCases: { title: string; description: string }[];
    benefits: { title: string; description: string }[];
    ctaText: string;
    imageUrl?: string;
    relatedLinks?: { label: string; url: string }[];
};

export const PAGES_CONTENT: Record<string, PageContent> = {
    'whatsapp-automation': {
        slug: 'whatsapp-automation',
        metaTitle: 'WhatsApp Automation India | Grow Your Business on Auto-Pilot',
        metaDescription: 'Leverage powerful WhatsApp automation to streamline customer support, scale sales, and engage customers 24/7. Top AI solutions in India.',
        keywords: 'whatsapp automation india, whatsapp business api, automated messaging, conversational commerce, customer support automation',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WhatsApp Automation Service",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" },
            "description": "Automate customer support and sales through WhatsApp Business API."
        },
        heroTitle: 'Transform Customer Engagement with ',
        heroSubtitle: 'WhatsApp Automation',
        heroDescription: 'Deliver instant responses, drive sales, and automate support 24/7 with intelligent WhatsApp workflows tailored for your business.',
        problemStatement: {
            title: 'The Cost of Missed Messages',
            description: 'Customers expect immediate responses. Manual replies lead to delayed engagement, lost leads, and burnt-out support teams.'
        },
        solutionExplanation: {
            title: 'Always-On Conversational Commerce',
            description: 'Our WhatsApp automation integrates directly with your CRM and backend, providing intelligent, context-aware responses that guide customers from inquiry to purchase without human intervention.',
            features: ['Instant AI replies', 'Automated lead qualification', 'CRM integration', 'Broadcast campaigns']
        },
        useCases: [
            { title: 'Customer Support', description: 'Resolve 80% of routine queries instantly via WhatsApp.' },
            { title: 'Lead Generation', description: 'Qualify prospects through conversational forms and flow.' },
            { title: 'Order Tracking', description: 'Send automated shipping updates directly to customers.' }
        ],
        benefits: [
            { title: 'Save 40+ Hours/Week', description: 'Eliminate manual replies for repetitive queries.' },
            { title: '3x Conversion Rate', description: 'Engage leads while their intent is highest.' }
        ],
        ctaText: 'Get Automation Audit',
        imageUrl: '/whatsapp_automation.png',
        relatedLinks: [
            { label: 'WhatsApp for E-commerce', url: '/whatsapp-automation-ecommerce' },
            { label: 'Chatbots & AI Agents', url: '/chatbots-ai-agents' }
        ]
    },
    'instagram-automation': {
        slug: 'instagram-automation',
        metaTitle: 'Instagram Automation for Business | Scale Your Social Presence',
        metaDescription: 'Automate DMs, comments, and lead capture on Instagram. Our AI-driven Instagram automation business solutions save time and boost engagement.',
        keywords: 'instagram automation business, instagram dm automation, social media bot, automate instagram comments, IG growth automation',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instagram Automation Service",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" },
            "description": "Automate DMs, comments, and lead capture on Instagram."
        },
        heroTitle: 'Scale Your Social Engagement with ',
        heroSubtitle: 'Instagram Automation',
        heroDescription: 'Turn every comment, story reply, and DM into a qualified lead automatically, while you focus on creating great content.',
        problemStatement: {
            title: 'Drowning in DMs and Comments',
            description: 'As your audience grows, responding to every interaction manually becomes impossible, leading to missed opportunities and frustrated followers.'
        },
        solutionExplanation: {
            title: 'Intelligent Social Scaling',
            description: 'We build custom Instagram automation flows that reply to comments, manage DMs, and capture lead information seamlessly, driving traffic directly to your offers.',
            features: ['Auto-reply to comments', 'Story mention triggers', 'DM sales funnels', 'Lead data capture']
        },
        useCases: [
            { title: 'Lead Magnets', description: 'Automatically send a link when a user comments a specific keyword.' },
            { title: 'Customer FAQ', description: 'Answer common questions instantly in DMs.' },
            { title: 'Event Registration', description: 'Register attendees entirely within Instagram.' }
        ],
        benefits: [
            { title: '24/7 Engagement', description: 'Never leave a follower hanging, regardless of timezones.' },
            { title: 'Higher ROI on Content', description: 'Convert passive scrollers into active leads.' }
        ],
        ctaText: 'Book Consultation',
        imageUrl: '/instagram_automation.png',
        relatedLinks: [
            { label: 'Instagram for Creators', url: '/instagram-automation-creators' },
            { label: 'Social Media Content Generation', url: '/ai-content-generation' }
        ]
    },
    'ai-content-generation': {
        slug: 'ai-content-generation',
        metaTitle: 'AI Content Generation | Scale Your Brand Voice',
        metaDescription: 'High-quality, scalable AI content generation for blogs, social media, and marketing copy. Maintain your brand voice while increasing output 10x.',
        keywords: 'ai content generation, scalable ai writing, automated blog posts, ai social media content, brand voice ai',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Content Generation Service",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Multiply Your Output with ',
        heroSubtitle: 'AI Content Generation',
        heroDescription: 'Produce high-quality blogs, social media posts, and marketing copy at scale without losing your unique brand voice.',
        problemStatement: {
            title: 'The Content Bottleneck',
            description: 'Consistent content creation is resource-intensive. Writing, editing, and formatting takes hours away from core business operations.'
        },
        solutionExplanation: {
            title: 'Custom-Trained Brand Voices',
            description: 'We deploy AI generation systems fine-tuned to your specific tone, style, and industry context. Generate first drafts in seconds that require minimal human editing.',
            features: ['Brand voice alignment', 'Bulk content creation', 'SEO-optimized outputs', 'Multi-channel formatting']
        },
        useCases: [
            { title: 'Blog Production', description: 'Generate structured, SEO-rich articles from simple prompts.' },
            { title: 'Social Media Calendars', description: 'Create a month of social posts in minutes.' },
            { title: 'Email Newsletters', description: 'Draft compelling updates for your subscribers.' }
        ],
        benefits: [
            { title: '10x Content Velocity', description: 'Publish more frequently to dominate search and social.' },
            { title: 'Reduced Content Costs', description: 'Lower your cost-per-asset significantly.' }
        ],
        ctaText: 'Get Automation Audit',
        imageUrl: '/content_generation.png',
        relatedLinks: [
            { label: 'AI Content for Agencies', url: '/ai-content-agencies' }
        ]
    },
    'chatbots-ai-agents': {
        slug: 'chatbots-ai-agents',
        metaTitle: 'Chatbot Automation Company | Intelligent AI Agents',
        metaDescription: 'Deploy advanced AI agents and chatbots that understand context, resolve issues, and drive sales. Top chatbot automation company in India.',
        keywords: 'chatbot automation company, ai agents, intelligent chatbots, customer service ai, autonomous agents',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Chatbots & Agents",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Deploy Intelligent Systems with ',
        heroSubtitle: 'Chatbots & AI Agents',
        heroDescription: 'Move beyond rigid decision trees. Our autonomous AI agents understand context, integrate with your tools, and resolve complex issues instantly.',
        problemStatement: {
            title: 'Frustrating Customer Experiences',
            description: 'Traditional chatbots with rigid menus frustrate users. Meanwhile, human agents are overwhelmed with repetitive tasks that pull them away from high-value work.'
        },
        solutionExplanation: {
            title: 'Context-Aware AI Assistants',
            description: 'We build agents powered by Large Language Models that understand natural language, pull data from your internal systems, and execute actions autonomously.',
            features: ['Natural language processing', 'API & database integrations', 'Autonomous action execution', 'Human handoff protocols']
        },
        useCases: [
            { title: 'Support Triage', description: 'Automatically categorize and route complex tickets.' },
            { title: 'Internal Knowledge Base', description: 'Instantly answer employee HR or IT questions.' },
            { title: 'Sales Qualification', description: 'Ask qualifying questions and schedule meetings.' }
        ],
        benefits: [
            { title: '24/7 Availability', description: 'Provide instant support regardless of timezones.' },
            { title: 'Infinite Scalability', description: 'Handle 1 or 1,000 simultaneous conversations effortlessly.' }
        ],
        ctaText: 'Book Consultation',
        imageUrl: '/chatbots_agents.png',
        relatedLinks: [
            { label: 'Chatbots for Customer Support', url: '/chatbots-customer-support' },
            { label: 'Workflow Automation', url: '/workflow-automation' }
        ]
    },
    'workflow-automation': {
        slug: 'workflow-automation',
        metaTitle: 'Workflow Automation Business | Streamline Operations',
        metaDescription: 'Connect your apps, eliminate manual data entry, and streamline your business operations with custom workflow automation.',
        keywords: 'workflow automation business, business process automation, zapier expert, make.com automation, api integrations',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Workflow Automation",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Connect and Streamline with ',
        heroSubtitle: 'Workflow Automation',
        heroDescription: 'Eliminate manual data entry, connect your disjointed software tools, and let automated workflows handle the repetitive tasks.',
        problemStatement: {
            title: 'The Silent Killer of Productivity',
            description: 'Copy-pasting data between CRMs, spreadsheets, and emails is error-prone and wastes thousands of hours of valuable employee time annually.'
        },
        solutionExplanation: {
            title: 'Seamless Digital Orchestration',
            description: 'We map out your business processes and build robust integrations using APIs, webhooks, and automation platforms to ensure data flows perfectly across your entire stack.',
            features: ['Cross-platform synchronization', 'Automated reporting', 'Error handling & alerts', 'Custom API development']
        },
        useCases: [
            { title: 'Employee Onboarding', description: 'Automate account creation and welcome emails.' },
            { title: 'Invoice Processing', description: 'Extract data from PDFs and push to accounting software.' },
            { title: 'Lead Routing', description: 'Distribute incoming leads to sales reps automatically.' }
        ],
        benefits: [
            { title: 'Zero Data Entry Errors', description: 'Ensure perfect data consistency across all tools.' },
            { title: 'Reclaimed Time', description: 'Free your team to focus on strategic, creative work.' }
        ],
        ctaText: 'Get Automation Audit',
        imageUrl: '/workflow_automation.png',
        relatedLinks: [
            { label: 'WhatsApp Automation', url: '/whatsapp-automation' },
            { label: 'AI Content Generation', url: '/ai-content-generation' }
        ]
    },
    'whatsapp-automation-ecommerce': {
        slug: 'whatsapp-automation-ecommerce',
        metaTitle: 'WhatsApp Automation for E-commerce | Drive More Sales',
        metaDescription: 'Boost your e-commerce revenue with automated abandoned cart recovery, order updates, and personalized recommendations on WhatsApp.',
        keywords: 'whatsapp automation ecommerce, abandoned cart whatsapp, shopify whatsapp integration, ecommerce automation',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WhatsApp Automation for E-commerce",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Boost E-commerce Sales with ',
        heroSubtitle: 'WhatsApp Automation',
        heroDescription: 'Recover abandoned carts, send real-time order updates, and provide personalized shopping experiences directly on WhatsApp.',
        problemStatement: {
            title: 'High Drop-Off Rates',
            description: 'Emails have low open rates. E-commerce stores lose millions to abandoned carts and fail to engage customers post-purchase.'
        },
        solutionExplanation: {
            title: 'High-Converting Conversational Commerce',
            description: 'Integrate WhatsApp directly with Shopify, WooCommerce, or custom platforms. Engage customers where they actually read their messages, boasting a 98% open rate.',
            features: ['Abandoned cart recovery', 'Order status notifications', 'Product recommendations', 'Post-purchase upsells']
        },
        useCases: [
            { title: 'Cart Recovery', description: 'Send an automated reminder with a checkout link 1 hour after abandonment.' },
            { title: 'Shipping Updates', description: 'Proactively update customers on their delivery status.' }
        ],
        benefits: [
            { title: '20%+ Cart Recovery Rate', description: 'Win back lost revenue automatically.' },
            { title: 'Higher Customer LTV', description: 'Build loyalty through personalized communication.' }
        ],
        ctaText: 'Book Consultation',
        imageUrl: '/whatsapp_automation.png',
        relatedLinks: [
            { label: 'Core WhatsApp Automation', url: '/whatsapp-automation' }
        ]
    },
    'instagram-automation-creators': {
        slug: 'instagram-automation-creators',
        metaTitle: 'Instagram Automation for Creators & Influencers',
        metaDescription: 'Automate lead magnets, course sales, and engagement for creators. Turn your Instagram audience into a predictable revenue stream.',
        keywords: 'instagram automation creators, influencer automation, dm funnels for creators, instagram growth tools',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instagram Automation for Creators",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Monetize Your Audience with ',
        heroSubtitle: 'Instagram Automation for Creators',
        heroDescription: 'Deliver lead magnets instantly, manage massive DM volumes, and sell courses or products on autopilot directly through Instagram.',
        problemStatement: {
            title: 'Engagement That Does Not Convert',
            description: 'You have a large audience, but manually replying with links or managing giveaways is impossible, leaving money on the table.'
        },
        solutionExplanation: {
            title: 'Automated Creator Funnels',
            description: 'Turn your posts and Reels into automated funnels. When users comment a specific word, our system automatically sends them the link via DM and captures their email.',
            features: ['Keyword-triggered DMs', 'Email list building', 'Giveaway management', 'Automated sales pitches']
        },
        useCases: [
            { title: 'Course Sales', description: 'Drive traffic to your paid community directly from Reel comments.' },
            { title: 'Lead Magnets', description: 'Send free guides automatically in exchange for email addresses.' }
        ],
        benefits: [
            { title: 'Grow Your Email List Fast', description: 'Convert followers into owned audience.' },
            { title: 'Passive Income', description: 'Sell digital products while you sleep.' }
        ],
        ctaText: 'Get Automation Audit',
        imageUrl: '/instagram_automation.png',
        relatedLinks: [
            { label: 'Core Instagram Automation', url: '/instagram-automation' }
        ]
    },
    'ai-content-agencies': {
        slug: 'ai-content-agencies',
        metaTitle: 'AI Content Generation for Agencies | Scale Delivery',
        metaDescription: 'Help your agency scale content delivery for clients with custom AI content generation workflows. Increase margins and output.',
        keywords: 'ai content generation for agencies, scale agency content, automated marketing copy, agency ai tools',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Content for Agencies",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Scale Client Deliverables with ',
        heroSubtitle: 'AI Content for Agencies',
        heroDescription: 'Increase your agency margins by automating the heavy lifting of content creation, while maintaining high quality and distinct voices for every client.',
        problemStatement: {
            title: 'Low Margins on Content Services',
            description: 'Hiring writers for every new client destroys profit margins. Scaling content production manually is slow and inconsistent.'
        },
        solutionExplanation: {
            title: 'The AI-Powered Agency Engine',
            description: 'We build custom AI generation hubs for agencies. Store individual client voices, brand guidelines, and generate tailored content across dozens of accounts instantly.',
            features: ['Multi-tenant brand profiles', 'Bulk content generation', 'Workflow approvals', 'SEO optimization built-in']
        },
        useCases: [
            { title: 'SEO Retainers', description: 'Fulfill monthly blog article quotas efficiently.' },
            { title: 'Social Media Management', description: 'Generate cross-platform copy for 20+ clients simultaneously.' }
        ],
        benefits: [
            { title: 'Higher Profit Margins', description: 'Deliver more value with less overhead.' },
            { title: 'Faster Turnaround', description: 'Impress clients with rapid delivery times.' }
        ],
        ctaText: 'Book Consultation',
        imageUrl: '/content_generation.png',
        relatedLinks: [
            { label: 'Core AI Content Generation', url: '/ai-content-generation' }
        ]
    },
    'chatbots-customer-support': {
        slug: 'chatbots-customer-support',
        metaTitle: 'AI Chatbots for Customer Support | Automate Service',
        metaDescription: 'Deploy advanced AI chatbots to automate customer support, reduce ticket volume, and improve response times. AI agents tailored for service.',
        keywords: 'chatbots customer support, ai support agents, automate customer service, helpdesk automation',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Chatbots for Customer Support",
            "provider": { "@type": "Organization", "name": "Makhija Quantum AI" }
        },
        heroTitle: 'Transform Service with ',
        heroSubtitle: 'Support AI Agents',
        heroDescription: 'Reduce your support ticket volume by up to 60% with intelligent AI agents that actually resolve customer issues, not just deflect them.',
        problemStatement: {
            title: 'Overwhelmed Support Teams',
            description: 'Your team is bogged down answering "Where is my order?" and "How do I reset my password?", leading to slow response times for complex issues.'
        },
        solutionExplanation: {
            title: 'Autonomous Issue Resolution',
            description: 'Our AI support agents integrate with Zendesk, Intercom, and your internal databases to fetch real-time info and take action, completely resolving tier 1 and 2 tickets.',
            features: ['Knowledge base integration', 'Action execution (e.g. refunds)', 'Seamless human handoff', 'Multilingual support']
        },
        useCases: [
            { title: 'Ticket Deflection', description: 'Solve issues before they become support tickets.' },
            { title: 'Out-of-Hours Support', description: 'Provide immediate assistance on weekends and holidays.' }
        ],
        benefits: [
            { title: 'Lower Support Costs', description: 'Scale your business without proportionally scaling headcount.' },
            { title: 'Happier Customers', description: 'Provide instant answers instead of 24-hour wait times.' }
        ],
        ctaText: 'Get Automation Audit',
        imageUrl: '/chatbots_agents.png',
        relatedLinks: [
            { label: 'Core Chatbots & AI Agents', url: '/chatbots-ai-agents' },
            { label: 'Workflow Automation', url: '/workflow-automation' }
        ]
    }
};
