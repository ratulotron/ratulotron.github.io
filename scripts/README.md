# Scripts

Automation scripts for the portfolio project.

## Screenshot Generator

Captures screenshots at different viewport sizes using Playwright for visual testing and design validation.

### Usage

```bash
# Build and screenshot the 11ty site
npm run screenshot
```

### Viewports Tested

- **Desktop 1440x900** - Standard desktop
- **Desktop 1920x1080** - Large desktop
- **Laptop 1280x800** - MacBook-style
- **Laptop 1024x768** - Smaller laptop
- **Tablet 768x1024** - iPad portrait
- **Mobile 375x667** - iPhone SE

### Output

Screenshots are saved to `test-screenshots/` with numbered prefixes for easy ordering:

```
test-screenshots/
├── 01-desktop-1440x900.png
├── 02-desktop-1920x1080.png
├── 03-laptop-1280x800.png
├── 04-laptop-1024x768.png
├── 05-tablet-768x1024.png
└── 06-mobile-375x667.png
```

### Requirements

- Playwright (automatically installed via npm)
- Chromium browser (install with `npx playwright install chromium`)

### How It Works

1. Launches headless Chromium browser
2. Creates browser context with specified viewport size
3. Navigates to the HTML file
4. Waits for fonts and resources to load
5. Captures viewport screenshot (not full page)
6. Repeats for each viewport configuration
