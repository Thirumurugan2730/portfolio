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
  - **More About Me:** Navigates directly to the dedicated `/about` page.
  - **Download CV:** Triggers CV download with explicit placeholder state notification and seamless configuration for official CV document replacement.
- **Dedicated About Me Page:**
  - Accessible on `/about` with a back button returning to the Homepage.
- **Design & Experience:**
  - Dark-mode developer aesthetics with ambient glowing meshes and fine grid accents.
  - Fully responsive across mobile, tablet, and widescreen desktop displays.
  - Clean layout focusing strictly on required primary elements.

---

## 🛠️ Technologies Used

- **Frontend Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router](https://reactrouter.com/) (`react-router-dom`)
- **Bundler & Tooling:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg                         # TS monogram favicon
│   └── Thirumurugan_S_CV_Placeholder.pdf   # Placeholder CV document
├── src/
│   ├── components/
│   │   ├── DownloadToast.tsx               # Feedback toast for CV download
│   │   └── Hero.tsx                        # Homepage hero section with primary elements
│   ├── config/
│   │   └── portfolio.ts                    # Portfolio data & CV configuration
│   ├── pages/
│   │   └── AboutPage.tsx                   # Dedicated About Me page
│   ├── App.tsx                             # Main router setup
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
