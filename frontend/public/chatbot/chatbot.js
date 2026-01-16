/**
 * Makhija Quantum AI - FAQ Support Chatbot
 * Rule-based, button-driven support assistant
 * 
 * Features:
 * - Lazy-loaded on first interaction
 * - Button-only navigation (no free-text input)
 * - Session state management
 * - Dark mode support
 * - Keyboard accessible
 * - Mobile responsive
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    dataPath: '/chatbot/faq-data.json',
    lazyLoad: true,
    animationDuration: 250
  };

  // State
  let state = {
    isOpen: false,
    isLoaded: false,
    isLoading: false,
    data: null,
    currentFlow: null,
    conversationPath: []
  };

  // DOM References
  let elements = {
    container: null,
    launcher: null,
    panel: null,
    messages: null
  };

  // Icons (inline SVGs for no external dependencies)
  const icons = {
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
  };

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
    `;

    elements.container.appendChild(panel);
    elements.panel = panel;
    elements.messages = panel.querySelector('.chatbot-messages');

    // Attach panel event listeners
    panel.querySelector('.chatbot-close-btn').addEventListener('click', closeChat);
    panel.querySelector('.chatbot-reset-btn').addEventListener('click', resetChat);
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
    
    // Clear messages and show welcome
    if (elements.messages) {
      elements.messages.innerHTML = '';
      showWelcome();
      
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
  function displayMessage(text, buttons) {
    elements.messages.innerHTML = '';
    
    const messageEl = document.createElement('div');
    messageEl.className = 'chatbot-message';
    
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
