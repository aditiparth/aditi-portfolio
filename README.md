# Aditi Parthasarathi — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — fonts (Fraunces, Inter, IBM Plex Mono) + metadata
- `app/page.tsx` — page composition
- `app/globals.css` — design tokens (color, font vars) + marquee keyframes
- `components/Hero.tsx` — name as typographic anchor, cursor-reactive background, live IST clock
- `components/Marquee.tsx` — scrolling skills ticker
- `components/Work.tsx` — editorial expandable technical project list
- `components/ProductWork.tsx` — product/research dossiers with links + research-source tags
- `components/About.tsx` — bio + interactive Data Analytics / AI-ML / Product capability switcher, education, certifications
- `components/Contact.tsx` — contact links + footer
