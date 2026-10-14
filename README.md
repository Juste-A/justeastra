# justeastra.com

Source code for my personal portfolio, [justeastra.com](https://justeastra.com).

The site was originally built in Framer. I rebuilt it from scratch in Nuxt 3 to own the code, keep the design pixel-close to the original and host it as a fast static site on Netlify.

## Tech stack

- **Nuxt 3** with full static generation (every route is prerendered to HTML)
- **Vue 3** Composition API with `<script setup>`
- **Tailwind CSS** with design tokens as CSS custom properties
- **GSAP + ScrollTrigger** for the hero intro and scroll reveal animations
- **Netlify** for hosting and Netlify Forms for the contact form
- Self-hosted fonts via Fontsource (DM Sans variable, Big Shoulders)

## Features

- Light and dark theme driven by CSS variables, switched with a single class on `<html>`
- Data-driven content: all copy, projects, experience and education live in one file and pages are generated from it
- Dynamic project case study routes (`/projects/[slug]`) with automatic related projects
- Accessible markup: skip link, semantic headings, keyboard-friendly menu, `aria` labels on icon buttons
- Respects `prefers-reduced-motion`
- Contact form with honeypot spam protection, submitted with `fetch` and no backend
- Personal contact details loaded from environment variables rather than committed to the repo

## Project structure

```
components/   Reusable UI (header, hero, project card, contact form, marquee…)
pages/        Routes, including /projects/[slug]
data/         site.js holds all site content
assets/css/   Tailwind layers and theme tokens
plugins/      GSAP scroll reveal setup
public/       Images, favicons and a static form definition for Netlify
```

## Running locally

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev            # http://localhost:3000
```

`npm run generate` builds the static site into `.output/public`.
