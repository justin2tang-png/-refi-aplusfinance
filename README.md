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
│   ├── js/app.js           # Calculator, chat, FAQ logic
│   └── img/                # Images (Becky portrait, etc.)
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
- [ ] Add Becky"s portrait to `assets/img/` (placeholder currently in page)
- [ ] Replace `YOUR_FORM_ID` in `<form action="...">` with your Formspree ID
- [ ] Enable GA4 and replace `G-XXXXXXXXXX` in the footer script
- [ ] Check all links and phone numbers

### 3. Marketing Agent Setup

**GitHub Actions** (free):
- The `.github/workflows/marketing-agent.yml` runs every Monday 9 AM NZT
- Generates: LinkedIn post, blog draft, email newsletter
- Content appears as downloadable artifacts → review and post manually

**n8n Workflow** (import into your n8n):
- `automations/n8n-marketing-agent.json`
- Automates: form → auto-reply email → Google Sheets → follow-up reminder
- Also generates weekly LinkedIn post content
- Requires: SMTP credentials, Google Sheets API, OpenAI API key

## Page Sections

1. **Hero** — Headline + CTA + Becky portrait
2. **Pain Points** — Why you need refinancing
3. **Solution** — Benefits of refinancing
4. **About Becky** — 14 years at ANZ → independent broker
5. **3-Step Process** — How it works
6. **Refinance Calculator** — Instant savings estimate
7. **Testimonials** — Placeholder for client stories
8. **FAQ** — Accordion with common questions
9. **Contact Form** — Name, email, phone, loan amount

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
- [ ] Testimonials (real client stories)
- [ ] Blog content for SEO
- [ ] Advanced chatbot (AI-powered instead of rule-based)

---

*Built for A Plus Finance — contact Becky at becky@aplusfinance.co.nz*
