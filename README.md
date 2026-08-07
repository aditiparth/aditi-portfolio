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

## Add your photo

Drop a photo into `public/photo.jpg` (portrait orientation works best — the
frame in the hero is roughly 4:5). Until then, the frame shows an "AP"
monogram placeholder automatically — nothing breaks if the file is missing.

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

## Notes

- All copy is sourced directly from your CVs — nothing invented.
- Design tokens (colors, fonts) live in `app/globals.css` under `@theme inline` — change values there to retheme.
- Fonts load from Google Fonts at build time, so an internet connection is required for `npm install`/`npm run build`.

## New reactive elements

- `components/CursorDot.tsx` — custom cursor ring (mix-blend-difference), enlarges over links/buttons. Disabled on touch devices and when `prefers-reduced-motion` is set.
- `components/MagneticLink.tsx` — nav links pull slightly toward the cursor within range, used in `Nav.tsx`.
- Photo moved from Hero to `components/About.tsx` (`AboutPhoto`) — same grayscale→color hover reveal and scroll parallax as before.

## Dark theme / hero background

- `app/globals.css` — tokens flipped to a full dark theme (near-black paper, cream ink, gold accent). Change values there to retheme.
- `public/hero-bg.png` — the hero background image; swap this file to change it.
- `components/HeroBackground.tsx` — renders the image with a subtle cursor-parallax drift.
- `components/Hero.tsx` — oversized kinetic name type + a rotated, auto-scrolling marquee for the three pillars (Data Analytics / AI-ML / Product).
- `components/DataAnalytics.tsx` — new pillar section, sourced from datascienceportfol.io, same expandable-row pattern as the AI/ML section.
- Sections are now: Data Analytics (01) → AI/ML (02, formerly "Work") → Product (03) → About (04) → Contact (05).
