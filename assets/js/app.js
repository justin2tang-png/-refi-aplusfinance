// ============================================
// A Plus Finance - Refinance Landing Page JS
// assets/js/app.js
// ============================================

(function() {
  "use strict";

  // ---- Refinance Calculator ----
  function initCalculator() {
    const form = document.getElementById("calc-form");
    if (!form) return;
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const balance = parseFloat(document.getElementById("calc-balance").value);
      const currentRate = parseFloat(document.getElementById("calc-current-rate").value);
      const newRate = parseFloat(document.getElementById("calc-new-rate").value);
      const term = parseInt(document.getElementById("calc-term").value) || 30;
      if (!balance || !currentRate || !newRate) {
        document.getElementById("calc-result").innerHTML = "<p style=\"color:#ef4444;\">Please fill in all fields.</p>";
        return;
      }
      const r1 = currentRate / 100 / 12;
      const r2 = newRate / 100 / 12;
      const n = term * 12;
      const monthlyCurrent = r1 * balance / (1 - Math.pow(1 + r1, -n));
      const monthlyNew = r2 * balance / (1 - Math.pow(1 + r2, -n));
      const monthlySavings = monthlyCurrent - monthlyNew;
      const yearlySavings = monthlySavings * 12;
      document.getElementById("calc-result").innerHTML =
        "<div class=\"calc-result\"><p>Estimated Monthly Savings</p><div class=\"savings\">$" +
        monthlySavings.toFixed(0) + "</div><p>That&#8217;s <strong>$" + yearlySavings.toFixed(0) +
        "</strong> per year!</p><p style=\"font-size:0.85rem;margin-top:0.5rem;color:var(--gray-500);\">Based on a " +
        term + "-year term. Actual savings may vary.</p></div>";
    });
  }

  // ---- FAQ Accordion ----
  function initFAQ() {
    document.querySelectorAll(".faq-question").forEach(function(q) {
      q.addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
      });
    });
  }

  // ============================================================
  // Enhanced AI Chat — Guided Flow + Voice Input
  // ============================================================
  function initChat() {
    const toggle = document.getElementById("chat-toggle");
    const box = document.getElementById("chat-box");
    const messages = document.getElementById("chat-messages");
    const input = document.getElementById("chat-input");
    const sendBtn = document.getElementById("chat-send");
    const voiceBtn = document.getElementById("chat-voice");
    const quickBtns = document.getElementById("chat-quick");

    if (!toggle || !box) return;

    // ---- Chat Flow State ----
    var state = {
      step: null,
      data: { name: "", loan: 0, rate: 0, property: 0, employment: "" },
      waiting: false
    };

    // ---- Helper: add message bubble ----
    function addMsg(text, isUser) {
      var div = document.createElement("div");
      div.className = "chat-msg" + (isUser ? " user" : "");
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    // ---- Helper: add quick-reply buttons ----
    function showQuick(labels) {
      quickBtns.innerHTML = "";
      quickBtns.style.display = "flex";
      labels.forEach(function(label) {
        var btn = document.createElement("button");
        btn.className = "quick-btn";
        btn.textContent = label;
        btn.addEventListener("click", function() {
          quickBtns.style.display = "none";
          handleUserInput(label);
        });
        quickBtns.appendChild(btn);
      });
    }

    function hideQuick() {
      quickBtns.style.display = "none";
    }

    // ---- Voice Input ----
    var recognition = null;
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var isListening = false;

    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = "en-NZ";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = function(e) {
        var transcript = e.results[0][0].transcript;
        input.value = transcript;
        voiceBtn.textContent = "🎤";
        voiceBtn.classList.remove("listening");
        isListening = false;
        // Auto-send after voice
        sendMessage();
      };

      recognition.onerror = function() {
        voiceBtn.textContent = "🎤";
        voiceBtn.classList.remove("listening");
        isListening = false;
      };

      recognition.onend = function() {
        voiceBtn.textContent = "🎤";
        voiceBtn.classList.remove("listening");
        isListening = false;
      };
    }

    voiceBtn.addEventListener("click", function() {
      if (!recognition) {
        addMsg("Voice input is not supported on this browser. Please type your answer.", false);
        return;
      }
      if (isListening) {
        recognition.stop();
        voiceBtn.textContent = "🎤";
        voiceBtn.classList.remove("listening");
        isListening = false;
        return;
      }
      try {
        recognition.start();
        voiceBtn.textContent = "🔴";
        voiceBtn.classList.add("listening");
        isListening = true;
      } catch (err) {
        voiceBtn.textContent = "🎤";
        voiceBtn.classList.remove("listening");
        isListening = false;
      }
    });

    // ---- Guided Flow Steps ----
    var flow = {
      welcome: {
        msg: "👋 Hi! I&#8217;m Becky&#8217;s digital assistant. I can check if refinancing could save you money. It takes just 30 seconds!",
        quick: ["Yes, let&#8217;s go!", "Just browsing"]
      },
      ask_name: {
        msg: "Great! What&#8217;s your name?",
        quick: null
      },
      ask_loan: {
        msg: function(name) { return "Thanks " + name + "! What&#8217;s your current **loan balance**? (e.g. $500,000)"; },
        quick: ["$300,000", "$500,000", "$700,000", "$1,000,000"]
      },
      ask_rate: {
        msg: "What **interest rate** are you currently paying? (e.g. 6.89)",
        quick: ["6.49%", "6.89%", "7.29%", "Not sure"]
      },
      ask_property: {
        msg: "What&#8217;s your estimated **property value**? (e.g. $800,000)",
        quick: ["$600,000", "$800,000", "$1,000,000", "$1.5M+"]
      },
      ask_employment: {
        msg: "What&#8217;s your **employment type**?",
        quick: ["Full-time", "Self-employed", "Part-time", "Other"]
      },
      summary: {
        msg: function(name, loan, rate, prop, emp) {
          var estNewRate = Math.max(parseFloat(rate) - 0.8, 4.5);
          var r1 = parseFloat(rate) / 100 / 12;
          var r2 = estNewRate / 100 / 12;
          var n = 30 * 12;
          var monthlyCurrent = r1 * loan / (1 - Math.pow(1 + r1, -n));
          var monthlyNew = r2 * loan / (1 - Math.pow(1 + r2, -n));
          var save = monthlyCurrent - monthlyNew;
          var sText = save > 0 ? "$" + save.toFixed(0) + "/mo" : "Let&#8217;s discuss!";

          return "Thanks " + name + "! Here&#8217;s your summary:\n\n" +
            "📋 **Loan Balance:** $" + Number(loan).toLocaleString() + "\n" +
            "📋 **Current Rate:** " + rate + "%\n" +
            "📋 **Property Value:** $" + Number(prop).toLocaleString() + "\n" +
            "📋 **Employment:** " + emp + "\n\n" +
            "💰 **Estimated savings: ~" + sText + "**\n\n" +
            "Want to book a **free consultation** with Becky to get the exact numbers?";
        },
        quick: ["Book free check →", "Not now, thanks"]
      },
      end: {
        msg: "No worries! Feel free to come back anytime. If you change your mind, just tap the chat button \u{1f4ac}",
        quick: null
      }
    };

    // ---- Navigate Flow ----
    function goToStep(stepName) {
      state.step = stepName;
      var s = flow[stepName];
      if (!s) return;

      var msgText = typeof s.msg === "function" ?
        s.msg(state.data.name, state.data.loan, state.data.rate, state.data.property, state.data.employment) :
        s.msg;

      addMsg(msgText, false);

      if (s.quick && s.quick.length > 0) {
        // Show quick replies after a short delay
        setTimeout(function() { showQuick(s.quick); }, 400);
      } else {
        hideQuick();
      }
      state.waiting = true;
    }

    // ---- Handle user input ----
    function handleUserInput(text) {
      if (!state.waiting) return;
      state.waiting = false;
      hideQuick();

      addMsg(text, true);

      var step = state.step;
      var next = null;

      switch (step) {
        case "welcome":
          if (text.toLowerCase().includes("let") || text.toLowerCase().includes("yes") || text.toLowerCase().includes("go")) {
            next = "ask_name";
          } else {
            next = "end";
          }
          break;
        case "ask_name":
          state.data.name = text.replace(/^(my name is|i'?m|it'?s|name:?)\s*/i, "").trim() || text.trim();
          next = "ask_loan";
          break;
        case "ask_loan":
          var n = parseFloat(text.replace(/[$,kK,mM,\s]/g, ""));
          if (text.toLowerCase().includes("k")) n = n * 1000;
          if (text.toLowerCase().includes("m")) n = n * 1000000;
          state.data.loan = n > 0 ? n : 500000;
          next = "ask_rate";
          break;
        case "ask_rate":
          var r = parseFloat(text.replace(/[%,\s]/g, ""));
          state.data.rate = r > 0 ? r : 6.89;
          next = "ask_property";
          break;
        case "ask_property":
          var p = parseFloat(text.replace(/[$,kK,mM,\s]/g, ""));
          if (text.toLowerCase().includes("k")) p = p * 1000;
          if (text.toLowerCase().includes("m")) p = p * 1000000;
          state.data.property = p > 0 ? p : state.data.loan * 1.2;
          next = "ask_employment";
          break;
        case "ask_employment":
          state.data.employment = text.trim();
          next = "summary";
          break;
        case "summary":
          if (text.toLowerCase().includes("book") || text.toLowerCase().includes("yes") || text.toLowerCase().includes("check")) {
            // Pre-fill form and scroll to it
            if (document.getElementById("name")) document.getElementById("name").value = state.data.name;
            if (document.getElementById("loan-amount")) document.getElementById("loan-amount").value = state.data.loan;
            if (document.getElementById("current-rate")) document.getElementById("current-rate").value = state.data.rate;
            if (document.getElementById("property-value")) document.getElementById("property-value").value = state.data.property;
            if (document.getElementById("employment")) document.getElementById("employment").value = state.data.employment;
            if (document.getElementById("chat-data")) document.getElementById("chat-data").value = JSON.stringify(state.data);

            addMsg("I\'ve pre-filled the form with your info \u{1f44d} Just check the details and tap \u201cGet My Free Check\u201d below!", false);

            // Scroll to form after a moment
            setTimeout(function() {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" });
            }, 800);

            state.waiting = false;
            return;
          } else {
            next = "end";
          }
          break;
        default:
          next = "welcome";
      }

      if (next) {
        setTimeout(function() { goToStep(next); }, 500);
      }
    }

    // ---- Send text message ----
    function sendMessage() {
      var text = input.value.trim();
      if (!text || !state.waiting) return;
      input.value = "";
      handleUserInput(text);
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") sendMessage();
    });

    // ---- Toggle chat ----
    toggle.addEventListener("click", function() {
      box.classList.toggle("open");
      if (box.classList.contains("open") && state.step === null) {
        // Start flow
        setTimeout(function() { goToStep("welcome"); }, 300);
      }
    });
  }

  // ---- Smooth Scroll ----
  function initSmoothScroll() {
    document.querySelectorAll("a[href^=\"#\"]").forEach(function(anchor) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ---- Form Submission Handler ----
  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    // Allow Formspree to handle it, but show confirmation
    form.addEventListener("submit", function(e) {
      var btn = form.querySelector(".btn");
      if (btn) {
        btn.textContent = "Sending...";
        btn.disabled = true;
      }
      // Formspree handles the redirect, but let's add a fallback
      setTimeout(function() {
        if (btn) {
          btn.textContent = "Get My Free Check";
          btn.disabled = false;
        }
      }, 10000);
    });

    // Auto-fill from URL params if coming from chat
    var params = new URLSearchParams(window.location.search);
    if (params.get("name")) document.getElementById("name").value = params.get("name");
  }

  // ---- Init ----
  document.addEventListener("DOMContentLoaded", function() {
    initCalculator();
    initFAQ();
    initChat();
    initSmoothScroll();
    initForm();
  });
})();
