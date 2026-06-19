# Szabadtéri Mozi — Cinema Center

Single-page Hungarian marketing landing page for the Cinema Center **"Szabadtéri Mozi"** (open-air cinema) service, 2026 summer season. Built with **React + Vite** and **Framer Motion**, recreated pixel-faithfully from the hi-fi design handoff in `design_handoff_szabadteri_mozi/`.

🔗 **Live:** https://emp-eter.github.io/szabadteri-mozi/

## Getting started

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # production bundle → dist/
npm run preview      # preview the production build
npm run optimize:img # re-encode src/assets PNGs → WebP (after adding new images)
npm run deploy       # build + publish dist/ to the gh-pages branch
```

## Structure

```
scripts/
  optimize-images.mjs   # sharp-based PNG → WebP converter (npm run optimize:img)
src/
  main.jsx              # React entry (LazyMotion + reduced-motion config)
  App.jsx               # composes the sections + scroll-progress bar
  motion.js             # shared Framer Motion variants (fadeUp, stagger, pop…)
  styles.css            # all styles + design tokens + keyframes/animations
  data.js               # all static content (packages, catalog, venues…) + asset imports
  assets/               # cat_*.webp (catalog posters), venue*.webp (references)
  components/
    Starfield.jsx       # seeded twinkling starfield + shooting stars
    Hero.jsx            # title, CTAs, chalkboard clapperboard (next screening)
    Intro.jsx           # pitch
    References.jsx      # "Hol jártunk már" — 6 venue polaroids
    WhatsIncluded.jsx   # technical params + decoration cards
    Packages.jsx        # 4 price cards + Filmfesztivál premium band
    Catalog.jsx         # category tabs + poster gallery + film chips (only interactive state)
    Contact.jsx         # contact card + footer / brand lockup
```

## Notes

- Content is fully static; the only UI state is the active film-catalog category (`Catalog.jsx`).
- Fonts (Luckiest Guy, Pacifico, Permanent Marker, Poppins) load from Google Fonts via `index.html`.
- **Images:** originals are kept as PNG in `src/assets`; `npm run optimize:img` produces the `.webp` files that `data.js` imports (≈ −89%). Drop a new PNG into `src/assets`, run the script, and update the import.
- **Animations** use Framer Motion (`LazyMotion` + `domAnimation` for a lighter bundle) and fully respect `prefers-reduced-motion` (transforms disabled, content still revealed).
- `featured.location` in `data.js` is a placeholder ("Helyszín, pontos cím") — replace with the real venue.
- Smooth-scroll anchors: the hero CTAs jump to `#csomagok` and `#kapcsolat`.
