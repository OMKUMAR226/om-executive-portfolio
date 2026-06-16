# Om Kumar Garg — Portfolio Website

**Built with:** Next.js 14 (App Router) + Tailwind CSS  
**Deploy target:** Vercel (Free Tier)  
**Design:** Dark Tech / Glassmorphism / Premium

---

## 🚀 Quick Start

```bash
cd portfolio-om-kumar-garg
npm install
cp .env.local.example .env.local
# Fill in your API keys (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Copy `.env.local.example` to `.env.local` and fill in these 4 free services:

### 1. Gemini AI (Chatbot) — Free

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with Google → Get API Key → Create API Key
3. Copy the key into `.env.local`:

```
GEMINI_API_KEY=AIza...your_key_here
```

**Free tier:** 15 requests/minute, 1M tokens/month — plenty for a portfolio.

---

### 2. Google Apps Script (Form → Google Sheet) — Free

1. Create a new Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.phone,
    data.organization,
    data.inquiryType,
    data.message
  ]);
  return ContentService.createTextOutput('OK');
}
```

4. Deploy → **New deployment** → Type: **Web app** → Access: **Anyone** → Deploy
5. Copy the Web App URL into `.env.local`:

```
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/your_id/exec
```

---

### 3. EmailJS (Email Notifications) — Free (200 emails/month)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add an email service (Gmail works)
3. Create an email template with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{organization}}`, `{{inquiry_type}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 4. CallMeBot WhatsApp API (WhatsApp Notifications) — Free

1. Add the number **+34 644 65 49 49** to your WhatsApp contacts
2. Send this exact message: `I allow callmebot to send me messages`
3. You'll receive an API key reply
4. Add to `.env.local`:

```
CALLMEBOT_API_KEY=your_callmebot_api_key
```

---

## 📁 Project Structure

```
portfolio-om-kumar-garg/
├── app/
│   ├── layout.jsx              # Root layout + SEO
│   ├── page.jsx                # Home
│   ├── globals.css             # Design system + animations
│   ├── about/page.jsx
│   ├── services/page.jsx
│   ├── case-studies/page.jsx
│   ├── research/page.jsx
│   ├── contact/page.jsx
│   └── api/
│       ├── chat/route.js       # Gemini chatbot API
│       └── contact/route.js    # Contact form handler
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── StatsBar.jsx
│   │   ├── WhatIBring.jsx
│   │   └── QuickCaseStudies.jsx
│   ├── shared/
│   │   ├── ParticleBackground.jsx
│   │   ├── GlowCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── TechBadge.jsx
│   └── chatbot/
│       └── Chatbot.jsx
├── src/lib/
│   ├── constants.js            # All static data
│   └── gemini.js               # Gemini API + system prompt
└── public/
```

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.local` in Vercel dashboard
4. Deploy — done!

```bash
# Or via Vercel CLI
npx vercel --prod
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#050508` |
| Secondary bg | `#0a0a12` |
| Accent cyan | `#00D4FF` |
| Accent violet | `#7C3AED` |
| CTA orange | `#FF6B35` |
| Success green | `#00FF87` |
| Text primary | `#F1F5F9` |
| Text secondary | `#94A3B8` |

**Fonts:** Space Grotesk (headings) · Inter (body) · JetBrains Mono (code/stats)

---

## 📧 Contact

**Om Kumar Garg**  
Email: salesverse.connect@gmail.com  
WhatsApp: +91 83052 61866  
LinkedIn: [linkedin.com/in/kumarom266](https://linkedin.com/in/kumarom266)
