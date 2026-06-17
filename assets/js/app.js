// ============================================
// A Plus Finance - Refinance Landing Page JS
// assets/js/app.js
// ============================================

(function() {
  'use strict';

  // ---- Refinance Calculator ----
  function initCalculator() {
    const form = document.getElementById('calc-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const balance = parseFloat(document.getElementById('calc-balance').value);
      const currentRate = parseFloat(document.getElementById('calc-current-rate').value);
      const newRate = parseFloat(document.getElementById('calc-new-rate').value);
      const term = parseInt(document.getElementById('calc-term').value) || 30;

      if (!balance || !currentRate || !newRate) {
        document.getElementById('calc-result').innerHTML = '<p style="color:#ef4444;">Please fill in all fields.</p>';
        return;
      }

      const monthlyCurrent = (currentRate / 100 / 12) * balance / (1 - Math.pow(1 + (currentRate / 100 / 12), -term * 12));
      const monthlyNew = (newRate / 100 / 12) * balance / (1 - Math.pow(1 + (newRate / 100 / 12), -term * 12));
      const monthlySavings = monthlyCurrent - monthlyNew;
      const yearlySavings = monthlySavings * 12;

      document.getElementById('calc-result').innerHTML = 
        <div class="calc-result">
          <p>Estimated Monthly Savings</p>
          <div class="savings">{monthlySavings.toFixed(0)}</div>
          <p>That's <strong>{yearlySavings.toFixed(0)}</strong> per year!</p>
          <p style="font-size:0.85rem;margin-top:0.5rem;color:var(--gray-500);">
            Based on a -year term. Actual savings may vary.
          </p>
        </div>
      ;
    });
  }

  // ---- FAQ Accordion ----
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function(q) {
      q.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  // ---- Chat Widget ----
  function initChat() {
    const toggle = document.getElementById('chat-toggle');
    const box = document.getElementById('chat-box');
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');

    if (!toggle || !box) return;

    const responses = {
      'rate': 'Current mortgage rates in NZ range from about 5.5% to 6.5% depending on your LVR and bank. I can help you find the best rate — just fill in the form!',
      'fee': 'Most refinances have some costs: break fees, valuation fees (~-800), and solicitor fees (~-1200). Often the cashback offer covers these. Want a detailed breakdown?',
      'process': 'It\'s simpler than you think! 1) Quick chat about your situation 2) I compare 10+ lenders 3) You sign a few forms. Most are done within 2-3 weeks.',
      'credit': 'Refinance applications usually involve a credit check, which may have a small temporary impact. But shopping around within a 30-day period counts as one check in NZ.',
      'cashback': 'Many banks offer cashback of ,000-,000 when you refinance with them. I can help you negotiate the best deal!',
      'default': 'Hi! I\'m here to help with your refinance questions. Feel free to ask about rates, fees, or the process, or fill in the form above to get started!'
    };

    function addMessage(text, isUser) {
      const div = document.createElement('div');
      div.className = 'chat-msg ' + (isUser ? 'user' : 'bot');
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function getResponse(msg) {
      const lower = msg.toLowerCase();
      if (lower.includes('rate') || lower.includes('interest')) return responses.rate;
      if (lower.includes('fee') || lower.includes('cost') || lower.includes('break')) return responses.fee;
      if (lower.includes('process') || lower.includes('step') || lower.includes('how long') || lower.includes('time')) return responses.process;
      if (lower.includes('credit') || lower.includes('score')) return responses.credit;
      if (lower.includes('cashback') || lower.includes('bonus') || lower.includes('offer')) return responses.cashback;
      return responses.default;
    }

    toggle.addEventListener('click', function() {
      box.classList.toggle('open');
      if (box.classList.contains('open') && messages.children.length === 0) {
        addMessage(responses.default, false);
      }
    });

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      addMessage(text, true);
      input.value = '';
      setTimeout(function() {
        addMessage(getResponse(text), false);
      }, 600);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // ---- Smooth Scroll for Nav Links ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function() {
    initCalculator();
    initFAQ();
    initChat();
    initSmoothScroll();

    // Contact form handler (Formspree fallback)
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        // Allow normal form submission to Formspree
        // Show confirmation
        const btn = form.querySelector('.btn');
        if (btn) {
          btn.textContent = 'Sending...';
          btn.disabled = true;
        }
      });
    }
  });
})();
