#!/usr/bin/env node

/**
 * Screenshot generator using Playwright
 * Captures screenshots at different viewport sizes for testing responsive design
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Configuration
const viewports = [
  { name: '01-desktop-1440x900', width: 1440, height: 900 },
  { name: '02-desktop-1920x1080', width: 1920, height: 1080 },
  { name: '03-laptop-1280x800', width: 1280, height: 800 },
  { name: '04-laptop-1024x768', width: 1024, height: 768 },
  { name: '05-tablet-768x1024', width: 768, height: 1024 },
  { name: '06-mobile-375x667', width: 375, height: 667 },
];

const mode = process.argv[2] || 'build'; // Always use built site now

const htmlFile = path.join(__dirname, '..', '_site', 'index.html');

const outputDir = path.join(__dirname, '..', 'test-screenshots');

async function takeScreenshots() {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n📸 Taking screenshots in ${mode} mode...`);
  console.log(`   Source: ${htmlFile}\n`);

  // Launch browser
  const browser = await chromium.launch();

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });

    const page = await context.newPage();

    // Navigate to the HTML file
    await page.goto(`file://${htmlFile}`);

    // Wait for fonts to load
    await page.waitForLoadState('networkidle');

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

  console.log(`\n✅ Screenshots saved to: ${outputDir}\n`);
}

// Run the screenshot generation
takeScreenshots().catch((error) => {
  console.error('❌ Error taking screenshots:', error);
  process.exit(1);
});
