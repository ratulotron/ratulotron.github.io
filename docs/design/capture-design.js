#!/usr/bin/env node

/**
 * Design capture tool using Playwright
 * Captures design screenshots at different viewport sizes for documentation
 */

const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

// Configuration
const viewports = [
  { name: "01-desktop-1440x900", width: 1440, height: 900 },
  { name: "02-desktop-1920x1080", width: 1920, height: 1080 },
  { name: "03-laptop-1280x800", width: 1280, height: 800 },
  { name: "04-laptop-1024x768", width: 1024, height: 768 },
  { name: "05-tablet-768x1024", width: 768, height: 1024 },
  { name: "06-mobile-375x667", width: 375, height: 667 },
];

const mode = process.argv[2] || "build"; // Always use built site now

const htmlFile = path.join(__dirname, "..", "..", "_site", "index.html");

const outputDir = path.join(__dirname, "screenshots");

async function takeScreenshots() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n📸 Capturing design screenshots...`);
  console.log(`   Source: ${htmlFile}\n`);

  // Launch browser with web server to properly load CSS and assets
  const browser = await chromium.launch();
  const siteDir = path.join(__dirname, "..", "..", "_site");

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      // Enable web server mode for proper asset loading
      baseURL: `http://localhost`,
    });

    const page = await context.newPage();

    // Serve the _site directory with proper MIME types
    await page.route("**/*", async (route) => {
      const url = route.request().url();
      const urlPath = new URL(url).pathname;
      const filePath = path.join(siteDir, urlPath === "/" ? "index.html" : urlPath);

      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath);
        const ext = path.extname(filePath);
        const contentType =
          {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "application/javascript",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".svg": "image/svg+xml",
          }[ext] || "application/octet-stream";

        await route.fulfill({
          status: 200,
          contentType,
          body: content,
        });
      } else {
        await route.abort();
      }
    });

    // Navigate to the page
    await page.goto("http://localhost/index.html");

    // Wait for fonts and styles to load
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(500); // Extra time for web fonts

    // Take screenshot
    const screenshotPath = path.join(outputDir, `${viewport.name}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: false, // Only capture viewport, not full scrollable page
    });

    console.log(`   ✓ ${viewport.name} (${viewport.width}x${viewport.height})`);

    await context.close();
  }

  await browser.close();

  console.log(`\n✅ Design screenshots saved to: ${outputDir}\n`);
}

// Run the screenshot generation
takeScreenshots().catch((error) => {
  console.error("❌ Error taking screenshots:", error);
  process.exit(1);
});
