# Ratul Minhaz - Personal Portfolio

Personal portfolio and blog built with Eleventy (11ty) and deployed on GitHub Pages.

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Styling**: Modern CSS (CSS Nesting, Custom Properties)
- **JavaScript**: Vanilla JS (progressive enhancement)
- **Deployment**: GitHub Actions → GitHub Pages

## Design

Converted from Figma design to pixel-perfect HTML/CSS implementation with:

- Solarized color palette
- Custom typography (Bungee Shade, Bungee, EB Garamond, Quicksand)
- Fixed header and social menu with scrollable content
- Responsive design (desktop-first)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── _data/                  # Global data files
│   │   ├── site.json          # Site metadata
│   │   ├── social.json        # Social links
│   │   └── timeline.json      # Timeline entries
│   ├── _includes/
│   │   ├── layouts/           # Page layouts
│   │   │   ├── base.njk
│   │   │   └── home.njk
│   │   └── partials/          # Reusable components
│   │       ├── header.njk
│   │       └── social-menu.njk
│   ├── assets/
│   │   └── css/
│   │       └── style.css      # Main stylesheet
│   ├── content/
│   │   └── blog/              # Blog posts (future)
│   └── index.njk              # Home page
├── _site/                     # Built static site (gitignored)
├── scripts/                   # Automation scripts
│   ├── screenshot.js         # Playwright screenshot generator
│   └── README.md
├── .eleventy.js               # Eleventy configuration
└── package.json
```

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Clean build output
npm run clean

# Capture design screenshots at different viewports
npm run design:capture
```

The dev server will be available at `http://localhost:8080` with live reload.

### Design Documentation

Capture design screenshots at different viewport sizes:

```bash
npm run design:capture
```

See `docs/design/README.md` for details.

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `master` branch.

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically build and deploy on push

## Content Management

### Updating Content

- **Site info**: Edit `src/_data/site.json`
- **Social links**: Edit `src/_data/social.json`
- **Timeline**: Edit `src/_data/timeline.json`
- **Philosophy/About**: Edit front matter in `src/index.njk`

### Adding Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
layout: layouts/post.njk
title: "My Blog Post"
date: 2025-01-01
tags: ["tag1", "tag2"]
---

Content here...
```

## Design System

All design tokens are defined as CSS custom properties in `src/assets/css/style.css`:

- **Colors**: Solarized palette variables
- **Typography**: Font family and size variables
- **Spacing**: rem-based spacing scale
- **Layout**: Responsive breakpoints and margins

## Browser Support

Modern browsers with CSS nesting support:

- Chrome 112+
- Firefox 117+
- Safari 16.5+
- Edge 112+

## License

MIT
