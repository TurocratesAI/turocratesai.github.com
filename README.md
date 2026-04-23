# turocrates.ai — marketing site

Vite + React + Tailwind. Static build deployed to GitHub Pages at `turocrates.ai`.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ for a final check
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to the `gh-pages` branch. In the GitHub repo settings, set Pages to serve
from `gh-pages` with custom domain `turocrates.ai`.

## Content you'll want to drop in before launch

- `public/team/swapnil.jpg`, `maulik.jpg`, `devansh.jpg` — founder portraits. Cards
  fall back to initials if these are missing, so the site still renders.
- `public/updates/ecdp2026.png` — already populated from the uploaded poster.
- `public/logos/` — optional. Partner/backer tiles currently render as typographic
  tiles; drop SVG/PNG files in here if you want logo images instead.
