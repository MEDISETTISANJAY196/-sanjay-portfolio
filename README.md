# Sanjay Medisetti — Portfolio

> **AI Engineer | AIML Engineer | Generative AI Developer**

A production-ready, dark-themed portfolio built with React + Vite + Tailwind CSS + Framer Motion. Features a live neural-network particle canvas, animated typing roles, scroll-triggered sections, a validated contact form, and full SEO meta tags.

---

## ✨ Features

- 🧠 **Neural particle canvas** — animated AI-themed background in the hero
- ⌨️ **Typing animation** — cycles through roles with realistic typing + delete effect
- 📱 **Fully responsive** — mobile-first, works on all screen sizes
- 🎬 **Framer Motion animations** — scroll-triggered fade-ups, staggered cards, hover effects
- 🌐 **SEO-ready** — meta title, description, Open Graph, Twitter cards, JSON-LD structured data
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- 🚀 **Vercel-ready** — `vercel.json` included with SPA rewrites and cache headers

---

## 🗂 Project Structure

```
sanjay-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with active section detection
│   │   ├── NeuralCanvas.jsx    # Particle network canvas background
│   │   ├── Hero.jsx            # Landing hero with typing effect + stats
│   │   ├── About.jsx           # Bio, career objective, strength cards
│   │   ├── Skills.jsx          # Categorised skill cards with hover glow
│   │   ├── Projects.jsx        # Project cards with expandable features
│   │   ├── Certifications.jsx  # Certification cards grid
│   │   ├── Education.jsx       # Education timeline card
│   │   ├── Resume.jsx          # Resume preview + download / view buttons
│   │   ├── Contact.jsx         # Contact form with validation + social links
│   │   ├── Footer.jsx          # Footer with nav + social links
│   │   ├── SectionWrapper.jsx  # Reusable scroll-animated section wrapper
│   │   └── ScrollToTop.jsx     # Floating scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js    # ✏️  All content — edit this file to update info
│   ├── hooks/
│   │   ├── useTypingEffect.js  # Typing animation hook
│   │   └── useActiveSection.js # IntersectionObserver active-nav hook
│   ├── styles/
│   │   └── index.css           # Global styles + Tailwind directives
│   ├── App.jsx                 # Root component — assembles all sections
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML shell with SEO tags + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/sanjaymedisetti/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server on port 3000 |
| `npm run build` | Build optimised production bundle → `dist/` |
| `npm run preview` | Preview the production build locally |

---

## ✏️ Customisation

All portfolio content lives in **one file**:

```
src/data/portfolioData.js
```

Edit it to update:
- Personal info, email, GitHub, LinkedIn
- Skills and skill categories
- Projects (title, description, tech stack, features)
- Certifications
- Education details

---

## 📤 Deployment on Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Vite** | Build command: `npm run build` | Output: `dist`
5. Click **Deploy** ✅

---

## 🌐 Adding a Custom Domain

1. In Vercel dashboard → Project → **Settings → Domains**
2. Add your domain (e.g. `sanjaymedisetti.com`)
3. Update DNS records as instructed by Vercel

---

## 📬 Contact Form Setup

The contact form currently simulates a send. To wire it to a real backend:

**Recommended: [EmailJS](https://www.emailjs.com/)** (free tier, no backend needed)

```bash
npm install @emailjs/browser
```

Then in `Contact.jsx`, replace the simulated `await` with:

```js
import emailjs from '@emailjs/browser'

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { from_name: form.name, from_email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
)
```

---

## 🎨 Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| Navy 900 | `#0A0F1E` | Page background |
| Indigo 600 | `#4F46E5` | Primary accent |
| Cyan 500 | `#06B6D4` | Secondary accent |
| Slate 400 | `#94A3B8` | Body text |

---

## 📄 License

MIT — free to use and customise for your own portfolio.

---

Built with ❤️ by **Sanjay Medisetti**
