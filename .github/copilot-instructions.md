# AI Agent Instructions

## Project Overview

- **Architecture:** 11ty (Eleventy) static site using Nunjucks templates with data-driven theming. Source lives in [src/](src); build output goes to [\_site/](_site).
- **Data model:** JSON in [src/\_data/](src/_data) drives content and design:
  - [site.json](src/_data/site.json): site metadata, active `theme` and `fontScheme`.
  - [home.json](src/_data/home.json): homepage intro, timeline, and about copy.
  - [social.json](src/_data/social.json): social links for the fixed menu.
  - [themes.json](src/_data/themes.json) and [fonts.json](src/_data/fonts.json): curated design presets.
- **Layouts & Partials:** Base layout sets CSS design tokens and metadata ([src/\_includes/layouts/base.njk](src/_includes/layouts/base.njk)); homepage layout renders structured sections ([src/\_includes/layouts/home.njk](src/_includes/layouts/home.njk)); header and social menu partials in [src/\_includes/partials/](src/_includes/partials).

## Dev Workflows

- **Start dev server:** `pnpm start` (Eleventy with live reload).
- **Build production:** `pnpm run build` → writes to `_site/`.
- **Clean build output:** `pnpm run clean`.
- **Format code/templates:** `pnpm run format` (Prettier + `prettier-plugin-jinja-template`).
- **Design screenshots:** `pnpm run design:capture` after a build; ensure Playwright Chromium is installed: `npx playwright install chromium`. Script reads built `_site` ([scripts/capture-screenshots.js](scripts/capture-screenshots.js)).
- **OG image & favicon:** `pnpm run og:generate` generates [src/assets/images/og-image.jpg](src/assets/images/og-image.jpg) and favicon from theme colors ([scripts/generate-og-image.js](scripts/generate-og-image.js)).
- **Runtime:** Node via `mise` ([mise.toml](mise.toml)); repository targets Node 24.

## Conventions & Patterns

- **Data-driven design:** Base layout injects theme and fonts into CSS variables so `style.css` reads from `--theme-*` and `--fontscheme-*`; see [src/\_includes/layouts/base.njk](src/_includes/layouts/base.njk) and [src/assets/css/style.css](src/assets/css/style.css).
- **Dynamic font imports:** [src/assets/css/fonts.njk](src/assets/css/fonts.njk) emits `fonts.css` via `permalink`, importing URLs from `fonts.json`. Do not edit built CSS in `_site/`.
- **Nunjucks front matter:** Pages set front matter for layout and output (e.g., [src/index.njk](src/index.njk), [src/sitemap.njk](src/sitemap.njk), [src/robots.njk](src/robots.njk), [src/CNAME.njk](src/CNAME.njk)). Use `permalink` for non-HTML assets.
- **Homepage content:** [src/\_includes/layouts/home.njk](src/_includes/layouts/home.njk) consumes `home.json`. `safe` filter is used where HTML in JSON is expected.
- **SEO/meta:** Base layout includes OG/Twitter meta linking to generated OG image; Google Tag Manager and gtag are loaded; canonical and JSON-LD are set in [src/\_includes/layouts/base.njk](src/_includes/layouts/base.njk).

## Practical Examples

- **Change theme or fonts:** Edit `theme` or `fontScheme` in [site.json](src/_data/site.json). Options are keys in [themes.json](src/_data/themes.json) and [fonts.json](src/_data/fonts.json).
- **Add a page:** Create `src/about.njk` with front matter:
  ```njk
  ---
  layout: layouts/base.njk
  title: About
  ---
  <main>...</main>
  ```
  It will be included in collections and the sitemap ([src/sitemap.njk](src/sitemap.njk)).
- **Update social links:** Modify items in [social.json](src/_data/social.json) using Font Awesome icon classes.
- **Refresh OG assets:** After changing theme or site name/tagline, run `pnpm run og:generate`.

## Integration Notes

- **GitHub Pages:** CNAME and robots/sitemap are generated from `site.url` ([src/CNAME.njk](src/CNAME.njk), [src/robots.njk](src/robots.njk), [src/sitemap.njk](src/sitemap.njk)).
- **Playwright script:** The capture tool currently reads built files from `_site`. If you encounter ESM/CommonJS issues (package.json uses `type: module`), convert the script to ESM or run with an approach compatible with Node's module type before editing.
- **Vercel Deploy:** Eleventy + ESM works on Vercel. See [vercel.json](vercel.json):
  - `buildCommand`: `pnpm run build`
  - `outputDirectory`: `_site`
  - `installCommand`: `pnpm install`
    OG image generation is manual (`pnpm run og:generate`) when `site.json`/`themes.json` change. Design capture is local-only.

## Guardrails

- Prefer editing sources in `src/` and `_data/`; avoid committing changes to `_site/`.
- Keep Nunjucks syntax intact; Prettier is configured with the Jinja/Nunjucks plugin.
- When adjusting CSS, maintain design tokens contract (`--theme-*`, `--fontscheme-*`) to preserve data-driven theming.
