# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio for Enoch Mendoza (MERN stack developer), built with React 19 + Vite. No backend, no router, no state library — all sections render on one page and the contact "form" opens a pre-filled `mailto:` link (see `src/components/Contact.jsx`).

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint (see .oxlintrc.json)
```

There is no test suite configured.

## Architecture

- `src/main.jsx` mounts `App` in `StrictMode`. `src/App.jsx` is the entire page: it renders background decoration (`.page__bg` blobs) plus one section component per landmark (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Services`, `Contact`, `Footer`), in that fixed order, all inside a single `<main>`.
- Navigation is anchor-based (`#home`, `#about`, etc. in `Navbar.jsx`) — there is no client-side router. Section components must keep their `id` matching the anchor used in `Navbar`'s `links` array.
- **Styling**: one global stylesheet, `src/App.css` (~1200 lines), imported once in `main.jsx`. No CSS modules, no styled-components. Classes follow BEM-ish naming (`block__element`, `block--modifier`, e.g. `navbar__links`, `navbar--scrolled`). Theme tokens (colors, gradients, shadows, radii) are CSS custom properties on `:root`. When adding UI, extend `App.css` with the existing token variables rather than hardcoding colors.
- **Dark mode**: driven by a `data-theme="dark"|"light"` attribute on `<html>`, toggled by the `useTheme` hook (`src/hooks/useTheme.js`), which persists the choice to `localStorage` and defaults to `prefers-color-scheme`. Dark-mode overrides live as `:root[data-theme='dark'] .foo { ... }` rules grouped near the bottom of `App.css` — add new dark-mode overrides there, not inline next to the light-mode rule. `index.html` has an inline pre-hydration script that sets `data-theme` before first paint to avoid a flash of the wrong theme; keep this in sync with `useTheme`'s logic if that logic changes.
- **Scroll-reveal animations**: any element with the `.reveal` class is faded/slid into view once via a single shared `IntersectionObserver` set up by `useScrollReveal` (`src/hooks/useScrollReveal.js`), called once in `App.jsx`. It respects `prefers-reduced-motion` and reveals immediately if `IntersectionObserver` is unsupported. Per-element stagger delay is set via the inline CSS var `style={{ '--reveal-delay': '120ms' }}`.
- **Icons**: brand/tech-stack icons are individual SVG files in `src/assets/`. UI icons (e.g. GitHub in `Contact.jsx`) are referenced from a single sprite at `public/icons.svg` via `<use href="/icons.svg#icon-id" />`.
- Mobile nav (`Navbar.jsx`) is a simple `open` boolean toggling an `.is-open` class on `.navbar__links`; the theme toggle and burger button live together in `.navbar__controls`.

## Deployment

Deploys to Vercel from the repo root (no monorepo subfolder) — Root Directory is `./`, framework preset Vite, build command `npm run build`, output directory `dist`.
