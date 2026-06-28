# Levity · Aerial Yoga Studio

A modern, fully responsive marketing website for **Levity**, a boutique aerial
yoga studio. Built as a single-page React application with a soft, airy visual
identity — linen backgrounds, deep-plum ink, silk-toned mauves and warm clay
accents, paired with the Fraunces display serif and Plus Jakarta Sans.

> _Find your float._

## ✨ Highlights

- **12 pages / routes** — Home, Classes (+ per-class detail), Schedule,
  Teachers, Pricing, Studio/About, Gallery, Journal (+ per-article pages),
  FAQ, Contact, and a custom 404.
- **Self-contained artwork** — every visual is SVG + CSS gradients (a custom
  "silk" art system). No external image hosts, so nothing breaks and everything
  loads instantly.
- **Real content** — eight distinct class types, six instructor bios, a full
  weekly timetable, pricing tiers, an intro offer, testimonials, an FAQ, and
  five long-form journal articles — all cross-linked.
- **Accessible & responsive** — semantic landmarks, skip-link, keyboard-friendly
  nav and accordions, `prefers-reduced-motion` support, and a mobile-first
  layout that scales from phones to wide desktops.
- **Polished motion** — scroll-reveal animations (via `IntersectionObserver`),
  floating silk plates, and a gentle marquee, all of which respect reduced-motion.

## 🛠 Tech stack

| Concern        | Choice                            |
| -------------- | --------------------------------- |
| Framework      | React 19                          |
| Language       | TypeScript                        |
| Build tool     | Vite 8                            |
| Styling        | Tailwind CSS v4 (`@theme` tokens) |
| Routing        | React Router 7                    |
| Icons          | lucide-react                      |

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## 📁 Project structure

```
src/
├─ main.tsx             # app entry (BrowserRouter)
├─ App.tsx              # route table
├─ index.css            # Tailwind v4 + design-system tokens & utilities
├─ data/                # all site content (typed)
│  ├─ site.ts  classes.ts  instructors.ts  schedule.ts
│  ├─ pricing.ts  testimonials.ts  faqs.ts  about.ts
│  └─ posts.ts  gallery.ts
├─ hooks/useInView.ts   # scroll-reveal observer
├─ lib/format.ts        # date formatting
├─ components/          # Navbar, Footer, cards, art system, …
│  └─ art/SilkArt.tsx   # SVG "silk" illustration system
└─ pages/               # one component per route
```

## 🎨 Design tokens

All brand colours, fonts, radii, shadows, and animations are defined once in
`src/index.css` under Tailwind's `@theme` block, so the entire palette can be
re-skinned from a single place (e.g. `--color-plum`, `--color-clay`,
`--font-display`).

## ✏️ Editing content

The site is content-driven: everything a real studio would change lives in
`src/data/`. Add a class to `classes.ts`, a teacher to `instructors.ts`, or a
session to `schedule.ts` and it flows through to every page automatically.

---

_This is a demonstration project; the studio, address, phone number, and
testimonials are fictional._
