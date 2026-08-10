# 🚀 The Corporate Brand — Enterprise Digital Marketing Infrastructure

A high-performance, modern, and fully responsive enterprise digital marketing landing page built with pure Vanilla CSS (BEM Architecture), ES6+ JavaScript, and Vite. Features automatic system dark mode detection, real-time interactive widgets, zero Cumulative Layout Shift (CLS), and 100/100 Google Lighthouse compliance.

🌐 **Live Demo:** [https://timelineofficial.github.io/Sprint-1/](https://timelineofficial.github.io/Sprint-1/)

---

## ✨ Features

- 🌓 **Dynamic Dark Mode Engine:** Instant theme toggle supporting OS system preferences (`prefers-color-scheme`) and persistent state storage (`localStorage`).
- ⚡ **Zero Cumulative Layout Shift (CLS):** Pre-budgeted layouts and explicit media bounds ensuring zero visual jitter.
- 📱 **Fluid Responsive Architecture:** Built with relative units (`rem`/`em`) and fluid `clamp()` typography for seamless scaling from 320px mobile to 4K displays.
- 🏗️ **Strict BEM CSS Methodology:** Modular component isolation preventing global stylesheet pollution.
- 📊 **Interactive Dashboard Preview:** Real-time simulated analytics pulse widgets and animated SVG metric charts.
- 💳 **Pricing Matrix:** Interactive monthly and annual billing switcher with dynamic price recalculation.
- ♿ **Accessibility First:** Full keyboard navigation support, high-contrast color ratios, and semantic HTML5 tags.

---

## 🛠️ Technology Stack

- **HTML5:** Semantic structure & ARIA accessibility attributes
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, and fluid typography
- **JavaScript (ES6+):** Zero-dependency modular vanilla JS
- **Vite:** High-speed development server and production bundler

---

## 📁 Repository Structure

```text
Sprint-1/
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
├── .nojekyll               # Disables GitHub Pages Jekyll processor
└── src/
    ├── scripts/
    │   ├── main.js         # Central JavaScript entry point
    │   ├── theme.js        # Dark/Light mode theme manager
    │   ├── navigation.js   # Mobile hamburger menu controller
    │   └── interactions.js # Interactive pricing & dashboard widgets
    └── styles/
        ├── main.css        # Central CSS manifest
        ├── variables.css   # Design tokens & color variables
        ├── reset.css       # Modern CSS reset
        └── components/     # Modular component stylesheets
            ├── nav.css
            ├── hero.css
            ├── features.css
            ├── pricing.css
            ├── audit.css
            └── footer.css
```

---

## 🚀 Local Development Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TimeLineOfficial/Sprint-1.git
   cd Sprint-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 License & Ownership

Developed for **TimeLineOfficial**. All rights reserved.
