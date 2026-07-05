# ANGELRIDER Portfolio

Personal portfolio site for Zohaib Safdar (ANGELRIDER) — a scroll-driven
"journey" experience built with React, Three.js, and Framer Motion.

## Stack

- **React + Vite** — app framework and build tool
- **Tailwind CSS v4** — styling via design tokens (`src/styles/tokens.css`)
- **React Three Fiber + drei + postprocessing** — background particle field,
  road/path visual, bloom glow
- **Framer Motion** — scroll-reveal animations, hero sequence

## Setup

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── layout/        # Nav
│   ├── three/          # SceneCanvas, ParticleField, RoadPath
│   ├── sections/       # Hero, About, Skills, Projects, BeyondCode, Contact
│   └── ui/              # TiltCard, SectionLabel, ScrollProgress, CustomCursor, AmbientTint
├── data/
│   └── content.js       # all site copy — edit here to change text without touching components
├── hooks/
│   └── useScrollProgressRef.js
├── styles/
│   └── tokens.css        # colors, fonts, motion tokens — single source of truth
├── App.jsx
└── main.jsx
```

## Editing content

All text (hero copy, project descriptions, skills, links, poetry) lives in
`src/data/content.js`. Update it there — no need to touch any component file
for text changes.

**Important:** the `githubUrl` field on each project in `content.js` is a
placeholder guess (`github.com/angelrider-dev/maalhub` etc.) — replace these
with your actual repo URLs once they exist.

## Adding a new section later

1. Add its content to `src/data/content.js` (copy the shape of an existing
   section export like `skills` or `beyondCode`).
2. Create a new file in `src/components/sections/`, copying the structure
   of an existing section (e.g. `Skills.jsx`) and swapping in your content.
3. Import it in `App.jsx` and drop it between `<SectionDivider />` tags
   wherever you want it to appear in the journey.
4. Add an entry to `navLinks` and `journeyStops` in `content.js` if it
   should appear in the nav bar / progress indicator.

## Notes

- Custom cursor and cursor-glow are disabled automatically on touch devices.
- Respects `prefers-reduced-motion` — animations shorten to near-zero for
  users who have that OS setting on.
- Three.js and Framer Motion are split into separate build chunks
  (`vite.config.js`) so the initial page load stays lighter.
