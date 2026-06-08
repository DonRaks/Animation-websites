# 🍸 Velvet Pour — Premium Animated Cocktail Website

An immersive, highly animated, and modern single-page web experience for **Velvet Pour**, a premium cocktail bar. Built using **React**, **Vite**, **Tailwind CSS v4**, and driven by **GSAP (GreenSock Animation Platform)** with advanced scroll-driven animations and custom video scrubs.

---

## ✨ Key Features

- **🎥 Scroll-Driven Video Playback**: An interactive video scrub timeline in the Hero section that advances/rewinds in perfect sync with your mouse scroll.
- **🍃 Parallax Foliage Elements**: Floating botanical leaf accents that shift at variable speeds on scroll, adding depth and a organic premium feel.
- **✨ GSAP Text Splitting (`SplitText`)**: Exquisite typography animations that dynamically reveal letters, words, and sentences on section scroll.
- **🎨 Glassmorphic Navbar**: A responsive header that automatically transitions from transparent to a frosted, blurred glass background upon scrolling past the viewport.
- **🍹 Interactive Menu Carousel**: A fully interactive carousel that allows customers to cycle between the signature drinks, complete with smooth entry/exit animations for text and imagery.
- **📱 Fully Responsive Design**: Seamless layout adjustments designed to provide a cohesive visual journey on everything from mobile screens to ultra-wide desktop monitors.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) & `@gsap/react`
  - *Plugins used*: `ScrollTrigger` and `SplitText`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Media Queries**: `react-responsive`

---

## 🚀 Getting Started

Follow the instructions below to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended) along with `npm`.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/animation-websites.git
   cd animation-websites
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running Locally

To launch the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

To build the static assets for production deployment:

```bash
npm run build
```

The output will be generated inside the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── constants/
│   └── index.js            # Menu items, contact info, and navigation links config
├── public/
│   ├── fonts/              # Custom brand fonts
│   ├── images/             # Images, icons, and logo assets
│   └── videos/             # Video assets used for scroll scrubbing
├── src/
│   ├── components/
│   │   ├── About.jsx       # About us grid and stats section
│   │   ├── Art.jsx         # Craftsmanship feature with image masking
│   │   ├── Cocktails.jsx   # List of popular cocktails and mocktails
│   │   ├── Contact.jsx     # Footer containing opening hours and social links
│   │   ├── Hero.jsx        # Landing section with scroll-scrubbed video
│   │   ├── Menu.jsx        # Signature cocktail details and carousel
│   │   └── Navbar.jsx      # Sticky blur header
│   ├── App.jsx             # Main container bringing all sections together
│   ├── index.css           # Global styles, Tailwind imports, and custom utilities
│   └── main.jsx            # React application entry point
├── eslint.config.js        # Linter settings
├── vite.config.js          # Vite configuration with Tailwind integration
└── package.json            # Scripts and dependency declarations
```

---

## 🎨 Theme & Typography

Custom colors and typography are defined in `src/index.css` via the Tailwind CSS `@theme` directive:

*   **Primary Font**: `Mona Sans` (modern, legible sans-serif)
*   **Serif Font**: `DM Serif Text` (elegant, classic serif)
*   **Accent Font**: `Modern Negra` (bold branding/headers)
*   **Key Colors**:
    *   `--color-yellow` (`#e7d393`): Premium warm accent color
    *   `--color-white-100` (`#efefef`): Subtle off-white for soft reading contrast
    *   `black` (`#000000`): Sleek dark mode background
