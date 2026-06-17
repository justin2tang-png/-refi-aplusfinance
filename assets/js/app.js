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
        hero_cta: "\u7acb\u5373\u8ba1\u7b97\u80fd\u7701\u591a\u5c11",
        hero_cta2: "\u514d\u8d39\u54a8\u8be2",
        pain_title: "\u8fd9\u4e9b\u60c5\u51b5\u60a8\u719f\u6089\u5417\uff1f",
        sol_title: "\u8f6c\u8d37\u53ef\u4ee5\u5e26\u6765\u8fd9\u4e9b\u597d\u5904",
        about_title: "\u4e3a\u4ec0\u4e48\u9009\u62e9Becky\uff1f",
        process_title: "\u64cd\u4f5c\u6d41\u7a0b",
        calc_title: "\u60a8\u53ef\u4ee5\u8282\u7701\u591a\u5c11\uff1f",
        calc_btn: "\u8ba1\u7b97\u60a8\u7684\u8282\u7701",
        faq_title: "\u5e38\u89c1\u95ee\u9898",
        contact_title: "\u7701\u94b1\u7684\u673a\u4f1a\uff0c\u514d\u8d39\u8bc4\u4f30",
        contact_btn: "\u7acb\u5373\u8ba1\u7b97",
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
      chat_bye: "没关系！想改变主意时随时回来",
      step3_title: "节省到账",
        hero_desc: "房贷利率已经变了。如果您在过去12个月内没有检查过您的房贷，您可能多付了数千元。获取免费、无义务的转贷检查。",
        pain_1_desc: "您的浮动利率今年已经上涨两次，但您的银行并没有为您提供更好的方案。",
        pain_2_desc: "您听说朋友们锁定了更低利率并获得现金返赠，而您却没有。",
        pain_3_desc: "您每月能省下的-500可以用于更好的生活享受或储蓄。",
        sol_1_desc: "转到我们合作的10+家贷款机构中的竞争性利率。",
        sol_2_desc: "许多银行提供,000-4,000现金返赠。",
        sol_3_desc: "根据您的实际情况重新安排还款结构，如抵销账户、循环信贷或固定利率。",
        about_p1: "Becky在ANZ银行有14年经验，现独立运营A Plus Finance，将企业知识和个人专注带给每位客户。",
        about_p2: "她专注住房贷款转贷，帮助新西兰各地的房主获得更好利率、解锁款项，并优化贷款结构。",
        about_p3: "Becky的方式简单直接：没有专业术语，没有压力，只有清晰的建议。",
        about_stat1: "新西兰银行业经验",
        about_stat2: "ANZ工作年限",
        about_stat3: "贷款咨询总额",
        step1_desc: "进入我们的快速聊天——回答6个简单问题，大约只需2分钟。",
        step2_desc: "我们评估您的情况，对比10+家贷款机构的方案，找到最优选择。",
        step3_desc: "选定最佳方案后，我们处理全部文件，您立即开始节省。",
        calc_balance_label: "当前贷款余额",
        calc_rate_label: "当前利率",
        testimonials_title: "客户评价",
        testimonials_placeholder: "实际客户评价待补充",
        faq_1_ans: "转贷涉及一些费用：提前还款费、房屋评估费（约-800）和律师费（约-1,200）。好消息是，许多银行提供,000-4,000现金返赠，通常能覆盖这些费用。",
        faq_2_ans: "申请过程中会进行信用查询，可能产生短期影响。但在新西兰，30天内的多次信用查询只算一次。",
        faq_3_ans: "这取决于您的贷款金额和利率差。$500,000贷款降低0.5-1%利率可每月节省$200-500。使用上方计算器获取个性化估算。",
        faq_4_ans: "多数转贷在提交申请后2-3周内完成。整个过程主要在线完成，我们会协调银行和律师。",
        faq_5_ans: "不需要首付。转贷使用您现有的房屋款项。通常您需要至少20%的款顷，但部分银行可接受更低比例。",
        faq_6_ans: "银行会评估您的还款能力，通常以实际利率加上1.5-2%作为测试利率。每家银行标准不同，我们可以帮您匹配合适的银行。",
        form_name: "姓名",
        form_email: "电子邮件",
        form_phone: "电话",
        form_employment: "就业类型",
        form_ft: "全职受雇",
        contact_phone_label: "电话",
        contact_email_label: "电子邮件",

        faq_1_q: "\u8f6c\u8d37\u9700\u8981\u8d39\u7528\u5417\uff1f",
        faq_2_q: "\u8f6c\u8d37\u4f1a\u5f71\u54cd\u4fe1\u7528\u5206\u5417\uff1f",
        faq_3_q: "\u8f6c\u8d37\u80fd\u7701\u591a\u5c11\u94b1\uff1f",
        faq_4_q: "\u6574\u4e2a\u8f6c\u8d37\u8fc7\u7a0b\u8981\u591a\u4e45\uff1f",
        faq_5_q: "\u8f6c\u8d37\u9700\u8981\u9996\u4ed8\u5417\uff1f",
        faq_6_q: "\u9700\u8981\u591a\u5c11\u6536\u5165\u624d\u80fd\u7b26\u5408\u6761\u4ef6\uff1f",
        calc_new_rate_label: "\u9884\u4f30\u65b0\u5229\u7387",
        contact_loan_label: "\u5f53\u524d\u8d37\u6b3e\u4f59\u989d",
        contact_property_label: "\u623f\u5c4b\u4f30\u4ef7",
        contact_rate_label: "\u5f53\u524d\u5229\u7387",
        contact_best_time: "\u6700\u4f73\u8054\u7cfb\u65f6\u95f4",
        form_select: "\u8bf7\u9009\u62e9...",
        form_message: "\u8fd8\u6709\u4ec0\u4e48\u60f3\u8ba9Becky\u4e86\u89e3\u7684\u5417\uff1f",
        form_employment_placeholder: "\u5c31\u4e1a\u7c7b\u578b",
        ph_name: "\u60a8\u7684\u59d3\u540d",
        ph_email: "\u60a8\u7684\u90ae\u7bb1",
        ph_phone: "021 XXX XXXX",
        ph_loan: "\u4f8b\u5982 500000",
        ph_property: "\u4f8b\u5982 800000",
        ph_rate: "\u4f8b\u5982 6.89",
        ph_new_rate: "\u4f8b\u5982 5.99",
        ph_message: "\u9009\u586b\uff1a\u60a8\u7684\u60c5\u51b5\u3001\u95ee\u9898\u6216\u5173\u5fc3\u7684\u4e8b...",
        ph_chat: "\u8f93\u5165\u60a8\u7684\u95ee\u9898...",
        contact_location_label: "\u5730\u5740",
        contact_hours_label: "\u5de5\u4f5c\u65f6\u95f4",
        contact_get_in_touch: "\u8054\u7cfb\u6211\u4eec",
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
            "Approximately <span style=\"font-size:1.6em;font-weight:800;color:#059669;\">$" + Number(cashback).toLocaleString() + "</span>\n\n" +
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
          if (text.toLowerCase().includes("yes") || text.toLowerCase().includes("leave") || text.includes("\u597d\u7684") || text.includes("\u7559\u4e0b")) {
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
      if (document.getElementById("current-rate")) document.getElementById("current-rate").value = data.rate;
      if (document.getElementById("best-time")) document.getElementById("best-time").value = data.contactTime;
      if (document.getElementById("employment")) document.getElementById("employment").value = data.income;

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
