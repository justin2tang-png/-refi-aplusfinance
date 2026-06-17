// ============================================
// A Plus Finance - Refinance Landing Page JS
// assets/js/app.js
// ============================================

(function() {
  "use strict";

  // ============================================================
  // i18n - Multi-language support (EN / ZH)
  // ============================================================
  var i18n = {
    currentLang: "en",
    translations: {
      en: {
        lang_label: "English",
        nav_why: "Why Refinance",
        nav_about: "About Becky",
        nav_calc: "Calculator",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_title: 'Your Mortgage Costing Too Much? Let\u2019s Fix It.',
        hero_cta: "Check Your Refinance Savings",
        hero_cta2: "Free Consultation",
        pain_title: "Does Any of This Sound Familiar?",
        sol_title: "Refinancing Could Unlock These Benefits",
        about_title: "Why Choose Becky?",
        process_title: "How It Works",
        calc_title: "How Much Could You Save?",
        calc_btn: "Calculate Your Savings",
        faq_title: "Frequently Asked Questions",
        contact_title: "Ready to Save? Let\u2019s Talk.",
        contact_btn: "Get My Free Check",
        footer_text: "All rights reserved.",
        footer_disclaimer: "The information on this website is general in nature and does not constitute financial advice."
      ,
      pain_1_title: "Interest Rates Keep Rising",
      pain_2_title: "Friends Are Paying Less",
      pain_3_title: "Money Could Be Used Better",
      sol_1_title: "Lower Interest Rate",
      sol_2_title: "Cashback Offers",
      sol_3_title: "Flexible Repayment Structure",
      step1_title: "Quick Online Chat",
      step2_title: "Compare Options",
      step3_title: "Savings Hit Your Account"
},
      zh: {
        lang_label: "\u4e2d\u6587",
        nav_why: "\u4e3a\u4f55\u8f6c\u8d37",
        nav_about: "\u5173\u4e8eBecky",
        nav_calc: "\u8282\u7701\u8ba1\u7b97\u5668",
        nav_faq: "\u5e38\u89c1\u95ee\u9898",
        nav_contact: "\u8054\u7cfb\u6211\u4eec",
        hero_title: "\u60a8\u7684\u623f\u8d37\u6210\u672c\u592a\u9ad8\uff1f\u8ba9\u6211\u4eec\u6765\u89e3\u51b3\u3002",
        hero_cta: "\u67e5\u770b\u60a8\u7684\u8f6c\u8d37\u8282\u7701",
        hero_cta2: "\u514d\u8d39\u54a8\u8be2",
        pain_title: "\u8fd9\u4e9b\u60c5\u51b5\u60a8\u718a\u6089\u5417\uff1f",
        sol_title: "\u8f6c\u8d37\u53ef\u4ee5\u5e26\u6765\u8fd9\u4e9b\u597d\u5904",
        about_title: "\u4e3a\u4ec0\u4e48\u9009\u62e9Becky\uff1f",
        process_title: "\u64cd\u4f5c\u6d41\u7a0b",
        calc_title: "\u60a8\u53ef\u4ee5\u8282\u7701\u591a\u5c11\uff1f",
        calc_btn: "\u8ba1\u7b97\u60a8\u7684\u8282\u7701",
        faq_title: "\u5e38\u89c1\u95ee\u9898",
        contact_title: "\u51c6\u5907\u597d\u4e86\uff1f\u8ba9\u6211\u4eec\u804a\u804a\u3002",
        contact_btn: "\u83b7\u53d6\u514d\u8d39\u8bc4\u4f30",
        footer_text: "\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002",
        footer_disclaimer: "\u514d\u8d23\u58f0\u660e\uff1a\u672c\u7f51\u7ad9\u4fe1\u606f\u4e3a\u4e00\u822c\u6027\u4fe1\u606f\uff0c\u4e0d\u6784\u6210\u8d22\u52a1\u5efa\u8bae\u3002"
      ,
      pain_1_title: "利率持续上涨",
      pain_2_title: "朋友付的更少",
      pain_3_title: "钱本可以有更好的用途",
      sol_1_title: "更低的利率",
      sol_2_title: "现金回馈",
      sol_3_title: "灵活的还款结构",
      step1_title: "在线快速咨询",
      step2_title: "比较方案",
      chat_bank: "您当前的房贷是哪家银行？",
      chat_balance: "您的房贷大约还欠多少？（大概数字就行）",
      chat_rate: "您知道当前的利率是多少吗？",
      chat_goal: "您考虑转贷的主要原因是什么？（可以打字或语音）",
      chat_income: "过去12个月您的收入有变化吗？",
      chat_property: "您的房产大约值多少钱？",
      chat_yes_leave: "好的，留下联系方式",
      chat_no_thanks: "不了谢谢",
      chat_name: "您的全名是？",
      chat_phone: "您的手机号是？",
      chat_email: "您的电子邮箱是？",
      chat_contact_time: "您希望什么时间被联系？",
      chat_morning: "上午",
      chat_afternoon: "下午",
      chat_evening: "晚上",
      chat_bye: "没关系！想改变主意时随时回来
      step3_title: "节省到账"
}
    },
    t: function(key) {
      var lang = this.currentLang;
      if (this.translations[lang] && this.translations[lang][key] !== undefined) {
        return this.translations[lang][key];
      }
      if (this.translations.en && this.translations.en[key] !== undefined) {
        return this.translations.en[key];
      }
      return key;
    },
    detectLanguage: function() {
      var lang = navigator.language || navigator.userLanguage || "";
      return lang.indexOf("zh") === 0 ? "zh" : "en";
    },
    applyToPage: function() {
      var els = document.querySelectorAll("[data-i18n]");
      for (var i = 0; i < els.length; i++) {
        var key = els[i].getAttribute("data-i18n");
        var val = this.t(key);
        if (val && val !== key) els[i].textContent = val;
      }
      var phs = document.querySelectorAll("[data-i18n-placeholder]");
      for (var i = 0; i < phs.length; i++) {
        var key = phs[i].getAttribute("data-i18n-placeholder");
        var val = this.t(key);
        if (val && val !== key) phs[i].placeholder = val;
      }
    },
    init: function() {
      var self = this;
      var pref = localStorage.getItem("prefLang");
      this.currentLang = pref === "zh" || pref === "en" ? pref : this.detectLanguage();
      this.applyToPage();
      var toggle = document.getElementById("lang-toggle");
      if (toggle) {
        toggle.textContent = this.currentLang === "zh" ? "English" : "\u4e2d\u6587";
        toggle.addEventListener("click", function() {
          self.currentLang = self.currentLang === "zh" ? "en" : "zh";
          self.applyToPage();
          toggle.textContent = self.currentLang === "zh" ? "English" : "\u4e2d\u6587";
          localStorage.setItem("prefLang", self.currentLang);
        });
      }
    }
  };
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

    var state = {
      step: null,
      data: { bank: "", balance: 0, rate: "", goal: "", income: "", property: 0,
              name: "", phone: "", email: "", contactTime: "" },
      waiting: false
    };

    function addMsg(text, isUser) {
      var div = document.createElement("div");
      div.className = "chat-msg" + (isUser ? " user" : "");
      div.innerHTML = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

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

    function estimateCashback(balance) {
      if (balance <= 0) return 0;
      var cb = Math.round(balance * 0.01);
      if (cb < 2000) cb = 2000;
      if (cb > 8000) cb = 8000;
      return cb;
    }

    function rangeMidpoint(str) {
      if (!str) return 0;
      var nums = str.replace(/[^0-9\-]/g,'').split('-');
      if (nums.length < 2) {
        var n = parseFloat(nums[0]);
        return isNaN(n) ? 0 : n;
      }
      var low = parseFloat(nums[0]);
      var high = parseFloat(nums[1]);
      if (isNaN(low) || isNaN(high)) return 0;
      return Math.round((low + high) / 2);
    }

    var flow = {
      
      ask_bank: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_bank") : "Which bank is your current mortgage with?",
        quick: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank", "Other"]
      },
      ask_balance: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_balance") : "Approximately how much do you still owe on your mortgage?",
        quick: ["Under $300,000", "$300,000 - $500,000", "$500,000 - $800,000", "$800,000 - $1 million", "Over $1 million"]
      },
      ask_rate: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_rate") : "Do you know your current interest rate?",
        quick: ["Under 5%", "5% - 6%", "6% - 7%", "Over 7%", "Not sure"]
      },
      ask_goal: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_goal") : "What is the main reason you are considering refinancing? (You can type or use voice)",
        quick: ["Lower repayments", "Better rate", "Debt consolidation", "Renovation", "Access equity", "Just exploring"]
      },
      ask_income: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_income") : "Has your income changed over the last 12 months?",
        quick: ["Increased", "About the same", "Decreased"]
      },
      ask_property: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_property") : "Approximately what is your property worth today?",
        quick: ["Under $700,000", "$700,000 - $1 million", "$1 million - $1.5 million", "Over $1.5 million", "Not sure"]
      },
      qualification: {
        msg: function(d) {
          var balance = d.balance > 0 ? d.balance : rangeMidpoint(d.balance_raw || "");
          var prop = d.property > 0 ? d.property : rangeMidpoint(d.property_raw || "");
          var cashback = estimateCashback(balance);
          var balStr = balance > 0 ? "$" + Number(balance).toLocaleString() : "Your loan amount";
          var propStr = prop > 0 ? "$" + Number(prop).toLocaleString() : "Your property";

          return "Refinancing Opportunity Summary\n\n" +
            "Current Bank: " + (d.bank || "N/A") + "\n" +
            "Mortgage Balance: " + balStr + "\n" +
            "Current Rate: " + (d.rate || "N/A") + "\n" +
            "Property Value: " + propStr + "\n" +
            "Goal: " + (d.goal || "N/A") + "\n" +
            "Income: " + (d.income || "N/A") + "\n\n" +
            "---\n\n" +
            "Great news.\n\n" +
            "Based on the information you provided, refinancing may be worth exploring.\n\n" +
            "For a mortgage balance of " + balStr + ", some lenders may currently offer cashback incentives of up to:\n\n" +
            "Approximately $" + Number(cashback).toLocaleString() + "\n\n" +
            "subject to lender policy, eligibility criteria, loan structure, and approval requirements.\n\n" +
            "In addition to potential cashback, a broker may also be able to review:\n" +
            "  \u2022 Interest rate savings\n" +
            "  \u2022 Repayment reductions\n" +
            "  \u2022 Loan structure improvements\n" +
            "  \u2022 Debt consolidation opportunities\n\n" +
            "Would you like a licensed mortgage broker to review your situation?";
        },
        quick: [i18n.currentLang === "zh" ? i18n.t("chat_yes_leave") : "Yes, leave my details", i18n.currentLang === "zh" ? i18n.t("chat_no_thanks") : "No thanks"]
      },
      ask_name: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_name") : "Great! What is your full name?",
        quick: null
      },
      ask_phone: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_phone") : "What is your mobile number?",
        quick: null
      },
      ask_email: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_email") : "What is your email address?",
        quick: null
      },
      ask_contact_time: {
        msg: i18n.currentLang === "zh" ? i18n.t("chat_contact_time") : "What is your preferred contact time?",
        quick: [i18n.currentLang === "zh" ? i18n.t("chat_morning") : "Morning", i18n.currentLang === "zh" ? i18n.t("chat_afternoon") : "Afternoon", i18n.currentLang === "zh" ? i18n.t("chat_evening") : "Evening"]
      },
      done: {
        msg: function(d) {
          var cb = estimateCashback(d.balance);
          return "Thank you " + d.name + "! Your details have been submitted.\n\n" +
            "A licensed mortgage broker will contact you within 24 hours.\n\n" +
            "Reference: Refinance Lead (Potential cashback up to $" + Number(cb).toLocaleString() + ")";
        },
        quick: null
      }
    };

    function goToStep(stepName) {
      state.step = stepName;
      var s = flow[stepName];
      if (!s) return;

      var msgText = typeof s.msg === "function" ? s.msg(state.data) : s.msg;
      addMsg(msgText, false);

      if (s.quick && s.quick.length > 0) {
        setTimeout(function() { showQuick(s.quick); }, 400);
      } else {
        hideQuick();
      }
      state.waiting = true;
    }

    function handleUserInput(text) {
      if (!state.waiting) return;
      state.waiting = false;
      hideQuick();

      addMsg(text, true);

      var step = state.step;
      var next = null;

      switch (step) {
        case "ask_bank":
          state.data.bank = text.trim();
          next = "ask_balance";
          break;

        case "ask_balance":
          state.data.balance_raw = text;
          state.data.balance = rangeMidpoint(text);
          next = "ask_rate";
          break;

        case "ask_rate":
          state.data.rate = text.trim();
          next = "ask_goal";
          break;

        case "ask_goal":
          state.data.goal = text.trim();
          next = "ask_income";
          break;

        case "ask_income":
          state.data.income = text.trim();
          next = "ask_property";
          break;

        case "ask_property":
          state.data.property_raw = text;
          state.data.property = rangeMidpoint(text);
          next = "qualification";
          break;

        case "qualification":
          if (text.toLowerCase().includes("yes") || text.toLowerCase().includes("leave")) {
            next = "ask_name";
          } else {
            next = null;
            addMsg(i18n.currentLang === "zh" ? i18n.t("chat_bye") : "Understood. If you change your mind, feel free to come back anytime.", false);
            state.waiting = false;
            return;
          }
          break;

        case "ask_name":
          state.data.name = text.replace(/^(my name is|i'?m|it'?s|name:?)\s*/i, "").trim() || text.trim();
          next = "ask_phone";
          break;

        case "ask_phone":
          state.data.phone = text.trim();
          next = "ask_email";
          break;

        case "ask_email":
          state.data.email = text.trim();
          next = "ask_contact_time";
          break;

        case "ask_contact_time":
          state.data.contactTime = text.trim();
          next = "done";
          break;

        default:
          next = "ask_bank";
      }

      if (next) {
        setTimeout(function() { goToStep(next); }, 500);
      } else {
        state.waiting = false;
      }
    }

    function sendMessage() {
      var text = input.value.trim();
      if (!text || !state.waiting) return;
      input.value = "";
      handleUserInput(text);
    }

    function submitLead(data) {
      var cb = estimateCashback(data.balance);
      var balance = data.balance > 0 ? data.balance : rangeMidpoint(data.balance_raw || "");
      var prop = data.property > 0 ? data.property : rangeMidpoint(data.property_raw || "");

      var crm = "Lead Type: Refinance\n" +
        "Current Bank: " + data.bank + "\n" +
        "Mortgage Balance: " + balance + "\n" +
        "Property Value: " + prop + "\n" +
        "Current Rate: " + data.rate + "\n" +
        "Goal: " + data.goal + "\n" +
        "Income: " + data.income + "\n" +
        "Potential Cashback: " + cb + "\n" +
        "Broker Review: Recommended\n" +
        "Lead Status: New Refinance Lead\n\n" +
        "Client: " + data.name + "\n" +
        "Phone: " + data.phone + "\n" +
        "Email: " + data.email + "\n" +
        "Preferred Time: " + data.contactTime;

      if (document.getElementById("name")) document.getElementById("name").value = data.name;
      if (document.getElementById("phone")) document.getElementById("phone").value = data.phone;
      if (document.getElementById("email")) document.getElementById("email").value = data.email;
      if (document.getElementById("loan-amount")) document.getElementById("loan-amount").value = balance;
      if (document.getElementById("property-value")) document.getElementById("property-value").value = prop;

      var chatData = document.getElementById("chat-data");
      if (chatData) chatData.value = crm;

      setTimeout(function() {
        var form = document.getElementById("contact-form");
        if (form) form.submit();
      }, 2000);
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") sendMessage();
    });

    toggle.addEventListener("click", function() {
      box.classList.toggle("open");
      if (box.classList.contains("open") && state.step === null) {
        setTimeout(function() { goToStep("ask_bank"); }, 300);
      }
    });

    var origGoToStep = goToStep;
    goToStep = function(stepName) {
      if (stepName === "done") {
        state.step = "done";
        var s = flow.done;
        var msgText = typeof s.msg === "function" ? s.msg(state.data) : s.msg;
        addMsg(msgText, false);
        hideQuick();
        submitLead(state.data);
        return;
      }
      origGoToStep(stepName);
    };
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
    i18n.init();
    initCalculator();
    initFAQ();
    initChat();
    initSmoothScroll();
    initForm();
  });
})();
