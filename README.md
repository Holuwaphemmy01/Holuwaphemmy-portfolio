# 🚀 Oluwafemi Jacob — Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://holuwaphemmy-portfolio.netlify.app/)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Fast_Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Neo--Brutalist-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A high-performance, responsive software engineering portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Featuring a sharp **neo-brutalist & terminal-inspired design system**, dynamic **Dark/Light Mode**, and an **interactive CLI component**.

🌐 **Live Website**: [https://holuwaphemmy-portfolio.netlify.app/](https://holuwaphemmy-portfolio.netlify.app/)

---

## ✨ Features

- **💻 Interactive CLI Terminal**: Run real commands (`whoami`, `projects`, `project 1-3`, `skills`, `contact`, `resume`, `help`) or click quick action buttons for keyboard-driven navigation.
- **🎨 Neo-Brutalist Aesthetic**: Bold monospace typography (JetBrains Mono), high-contrast borders, offset accent box-shadows (`#22d3ee` cyan & `#84cc16` lime), and smooth staggered entrance animations.
- **🌓 Dark & Light Themes**: Persistent theme switching synced with system preferences and stored in `localStorage`.
- **🛠️ 100% Strict TypeScript**: Fully typed components, routing context, and data models (`strict: true`) with zero `tsc` warnings or errors.
- **📁 Detailed Case Studies**: Comprehensive breakdowns of featured full-stack, backend, and smart contract projects with metrics, roles, outcomes, and architecture diagrams.
- **📱 Fully Responsive & Accessible**: Fluid clamp-based scaling, semantic HTML5 elements, and accessibility attributes (`aria-label`, `aria-expanded`).

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, React Router 7
- **Language**: TypeScript (Strict Mode)
- **Bundler & Tooling**: Vite, PostCSS, Autoprefixer
- **Styling**: Tailwind CSS v3 (Custom Neo-Brutalist Tokens)
- **Icons**: Lucide React

---

## 📂 Project Structure

```text
my-portfolio/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx            # Sticky navigation & mobile drawer
│   │   ├── Footer.tsx            # Site footer & quick links
│   │   ├── ThemeToggle.tsx       # ThemeContext & dark mode toggle
│   │   ├── InteractiveTerminal.tsx # CLI widget & command execution
│   │   ├── TerminalWindow.tsx    # Styled terminal frame wrapper
│   │   ├── SkillMatrix.tsx       # Categorized technical skills grid
│   │   └── PageTitle.tsx         # Standardized page header
│   ├── data/             # Typed static data files
│   │   ├── profile.ts            # Bio, contact links, skill groups
│   │   ├── projects.ts           # Case studies & metrics
│   │   ├── experience.ts         # Career timeline & achievements
│   │   └── navigation.ts         # Navigation items & icons
│   ├── pages/            # Route-level view pages
│   │   ├── HomePage.tsx          # Hero section & CLI terminal widget
│   │   ├── AboutPage.tsx         # Bio, principles, toolkit, collaboration
│   │   ├── ProjectsPage.tsx      # Project showcase grid
│   │   ├── ProjectDetailPage.tsx # In-depth project case study
│   │   ├── ExperiencePage.tsx    # Career timeline & achievements
│   │   ├── ContactPage.tsx       # Direct contact links & mail form
│   │   ├── ResumePage.tsx        # CV preview & download action
│   │   └── NotFoundPage.tsx      # 404 page error handler
│   ├── App.tsx           # Route orchestration & layout wrapper
│   ├── main.tsx          # Application entry point & ThemeProvider
│   ├── styles.css        # Tailwind directives & global animations
│   └── vite-env.d.ts     # Vite & CSS module definitions
├── tailwind.config.js    # Content globbing, custom colors, animations
├── tsconfig.json         # TypeScript compiler configuration
└── vite.config.js        # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Holuwaphemmy01/Holuwaphemmy-portfolio.git
   cd Holuwaphemmy-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:5173/` in your browser.

---

## 🧪 Verification & Build Commands

- **Type Check**:
  ```bash
  npx tsc --noEmit
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 📬 Contact & Connect

- **Engineer**: Oluwafemi Jacob
- **GitHub**: [@Holuwaphemmy01](https://github.com/Holuwaphemmy01)
- **Email**: [jacoboluwafemi72@gmail.com](mailto:jacoboluwafemi72@gmail.com)
- **LinkedIn**: [Oluwafemi Jacob](https://linkedin.com/in/oluwafemi-jacob)

---

*License: MIT — Feel free to use this codebase as inspiration for your own portfolio.*
