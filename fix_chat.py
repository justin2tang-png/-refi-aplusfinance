import re, os

path = r'C:\Users\PC\Documents\网页市场优化\assets\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    js = f.read()

start = js.find('function initChat()')
end = js.find('  // ---- Smooth Scroll ----')

print(f'initChat at {start}, smoothScroll at {end}')
if start < 0 or end <= start:
    print('ERROR: could not find boundaries')
    exit(1)

new_chat = """  function initChat() {
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
      div.textContent = text;
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
        voiceBtn.textContent = "\U0001f3a4";
        voiceBtn.classList.remove("listening");
        isListening = false;
        sendMessage();
      };

      recognition.onerror = function() {
        voiceBtn.textContent = "\U0001f3a4";
        voiceBtn.classList.remove("listening");
        isListening = false;
      };

      recognition.onend = function() {
        voiceBtn.textContent = "\U0001f3a4";
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
        voiceBtn.textContent = "\U0001f3a4";
        voiceBtn.classList.remove("listening");
        isListening = false;
        return;
      }
      try {
        recognition.start();
        voiceBtn.textContent = "\U0001f534";
        voiceBtn.classList.add("listening");
        isListening = true;
      } catch (err) {
        voiceBtn.textContent = "\U0001f3a4";
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
      var nums = str.replace(/[^0-9\\-]/g,'').split('-');
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
      welcome: {
        msg: "Hi, I'm the Refinance Assistant.\\n\\nI'll ask a few quick questions to see whether refinancing may be worth exploring.\\n\\nThis is not financial advice. Any recommendations will be provided by a licensed mortgage broker after reviewing your situation.\\n\\nThe process takes approximately 2 minutes.",
        quick: ["Let's start", "Not right now"]
      },
      ask_bank: {
        msg: "Which bank is your current mortgage with?",
        quick: ["ANZ", "ASB", "BNZ", "Westpac", "Kiwibank", "Other"]
      },
      ask_balance: {
        msg: "Approximately how much do you still owe on your mortgage?",
        quick: ["Under $300,000", "$300,000 - $500,000", "$500,000 - $800,000", "$800,000 - $1 million", "Over $1 million"]
      },
      ask_rate: {
        msg: "Do you know your current interest rate?",
        quick: ["Under 5%", "5% - 6%", "6% - 7%", "Over 7%", "Not sure"]
      },
      ask_goal: {
        msg: "What is the main reason you are considering refinancing? (You can type or use voice)",
        quick: ["Lower repayments", "Better rate", "Debt consolidation", "Renovation", "Access equity", "Just exploring"]
      },
      ask_income: {
        msg: "Has your income changed over the last 12 months?",
        quick: ["Increased", "About the same", "Decreased"]
      },
      ask_property: {
        msg: "Approximately what is your property worth today?",
        quick: ["Under $700,000", "$700,000 - $1 million", "$1 million - $1.5 million", "Over $1.5 million", "Not sure"]
      },
      qualification: {
        msg: function(d) {
          var balance = d.balance > 0 ? d.balance : rangeMidpoint(d.balance_raw || "");
          var prop = d.property > 0 ? d.property : rangeMidpoint(d.property_raw || "");
          var cashback = estimateCashback(balance);
          var balStr = balance > 0 ? "$" + Number(balance).toLocaleString() : "Your loan amount";
          var propStr = prop > 0 ? "$" + Number(prop).toLocaleString() : "Your property";

          return "Refinancing Opportunity Summary\\n\\n" +
            "Current Bank: " + (d.bank || "N/A") + "\\n" +
            "Mortgage Balance: " + balStr + "\\n" +
            "Current Rate: " + (d.rate || "N/A") + "\\n" +
            "Property Value: " + propStr + "\\n" +
            "Goal: " + (d.goal || "N/A") + "\\n" +
            "Income: " + (d.income || "N/A") + "\\n\\n" +
            "---\\n\\n" +
            "Great news.\\n\\n" +
            "Based on the information you provided, refinancing may be worth exploring.\\n\\n" +
            "For a mortgage balance of " + balStr + ", some lenders may currently offer cashback incentives of up to:\\n\\n" +
            "Approximately $" + Number(cashback).toLocaleString() + "\\n\\n" +
            "subject to lender policy, eligibility criteria, loan structure, and approval requirements.\\n\\n" +
            "In addition to potential cashback, a broker may also be able to review:\\n" +
            "  \\u2022 Interest rate savings\\n" +
            "  \\u2022 Repayment reductions\\n" +
            "  \\u2022 Loan structure improvements\\n" +
            "  \\u2022 Debt consolidation opportunities\\n\\n" +
            "Would you like a licensed mortgage broker to review your situation?";
        },
        quick: ["Yes, leave my details", "No thanks"]
      },
      ask_name: {
        msg: "Great! What is your full name?",
        quick: null
      },
      ask_phone: {
        msg: "What is your mobile number?",
        quick: null
      },
      ask_email: {
        msg: "What is your email address?",
        quick: null
      },
      ask_contact_time: {
        msg: "What is your preferred contact time?",
        quick: ["Morning", "Afternoon", "Evening"]
      },
      done: {
        msg: function(d) {
          var cb = estimateCashback(d.balance);
          return "Thank you " + d.name + "! Your details have been submitted.\\n\\n" +
            "A licensed mortgage broker will contact you within 24 hours.\\n\\n" +
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
        case "welcome":
          if (text.toLowerCase().includes("let") || text.toLowerCase().includes("yes") || text.toLowerCase().includes("start")) {
            next = "ask_bank";
          } else {
            next = null;
            addMsg("No worries! Feel free to come back anytime.", false);
            state.waiting = false;
            return;
          }
          break;

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
            addMsg("Understood. If you change your mind, feel free to come back anytime.", false);
            state.waiting = false;
            return;
          }
          break;

        case "ask_name":
          state.data.name = text.replace(/^(my name is|i'?m|it'?s|name:?)\\s*/i, "").trim() || text.trim();
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
          next = "welcome";
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

      var crm = "Lead Type: Refinance\\n" +
        "Current Bank: " + data.bank + "\\n" +
        "Mortgage Balance: " + balance + "\\n" +
        "Property Value: " + prop + "\\n" +
        "Current Rate: " + data.rate + "\\n" +
        "Goal: " + data.goal + "\\n" +
        "Income: " + data.income + "\\n" +
        "Potential Cashback: " + cb + "\\n" +
        "Broker Review: Recommended\\n" +
        "Lead Status: New Refinance Lead\\n\\n" +
        "Client: " + data.name + "\\n" +
        "Phone: " + data.phone + "\\n" +
        "Email: " + data.email + "\\n" +
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
        setTimeout(function() { goToStep("welcome"); }, 300);
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
"""

js = js[:start] + new_chat + js[end:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(js)

# Verify
opens = js.count('{')
closes = js.count('}')
opens_p = js.count('(')
closes_p = js.count(')')
print(f'Braces: {opens}/{closes} (diff {opens-closes})')
print(f'Parens: {opens_p}/{closes_p} (diff {opens_p-closes_p})')
print(f'Size: {len(js)} chars')
print('DONE')