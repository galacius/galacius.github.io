# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check (`tsc -b`) then build for production
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build locally

There is no test suite configured yet.

## Architecture

React 19 + TypeScript + Vite marketing/landing page for Galacius, styled with Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config`/PostCSS setup needed). Server-rendered and prerendered to static HTML (SSG), not a plain client-only SPA.

- Routing is file-based via TanStack Router: routes live under `src/routes/`, and `src/routeTree.gen.ts` is generated — don't hand-edit it. Heavier route pages (e.g. `features/core`, `features/plugins`) are split into a route-only file (`core.tsx`) plus a `.lazy.tsx` file (`core.lazy.tsx`, using `createLazyFileRoute`) so their component code is code-split out of the main bundle; both prerendering and hydration explicitly `await router.load()` first, so this stays safe under SSG.
- Entry points: `src/main.tsx` (client) creates the router via `createAppRouter()`, awaits `router.load()`, then `hydrateRoot`s if the DOM already has prerendered content (from SSG) or otherwise `createRoot`s fresh. `src/entry-server.tsx` does the equivalent for SSR (`renderToString`), driven by `plugins/ssg/index.ts` — a custom Vite plugin that runs a nested SSR build and prerenders every route to a static `index.html` at build time.
- Data fetching uses TanStack Query (`@tanstack/react-query`); query hooks live under `src/hooks/data-access/`.
- Two custom Vite plugins under `plugins/`: `plugins/aeo/` generates `llms.txt` (must stay spec-compliant per llmstxt.org — H1 required, H2 sections must be markdown link lists) and `robots.txt` (only emit standard directives — `User-agent`/`Allow`/`Disallow`/`Sitemap`/`Crawl-delay`); `plugins/seo/` handles SEO metadata generation.
- Pages live under `src/pages/`, organized by route/feature; components are written as typed arrow function expressions, not function declarations: `const ComponentName: FC<PropsType> = (props) => { ... }` (import `type { FC }` from `"react"`; omit the generic when there are no props). Applies to every component, including internal/non-exported helper components within a file.
- All UI is built on `@galacius/design-system` (consumed as a **published npm package**, not a workspace link — bumping the design-system source has no effect here until it's published and this repo's lockfile is updated) — see **[DESIGN.md](./DESIGN.md)** for the required setup, import conventions, and styling rules before adding components.
- Responsive images: `src/components/media/ImageWithSkeleton.tsx` accepts an optional `sources` prop (`{ srcSet, type, sizes }[]`) to render a `<picture>` with AVIF/WebP `<source>`s ahead of the fallback `<img>`. Variants are generated ahead of time (not at build time) by `scripts/generate-image-variants.mjs` (uses `sharp`, a devDependency used only by this script — not wired into the Vite build) and committed under `src/assets/**`; re-run it manually after replacing a master image.
- Vite build has `build.sourcemap: true` enabled.
- TypeScript project uses solution-style config: `tsconfig.json` references `tsconfig.app.json` (app source, `src/`) and `tsconfig.node.json` (Vite config). Target is ES2023 with strict unused-locals/params checks.
- oxlint is configured (`.oxlintrc.json`) with `react`, `typescript`, and `oxc` plugins for linting; Prettier (with `prettier-plugin-tailwindcss`) handles formatting.
- Husky + lint-staged run oxlint/Prettier on staged files pre-commit (config in `.lintstagedrc.cjs`).
