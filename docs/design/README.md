# Design Documentation

Design assets and tools for the portfolio project.

## Design Capture Tool

Captures design screenshots at different viewport sizes using Playwright for documentation and design validation.

### Usage

```bash
# Build site and capture design screenshots
npm run design:capture
```

### Viewport Sizes

- **Desktop 1440x900** - Standard desktop
- **Desktop 1920x1080** - Large desktop
- **Laptop 1280x800** - MacBook-style
- **Laptop 1024x768** - Smaller laptop
- **Tablet 768x1024** - iPad portrait
- **Mobile 375x667** - iPhone SE

### Output

Screenshots are saved to `docs/design/screenshots/` (gitignored) with numbered prefixes:

```
docs/design/screenshots/
├── 01-desktop-1440x900.png
├── 02-desktop-1920x1080.png
├── 03-laptop-1280x800.png
├── 04-laptop-1024x768.png
├── 05-tablet-768x1024.png
└── 06-mobile-375x667.png
```

### Requirements

- Playwright (installed via npm)
- Chromium browser: `npx playwright install chromium`

### How It Works

1. Builds the 11ty site to `_site/`
2. Uses Playwright's route interception to serve built files with proper MIME types
3. Launches headless Chromium for each viewport configuration
4. Waits for fonts and resources to load (including self-hosted fonts)
5. Captures viewport screenshot
6. Saves screenshots with descriptive names
