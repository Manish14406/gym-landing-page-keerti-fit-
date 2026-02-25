<div align="center">

# 🏋️ CoreFit — Gym & Fitness Website

A modern, fully responsive gym and fitness website built with **React**, **Vite**, and **TailwindCSS**. CoreFit features a clean UI, smooth navigation, a class timetable, pricing plans, a contact form with an embedded map, and much more — perfect for any gym or fitness center looking for a professional web presence.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://core-fit.netlify.app/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](./LICENSE)

<img align="center" alt="CoreFit Screenshot" src="assets/mainSS.png" />

</div>

---

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Customization](#customization)
- [Demo](#demo)
- [Screenshot](#screenshot)
- [License](#license)

---

## Features

- **Fully Responsive** — Optimized for mobile, tablet, and desktop screen sizes with custom breakpoints.
- **Multi-Page Routing** — Client-side routing with React Router v6 (Home, About, Schedule, Classes, Pricing, Contact).
- **Sticky Navigation** — Navbar becomes sticky on scroll with a mobile hamburger menu.
- **Hero Section** — Eye-catching animated hero with call-to-action buttons.
- **Class Timetable / Schedule** — Built-in weekly schedule layout with filterable days.
- **Pricing Plans** — Tiered pricing cards to showcase membership options.
- **Contact Form & Map** — Contact page with a form and an embedded Google Map.
- **Scroll to Top** — Automatic scroll-to-top on page navigation.
- **Custom Animations** — Floating animations defined in Tailwind config.
- **Social Links** — Footer with social media links and working hours.
- **Code Quality** — ESLint + Prettier configured for consistent code style.

---

## Pages

| Page         | Route        | Description                                           |
| ------------ | ------------ | ----------------------------------------------------- |
| **Home**     | `/`          | Hero, Who We Are, Featured Classes, CTA, Pricing      |
| **About**    | `/about`     | Hero banner, Who We Are section, History timeline      |
| **Schedule** | `/schedule`  | Hero banner, Weekly class timetable                    |
| **Classes**  | `/classes`   | Hero banner, Class cards with pagination               |
| **Pricing**  | `/pricing`   | Hero banner, Pricing plan cards                        |
| **Contact**  | `/contact`   | Hero banner, Contact form, Info section, Embedded map  |

---

## Tech Stack

| Technology         | Purpose                                |
| ------------------ | -------------------------------------- |
| **Vite**           | Lightning-fast build tool & dev server |
| **React 18**       | Component-based UI library             |
| **JavaScript**     | Programming language                   |
| **TailwindCSS 3**  | Utility-first CSS framework            |
| **React Router v6**| Client-side routing                    |
| **React Icons**    | Icon library for React                 |
| **ESLint**         | JavaScript linting                     |
| **Prettier**       | Code formatting (with Tailwind plugin) |

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/gym-website-using-react.git
   cd gym-website-using-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---

## Available Scripts

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Start the Vite development server                |
| `npm run build`     | Build the project for production                 |
| `npm run preview`   | Preview the production build locally             |
| `npm run lint`      | Run ESLint to check for code issues              |

---

## Folder Structure

```
gym-website-using-react/
├── assets/                      # Static assets (screenshots, etc.)
│   └── mainSS.png               # Main screenshot for README
├── public/                      # Public static files
├── src/
│   ├── main.jsx                 # App entry point (BrowserRouter wraps App)
│   ├── App.jsx                  # Root component with Routes & layout
│   ├── index.css                # Global styles & Tailwind directives
│   │
│   ├── Pages/                   # Page-level components (one per route)
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # About page
│   │   ├── Schedule.jsx         # Schedule / timetable page
│   │   ├── Classes.jsx          # Classes listing page
│   │   ├── Pricing.jsx          # Pricing plans page
│   │   └── Contact.jsx          # Contact form & map page
│   │
│   ├── components/              # Reusable UI components
│   │   ├── ScrollToTop.jsx      # Scrolls to top on route change
│   │   │
│   │   ├── navigation/          # Navbar & mobile nav
│   │   │   ├── Navbar.jsx       # Main navigation bar (sticky on scroll)
│   │   │   ├── NavLinks.jsx     # Navigation link items
│   │   │   ├── NavButtons.jsx   # CTA & hamburger buttons
│   │   │   ├── MobileNav.jsx    # Mobile slide-out menu
│   │   │   └── CloseButton.jsx  # Close button for mobile nav
│   │   │
│   │   ├── logo/
│   │   │   └── Logo.jsx         # Site logo component
│   │   │
│   │   ├── hero/                # Home page hero section
│   │   │   ├── Hero.jsx         # Hero banner with CTA
│   │   │   └── Share.jsx        # Social share links in hero
│   │   │
│   │   ├── hero-pages/
│   │   │   └── HeroPages.jsx    # Reusable hero banner for inner pages
│   │   │
│   │   ├── headings/            # Reusable heading components
│   │   │   ├── PrimaryHeading.jsx
│   │   │   ├── SecondaryHeading.jsx
│   │   │   └── TertiaryHeading.jsx
│   │   │
│   │   ├── buttons/             # Reusable button components
│   │   │   ├── PrimaryButton.jsx
│   │   │   ├── SecondaryButton.jsx
│   │   │   └── TertiaryButton.jsx
│   │   │
│   │   ├── who-we-are/          # "Who We Are" section (home page)
│   │   │   ├── WhoWeAre.jsx
│   │   │   ├── Title.jsx
│   │   │   ├── Facilities.jsx
│   │   │   ├── FeatureCards.jsx
│   │   │   └── RunningBoy.jsx
│   │   │
│   │   ├── featured-class/      # Featured classes section
│   │   │   ├── FeaturedClass.jsx
│   │   │   └── Classes.jsx
│   │   │
│   │   ├── call-to-action/      # CTA banner section
│   │   │   └── CallToAction.jsx
│   │   │
│   │   ├── call-to-action2/     # Secondary CTA banner section
│   │   │   └── CallToAction2.jsx
│   │   │
│   │   ├── choose-us/           # "Why Choose Us" section
│   │   │   ├── ChooseUs.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Image.jsx
│   │   │   └── Title.jsx
│   │   │
│   │   ├── pricing/             # Pricing cards section
│   │   │   ├── PricingCards.jsx
│   │   │   ├── Cards.jsx
│   │   │   └── Title.jsx
│   │   │
│   │   ├── about-page/          # About page specific components
│   │   │   ├── who-we-are/
│   │   │   │   ├── WhoWeAre.jsx
│   │   │   │   ├── Title.jsx
│   │   │   │   ├── List.jsx
│   │   │   │   └── Image.jsx
│   │   │   └── history/
│   │   │       └── History.jsx
│   │   │
│   │   ├── schedule-page/       # Schedule page components
│   │   │   ├── ScheduleLayout.jsx
│   │   │   ├── Days.jsx
│   │   │   ├── List.jsx
│   │   │   └── Data.js          # Schedule data (classes, times, days)
│   │   │
│   │   ├── classes-page/        # Classes page components
│   │   │   └── ClassCards.jsx
│   │   │
│   │   ├── contact-page/        # Contact page components
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Form.jsx
│   │   │   ├── Info.jsx
│   │   │   └── Map.jsx
│   │   │
│   │   ├── pagination/
│   │   │   └── Pagination.jsx   # Pagination for class cards
│   │   │
│   │   └── footer/              # Footer section
│   │       ├── Footer.jsx
│   │       ├── Title.jsx
│   │       ├── SocialLinks.jsx
│   │       ├── Classes.jsx
│   │       ├── Hours.jsx
│   │       └── Copyright.jsx
│   │
│   └── images/                  # Image assets organized by section
│       ├── hero/
│       ├── about-page/
│       ├── call-to-action/
│       ├── call-to-action2/
│       ├── choose-us/
│       ├── featured-class/
│       ├── heading/
│       ├── hero-pages/
│       ├── logo/
│       ├── pricing/
│       └── who-we-are/
│
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── prettier.config.cjs          # Prettier configuration
└── LICENSE                      # MIT License
```

---

## Components Overview

The project follows a **modular component architecture**. Each UI section is broken into its own folder with small, focused components:

- **Layout Components** — `Navbar`, `Footer`, `ScrollToTop` provide the app shell that wraps every page.
- **Page Components** — Located in `src/Pages/`, each page composes multiple section components.
- **Section Components** — Self-contained UI sections (e.g., `Hero`, `WhoWeAre`, `ChooseUs`, `PricingCards`) that combine sub-components.
- **Shared / Reusable Components** — `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `PrimaryHeading`, `SecondaryHeading`, `TertiaryHeading`, `HeroPages`, and `Pagination` are reused across multiple pages.
- **Images** — All image assets are organized in `src/images/` in sub-folders matching their corresponding component sections.

---

## Customization

### Colors

The color palette is defined in `tailwind.config.js`. The primary accent color is **red (`#ff0336`)** — update it there to rebrand the entire site.

### Fonts

The default font family is **Montserrat** (configured in `tailwind.config.js` under `fontFamily.sans`).

### Breakpoints

Custom responsive breakpoints are defined in `tailwind.config.js`:

| Breakpoint | Width    |
| ---------- | -------- |
| `xsm`     | 375px    |
| `sm`      | 450px    |
| `md`      | 540px    |
| `lg`      | 620px    |
| `xl`      | 800px    |
| `2xl`     | 1000px   |
| `3xl`     | 1200px   |

---

## Demo

**Live Site:** [https://core-fit.netlify.app/](https://core-fit.netlify.app/)

---

## Screenshot

<img align="center" alt="CoreFit Screenshot" src="assets/mainSS.png" />

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.
