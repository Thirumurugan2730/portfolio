# Thirumurugan S – Personal Developer Portfolio

[![Portfolio Milestone](https://img.shields.io/badge/Milestone-1%20Completed-indigo.svg)](#milestone-1-features)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind%20CSS%20%7C%20Vite-blue.svg)](#technologies-used)

Welcome to the source repository for **Thirumurugan S**'s personal developer portfolio website.

---

## 🚀 Milestone 1: Homepage Hero Section

This milestone implements the foundation and first screen of the personal developer portfolio:

- **Primary Identity & Role:**
  - Name: **Thirumurugan S**
  - Designation: **Final Year B.E. Computer Science and Engineering Student**
- **Core Call-to-Actions:**
  - **More About Me:** Smoothly navigates to the `#about` placeholder section.
  - **Download CV:** Triggers CV download with explicit placeholder state notification and seamless configuration for official CV document replacement.
- **Minimal About Me Section:**
  - A clean, accessible target anchor (`#about`) staged for upcoming Milestone 2 expansion.
- **Design & Experience:**
  - Dark-mode developer aesthetics with ambient glowing meshes and fine grid accents.
  - Fully responsive across mobile, tablet, and widescreen desktop displays.
  - Smooth micro-interactions and transitions.

---

## 🛠️ Technologies Used

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── Thirumurugan_S_CV_Placeholder.pdf   # Placeholder CV document
├── src/
│   ├── components/
│   │   ├── AboutPlaceholder.tsx            # Milestone 1 scroll target anchor
│   │   ├── DownloadToast.tsx               # Feedback toast for CV download
│   │   ├── Footer.tsx                      # Minimal portfolio footer
│   │   ├── Header.tsx                      # Top glassmorphic navigation bar
│   │   └── Hero.tsx                        # Homepage hero section with primary elements
│   ├── config/
│   │   └── portfolio.ts                    # Portfolio data & CV configuration
│   ├── App.tsx                             # Main application component
│   ├── index.css                           # Global styles & Tailwind configuration
│   └── main.tsx                            # React root mount
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 📄 CV Integration Guide

When the official CV document is ready:
1. Place the official PDF into the `public/` directory (e.g. `public/Thirumurugan_S_CV.pdf`).
2. Update the filename and path in `src/config/portfolio.ts` or set `isPlaceholder: false`.
