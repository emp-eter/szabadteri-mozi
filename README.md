# Szabadtéri Mozi — Cinema Center

Single-page Hungarian marketing landing page for the Cinema Center **"Szabadtéri Mozi"** (open-air cinema) service, 2026 summer season. Built with **React + Vite**, recreated pixel-faithfully from the hi-fi design handoff in `design_handoff_szabadteri_mozi/`.

🔗 **Live:** https://emp-eter.github.io/szabadteri-mozi/

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  main.jsx              # React entry
  App.jsx               # composes the 6 sections
  styles.css            # all styles + design tokens (CSS custom properties)
  data.js               # all static content (packages, film catalog, lists…)
  assets/               # event photos (photo1–3)
  components/
    Starfield.jsx       # seeded twinkling starfield (hero seed 7, contact seed 13)
    Hero.jsx            # title, CTAs, "next screening" clapperboard card
    Intro.jsx           # pitch + polaroid photo gallery
    WhatsIncluded.jsx   # technical params + decoration cards
    Packages.jsx        # 4 price cards + Filmfesztivál premium band
    Catalog.jsx         # category tabs + film chips (only interactive state)
    Contact.jsx         # contact card + footer / brand lockup
```

## Notes

- Content is fully static; the only UI state is the active film-catalog category (`Catalog.jsx`).
- Fonts (Luckiest Guy, Pacifico, Poppins) load from Google Fonts via `index.html`.
- The photos in `src/assets/` were cropped from the original PDF offer; swap in higher-resolution originals for production.
- Smooth-scroll anchors: the hero CTAs jump to `#csomagok` and `#kapcsolat`.
