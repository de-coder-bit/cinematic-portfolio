<div align="center">

```
██████╗ ███████╗███████╗██████╗  █████╗ ██╗  ██╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗██║ ██╔╝
██║  ██║█████╗  █████╗  ██████╔╝███████║█████╔╝ 
██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ ██╔══██║██╔═██╗ 
██████╔╝███████╗███████╗██║     ██║  ██║██║  ██╗
╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝

██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗ 
██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗
██║   ██║█████╗  ██████╔╝██╔████╔██║███████║
╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║
 ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║
  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
```

<h3>✦ &nbsp; D E E P A K &nbsp; V E R M A &nbsp; ✦</h3>
<h4><em>Full Stack Developer &nbsp;·&nbsp; React Native &nbsp;·&nbsp; AI Builder</em></h4>

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-0a0f1e?style=for-the-badge&logo=next.js&logoColor=4f8ef7)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP_3-0a0f1e?style=for-the-badge&logo=greensock&logoColor=4f8ef7)](https://gsap.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0a0f1e?style=for-the-badge&logo=three.js&logoColor=4f8ef7)](https://threejs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-0a0f1e?style=for-the-badge&logo=tailwind-css&logoColor=4f8ef7)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-0a0f1e?style=for-the-badge&logo=vercel&logoColor=4f8ef7)](https://cinematic-portfolio-mu.vercel.app/)

<br/>

<a href="https://cinematic-portfolio-mu.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-cinematic--portfolio--mu.vercel.app-4f8ef7?style=for-the-badge&labelColor=0a0f1e" />
</a>

<br/><br/>

<a href="https://github.com/de-coder-bit">
  <img src="https://img.shields.io/badge/GitHub-de--coder--bit-4f8ef7?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0f1e" />
</a>
&nbsp;
<a href="https://www.linkedin.com/in/deepak-verma-b552b5285/">
  <img src="https://img.shields.io/badge/LinkedIn-Deepak_Verma-4f8ef7?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0a0f1e" />
</a>

<br/><br/>

---

</div>

<br/>

## 🎬 &nbsp;What Is This?

> *Most portfolios are just resumes on a webpage. This one is a cinematic experience.*

**Deepak Verma's personal developer portfolio** — built from the ground up with sticky scroll sections, GSAP-driven animations, a Three.js particle field, and a full-screen video intro. Every scroll feels intentional. Every section lands like a film frame.

<br/>

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎥  Full-screen ambient video intro with skip control      ║
║   🎯  Sticky scroll — sections stack like cinematic frames   ║
║   ✨  GSAP-animated name, stats & bio typewriter effect      ║
║   🎠  Horizontal project carousel with GSAP momentum         ║
║   🌌  Three.js particle background in the hero section       ║
║   🎨  Navy blue dark theme — professional & premium          ║
║   📱  Fully responsive — mobile, tablet & desktop            ║
║   ⚡  Optimised — lazy video, next/image, CSS Modules        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

<br/>

---

## 🛠️ &nbsp;Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| 🏗️ **Framework** | Next.js 16.2 — App Router + React Compiler | Fast, SEO-ready foundation |
| 🎬 **Animations** | GSAP 3 + ScrollTrigger | Cinematic scroll & timeline control |
| 🌌 **3D / FX** | Three.js | Hero particle field |
| 🎨 **Styling** | CSS Modules + Tailwind v4 tokens | Scoped, zero-conflict styles |
| 🔡 **Fonts** | Geist · Baloo 2 · Dancing Script | Personality meets readability |
| 🎭 **Icons** | react-icons | Clean, consistent icon set |
| 🚀 **Deploy** | Vercel — edge CDN | Zero-config, auto-deploys |

<br/>

---

## ⚡ &nbsp;Quick Start

```bash
# Clone the repo
git clone https://github.com/de-coder-bit/cinematic-portfolio.git
cd cinematic-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

> 🌐 Open **[http://localhost:3000](http://localhost:3000)** and watch it come alive.

<br/>

```bash
# Production build
npm run build && npm start
```

<br/>

---

## 📁 &nbsp;Project Structure

```
cinematic-portfolio/
│
├── 📂 app/
│   ├── layout.js            ← Root layout, fonts & metadata
│   ├── page.js              ← Assembles all sections
│   └── globals.css          ← 🎨 Design tokens & base styles
│
├── 📂 components/
│   ├── sections/            ← Hero · About · Projects · Experience · Footer
│   └── ui/                  ← Navbar · VideoIntro · ScreenLoader
│
├── 📂 data/
│   ├── profile.json         ← 🔑 All personal info lives here
│   └── content.json         ← Site copy — section labels, CTAs
│
├── 📂 styles/
│   └── sections/            ← Per-section CSS Modules
│
├── 📂 lib/
│   └── siteConfig.js        ← Site URL (for SEO & OG tags)
│
└── 📂 public/
    └── assets/              ← 🖼️ Images & videos
```

<br/>

---

## 🎨 &nbsp;Colour Theme — Navy Blue Dark

The entire palette is controlled by CSS variables in `app/globals.css`:

```css
:root {
  /* ── Background Gradient ────────────────────── */
  --hero-start:   #0a0f1e;   /* ■ deep space navy  */
  --hero-mid:     #0d1b3e;   /* ■ mid navy         */
  --hero-end:     #1a2f6b;   /* ■ cobalt           */

  /* ── Accent (the blue glow) ─────────────────── */
  --accent:       #4f8ef7;   /* ■ electric blue    */
  --accent-hover: #3a7aee;   /* ■ deeper on hover  */

  /* ── Text ───────────────────────────────────── */
  --text-primary: #e8edf8;   /* bright white-blue  */
  --text-muted:   #8a9cc2;   /* muted slate        */
}
```

> 💡 Change `--accent` to any hex and the entire portfolio shifts colour instantly.

<br/>

---

## 🖼️ &nbsp;Assets Guide

Drop your files in `public/assets/` — keep the exact filenames:

```
public/assets/
│
├── hero.png               ← Your portrait photo (Hero section)
├── about.webp             ← Secondary photo (About section)
├── about-me.mp4           ← Full-screen intro video (opener)
├── work-experience.webp   ← Experience section background
├── footer.png             ← Footer image — desktop
├── footer-mobile.webp     ← Footer image — mobile
├── footer-video.mp4       ← Footer looping background video
└── project-*.png          ← One screenshot per project
```

<br/>

---

## 🚀 &nbsp;Deploy

**One-click via Vercel (recommended):**

1. Push your fork to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Done — auto-deploys on every commit ✅

**Or via CLI:**

```bash
npm i -g vercel
vercel
```

> Live at → **[cinematic-portfolio-mu.vercel.app](https://cinematic-portfolio-mu.vercel.app/)**

<br/>

---

## 📜 &nbsp;License

MIT — free to fork, adapt, and make your own.

<br/>

---

<div align="center">


**[🌐 Portfolio](https://cinematic-portfolio-mu.vercel.app/)** &nbsp;·&nbsp;
**[💻 GitHub](https://github.com/de-coder-bit)** &nbsp;·&nbsp;
**[🔗 LinkedIn](https://www.linkedin.com/in/deepak-verma-b552b5285/)**

<br/>

*If this helped you, drop a ⭐ — it means a lot!*

<br/>

`Built with Next.js` &nbsp;`·`&nbsp; `Animated with GSAP` &nbsp;`·`&nbsp; `3D with Three.js` &nbsp;`·`&nbsp; `Deployed on Vercel`

</div>
