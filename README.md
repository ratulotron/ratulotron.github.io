# Ratul Minhaz - Personal Portfolio

> [!NOTE]
> It's a work in progress and not ready for production. Feel free to fork and improve, PRs are welcome!

Being a backend heavy dev, I never got around properly fixing all the CSS gimmicks even though I had the original concept since 2018. I finally decided to fix the issues and make it a production ready 11ty template. Thanks to [Claude Code](https://claude.ai/code) and [Antigravity](https://antigravity.ai)!

## Original Design

The original Figma design can be found [here](./docs/design/).

My plan was to fix the title, subtitle, and social menu while the right-side content scrolled. The CSS challenge was achieving the effect of content vanishing under a top bar, like paper sliding into an envelope.

**Homepage**
![Design](./docs/design/01_homepage.png)
**Homepage - Scroll End**
![Design](./docs/design/03_homepage_scroll_end.png)

- **Static Site Generator**: [11ty](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: Modern CSS
- **JavaScript**: Vanilla JS
- **Deployment**: GitHub Pages

## Features

- **Configurable Design**:
  - Manage colors, fonts, and configurations via JSON files in `src/_data/` without touching CSS.
  - Comes with a few pre-configured themes and fonts.
- **Lightweight**: Minimal dependencies, fast build times.
- **Responsive**: Mobile-first design with a responsive layout.

## Resume Generation

The project supports generating a resume using JSONResume + Resumed.

By default, it uses a local theme aligned with the site's design:

```sh
# Render HTML resume
pnpm run resume:html

# Export PDF resume (optional)
pnpm run resume:pdf
```

You can also use external themes:

```sh
# Use the even theme
pnpm exec resumed render resume.json -t jsonresume-theme-even -o src/resume.html
```

The generated `src/resume.html` is included in the Eleventy build and published.

## How to use

### Content Management

Modify these JSON files in `src/_data/`:

- **`home.json`**: Edit the "Intro", "Timeline", and "About" sections.
- **`site.json`**: Name, description, active theme/font.
- **`social.json`**: Social media links.

### Theming & Fonts

This project comes with curated **Themes** (Solarized, Nord, etc.) and **Font Schemes** (Playful, Technical, etc.).

1.  **Check Available Options**:
    - Open `src/_data/themes.json` for color themes.
    - Open `src/_data/fonts.json` for font schemes.
2.  **Apply Changes**:
    - Edit `src/_data/site.json` and update the `theme` or `fontScheme` property to match the key you want.

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm run build
```

## Deploying to Vercel

## Scripts

- `pnpm start` – Start Eleventy dev server with live reload.
- `pnpm run build` – Build site into `_site/`.
- `pnpm run clean` – Remove `_site/`.
- `pnpm run format` – Format sources with Prettier (Nunjucks plugin enabled).
- `pnpm run og:generate` – Generate OG image and favicon from theme colors.
- `pnpm run design:capture` – Capture screenshots from built `_site` (ensure Chromium installed: `npx playwright install chromium`).
- `pnpm run resume:html` – Render resume.html using JSONResume theme.
- `pnpm run resume:pdf` – Export resume.pdf (if configured).
- `pnpm run lint:css` – Lint CSS files.
- `pnpm run lint:css:fix` – Fix CSS linting issues.

## Deploying to Vercel

- Build command: `pnpm run build`
- Output directory: `_site`
- Install command: `pnpm install`
- OG image generation is manual: run `pnpm run og:generate` locally when you change `src/_data/site.json` (name/tagline) or `src/_data/themes.json`, then commit the updated asset.

## License

MIT
