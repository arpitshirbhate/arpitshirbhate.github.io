# 🧑‍💻 Premium Developer Portfolio | Arpit Shirbhate

A state-of-the-art, high-fidelity personal CS portfolio and software engineering brand deck. Built using a modern, interactive, and responsive glassmorphic design system featuring tailored emerald highlights, custom typography, micro-interactions, and a built-in Developer CLI terminal console.

---

## 🚀 Interactive Live Features

1. **⌨️ Developer CLI Terminal Overlay**:
   * Press the backtick key (`` ` ``) at any time to open a functional interactive terminal.
   * Recruiters can run commands (`help`, `clear`, `about`, `projects`, `skills`, `timeline`, `contact`, `socials`, `skills --details`) to query site elements directly!
2. **📈 Live GitHub Contributions Calendar**:
   * Displays your actual live contributions graph from `@arpit2006` in a styled emerald-green theme with responsive mobile horizontal scrolling.
3. **📂 Symmetrical Projects & System Architecture Flowcharts**:
   * Clicking **"View System Architecture"** expands highly detailed system signals and ML regression pipelines.
4. **📅 AlignedDot-Node Professional Journey**:
   * Suffix dates set to `'Present'` and year markers aligned symmetrically to vertical timeline threads.
5. **✉️ Initiate Contact & Email Quick-Copy**:
   * Features absoute positioned input icon adornments and a single-click email quick-copy clip showing spring-physics checkmark updates.

---

## 🛠️ Technology Stack

* **Core**: React 18, TypeScript, Vite
* **Styling**: Tailwind CSS v4, PostCSS, HSL-tailored dark modes
* **Animations**: Framer Motion
* **Iconography**: Lucide React, Custom optimized SVG components
* **Data Sources**: Live GitHub Commit Calendar API feed

---

## 📂 Repository Directory Structure

```bash
d:/New folder/
├── dist/                     # Compiled production bundles
├── src/
│   ├── components/
│   │   ├── About.tsx         # About Me section featuring interactive metrics boxes
│   │   ├── BackgroundGlow.tsx# Subtle multi-glow radial visual layers
│   │   ├── CLIConsole.tsx    # Interactive terminal emulator console (triggered via ` key)
│   │   ├── CodingMetrics.tsx # Live green-themed GitHub contributions calendar
│   │   ├── Contact.tsx       # Redesigned Contact station with input icons & quick-copy email
│   │   ├── Footer.tsx        # Structured footer linking active profile accounts
│   │   ├── Hero.tsx          # Sleek Landing header showcasing CS VIT-AP specialization
│   │   ├── Navbar.tsx        # Floating glass header panel with menu controls
│   │   ├── Projects.tsx      # Symmetrical 3-card projects grid featuring canvas flowcharts
│   │   ├── Skills.tsx        # symmetrical 2x2 tech stack competency microchip grid
│   │   └── Timeline.tsx      # Symmetrically aligned vertical professional timeline
│   ├── App.tsx               # Main layout orchestrator imports and section structures
│   ├── main.tsx              # Application loader entry point
│   └── index.css             # Tailwind theme directives, fonts, and global variables
├── package.json              # Script directives and node modules dependencies
├── postcss.config.js         # PostCSS compiler configurations
├── tsconfig.json             # TypeScript compile and strictness assertions
└── vite.config.ts            # Vite compile and asset builder parameters
```

---

## 💻 Local Spawning & Operation

Follow these instructions to spawn, inspect, and run the developer website in your local environment:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### 2. Node Modules Installation
Install the project dependencies cleanly:
```bash
npm install
```

### 3. Start Development Server
Spawns the local development hot-reload server at `http://localhost:5173/`:
```bash
npm run dev
```

### 4. Compile Production Bundles
Compiles and bundles the TypeScript and Vite assets into optimized production-ready HTML, CSS, and JS chunks under the `dist/` directory:
```bash
npm run build
```

### 5. Serving the Production Preview
Serve the compiled production bundle locally on your machine at `http://localhost:4173/` or next available port:
```bash
npm run preview
```

---

## 🎨 Visual Quality Verification
All components compile with **zero lint warnings** or typescript errors. Visual assets and subagent web previews are saved inside the artifacts directory:
* **walkthrough.md**: Contains active WebP video walkthroughs of every page section.
* **final_portfolio_verification_1779814080678.png**: Full-resolution landing preview.
