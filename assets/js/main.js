(function () {
  "use strict";

  var STORAGE_KEY = "aplus_lang";

  var i18nText = {
    en: {
      languageButton: "English",
      menuButton: "Menu",
      calcResult: "Estimated monthly repayment change",
      calcYear: "Approximate 12-month difference",
      calcNote: "This is a guide only. Actual outcomes depend on lender pricing, fees, loan structure, and your application details.",
      calcError: "Please complete the loan balance, current rate, estimated rate, and term.",
      sending: "Sending..."
    },
    zh: {
      languageButton: "中文",
      menuButton: "菜单",
      calcResult: "预计每月还款变化",
      calcYear: "约 12 个月差额",
      calcNote: "这只是初步估算。实际结果取决于贷款机构定价、费用、贷款结构和申请情况。",
      calcError: "请填写贷款余额、当前利率、预计利率和期限。",
      sending: "正在发送..."
    }
  };

  function currentLang() {
    return document.body.classList.contains("lang-zh") ? "zh" : "en";
  }

  function t(key) {
    return i18nText[currentLang()][key] || i18nText.en[key] || key;
  }

  function setLang(lang) {
    document.body.classList.toggle("lang-zh", lang === "zh");
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.textContent = lang === "zh" ? "English" : "中文";
    });
    document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
      button.textContent = t("menuButton");
    });
  }


  function initLanguage() {
    var saved = "en";
    try {
      saved = localStorage.getItem(STORAGE_KEY) || "en";
    } catch (error) {}
    setLang(saved);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLang(currentLang() === "en" ? "zh" : "en");
      });
    });
  }

  function initMenu() {
    var nav = document.querySelector("[data-nav]");
    var button = document.querySelector("[data-menu-toggle]");
    if (!nav || !button) return;

    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var ticking = false;

    function syncHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    }

    function requestSync() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncHeader);
    }

    syncHeader();
    window.addEventListener("scroll", requestSync, { passive: true });
  }

  function payment(principal, annualRate, years) {
    var months = years * 12;
    var monthlyRate = annualRate / 100 / 12;
    if (!monthlyRate) return principal / months;
    return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
  }

  function money(value) {
    return new Intl.NumberFormat("en-NZ", {
      style: "currency",
      currency: "NZD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function initCalculators() {
    document.querySelectorAll("[data-calculator]").forEach(function (calc) {
      var form = calc.querySelector("form");
      var result = calc.querySelector("[data-calc-result]");
      if (!form || !result) return;

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var balance = Number(form.querySelector("[name='balance']").value);
        var currentRate = Number(form.querySelector("[name='current-rate']").value);
        var newRate = Number(form.querySelector("[name='new-rate']").value);
        var term = Number(form.querySelector("[name='term']").value);

        if (!balance || !currentRate || !newRate || !term) {
          result.style.display = "block";
          result.innerHTML = "<p>" + t("calcError") + "</p>";
          return;
        }

        var current = payment(balance, currentRate, term);
        var updated = payment(balance, newRate, term);
        var diff = current - updated;
        var direction = diff >= 0 ? "lower" : "higher";
        var abs = Math.abs(diff);

        result.style.display = "block";
        result.innerHTML =
          "<p>" + t("calcResult") + "</p>" +
          "<strong>" + money(abs) + " " + direction + "</strong>" +
          "<p>" + t("calcYear") + ": " + money(abs * 12) + "</p>" +
          "<p>" + t("calcNote") + "</p>";
      });
    });
  }

  function setFAQState(item, isOpen) {
    var answer = item.querySelector(".faq-answer");
    var question = item.querySelector("[data-faq-question]");
    if (!answer) return;

    item.classList.toggle("open", isOpen);
    answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0px";
    if (question) question.setAttribute("aria-expanded", String(isOpen));
  }

  function syncOpenFAQs() {
    document.querySelectorAll(".faq-item.open").forEach(function (item) {
      setFAQState(item, true);
    });
  }

  function initFAQ() {
    document.querySelectorAll("[data-faq-question]").forEach(function (button) {
      var item = button.closest(".faq-item");
      if (!item) return;

      button.setAttribute("aria-expanded", item.classList.contains("open") ? "true" : "false");
      setFAQState(item, item.classList.contains("open"));

      button.addEventListener("click", function () {
        setFAQState(item, !item.classList.contains("open"));
      });
    });


    window.addEventListener("resize", syncOpenFAQs);
  }

  function initForms() {
    document.querySelectorAll("form[data-lead-form]").forEach(function (form) {
      form.addEventListener("submit", function () {
        var button = form.querySelector("button[type='submit']");
        if (button) button.textContent = t("sending");
      });
    });
  }

  function initRefinanceChat() {
    var fab = document.querySelector("[data-chat-fab]");
    var panel = document.querySelector("[data-chat-panel]");
    var close = document.querySelector("[data-chat-close]");
    var body = document.querySelector("[data-chat-body]");
    if (!fab || !panel || !body) return;

    var messagesEl;
    var optionsEl;
    var inputEl;
    var sendBtn;
    var state;

    var chatText = {
      en: {
        welcome: "Hi, I can help with the first-pass refinance questions Becky hears most often.",
        prompt: "What would you like help with first?",
        savings: "How much could I save?",
        qualify: "Do I likely qualify?",
        recent: "I refinanced recently",
        cashback: "Will I repay cashback?",
        start: "Start a quick review",
        answerSavings: "Savings depend on your current balance, rate, term, and whether another lender or structure creates a better outcome. I can give you a quick directional check if you share a few details.",
        answerQualify: "Qualification usually comes down to equity, servicing, income type, and lender policy. I can help you do a quick first-pass screen before you leave your details.",
        answerRecent: "Sometimes homeowners can refinance again within a year, but only if the new outcome still makes sense after break costs and any cashback clawback.",
        answerCashback: "You may need to repay some or all of a previous cashback if you move too soon. The important question is whether the new deal still stacks up after that cost.",
        followup: "Would you like me to run a quick refinance review now?",
        yesReview: "Yes, run the quick review",
        optionsAgain: "Show the options again",
        later: "Not right now",
        laterMsg: "No problem. You can keep reading, use the calculator, or come back here whenever you want a quicker first-pass review.",
        bank: "Which bank is your current mortgage with?",
        balance: "Roughly how much do you still owe on the mortgage?",
        property: "About what is the property worth today?",
        rate: "What best describes your current rate position?",
        employment: "What best describes your current employment situation?",
        goal: "What is the main reason you are considering refinancing?",
        name: "Great. What is your full name?",
        contactPref: "How would you prefer Becky to contact you?",
        phone: "What is the best mobile number for Becky to use?",
        email: "What is the best email address?",
        time: "If Becky calls, what time of day usually suits you best?",
        leave: "Would you like to leave your details so Becky can review this properly?",
        leaveYes: "Yes, leave my details",
        leaveNo: "No thanks",
        leaveNoMsg: "No problem. You can still use the page calculator or submit the standard contact form later if you want a formal review.",
        likelyTitle: "This looks worth a broker review.",
        maybeTitle: "This may be worth reviewing, but the details matter.",
        complexTitle: "This needs a more tailored broker review.",
        likelyBody: "Based on what you have shared so far, this looks like a mainstream refinance scenario that is worth reviewing properly.",
        maybeBody: "There are some moving parts here, so the value of refinancing is likely to depend on servicing, lender policy, costs, or structure choices.",
        complexBody: "Your situation may still be workable, but it is not something to judge from headline rates alone. Becky should look at the detail before you make assumptions.",
        ready: "Your details have been filled into the enquiry form below so you can review them first.",
        sendNow: "Send to Becky now",
        notYet: "Not yet",
        notYetMsg: "No problem. Nothing has been sent yet. You can review the form below and send it when ready.",
        sent: "Thanks. Please review the enquiry form below and submit it when you are ready.",
        sending: "Thanks. I am sending your details to Becky now.",
        sentOk: "Sent. Becky should receive your refinance details shortly.",
        sendFailed: "I could not confirm the send. Please use the form below to submit your details.",
        invalidPhone: "Please enter a mobile number Becky can realistically call back on.",
        invalidEmail: "Please enter a valid email address so Becky can follow up properly.",
        input: "Type your answer",
        send: "Send"
      },
      zh: {
        welcome: "您好，我可以先帮您快速梳理 Becky 最常遇到的转贷问题。",
        prompt: "您想先了解哪一类问题？",
        savings: "我大概能省多少？",
        qualify: "我大概符合条件吗？",
        recent: "我最近刚转贷过",
        cashback: "我需要退还 cashback 吗？",
        start: "开始快速评估",
        answerSavings: "能省多少取决于当前贷款余额、利率、剩余期限，以及更换贷款机构或调整结构后是否真的更划算。您可以先回答几个问题，我做一个初步判断。",
        answerQualify: "是否大概符合条件，通常要看净值、收入还款能力、收入类型和不同贷款机构的政策。我可以帮您先做一个快速筛查。",
        answerRecent: "刚转贷过也不一定不能再看，但需要把 break cost 和 cashback clawback 一起算进去，看新方案是否真的划算。",
        answerCashback: "有可能需要。如果您还在 cashback 的 clawback 期限内离开原贷款机构，可能要退还部分或全部现金奖励。",
        followup: "您想现在做一个快速转贷评估吗？",
        yesReview: "好，开始快速评估",
        optionsAgain: "重新看选项",
        later: "暂时不用",
        laterMsg: "没问题。您也可以先看页面里的计算器，准备好后再联系。",
        bank: "您目前的贷款大概在哪家机构？",
        balance: "当前贷款余额大概是多少？",
        property: "房产当前估值大概是多少？",
        rate: "当前利率大概在哪个范围？",
        employment: "您的收入类型更接近哪一种？",
        goal: "您最想通过转贷解决什么？",
        name: "好的，请问怎么称呼您？",
        contactPref: "希望 Becky 怎么联系您？",
        phone: "请留一个 Becky 可以联系到您的手机号。",
        email: "请留一个方便跟进的邮箱。",
        time: "最后一步，您什么时间比较方便联系？",
        leave: "您可以留下基本信息，让 Becky 根据实际情况进一步梳理。",
        leaveYes: "好，留下信息",
        leaveNo: "先不留",
        leaveNoMsg: "好的。您可以先把当前贷款信息准备好，之后再联系。",
        likelyTitle: "看起来值得做正式评估。",
        maybeTitle: "可能值得看，但细节很重要。",
        complexTitle: "这需要更具体的顾问评估。",
        likelyBody: "根据您刚刚提供的信息，这看起来是一个值得正式复盘的转贷场景。",
        maybeBody: "这里有一些变量，转贷是否划算可能取决于还款能力、贷款机构政策、成本和结构选择。",
        complexBody: "您的情况可能仍然有路径，但不适合只看表面利率来判断。建议让 Becky 看具体细节。",
        ready: "您的信息已经整理好，可以直接发给 Becky。",
        sendNow: "直接发给 Becky",
        notYet: "先不发送",
        notYetMsg: "好的。您的信息已经填到页面表单里，您可以先检查。",
        sent: "谢谢，请检查下方表单，准备好后提交。",
        sending: "好的，正在把您的信息发给 Becky。",
        sentOk: "已发送。Becky 应该很快会收到您的转贷信息。",
        sendFailed: "暂时无法确认发送，请使用页面下方表单提交。",
        invalidPhone: "请输入 Becky 可以回拨的手机号。",
        invalidEmail: "请输入有效邮箱，方便 Becky 跟进。",
        input: "请在这里输入",
        send: "发送"
      }
    };

    function ct(key) {
      return chatText[currentLang()][key] || chatText.en[key] || key;
    }

    function resetChat() {
      state = { step: "intro", data: {}, path: [], result: null };
      body.innerHTML =
        "<div class='chat-messages' data-chat-messages></div>" +
        "<div class='chat-options' data-chat-options></div>" +
        "<div class='chat-input-wrap'><input data-chat-input placeholder='" + ct("input") + "'><button class='btn btn-primary' data-chat-send type='button'>" + ct("send") + "</button></div>";
      messagesEl = body.querySelector("[data-chat-messages]");
      optionsEl = body.querySelector("[data-chat-options]");
      inputEl = body.querySelector("[data-chat-input]");
      sendBtn = body.querySelector("[data-chat-send]");
      sendBtn.addEventListener("click", function () { handleText(inputEl.value); });
      inputEl.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          handleText(inputEl.value);
        }
      });
      addBot(ct("welcome"));
      showIntro();
    }

    function addMessage(type, text) {
      var div = document.createElement("div");
      div.className = "chat-msg " + type;
      div.textContent = text;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function addBot(text) { addMessage("bot", text); }
    function addUser(text) { addMessage("user", text); }

    function showOptions(options) {
      optionsEl.innerHTML = "";
      options.forEach(function (option) {
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = option.label;
        button.addEventListener("click", function () {
          addUser(option.label);
          handleChoice(option);
        });
        optionsEl.appendChild(button);
      });
    }

    function showIntro() {
      state.step = "intro";
      addBot(ct("prompt"));
      showOptions([
        { label: ct("savings"), value: "savings" },
        { label: ct("qualify"), value: "qualify" },
        { label: ct("recent"), value: "recent" },
        { label: ct("cashback"), value: "cashback" },
        { label: ct("start"), value: "start" }
      ]);
    }

    function followup() {
      state.step = "followup";
      addBot(ct("followup"));
      showOptions([
        { label: ct("yesReview"), value: "start" },
        { label: ct("optionsAgain"), value: "again" },
        { label: ct("later"), value: "later" }
      ]);
    }

    function ask(step) {
      state.step = step;
      var options = [];
      if (step === "bank") {
        addBot(ct("bank"));        options = ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank", currentLang() === "zh" ? "其他贷款机构" : "Another lender"].map(function (x) { return { label: x, value: x }; });
      } else if (step === "balance") {
        addBot(ct("balance"));        options = [{ label: "Under $300k", amount: 250000 }, { label: "$300k-$500k", amount: 400000 }, { label: "$500k-$800k", amount: 650000 }, { label: "$800k-$1.2m", amount: 1000000 }, { label: "Over $1.2m", amount: 1300000 }, { label: currentLang() === "zh" ? "不确定" : "Not sure", amount: null }];
      } else if (step === "property") {
        addBot(ct("property"));        options = [{ label: "Under $700k", amount: 650000 }, { label: "$700k-$1m", amount: 850000 }, { label: "$1m-$1.5m", amount: 1250000 }, { label: "Over $1.5m", amount: 1600000 }, { label: currentLang() === "zh" ? "不确定" : "Not sure", amount: null }];
      } else if (step === "rate") {
        addBot(ct("rate"));        options = [{ label: "Under 5.5%", rate: 5.4 }, { label: "5.5%-6.5%", rate: 6.0 }, { label: "Above 6.5%", rate: 6.8 }, { label: currentLang() === "zh" ? "固定中，不确定" : "Fixed and not sure", rate: null }, { label: currentLang() === "zh" ? "浮动利率" : "Floating", rate: null }];
      } else if (step === "employment") {
        addBot(ct("employment"));        options = ["Full-time employed", "Self-employed", "Part-time employed", "Contractor", "Other"].map(function (x) { return { label: currentLang() === "zh" ? ({ "Full-time employed": "全职雇员", "Self-employed": "自雇", "Part-time employed": "兼职雇员", "Contractor": "合同工", "Other": "其他" }[x]) : x, value: x }; });
      } else if (step === "goal") {
        addBot(ct("goal"));        options = [{ label: currentLang() === "zh" ? "降低月供" : "Reduce repayments", value: "Reduce repayments" }, { label: currentLang() === "zh" ? "寻找更好利率" : "Find a better rate", value: "Find a better rate" }, { label: currentLang() === "zh" ? "债务整合" : "Debt consolidation", value: "Debt consolidation" }, { label: currentLang() === "zh" ? "装修或 top-up" : "Renovation or top-up", value: "Renovation or top-up" }, { label: currentLang() === "zh" ? "只是想看看选择" : "Just checking options", value: "Just checking options" }];
      } else if (step === "contactPref") {
        addBot(ct("contactPref"));        options = [{ label: currentLang() === "zh" ? "只电话" : "Phone only", value: "phone" }, { label: currentLang() === "zh" ? "只邮件" : "Email only", value: "email" }, { label: currentLang() === "zh" ? "电话和邮件都可以" : "Phone and email", value: "both" }];
      } else if (step === "time") {
        addBot(ct("time"));        options = [{ label: currentLang() === "zh" ? "上午" : "Morning", value: "Morning" }, { label: currentLang() === "zh" ? "下午" : "Afternoon", value: "Afternoon" }, { label: currentLang() === "zh" ? "晚上" : "Evening", value: "Evening" }];
      } else if (step === "send") {
        fillFormFromChat();
        addBot(ct("ready"));
        options = [{ label: ct("sendNow"), value: "send" }, { label: ct("notYet"), value: "notYet" }];
      }
      showOptions(options);
    }

    function parseMoney(text) {
      var n = Number(String(text).replace(/[^0-9.]/g, ""));
      return isNaN(n) ? null : n;
    }

    function inferOutcome() {
      var lvr = state.data.balanceAmount && state.data.propertyAmount ? state.data.balanceAmount / state.data.propertyAmount : null;
      var status = "maybe";
      if (lvr && lvr > 0.9) status = "complex";
      else if (lvr && lvr <= 0.8 && state.data.employment === "Full-time employed") status = "likely";
      state.result = status;
      var title = status === "likely" ? ct("likelyTitle") : status === "complex" ? ct("complexTitle") : ct("maybeTitle");
      var bodyText = status === "likely" ? ct("likelyBody") : status === "complex" ? ct("complexBody") : ct("maybeBody");
      if (lvr) bodyText += "\n" + (currentLang() === "zh" ? "?? LVR ?? " : "Approximate LVR: ") + Math.round(lvr * 100) + "%.";
      addBot(title + "\n\n" + bodyText);
      addBot(ct("leave"));
      state.step = "leave";
      showOptions([{ label: ct("leaveYes"), value: "yes" }, { label: ct("leaveNo"), value: "no" }]);
    }

    function fillFormFromChat() {
      var summary = [
        "Chat topic: " + (state.data.topic || ""),
        "Current bank: " + (state.data.bank || ""),
        "Loan balance: " + (state.data.balanceLabel || ""),
        "Property value: " + (state.data.propertyLabel || ""),
        "Current rate: " + (state.data.rateLabel || ""),
        "Employment: " + (state.data.employment || ""),
        "Goal: " + (state.data.goal || ""),
        "Preferred contact: " + (state.data.contactPref || ""),
        "Outcome: " + (state.result || "")
      ].join("\n");
      var map = {
        name: state.data.name,
        email: state.data.email,
        phone: state.data.phone,
        "loan-amount": state.data.balanceAmount || "",
        "property-value": state.data.propertyAmount || "",
        "current-rate": state.data.rateAmount || "",
        "best-time": state.data.time || "",
        "lead-source": "chat-qualifier",
        "qualification-outcome": state.result || "",
        "chat-path": state.path.join(" | "),
        "chat-summary": summary,
        message: summary
      };
      Object.keys(map).forEach(function (name) {
        var field = document.querySelector("[name='" + name + "']");
        if (field && map[name]) field.value = map[name];
      });
    }

    function submitChatLead() {
      fillFormFromChat();
      var form = document.getElementById("contact-form") || document.querySelector("form[data-lead-form]");
      if (!form) {
        addBot(ct("sendFailed"));
        return;
      }

      addBot(ct("sending"));
      showOptions([]);

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("submit_failed");
          addBot(ct("sentOk"));
        })
        .catch(function () {
          addBot(ct("sendFailed"));
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        });
    }

    function handleChoice(option) {
      state.path.push(state.step + ":" + option.value);
      if (state.step === "intro") {
        state.data.topic = option.value;
        if (option.value === "savings") addBot(ct("answerSavings"));
        else if (option.value === "qualify") addBot(ct("answerQualify"));
        else if (option.value === "recent") addBot(ct("answerRecent"));
        else if (option.value === "cashback") addBot(ct("answerCashback"));
        if (option.value === "start") ask("bank"); else followup();
      } else if (state.step === "followup") {
        if (option.value === "start") ask("bank");
        else if (option.value === "again") showIntro();
        else addBot(ct("laterMsg"));
      } else if (state.step === "bank") {
        state.data.bank = option.value; ask("balance");
      } else if (state.step === "balance") {
        state.data.balanceLabel = option.label; state.data.balanceAmount = option.amount; ask("property");
      } else if (state.step === "property") {
        state.data.propertyLabel = option.label; state.data.propertyAmount = option.amount; ask("rate");
      } else if (state.step === "rate") {
        state.data.rateLabel = option.label; state.data.rateAmount = option.rate; ask("employment");
      } else if (state.step === "employment") {
        state.data.employment = option.value; ask("goal");
      } else if (state.step === "goal") {
        state.data.goal = option.value; inferOutcome();
      } else if (state.step === "leave") {
        if (option.value === "yes") { state.step = "name"; addBot(ct("name")); showOptions([]); }
        else { addBot(ct("leaveNoMsg")); showIntro(); }
      } else if (state.step === "contactPref") {
        state.data.contactPref = option.value;
        if (option.value === "email") { state.step = "email"; addBot(ct("email")); showOptions([]); }
        else { state.step = "phone"; addBot(ct("phone")); showOptions([]); }
      } else if (state.step === "time") {
        state.data.time = option.value; ask("send");
      } else if (state.step === "send") {
        if (option.value === "send") { submitChatLead(); }
        else { fillFormFromChat(); addBot(ct("notYetMsg")); }
      }
    }

    function handleText(raw) {
      var text = raw.trim();
      if (!text) return;
      inputEl.value = "";
      addUser(text);
      state.path.push(state.step + ":text");
      if (state.step === "bank") { state.data.bank = text; ask("balance"); }
      else if (state.step === "balance") { state.data.balanceLabel = text; state.data.balanceAmount = parseMoney(text); ask("property"); }
      else if (state.step === "property") { state.data.propertyLabel = text; state.data.propertyAmount = parseMoney(text); ask("rate"); }
      else if (state.step === "rate") { state.data.rateLabel = text; state.data.rateAmount = parseMoney(text); ask("employment"); }
      else if (state.step === "employment") { state.data.employment = text; ask("goal"); }
      else if (state.step === "goal") { state.data.goal = text; inferOutcome(); }
      else if (state.step === "name") { state.data.name = text; ask("contactPref"); }
      else if (state.step === "phone") {
        if (text.replace(/[^0-9]/g, "").length < 8) { addBot(ct("invalidPhone")); return; }
        state.data.phone = text;
        if (state.data.contactPref === "both") { state.step = "email"; addBot(ct("email")); showOptions([]); } else ask("time");
      } else if (state.step === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) { addBot(ct("invalidEmail")); return; }
        state.data.email = text;
        if (state.data.contactPref === "both") ask("time"); else ask("send");
      }
    }

    fab.addEventListener("click", function () {
      panel.classList.toggle("open");
      resetChat();
    });
    if (close) close.addEventListener("click", function () {
      panel.classList.remove("open");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    initMenu();
    initHeaderScroll();
    initCalculators();
    initFAQ();
    initForms();
    initRefinanceChat();
  });
})();



