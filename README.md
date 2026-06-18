# A Plus Finance — Refinance Landing Page

**URL:** `refi.aplusfinance.co.nz`  
**Hosting:** GitHub Pages  
**Tech:** Vanilla HTML/CSS/JS (no framework)  

## Project Structure

```
refi.aplusfinance.co.nz/
├── index.html              # Main landing page
├── assets/
│   ├── css/styles.css      # All styles
│   ├── js/app.js           # i18n, calculator, FAQ, form logic
│   └── img/                # Becky portrait and page imagery
├── sitemap.xml
├── robots.txt
├── CNAME                   # Custom domain config
├── .github/workflows/
│   └── marketing-agent.yml # Weekly content generation
└── automations/
    └── n8n-marketing-agent.json  # n8n workflow template
```

## Deployment

### 1. GitHub Pages Setup
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: GitHub Actions or deploy from main branch
3. Add `refi.aplusfinance.co.nz` CNAME record pointing to `YOURUSER.github.io` in your DNS

### 2. Before Going Live
- [ ] Confirm GA4 measurement ID is the production one
- [ ] Submit a live Formspree test and confirm inbox delivery
- [ ] Decide whether to publish a direct phone number on-page or keep email-first contact
- [ ] Replace template IDs inside `automations/n8n-marketing-agent.json`

### 3. Marketing Agent Setup

**GitHub Actions** (free):
- The `.github/workflows/marketing-agent.yml` runs every Monday 9 AM NZT
- Generates: LinkedIn post, blog draft, email newsletter
- Content appears as downloadable artifacts → review and post manually

**n8n Workflow** (import into your n8n):
- `automations/n8n-marketing-agent.json`
- Automates: form → auto-reply email → Google Sheets → follow-up reminder
- Also generates weekly LinkedIn post content
- Still contains template values and a placeholder follow-up step
- Requires: SMTP credentials, Google Sheets API, OpenAI API key

## Page Sections

1. **Hero** — English-first refinance positioning + CTA
2. **Trust Strip** — Experience, lender breadth, response speed
3. **Pain Points** — Refinance triggers for mainstream NZ homeowners
4. **Solution** — Rate, cashback, and structure opportunities
5. **About Becky** — Major-bank experience + independent advice
6. **3-Step Process** — Low-pressure refinance review flow
7. **Refinance Calculator** — Monthly repayment estimate
8. **Trust Signals** — Why homeowners start with this page
9. **FAQ** — Accordion with common refinance questions
10. **Contact Form** — Formspree lead capture

## Marketing Channels (4-Week Plan)

| Channel | Action | Cost |
|---------|--------|------|
| LinkedIn | Post 2-3x/week (AI-generated, manual post) | Free |
| Facebook NZ Groups | Engage naturally, share link when relevant | Free |
| Google Business Profile | Add site link + post | Free |
| Client Email | Announcement blast | Free |
| Google Ads | $5-7/day on `refinance NZ` keywords | ~$150-200 |
| SEO Blog | 1 article on refinance tips | Free |

## To Replace Later
- [ ] Add real client testimonials or verified review quotes
- [ ] Blog content for SEO
- [ ] Multi-page market matrix for other mortgage scenarios

---

*Built for A Plus Finance — contact Becky at becky@aplusfinance.co.nz*
