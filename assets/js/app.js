// ============================================
// A Plus Finance - Refinance Landing Page JS
// assets/js/app.js
// ============================================

(function() {
  "use strict";

  var i18n = {
    currentLang: "en",
    translations: {
      en: {
        nav_why: "Why Refinance",
        nav_about: "About Becky",
        nav_calc: "Calculator",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_kicker: "Independent mortgage refinance review",
        hero_title: "Refinance Your Mortgage With Clear, Independent Advice",
        hero_desc: "If your home loan has not been reviewed in the last 12 months, you could be paying more than you need to. Becky from A Plus Finance helps NZ homeowners compare rates, cashback, and loan structure with a practical second opinion.",
        hero_cta: "Estimate Your Savings",
        hero_cta2: "Request a Free Review",
        hero_trust_1: "14 years at ANZ",
        hero_trust_2: "10+ lenders compared",
        hero_trust_3: "NZ-wide advice",
        hero_panel_label: "What this review covers",
        hero_panel_1: "Whether switching lenders is likely to save you money",
        hero_panel_2: "Whether cashback could help offset refinance costs",
        hero_panel_3: "Whether your current loan structure still fits your goals",
        trust_1: "Years at ANZ",
        trust_2: "Years in NZ banking",
        trust_3: "Lenders compared",
        trust_4: "Business day response goal",
        pain_title: "Does Any of This Sound Familiar?",
        pain_intro: "Refinance interest usually starts with one practical question: am I overpaying, or is there a smarter way to structure this loan?",
        pain_1_title: "Your rate has changed, but your strategy has not",
        pain_1_desc: "Mortgage rates have shifted, yet your home loan may still be sitting in the same structure or pricing you accepted months ago.",
        pain_2_title: "You suspect your bank is not showing its best option first",
        pain_2_desc: "Many homeowners refinance only after realising other lenders, or even their current lender, may have room to sharpen the deal.",
        pain_3_title: "Even modest monthly savings would matter",
        pain_3_desc: "Saving $200 to $500 a month can make a meaningful difference to cash flow, extra repayments, or other household goals.",
        sol_title: "What a Good Refinance Review Can Unlock",
        sol_intro: "The goal is not simply to move your loan. It is to check whether a better rate, cashback, or structure change creates a worthwhile outcome.",
        sol_1_title: "Sharper pricing",
        sol_1_desc: "Compare competitive refinance options across multiple NZ lenders instead of relying on one bank's default offer.",
        sol_2_title: "Potential cashback",
        sol_2_desc: "Some lenders offer cashback that may help offset refinance costs, depending on eligibility and the size of your loan.",
        sol_3_title: "A more practical structure",
        sol_3_desc: "A refinance review can also look at fixed terms, offset options, revolving credit, or better alignment with your current plans.",
        about_title: "Independent advice backed by major-bank experience",
        about_role: "Senior Mortgage Adviser, A Plus Finance",
        about_p1: "With 14 years at ANZ and broader experience across NZ banking, Becky brings both lender-side understanding and independent broker perspective to refinance conversations.",
        about_p2: "Her focus is helping homeowners understand whether they should stay, switch, refix, or restructure, and what the trade-offs actually look like.",
        about_p3: "The advice style is straightforward and low-pressure: clear numbers, clear pros and cons, and a practical next step.",
        about_stat1: "Years in NZ banking",
        about_stat2: "Years at ANZ",
        about_stat3: "Auckland based, NZ-wide service",
        process_title: "How the review works",
        process_intro: "The first step is not a commitment to switch. It is a simple review of your current position and your realistic options.",
        step1_title: "Share the basics",
        step1_desc: "Tell Becky about your current mortgage, property value, and what you want to improve. You do not need every detail to get started.",
        step2_title: "Compare the real options",
        step2_desc: "Review likely lender options, rate positioning, cashback potential, and whether your loan structure can be improved.",
        step3_title: "Move only if it makes sense",
        step3_desc: "If the numbers stack up, Becky can help guide the refinance process. If not, you still leave with a clearer picture.",
        calc_title: "Estimate what a lower rate could change",
        calc_intro: "Use this quick calculator as a starting point. It is not financial advice, but it can help you decide whether a refinance review is worth your time.",
        calc_balance_label: "Current Loan Balance ($)",
        calc_rate_label: "Current Interest Rate (%)",
        calc_new_rate_label: "Estimated New Rate (%)",
        calc_term_label: "Loan Term",
        calc_term_25: "25 years",
        calc_term_30: "30 years",
        calc_btn: "Calculate My Estimate",
        calc_error: "Please complete all three calculator fields.",
        calc_result_label: "Estimated monthly repayment change",
        calc_result_year: "That is about <strong>${year}</strong> over 12 months.",
        calc_result_note: "Based on a {term}-year term. Actual outcomes depend on lender pricing, fees, structure, and your full application details.",
        calc_result_neutral_label: "Worth reviewing further",
        calc_result_neutral_body: "This rate does not appear to reduce repayments on its own, but cashback, structure changes, or a different lender strategy may still be worth reviewing.",
        signals_title: "Why homeowners start here",
        signals_intro: "Before looking for a refinance offer, most people want confidence that the advice will be practical, independent, and worth the conversation.",
        signal_1_title: "Independent second opinion",
        signal_1_desc: "This page is designed for homeowners who want a grounded review before deciding whether to stay with their bank or explore alternatives.",
        signal_2_title: "Mainstream refinance focus",
        signal_2_desc: "The offer is clear and simple: review the loan, compare options, and understand whether switching or restructuring is likely to help.",
        signal_3_title: "Low-pressure next step",
        signal_3_desc: "You are not committing to refinance by getting in touch. You are asking for clarity on what is possible and what is worth doing.",
        faq_title: "Frequently asked questions",
        faq_1_q: "Does refinancing cost money?",
        faq_1_ans: "There can be costs such as break fees, valuation fees of around $500 to $800, and solicitor fees of around $800 to $1,200. In some cases, lender cashback may help offset part or all of those costs.",
        faq_2_q: "Will refinancing affect my credit score?",
        faq_2_ans: "A credit check is usually part of the process, so there can be a temporary effect. A broker can help you approach lender enquiries in a more structured way.",
        faq_3_q: "I refinanced last year. Can I do it again this year?",
        faq_3_ans: "Sometimes yes. It depends on whether you are still inside a cashback clawback period, whether your current fixed rate creates break costs, and whether the new deal is strong enough to justify another move.",
        faq_4_q: "Will I have to pay back last year's cashback if I move again?",
        faq_4_ans: "Possibly. Many cashback offers come with a clawback period, often around two to four years. A proper refinance review checks whether the new outcome still stacks up after any repayment.",
        faq_5_q: "How much can I realistically save by refinancing?",
        faq_5_ans: "It depends on your balance, rate difference, term, and structure. For some homeowners, even a 0.5% to 1% rate change can noticeably improve monthly cash flow, especially on larger loan balances.",
        faq_6_q: "How long does the refinance process usually take?",
        faq_6_ans: "Many refinance applications are completed within two to three weeks, depending on lender turnaround times and the complexity of your situation.",
        faq_7_q: "Can I refinance if I am self-employed or my income has changed?",
        faq_7_ans: "Often yes, but lender appetite and documentation requirements vary. A broker can help narrow down which lenders are more realistic before you apply broadly.",
        faq_8_q: "Should I still compare options if my current bank offers me a new rate?",
        faq_8_ans: "Usually yes. A rate offer can be competitive, but the full picture also includes cashback, fixed-term flexibility, loan structure, and how much effort is worth it for the outcome.",
        contact_title: "Request a free refinance review",
        contact_intro: "Leave a few details and Becky will come back with a practical next step. You do not need to know every number perfectly to start the conversation.",
        contact_note: "Prefer email first? Use the form below and expect a response within one business day in most cases.",
        form_name: "Full Name",
        form_email: "Email",
        form_phone: "Phone",
        form_employment: "Employment Type",
        form_ft: "Full-time employed",
        form_self: "Self-employed",
        form_part: "Part-time",
        form_contractor: "Contractor",
        form_other: "Other",
        form_select: "Select...",
        form_message: "Anything else Becky should know?",
        contact_loan_label: "Current Loan Balance ($)",
        contact_property_label: "Property Value ($)",
        contact_rate_label: "Current Interest Rate (%)",
        contact_best_time: "Best Time to Call",
        time_morning: "Morning",
        time_afternoon: "Afternoon",
        time_evening: "Evening",
        contact_btn: "Request My Free Review",
        contact_get_in_touch: "What happens next",
        contact_email_label: "Email",
        contact_service_label: "Service",
        contact_service_value: "Auckland based, helping homeowners across New Zealand",
        contact_response_label: "Response",
        contact_response_value: "Usually within one business day",
        contact_hours_label: "Hours",
        contact_hours_value: "Mon-Fri 9am-5pm, evenings by appointment",
        contact_caption: "Becky, Senior Mortgage Adviser at A Plus Finance",
        footer_text: "All rights reserved.",
        footer_disclaimer: "The information on this website is general in nature and does not constitute financial advice.",
        ph_name: "Your name",
        ph_email: "your@email.com",
        ph_phone: "021 XXX XXXX",
        ph_loan: "e.g. 500000",
        ph_property: "e.g. 800000",
        ph_rate: "e.g. 6.89",
        ph_new_rate: "e.g. 5.99",
        ph_message: "Optional: tell us about your situation, questions, or concerns...",
        submit_sending: "Sending...",
        chat_launcher: "Quick refinance check",
        chat_eyebrow: "Refinance assistant",
        chat_title: "Quick refinance check",
        chat_input_placeholder: "Type your answer",
        chat_send: "Send",
        chat_welcome: "Hi, I can help with the first-pass refinance questions Becky hears most often.",
        chat_prompt: "What would you like help with first?",
        chat_topic_savings: "How much could I save?",
        chat_topic_qualify: "Do I likely qualify?",
        chat_topic_recent: "I refinanced recently",
        chat_topic_cashback: "Will I repay cashback?",
        chat_topic_start: "Start a quick review",
        chat_answer_savings: "Savings depend on your current balance, rate, term, and whether another lender or structure creates a better outcome. I can give you a quick directional check if you share a few details.",
        chat_answer_qualify: "Qualification usually comes down to equity, servicing, income type, and lender policy. I can help you do a quick first-pass screen before you leave your details.",
        chat_answer_recent: "Sometimes homeowners can refinance again within a year, but only if the new outcome still makes sense after break costs and any cashback clawback.",
        chat_answer_cashback: "You may need to repay some or all of a previous cashback if you move too soon. The important question is whether the new deal still stacks up after that cost.",
        chat_followup: "Would you like me to run a quick refinance review now?",
        chat_cta_review: "Yes, run the quick review",
        chat_cta_more: "Show the options again",
        chat_cta_later: "Not right now",
        chat_later: "No problem. You can keep reading, use the calculator, or come back here whenever you want a quicker first-pass review.",
        chat_question_bank: "Which bank is your current mortgage with?",
        chat_question_balance: "Roughly how much do you still owe on the mortgage?",
        chat_question_property: "About what is the property worth today?",
        chat_question_rate: "What best describes your current rate position?",
        chat_question_employment: "What best describes your current employment situation?",
        chat_question_goal: "What is the main reason you are considering refinancing?",
        chat_question_name: "Great. What is your full name?",
        chat_question_contact_preference: "How would you prefer Becky to contact you?",
        chat_question_phone: "What is the best mobile number for Becky to use?",
        chat_question_email: "What is the best email address?",
        chat_question_time: "If Becky calls, what time of day usually suits you best?",
        chat_question_send_confirm: "I have filled this into the enquiry form below, but nothing has been sent yet. Would you like to send it to Becky now?",
        chat_bank_anz: "ANZ",
        chat_bank_asb: "ASB",
        chat_bank_bnz: "BNZ",
        chat_bank_westpac: "Westpac",
        chat_bank_kiwibank: "Kiwibank",
        chat_bank_other: "Another lender",
        chat_balance_under_300: "Under $300k",
        chat_balance_300_500: "$300k-$500k",
        chat_balance_500_800: "$500k-$800k",
        chat_balance_800_1200: "$800k-$1.2m",
        chat_balance_over_1200: "Over $1.2m",
        chat_not_sure: "Not sure",
        chat_property_under_700: "Under $700k",
        chat_property_700_1000: "$700k-$1m",
        chat_property_1000_1500: "$1m-$1.5m",
        chat_property_over_1500: "Over $1.5m",
        chat_rate_under_55: "My rate is under 5.5%",
        chat_rate_55_65: "My rate is about 5.5%-6.5%",
        chat_rate_over_65: "My rate is above 6.5%",
        chat_rate_fixed_unsure: "I am fixed and not sure",
        chat_rate_floating: "I am floating",
        chat_employment_full: "Full-time employed",
        chat_employment_self: "Self-employed",
        chat_employment_part: "Part-time employed",
        chat_employment_contract: "Contractor",
        chat_employment_other: "Other",
        chat_goal_reduce: "Reduce repayments",
        chat_goal_better: "Find a better rate",
        chat_goal_debt: "Debt consolidation",
        chat_goal_reno: "Renovation or top-up",
        chat_goal_equity: "Access equity",
        chat_goal_check: "Just checking options",
        chat_contact_phone: "Phone only",
        chat_contact_email: "Email only",
        chat_contact_both: "Phone and email",
        chat_outcome_likely_title: "This looks worth a broker review.",
        chat_outcome_likely_body: "Based on what you have shared so far, this looks like a mainstream refinance scenario that is worth reviewing properly.",
        chat_outcome_maybe_title: "This may be worth reviewing, but the details matter.",
        chat_outcome_maybe_body: "There are some moving parts here, so the value of refinancing is likely to depend on servicing, lender policy, costs, or structure choices.",
        chat_outcome_complex_title: "This needs a more tailored broker review.",
        chat_outcome_complex_body: "Your situation may still be workable, but it is not something to judge from headline rates alone. Becky should look at the detail before you make assumptions.",
        chat_outcome_savings: "If a lender improved your rate by about 0.5%, that could change repayments by roughly {amount} per month on a 30-year basis.",
        chat_outcome_clawback: "Because you may be inside a cashback clawback period, the net benefit needs checking carefully.",
        chat_outcome_lvr: "Your approximate loan-to-value ratio looks to be around {percent}%.",
        chat_leave_prompt: "Would you like to leave your details so Becky can review this properly?",
        chat_leave_yes: "Yes, leave my details",
        chat_leave_no: "No thanks",
        chat_leave_no_msg: "No problem. You can still use the page calculator or submit the standard contact form later if you want a formal review.",
        chat_ready_to_send: "Your details have been filled into the enquiry form below so you can review them first.",
        chat_send_now: "Send to Becky now",
        chat_send_not_yet: "Not yet",
        chat_send_not_yet_msg: "No problem. Nothing has been sent yet. You can come back to this chat and send it when you are ready.",
        chat_invalid_phone: "Please enter a mobile number Becky can realistically call back on.",
        chat_invalid_email: "Please enter a valid email address so Becky can follow up properly.",
        chat_submit_msg: "Thanks. I am sending your details through now so Becky can review your situation.",
        chat_done_msg: "Sent. Becky should receive your details and this quick review shortly.",
        chat_submit_fallback: "I could not confirm the background send here, so I am using the normal form submit as a fallback.",
        form_contact_required: "Please provide either a phone number or an email address."
      },
      zh: {
        nav_why: "为什么转贷",
        nav_about: "关于 Becky",
        nav_calc: "计算器",
        nav_faq: "常见问题",
        nav_contact: "联系",
        hero_kicker: "独立房贷转贷评估",
        hero_title: "用清晰、独立的建议重新评估您的房贷",
        hero_desc: "如果您的房贷在过去 12 个月里没有认真复盘，您可能还在支付本可以优化的成本。A Plus Finance 的 Becky 可以帮助新西兰业主比较利率、现金返赠和贷款结构，给您一个务实的第二意见。",
        hero_cta: "估算可能节省多少",
        hero_cta2: "申请免费评估",
        hero_trust_1: "ANZ 14 年经验",
        hero_trust_2: "比较 10+ 家贷款机构",
        hero_trust_3: "服务全新西兰",
        hero_panel_label: "这次评估会看什么",
        hero_panel_1: "转去其他贷款机构是否有机会真正省钱",
        hero_panel_2: "现金返赠是否足以覆盖部分转贷成本",
        hero_panel_3: "您当前的贷款结构是否还适合现在的目标",
        trust_1: "ANZ 工作年限",
        trust_2: "新西兰银行业经验",
        trust_3: "可比较的贷款机构",
        trust_4: "目标回复时间",
        pain_title: "这些情况您熟悉吗？",
        pain_intro: "很多人开始考虑转贷，其实都来自一个很实际的问题：我是不是付多了，或者这笔贷款有没有更聪明的安排方式？",
        pain_1_title: "利率变了，但贷款策略没变",
        pain_1_desc: "市场利率已经变动，但您的房贷可能仍停留在几个月前接受的结构和价格上。",
        pain_2_title: "您怀疑银行没有先给出最好的方案",
        pain_2_desc: "不少业主是在发现别家银行，甚至自己当前的银行，可能还有更优空间后，才开始认真看转贷。",
        pain_3_title: "即使每月只省一点，也很有意义",
        pain_3_desc: "每月节省 200 到 500 纽币，都会对现金流、提前还款或其他家庭目标产生明显帮助。",
        sol_title: "一次好的转贷评估，可能带来什么",
        sol_intro: "重点不只是把贷款搬家，而是确认更低利率、现金返赠或结构调整，是否真的值得做。",
        sol_1_title: "更有竞争力的价格",
        sol_1_desc: "与其只看一家银行的默认报价，不如比较多家新西兰贷款机构的转贷选择。",
        sol_2_title: "可能拿到现金返赠",
        sol_2_desc: "部分贷款机构会提供现金返赠，是否适合要看资格条件和贷款规模。",
        sol_3_title: "更实用的贷款结构",
        sol_3_desc: "转贷评估也会一起看固定期限、offset、循环信贷或更符合当前目标的结构安排。",
        about_title: "既有大银行背景，也有独立顾问视角",
        about_role: "A Plus Finance 高级房贷顾问",
        about_p1: "Becky 曾在 ANZ 工作 14 年，并拥有更广泛的新西兰银行业经验，因此既理解贷款机构的思路，也能从独立顾问角度帮您判断。",
        about_p2: "她关注的是帮助业主看清：应该继续留在原银行、换银行、重新 refix，还是重整贷款结构，以及每种选择真正的取舍。",
        about_p3: "沟通方式直接、务实、不过度施压：把数字讲清楚，把优缺点讲明白，把下一步讲简单。",
        about_stat1: "新西兰银行业经验",
        about_stat2: "ANZ 工作年限",
        about_stat3: "奥克兰为基地，服务全新西兰",
        process_title: "评估流程怎么走",
        process_intro: "第一步不是承诺一定转贷，而是先把您当前的位置和真正可行的选择看清楚。",
        step1_title: "先提供基本情况",
        step1_desc: "告诉 Becky 您目前的房贷、房产估值，以及最想改善的地方。开始时不需要掌握所有细节。",
        step2_title: "比较真正可行的方案",
        step2_desc: "一起看可能的贷款机构选择、利率水平、返赠空间，以及贷款结构是否值得优化。",
        step3_title: "只有值得时才推进",
        step3_desc: "如果数字上确实有意义，Becky 会继续协助推进；如果没有，您也能带着更清楚的判断离开。",
        calc_title: "先估算一下，更低利率会带来什么变化",
        calc_intro: "这个计算器只是起点，不构成财务建议，但能帮助您判断是否值得花时间做一次转贷评估。",
        calc_balance_label: "当前贷款余额 ($)",
        calc_rate_label: "当前利率 (%)",
        calc_new_rate_label: "预估新利率 (%)",
        calc_term_label: "贷款年限",
        calc_term_25: "25 年",
        calc_term_30: "30 年",
        calc_btn: "计算我的估算结果",
        calc_error: "请先填写计算器中的三个必要字段。",
        calc_result_label: "预估每月还款变化",
        calc_result_year: "按 12 个月估算，大约是 <strong>${year}</strong>。",
        calc_result_note: "基于 {term} 年贷款年限。实际结果还取决于贷款机构报价、费用、结构和完整申请情况。",
        calc_result_neutral_label: "仍值得进一步评估",
        calc_result_neutral_body: "如果只看这个利率，月供未必会下降，但返赠、结构调整或不同贷款机构策略，仍可能带来价值。",
        signals_title: "为什么很多业主会先从这里开始",
        signals_intro: "在寻找具体转贷报价前，大多数人更想先确认建议是否务实、独立，而且值得花时间聊一聊。",
        signal_1_title: "先要一个独立第二意见",
        signal_1_desc: "这个页面是给想先判断是否值得继续留在原银行，还是应该看看外部选择的业主准备的。",
        signal_2_title: "聚焦主流转贷场景",
        signal_2_desc: "逻辑很简单：看贷款、比方案、判断换银行或重整结构是否真的有帮助。",
        signal_3_title: "低压力的下一步",
        signal_3_desc: "留下资料不代表您已经决定转贷，只是先把可能性和价值看清楚。",
        faq_title: "常见问题",
        faq_1_q: "转贷会产生费用吗？",
        faq_1_ans: "有可能会有一些费用，比如 break fee、房屋评估费约 500 到 800 纽币，以及律师费约 800 到 1,200 纽币。部分贷款机构的现金返赠可能覆盖部分或全部成本。",
        faq_2_q: "转贷会影响信用分吗？",
        faq_2_ans: "通常会涉及信用查询，因此可能有短期影响。通过更有计划地接触贷款机构，可以把过程处理得更稳妥。",
        faq_3_q: "如果我去年刚转贷，今年还能再做一次吗？",
        faq_3_ans: "有时候可以，但要看您是否还在 cashback clawback 期限内、当前固定利率是否会产生 break cost，以及新的方案是否真的值得再动一次。",
        faq_4_q: "如果我今年再转贷，要不要把去年的现金返赠退回去？",
        faq_4_ans: "有可能。很多现金返赠都会附带 clawback 期限，常见是两到四年。所以评估时要先看，扣掉可能要退回的部分后，新方案还值不值得做。",
        faq_5_q: "转贷到底有机会省多少，才算值得？",
        faq_5_ans: "这取决于贷款余额、利率差、年限和结构。对贷款规模较大的家庭来说，就算只差 0.5% 到 1%，也可能对每月现金流产生明显影响。",
        faq_6_q: "整个转贷流程通常要多久？",
        faq_6_ans: "很多转贷申请会在两到三周内完成，但仍取决于贷款机构处理速度和您个案的复杂程度。",
        faq_7_q: "如果我是自雇，或者最近收入有变化，还能转贷吗？",
        faq_7_ans: "很多情况下还是可以，只是不同贷款机构的接受度和文件要求差异很大。先做评估，可以更快缩小哪些选择更现实。",
        faq_8_q: "如果现在的银行已经给我一个新利率，我还需要比较别家吗？",
        faq_8_ans: "通常还是值得比较一下。因为真正要看的不只是利率，还有 cashback、固定期限弹性、贷款结构，以及为了这个结果值不值得花力气去做。",
        contact_title: "申请一次免费的转贷评估",
        contact_intro: "留下基本信息后，Becky 会回复您一个务实的下一步建议。开始时不需要每个数字都完全准确。",
        contact_note: "如果您更偏好先通过邮件沟通，可以直接填写下方表单。多数情况下会在一个工作日内回复。",
        form_name: "姓名",
        form_email: "电子邮箱",
        form_phone: "电话",
        form_employment: "就业类型",
        form_ft: "全职受雇",
        form_self: "自雇",
        form_part: "兼职",
        form_contractor: "合同工",
        form_other: "其他",
        form_select: "请选择...",
        form_message: "还有什么情况希望 Becky 先了解？",
        contact_loan_label: "当前贷款余额 ($)",
        contact_property_label: "房产估值 ($)",
        contact_rate_label: "当前利率 (%)",
        contact_best_time: "方便联系的时间",
        time_morning: "上午",
        time_afternoon: "下午",
        time_evening: "晚上",
        contact_btn: "申请我的免费评估",
        contact_get_in_touch: "接下来会发生什么",
        contact_email_label: "邮箱",
        contact_service_label: "服务范围",
        contact_service_value: "以奥克兰为基地，服务全新西兰业主",
        contact_response_label: "回复速度",
        contact_response_value: "通常一个工作日内回复",
        contact_hours_label: "时间",
        contact_hours_value: "周一至周五 9am-5pm，可预约晚间沟通",
        contact_caption: "Becky，A Plus Finance 高级房贷顾问",
        footer_text: "保留所有权利。",
        footer_disclaimer: "本网站内容仅供一般信息参考，不构成财务建议。",
        ph_name: "您的姓名",
        ph_email: "your@email.com",
        ph_phone: "021 XXX XXXX",
        ph_loan: "例如 500000",
        ph_property: "例如 800000",
        ph_rate: "例如 6.89",
        ph_new_rate: "例如 5.99",
        ph_message: "选填：您的情况、问题或顾虑...",
        submit_sending: "发送中...",
        chat_launcher: "快速转贷评估",
        chat_eyebrow: "转贷助手",
        chat_title: "快速转贷评估",
        chat_input_placeholder: "输入您的回答",
        chat_send: "发送",
        chat_welcome: "您好，我可以先帮您处理 Becky 最常被问到的几类转贷问题。",
        chat_prompt: "您想先看哪一类？",
        chat_topic_savings: "我大概能省多少？",
        chat_topic_qualify: "我大概能不能做？",
        chat_topic_recent: "我最近刚转过贷",
        chat_topic_cashback: "要不要退 cashback？",
        chat_topic_start: "直接开始快速评估",
        chat_answer_savings: "能省多少，主要取决于贷款余额、当前利率、年限，以及有没有更合适的贷款机构或结构。我可以先帮您做一个方向性的快速判断。",
        chat_answer_qualify: "能不能做，通常取决于净值比例、偿付能力、收入类型和贷款机构政策。我可以先帮您做一轮初步筛选。",
        chat_answer_recent: "有些业主一年内还是可以再做一次，但前提是扣掉 break cost 和 cashback clawback 之后，新方案依然值得。",
        chat_answer_cashback: "如果动得太快，确实可能要退回部分或全部 cashback。关键不是会不会退，而是退完之后新的结果还值不值得。",
        chat_followup: "要不要我现在帮您跑一轮快速转贷评估？",
        chat_cta_review: "好，开始快速评估",
        chat_cta_more: "把选项再给我看一次",
        chat_cta_later: "先不用",
        chat_later: "没问题。您可以继续看页面、用计算器，或者稍后再回来做这轮快速评估。",
        chat_question_bank: "您当前的房贷是哪家银行？",
        chat_question_balance: "您目前房贷大概还欠多少？",
        chat_question_property: "这套房子现在大概值多少？",
        chat_question_rate: "您当前的利率状态更接近哪一种？",
        chat_question_employment: "您现在的就业情况更接近哪一种？",
        chat_question_goal: "您这次考虑转贷，主要想解决什么？",
        chat_question_name: "好的，您的全名是？",
        chat_question_contact_preference: "您更希望 Becky 用什么方式联系您？",
        chat_question_phone: "Becky 最好打哪个手机号联系您？",
        chat_question_email: "方便留一个邮箱吗？",
        chat_question_time: "如果 Becky 给您打电话，哪个时间段通常更方便？",
        chat_question_send_confirm: "我已经先把这些资料填到下方表单里了，但现在还没有正式发出去。您要现在提交给 Becky 吗？",
        chat_bank_anz: "ANZ",
        chat_bank_asb: "ASB",
        chat_bank_bnz: "BNZ",
        chat_bank_westpac: "Westpac",
        chat_bank_kiwibank: "Kiwibank",
        chat_bank_other: "其他贷款机构",
        chat_balance_under_300: "30 万以下",
        chat_balance_300_500: "30 万到 50 万",
        chat_balance_500_800: "50 万到 80 万",
        chat_balance_800_1200: "80 万到 120 万",
        chat_balance_over_1200: "120 万以上",
        chat_not_sure: "不太确定",
        chat_property_under_700: "70 万以下",
        chat_property_700_1000: "70 万到 100 万",
        chat_property_1000_1500: "100 万到 150 万",
        chat_property_over_1500: "150 万以上",
        chat_rate_under_55: "我的利率低于 5.5%",
        chat_rate_55_65: "我的利率大概在 5.5%-6.5%",
        chat_rate_over_65: "我的利率高于 6.5%",
        chat_rate_fixed_unsure: "我是固定利率，但不太确定",
        chat_rate_floating: "我是浮动利率",
        chat_employment_full: "全职受雇",
        chat_employment_self: "自雇",
        chat_employment_part: "兼职受雇",
        chat_employment_contract: "合同工",
        chat_employment_other: "其他",
        chat_goal_reduce: "降低月供",
        chat_goal_better: "争取更好的利率",
        chat_goal_debt: "整合债务",
        chat_goal_reno: "装修或 top-up",
        chat_goal_equity: "提取净值",
        chat_goal_check: "先看看有没有机会",
        chat_contact_phone: "只留电话",
        chat_contact_email: "只留邮箱",
        chat_contact_both: "电话和邮箱都可以",
        chat_outcome_likely_title: "这个情况值得做进一步 broker review。",
        chat_outcome_likely_body: "根据您目前提供的信息，这看起来是一个比较主流、值得认真复核的转贷场景。",
        chat_outcome_maybe_title: "这个情况可能值得做，但细节会很关键。",
        chat_outcome_maybe_body: "这里面有一些变量，所以值不值得做，很可能取决于偿付能力、贷款机构政策、费用或结构安排。",
        chat_outcome_complex_title: "这个情况更需要定制化的 broker review。",
        chat_outcome_complex_body: "这类情况不是看一个 headline rate 就能判断的，但并不代表不能做，而是更需要 Becky 看细节。",
        chat_outcome_savings: "如果利率大约能改善 0.5%，按 30 年估算，每月还款可能变化约 {amount}。",
        chat_outcome_clawback: "因为您可能还在 cashback clawback 期内，所以净收益一定要仔细核算。",
        chat_outcome_lvr: "按您提供的大概数字，贷款成数大约在 {percent}% 左右。",
        chat_leave_prompt: "要不要直接留下资料，让 Becky 帮您正式看一下？",
        chat_leave_yes: "好，留下资料",
        chat_leave_no: "先不用",
        chat_leave_no_msg: "没问题。之后您还是可以继续用页面上的计算器，或者直接提交下方的联系表单。",
        chat_ready_to_send: "您的资料已经先填到下方表单里，您可以先看一眼再决定要不要发送。",
        chat_send_now: "现在发给 Becky",
        chat_send_not_yet: "先不要",
        chat_send_not_yet_msg: "没问题，目前还没有正式发出去。您准备好了，随时回到这个对话框里发送就可以。",
        chat_invalid_phone: "请留一个 Becky 可以实际回拨的手机号。",
        chat_invalid_email: "请留一个有效邮箱，方便 Becky 跟进。",
        chat_submit_msg: "谢谢，我现在就把这轮快速评估和您的资料一起提交给 Becky。",
        chat_done_msg: "已经发出了。Becky 很快就能收到您的资料和这轮快速评估。",
        chat_submit_fallback: "我这边暂时没法确认后台直发是否成功，所以会改用普通表单提交作为兜底。",
        form_contact_required: "请至少填写电话或邮箱其中一种联系方式。"
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
      var textNodes = document.querySelectorAll("[data-i18n]");
      for (var i = 0; i < textNodes.length; i++) {
        var key = textNodes[i].getAttribute("data-i18n");
        textNodes[i].textContent = this.t(key);
      }

      var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
      for (var j = 0; j < placeholders.length; j++) {
        var placeholderKey = placeholders[j].getAttribute("data-i18n-placeholder");
        placeholders[j].placeholder = this.t(placeholderKey);
      }

      document.documentElement.lang = this.currentLang === "zh" ? "zh" : "en";
    },
    init: function() {
      var self = this;
      var saved = localStorage.getItem("prefLang");
      this.currentLang = saved === "zh" || saved === "en" ? saved : this.detectLanguage();
      this.applyToPage();

      var toggle = document.getElementById("lang-toggle");
      if (!toggle) return;

      function updateToggleLabel() {
        toggle.textContent = self.currentLang === "zh" ? "English" : "中文";
      }

      updateToggleLabel();

      toggle.addEventListener("click", function() {
        self.currentLang = self.currentLang === "zh" ? "en" : "zh";
        localStorage.setItem("prefLang", self.currentLang);
        self.applyToPage();
        updateToggleLabel();
      });
    }
  };

  function formatMoney(value) {
    return "$" + Number(Math.abs(value)).toLocaleString("en-NZ", {
      maximumFractionDigits: 0
    });
  }

  function renderTemplate(template, values) {
    return template.replace(/\{(\w+)\}/g, function(_, key) {
      return values[key] !== undefined ? values[key] : "";
    });
  }

  function calculateMonthlyPayment(balance, annualRate, termYears) {
    if (!balance || !annualRate || !termYears) return 0;
    var monthlyRate = annualRate / 100 / 12;
    var totalPayments = termYears * 12;
    return monthlyRate * balance / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  }

  function initCalculator() {
    var form = document.getElementById("calc-form");
    var result = document.getElementById("calc-result");

    if (!form || !result) return;

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      var balance = parseFloat(document.getElementById("calc-balance").value);
      var currentRate = parseFloat(document.getElementById("calc-current-rate").value);
      var newRate = parseFloat(document.getElementById("calc-new-rate").value);
      var term = parseInt(document.getElementById("calc-term").value, 10) || 30;

      if (!balance || !currentRate || !newRate) {
        result.innerHTML = "<div class=\"calc-result neutral\"><p>" + i18n.t("calc_error") + "</p></div>";
        return;
      }

      var monthlyCurrent = calculateMonthlyPayment(balance, currentRate, term);
      var monthlyNew = calculateMonthlyPayment(balance, newRate, term);
      var monthlySavings = monthlyCurrent - monthlyNew;
      var yearlySavings = monthlySavings * 12;

      if (monthlySavings <= 0) {
        result.innerHTML =
          "<div class=\"calc-result neutral\">" +
          "<div class=\"eyebrow\">" + i18n.t("calc_result_neutral_label") + "</div>" +
          "<p>" + i18n.t("calc_result_neutral_body") + "</p>" +
          "</div>";
        return;
      }

      result.innerHTML =
        "<div class=\"calc-result\">" +
        "<div class=\"eyebrow\">" + i18n.t("calc_result_label") + "</div>" +
        "<div class=\"savings\">" + formatMoney(monthlySavings) + "</div>" +
        "<p>" + i18n.t("calc_result_year").replace("${year}", formatMoney(yearlySavings)) + "</p>" +
        "<p>" + renderTemplate(i18n.t("calc_result_note"), { term: term }) + "</p>" +
        "</div>";
    });
  }

  function initFAQ() {
    var questions = document.querySelectorAll(".faq-question");
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
      });
    }
  }

  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(event) {
        var target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function buildChatConfig() {
    return {
      bankOptions: [
        { label: i18n.t("chat_bank_anz"), value: "ANZ" },
        { label: i18n.t("chat_bank_asb"), value: "ASB" },
        { label: i18n.t("chat_bank_bnz"), value: "BNZ" },
        { label: i18n.t("chat_bank_westpac"), value: "Westpac" },
        { label: i18n.t("chat_bank_kiwibank"), value: "Kiwibank" },
        { label: i18n.t("chat_bank_other"), value: "Other lender" }
      ],
      balanceOptions: [
        { label: i18n.t("chat_balance_under_300"), value: "Under $300k", amount: 250000 },
        { label: i18n.t("chat_balance_300_500"), value: "$300k-$500k", amount: 400000 },
        { label: i18n.t("chat_balance_500_800"), value: "$500k-$800k", amount: 650000 },
        { label: i18n.t("chat_balance_800_1200"), value: "$800k-$1.2m", amount: 1000000 },
        { label: i18n.t("chat_balance_over_1200"), value: "Over $1.2m", amount: 1300000 },
        { label: i18n.t("chat_not_sure"), value: "Not sure", amount: null }
      ],
      propertyOptions: [
        { label: i18n.t("chat_property_under_700"), value: "Under $700k", amount: 650000 },
        { label: i18n.t("chat_property_700_1000"), value: "$700k-$1m", amount: 850000 },
        { label: i18n.t("chat_property_1000_1500"), value: "$1m-$1.5m", amount: 1250000 },
        { label: i18n.t("chat_property_over_1500"), value: "Over $1.5m", amount: 1600000 },
        { label: i18n.t("chat_not_sure"), value: "Not sure", amount: null }
      ],
      rateOptions: [
        { label: i18n.t("chat_rate_under_55"), value: "Under 5.5%", rate: 5.25, state: "known" },
        { label: i18n.t("chat_rate_55_65"), value: "5.5%-6.5%", rate: 6.0, state: "known" },
        { label: i18n.t("chat_rate_over_65"), value: "Over 6.5%", rate: 6.9, state: "known" },
        { label: i18n.t("chat_rate_fixed_unsure"), value: "Fixed and not sure", rate: null, state: "fixed" },
        { label: i18n.t("chat_rate_floating"), value: "Floating", rate: null, state: "floating" },
        { label: i18n.t("chat_not_sure"), value: "Not sure", rate: null, state: "unknown" }
      ],
      employmentOptions: [
        { label: i18n.t("chat_employment_full"), value: "Full-time employed" },
        { label: i18n.t("chat_employment_self"), value: "Self-employed" },
        { label: i18n.t("chat_employment_part"), value: "Part-time employed" },
        { label: i18n.t("chat_employment_contract"), value: "Contractor" },
        { label: i18n.t("chat_employment_other"), value: "Other" }
      ],
      goalOptions: [
        { label: i18n.t("chat_goal_reduce"), value: "Reduce repayments" },
        { label: i18n.t("chat_goal_better"), value: "Find a better rate" },
        { label: i18n.t("chat_goal_debt"), value: "Debt consolidation" },
        { label: i18n.t("chat_goal_reno"), value: "Renovation or top-up" },
        { label: i18n.t("chat_goal_equity"), value: "Access equity" },
        { label: i18n.t("chat_goal_check"), value: "Just checking options" }
      ],
      contactPreferenceOptions: [
        { label: i18n.t("chat_contact_phone"), value: "phone" },
        { label: i18n.t("chat_contact_email"), value: "email" },
        { label: i18n.t("chat_contact_both"), value: "both" }
      ],
      contactTimeOptions: [
        { label: i18n.t("time_morning"), value: "Morning" },
        { label: i18n.t("time_afternoon"), value: "Afternoon" },
        { label: i18n.t("time_evening"), value: "Evening" }
      ]
    };
  }

  function initChat() {
    var fab = document.getElementById("chat-fab");
    var sheet = document.getElementById("chat-sheet");
    var panel = sheet ? sheet.querySelector(".chat-panel") : null;
    var messagesEl = document.getElementById("chat-messages");
    var optionsEl = document.getElementById("chat-options");
    var inputEl = document.getElementById("chat-input");
    var sendBtn = document.getElementById("chat-send");
    var restartBtn = document.getElementById("chat-restart");
    var closeEls = sheet ? sheet.querySelectorAll("[data-chat-close]") : null;
    var form = document.getElementById("contact-form");

    if (!fab || !sheet || !panel || !messagesEl || !optionsEl || !inputEl || !sendBtn || !restartBtn || !form) return;

    var config = buildChatConfig();
    var state;

    function blankState() {
      return {
        initialized: false,
        step: "intro",
        path: [],
        awaitingText: false,
        awaitingOptions: false,
        result: null,
        data: {
          topic: "",
          bank: "",
          balanceLabel: "",
          balanceAmount: null,
          propertyLabel: "",
          propertyAmount: null,
          rateLabel: "",
          rateAmount: null,
          rateState: "",
          employment: "",
          goal: "",
          name: "",
          contactPreference: "",
          phone: "",
          email: "",
          preferredTime: ""
        }
      };
    }

    function resetChat() {
      state = blankState();
      messagesEl.innerHTML = "";
      optionsEl.innerHTML = "";
      optionsEl.style.display = "none";
      inputEl.value = "";
    }

    function scrollMessages() {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function addMessage(kind, text) {
      var node = document.createElement("div");
      node.className = "chat-msg " + kind;
      node.textContent = text;
      messagesEl.appendChild(node);
      scrollMessages();
    }

    function showOptions(items) {
      optionsEl.innerHTML = "";
      optionsEl.style.display = items && items.length ? "flex" : "none";
      if (!items || !items.length) return;

      for (var i = 0; i < items.length; i++) {
        (function(item) {
          var button = document.createElement("button");
          button.type = "button";
          button.className = "chat-option";
          button.textContent = item.label;
          button.addEventListener("click", function() {
            handleChoice(item);
          });
          optionsEl.appendChild(button);
        })(items[i]);
      }
    }

    function setWaiting(step, allowText, options) {
      state.step = step;
      state.awaitingText = !!allowText;
      state.awaitingOptions = !!(options && options.length);
      showOptions(options || []);
    }

    function showIntro(includeWelcome) {
      config = buildChatConfig();
      if (includeWelcome) {
        addMessage("bot", i18n.t("chat_welcome"));
      }
      addMessage("bot", i18n.t("chat_prompt"));
      setWaiting("intro", false, [
        { label: i18n.t("chat_topic_savings"), value: "savings" },
        { label: i18n.t("chat_topic_qualify"), value: "qualify" },
        { label: i18n.t("chat_topic_recent"), value: "recent" },
        { label: i18n.t("chat_topic_cashback"), value: "cashback" },
        { label: i18n.t("chat_topic_start"), value: "start-review" }
      ]);
    }

    function addFollowupPrompt() {
      addMessage("bot", i18n.t("chat_followup"));
      setWaiting("followup", false, [
        { label: i18n.t("chat_cta_review"), value: "start-review" },
        { label: i18n.t("chat_cta_more"), value: "show-options" },
        { label: i18n.t("chat_cta_later"), value: "later" }
      ]);
    }

    function askQualification(stepName) {
      switch (stepName) {
        case "bank":
          addMessage("bot", i18n.t("chat_question_bank"));
          setWaiting("bank", true, config.bankOptions);
          break;
        case "balance":
          addMessage("bot", i18n.t("chat_question_balance"));
          setWaiting("balance", true, config.balanceOptions);
          break;
        case "property":
          addMessage("bot", i18n.t("chat_question_property"));
          setWaiting("property", true, config.propertyOptions);
          break;
        case "rate":
          addMessage("bot", i18n.t("chat_question_rate"));
          setWaiting("rate", true, config.rateOptions);
          break;
        case "employment":
          addMessage("bot", i18n.t("chat_question_employment"));
          setWaiting("employment", true, config.employmentOptions);
          break;
        case "goal":
          addMessage("bot", i18n.t("chat_question_goal"));
          setWaiting("goal", true, config.goalOptions);
          break;
        case "name":
          addMessage("bot", i18n.t("chat_question_name"));
          setWaiting("name", true, []);
          break;
        case "contact-preference":
          addMessage("bot", i18n.t("chat_question_contact_preference"));
          setWaiting("contact-preference", false, config.contactPreferenceOptions);
          break;
        case "phone":
          addMessage("bot", i18n.t("chat_question_phone"));
          setWaiting("phone", true, []);
          break;
        case "email":
          addMessage("bot", i18n.t("chat_question_email"));
          setWaiting("email", true, []);
          break;
        case "time":
          addMessage("bot", i18n.t("chat_question_time"));
          setWaiting("time", false, config.contactTimeOptions);
          break;
        case "send-confirm":
          addMessage("bot", i18n.t("chat_question_send_confirm"));
          setWaiting("send-confirm", false, [
            { label: i18n.t("chat_send_now"), value: "send-now" },
            { label: i18n.t("chat_send_not_yet"), value: "send-not-yet" }
          ]);
          break;
      }
    }

    function parseMoneyInput(text) {
      if (!text) return null;
      var cleaned = text.replace(/[^0-9.]/g, "");
      var value = parseFloat(cleaned);
      return isNaN(value) ? null : value;
    }

    function parseRateInput(text) {
      if (!text) return null;
      var cleaned = text.replace(/[^0-9.]/g, "");
      var value = parseFloat(cleaned);
      return isNaN(value) ? null : value;
    }

    function inferOutcome() {
      var data = state.data;
      var lvr = null;
      if (data.balanceAmount && data.propertyAmount) {
        lvr = data.balanceAmount / data.propertyAmount;
      }

      var status = "maybe";
      if (lvr && lvr > 0.9) {
        status = "complex";
      } else if (
        lvr !== null &&
        lvr <= 0.8 &&
        data.employment === "Full-time employed" &&
        (data.rateAmount === null || data.rateAmount >= 5.5)
      ) {
        status = "likely";
      } else if (data.employment === "Self-employed" || data.employment === "Contractor") {
        status = "maybe";
      }

      var titleKey = "chat_outcome_maybe_title";
      var bodyKey = "chat_outcome_maybe_body";

      if (status === "likely") {
        titleKey = "chat_outcome_likely_title";
        bodyKey = "chat_outcome_likely_body";
      } else if (status === "complex") {
        titleKey = "chat_outcome_complex_title";
        bodyKey = "chat_outcome_complex_body";
      }

      var notes = [];
      if (lvr !== null) {
        notes.push(renderTemplate(i18n.t("chat_outcome_lvr"), {
          percent: Math.round(lvr * 100)
        }));
      }

      if (data.rateAmount && data.balanceAmount && data.rateAmount >= 5) {
        var modeledRate = Math.max(data.rateAmount - 0.5, 4.5);
        var currentMonthly = calculateMonthlyPayment(data.balanceAmount, data.rateAmount, 30);
        var modeledMonthly = calculateMonthlyPayment(data.balanceAmount, modeledRate, 30);
        var monthlyDifference = currentMonthly - modeledMonthly;
        if (monthlyDifference > 0) {
          notes.push(renderTemplate(i18n.t("chat_outcome_savings"), {
            amount: formatMoney(monthlyDifference)
          }));
        }
      }

      if (data.topic === "recent" || data.topic === "cashback") {
        notes.push(i18n.t("chat_outcome_clawback"));
      }

      return {
        status: status,
        title: i18n.t(titleKey),
        body: i18n.t(bodyKey),
        notes: notes
      };
    }

    function showOutcome() {
      state.result = inferOutcome();
      state.path.push("outcome:" + state.result.status);

      var outcomeText = state.result.title + "\n\n" + state.result.body;
      if (state.result.notes.length) {
        outcomeText += "\n\n" + state.result.notes.join("\n");
      }

      addMessage("bot", outcomeText);
      addMessage("bot", i18n.t("chat_leave_prompt"));
      setWaiting("leave-details", false, [
        { label: i18n.t("chat_leave_yes"), value: "leave-details" },
        { label: i18n.t("chat_leave_no"), value: "leave-no" }
      ]);
    }

    function handleIntroSelection(choice) {
      state.data.topic = choice.value;
      state.path.push("topic:" + choice.value);

      switch (choice.value) {
        case "savings":
          addMessage("bot", i18n.t("chat_answer_savings"));
          addFollowupPrompt();
          break;
        case "qualify":
          addMessage("bot", i18n.t("chat_answer_qualify"));
          addFollowupPrompt();
          break;
        case "recent":
          addMessage("bot", i18n.t("chat_answer_recent"));
          addFollowupPrompt();
          break;
        case "cashback":
          addMessage("bot", i18n.t("chat_answer_cashback"));
          addFollowupPrompt();
          break;
        case "start-review":
          state.path.push("flow:start");
          askQualification("bank");
          break;
      }
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPhone(value) {
      var cleaned = value.replace(/[^0-9]/g, "");
      return cleaned.length >= 8;
    }

    function summaryText() {
      var data = state.data;
      var lines = [
        "Chat topic: " + (data.topic || ""),
        "Current bank: " + (data.bank || ""),
        "Loan balance: " + (data.balanceLabel || ""),
        "Property value: " + (data.propertyLabel || ""),
        "Current rate: " + (data.rateLabel || ""),
        "Employment: " + (data.employment || ""),
        "Goal: " + (data.goal || ""),
        "Preferred contact method: " + (data.contactPreference || ""),
        "Qualification outcome: " + (state.result ? state.result.status : "")
      ];

      if (state.result && state.result.notes.length) {
        lines = lines.concat(state.result.notes);
      }

      return lines.join("\n");
    }

    function fillFormFromChat() {
      var data = state.data;
      var summary = summaryText();
      var leadSource = document.getElementById("lead-source");
      var qualificationOutcome = document.getElementById("qualification-outcome");
      var chatPath = document.getElementById("chat-path");
      var chatSummary = document.getElementById("chat-summary");
      var nameField = document.getElementById("name");
      var emailField = document.getElementById("email");
      var phoneField = document.getElementById("phone");
      var employmentField = document.getElementById("employment");
      var loanField = document.getElementById("loan-amount");
      var propertyField = document.getElementById("property-value");
      var rateField = document.getElementById("current-rate");
      var timeField = document.getElementById("best-time");
      var messageField = document.getElementById("message");

      if (leadSource) leadSource.value = "chat-qualifier";
      if (qualificationOutcome) qualificationOutcome.value = state.result ? state.result.status : "";
      if (chatPath) chatPath.value = state.path.join(" | ");
      if (chatSummary) chatSummary.value = summary;
      if (nameField) nameField.value = data.name;
      if (emailField) {
        emailField.value = data.email;
        emailField.dispatchEvent(new Event("input", { bubbles: true }));
      }
      if (phoneField) {
        phoneField.value = data.phone;
        phoneField.dispatchEvent(new Event("input", { bubbles: true }));
      }
      if (employmentField) employmentField.value = data.employment;
      if (loanField && data.balanceAmount) loanField.value = String(Math.round(data.balanceAmount));
      if (propertyField && data.propertyAmount) propertyField.value = String(Math.round(data.propertyAmount));
      if (rateField && data.rateAmount) rateField.value = String(data.rateAmount);
      if (timeField) timeField.value = data.preferredTime;
      if (messageField) {
        messageField.value = summary;
      }
    }

    function submitChatLead() {
      fillFormFromChat();
      addMessage("bot", i18n.t("chat_submit_msg"));
      optionsEl.innerHTML = "";
      optionsEl.style.display = "none";

      window.setTimeout(function() {
        var payload = new FormData(form);

        fetch(form.action, {
          method: "POST",
          body: payload,
          headers: {
            "Accept": "application/json"
          }
        })
          .then(function(response) {
            if (!response.ok) {
              throw new Error("submit_failed");
            }

            addMessage("bot", i18n.t("chat_done_msg"));
          })
          .catch(function() {
            addMessage("bot", i18n.t("chat_submit_fallback"));
            form.requestSubmit ? form.requestSubmit() : form.submit();
          });
      }, 500);
    }

    function moveToNextLeadStepAfterPhone() {
      if (state.data.contactPreference === "both") {
        askQualification("email");
        return;
      }

      askQualification("time");
    }

    function moveToNextLeadStepAfterEmail() {
      if (state.data.contactPreference === "both") {
        askQualification("time");
        return;
      }

      fillFormFromChat();
      addMessage("bot", i18n.t("chat_ready_to_send"));
      askQualification("send-confirm");
    }

    function prepareSendConfirmation() {
      fillFormFromChat();
      addMessage("bot", i18n.t("chat_ready_to_send"));
      askQualification("send-confirm");
    }

    function handleChoice(choice) {
      addMessage("user", choice.label);
      inputEl.value = "";

      switch (state.step) {
        case "intro":
          handleIntroSelection(choice);
          break;
        case "followup":
          if (choice.value === "start-review") {
            state.path.push("flow:start");
            askQualification("bank");
          } else if (choice.value === "show-options") {
            showIntro(false);
          } else {
            addMessage("bot", i18n.t("chat_later"));
            showIntro(false);
          }
          break;
        case "bank":
          state.data.bank = choice.value;
          state.path.push("bank:" + choice.value);
          askQualification("balance");
          break;
        case "balance":
          state.data.balanceLabel = choice.value;
          state.data.balanceAmount = choice.amount;
          state.path.push("balance:" + choice.value);
          askQualification("property");
          break;
        case "property":
          state.data.propertyLabel = choice.value;
          state.data.propertyAmount = choice.amount;
          state.path.push("property:" + choice.value);
          askQualification("rate");
          break;
        case "rate":
          state.data.rateLabel = choice.value;
          state.data.rateAmount = choice.rate;
          state.data.rateState = choice.state;
          state.path.push("rate:" + choice.value);
          askQualification("employment");
          break;
        case "employment":
          state.data.employment = choice.value;
          state.path.push("employment:" + choice.value);
          askQualification("goal");
          break;
        case "goal":
          state.data.goal = choice.value;
          state.path.push("goal:" + choice.value);
          showOutcome();
          break;
        case "leave-details":
          if (choice.value === "leave-details") {
            state.path.push("lead:yes");
            askQualification("name");
          } else {
            state.path.push("lead:no");
            addMessage("bot", i18n.t("chat_leave_no_msg"));
            showIntro(false);
          }
          break;
        case "contact-preference":
          state.data.contactPreference = choice.value;
          state.path.push("contact-preference:" + choice.value);
          if (choice.value === "email") {
            askQualification("email");
          } else {
            askQualification("phone");
          }
          break;
        case "time":
          state.data.preferredTime = choice.value;
          state.path.push("time:" + choice.value);
          prepareSendConfirmation();
          break;
        case "send-confirm":
          if (choice.value === "send-now") {
            state.path.push("submit:chat");
            submitChatLead();
          } else {
            state.path.push("submit:manual-later");
            fillFormFromChat();
            addMessage("bot", i18n.t("chat_send_not_yet_msg"));
          }
          break;
      }
    }

    function handleTextInput(raw) {
      var text = raw.trim();
      if (!text) return;

      addMessage("user", text);
      inputEl.value = "";

      switch (state.step) {
        case "bank":
          state.data.bank = text;
          state.path.push("bank:" + text);
          askQualification("balance");
          return;
        case "balance":
          state.data.balanceLabel = text;
          state.data.balanceAmount = parseMoneyInput(text);
          state.path.push("balance:" + text);
          askQualification("property");
          return;
        case "property":
          state.data.propertyLabel = text;
          state.data.propertyAmount = parseMoneyInput(text);
          state.path.push("property:" + text);
          askQualification("rate");
          return;
        case "rate":
          state.data.rateLabel = text;
          state.data.rateAmount = parseRateInput(text);
          state.data.rateState = state.data.rateAmount ? "known" : "unknown";
          state.path.push("rate:" + text);
          askQualification("employment");
          return;
        case "employment":
          state.data.employment = text;
          state.path.push("employment:" + text);
          askQualification("goal");
          return;
        case "goal":
          state.data.goal = text;
          state.path.push("goal:" + text);
          showOutcome();
          return;
        case "name":
          state.data.name = text;
          state.path.push("name");
          askQualification("contact-preference");
          return;
        case "phone":
          if (!isValidPhone(text)) {
            addMessage("bot", i18n.t("chat_invalid_phone"));
            setWaiting("phone", true, []);
            return;
          }
          state.data.phone = text;
          state.path.push("phone");
          moveToNextLeadStepAfterPhone();
          return;
        case "email":
          if (!isValidEmail(text)) {
            addMessage("bot", i18n.t("chat_invalid_email"));
            setWaiting("email", true, []);
            return;
          }
          state.data.email = text;
          state.path.push("email");
          moveToNextLeadStepAfterEmail();
          return;
        case "intro":
        case "followup":
        case "leave-details":
        case "contact-preference":
        case "time":
        case "send-confirm":
          addMessage("bot", i18n.t("chat_prompt"));
          showIntro(false);
          return;
      }
    }

    function openChat() {
      sheet.classList.add("open");
      sheet.setAttribute("aria-hidden", "false");
      fab.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";

      if (!state.initialized) {
        state.initialized = true;
        showIntro(true);
      }

      window.setTimeout(function() {
        inputEl.focus();
      }, 150);
    }

    function closeChat() {
      sheet.classList.remove("open");
      sheet.setAttribute("aria-hidden", "true");
      fab.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    resetChat();

    fab.addEventListener("click", function() {
      if (sheet.classList.contains("open")) {
        closeChat();
      } else {
        openChat();
      }
    });

    for (var i = 0; i < closeEls.length; i++) {
      closeEls[i].addEventListener("click", closeChat);
    }

    restartBtn.addEventListener("click", function() {
      resetChat();
      state.initialized = true;
      showIntro(true);
    });

    sendBtn.addEventListener("click", function() {
      handleTextInput(inputEl.value);
    });

    inputEl.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleTextInput(inputEl.value);
      }
    });
  }

  function initForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");

    function updateContactValidity() {
      if (!emailInput || !phoneInput) return true;

      emailInput.required = false;
      phoneInput.required = false;

      var hasEmail = emailInput.value.trim() !== "";
      var hasPhone = phoneInput.value.trim() !== "";
      var message = hasEmail || hasPhone ? "" : i18n.t("form_contact_required");

      emailInput.setCustomValidity(message);
      phoneInput.setCustomValidity(message);

      return message === "";
    }

    if (emailInput && phoneInput) {
      updateContactValidity();
      emailInput.addEventListener("input", updateContactValidity);
      phoneInput.addEventListener("input", updateContactValidity);
    }

    form.addEventListener("submit", function() {
      updateContactValidity();
      var button = form.querySelector("button[type=\"submit\"] span");
      if (!button) return;
      button.textContent = i18n.t("submit_sending");
    });

    var params = new URLSearchParams(window.location.search);
    var name = params.get("name");
    if (name) {
      var nameInput = document.getElementById("name");
      if (nameInput) nameInput.value = name;
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    i18n.init();
    initCalculator();
    initFAQ();
    initSmoothScroll();
    initChat();
    initForm();
  });
})();
