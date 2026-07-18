# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio for Enoch Mendoza (MERN stack developer), built with React 19 + Vite + Tailwind CSS v4. No backend, no router, no state library — all sections render on one page and the contact "form" opens a pre-filled `mailto:` link (see `src/components/Contact.jsx`).

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint (see .oxlintrc.json)
```

There is no test suite configured.

## Architecture

- `src/main.jsx` imports `./index.css` and mounts `App` in `StrictMode`. `src/App.jsx` is the entire page: it renders the decorative background blobs plus one section component per landmark (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Services`, `Contact`, `Footer`), in that fixed order, all inside a single `<main>`.
- Navigation is anchor-based (`#home`, `#about`, etc. in `Navbar.jsx`) — there is no client-side router. Section components must keep their `id` matching the anchor used in `Navbar`'s `links` array.
- **Styling — Tailwind v4**: wired via the `@tailwindcss/vite` plugin (`vite.config.js`); the single entry `src/index.css` holds all theme config (there is no `tailwind.config.js` — v4 is CSS-first). Components use utility classes inline. `src/index.css` defines:
  - **Design tokens** as raw CSS vars (`--c-purple`, `--c-ink`, `--c-card`, `--sh-soft`, `--gradient-brand`, `--page-bg`, …) on `:root`, re-declared under `[data-theme='dark']` so they swap with the theme. An `@theme inline` block maps them to Tailwind color/shadow utilities (`bg-card`, `text-ink`, `text-ink-soft`, `border-line`, `text-purple`, `shadow-soft`, `rounded-card`/`rounded-card-lg`, `font-display`/`font-body`). Because the mapping is `inline` over switchable vars, utilities like `bg-card` react to dark mode automatically — you rarely need `dark:` for colors.
  - **Reusable component classes** in `@layer components`: `btn` + `btn-primary`/`btn-ghost`/`btn-sm`, `card` (frosted glass), the section shell (`section`, `section-head`, `eyebrow`, `section-title`, `section-lead`), and `skill-icon` (per-skill tint via a `--skill-color` var + `color-mix`). Prefer these over re-writing the same utility strings. `bg-brand` (the brand gradient) is a plain helper class.
  - **Breakpoints**: components are written **desktop-first**, with `max-[960px]:`, `max-[720px]:`, `max-[420px]:` overrides mirroring the original media queries (960px is where both the nav collapses to a hamburger and the content grids stack). **Always use the arbitrary `max-[Npx]:` form for these three, never a named custom breakpoint** (e.g. one declared via `--breakpoint-*` in `@theme`) — Tailwind v4 does not interleave named-breakpoint variants with arbitrary bracket-value variants by pixel size in the compiled CSS; it emits them in separate groups, so on a narrow viewport where multiple `max-width` conditions are simultaneously true, the "wrong" one can win the cascade. (This caused a real bug: mixing a `max-nav` named breakpoint with `max-[720px]`/`max-[420px]` made mobile phones incorrectly render the 960px-tier grid columns instead of the narrower overrides.) Keeping all three as bracket values guarantees Tailwind sorts them 960 → 720 → 420 in the output, so the narrowest matching override always wins.
  - **Animations** `float`/`bob` keyframes exposed as `animate-float`/`animate-bob`.
  - The page root has `overflow-x: clip` on `html`/`body` (in `@layer base`) to prevent horizontal scroll from the off-canvas menu; keep it.
- **Dark mode**: a `data-theme="dark"|"light"` attribute on `<html>`, toggled by the `useTheme` hook (`src/hooks/useTheme.js`), which persists to `localStorage` and defaults to `prefers-color-scheme`. Tailwind's `dark:` variant is wired to this attribute via `@custom-variant dark (&:where([data-theme='dark'], …))` in `index.css` (NOT the OS-preference default). `index.html` has an inline pre-paint script that sets `data-theme` before first render to avoid a theme flash — keep it in sync with `useTheme`.
- **Scroll-reveal animations**: any element with the `.reveal` class is faded/slid into view once via a single shared `IntersectionObserver` set up by `useScrollReveal` (`src/hooks/useScrollReveal.js`), called once in `App.jsx`. `.reveal`/`.is-visible` are defined in `index.css` (not utilities). It respects `prefers-reduced-motion`. Per-element stagger delay is the inline CSS var `style={{ '--reveal-delay': '120ms' }}`.
- **Icons**: brand/tech-stack icons in `Skills.jsx` are individual SVG files in `src/assets/` — leave these as-is. `Contact.jsx` reuses the same `src/assets/github.svg` for its GitHub link so both GitHub marks match. Every other icon on the site (mail in `Contact.jsx`, theme toggle and hamburger in `Navbar.jsx`, the logo sparkle and footer heart, project/service badges) comes from `react-icons/lu` (Lucide) for one consistent line-icon style. Prefer `lu` icons for any new non-brand icon; only reach for another react-icons set if Lucide is missing the glyph.
- **Mobile nav** (`Navbar.jsx`): an `open` boolean drives the off-canvas panel. At `max-nav` the links `<ul>` becomes a fixed right-side panel; when closed it is pushed off-screen **and** set `invisible`/`pointer-events-none` (the `invisible` matters — the sticky navbar's `backdrop-filter` makes it a containing block for the fixed panel on scroll, so a transform alone does not reliably hide it).

## Deployment

Deploys to Vercel from the repo root (no monorepo subfolder) — Root Directory is `./`, framework preset Vite, build command `npm run build`, output directory `dist`.
