#!/usr/bin/env node

/**
 * Design screenshot capture using Playwright (ESM)
 * Captures screenshots at defined viewport sizes from the built _site output.
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Optional label to prefix screenshot filenames (e.g., theme-font)
const labelArg = process.argv.find((arg) => arg.startsWith('--label='));
const label = labelArg ? labelArg.split('=')[1] : '';
const prefix = label ? `${label}-` : '';

// Configuration
const viewports = [
    { name: '01-desktop-1440x900', width: 1440, height: 900 },
    { name: '02-desktop-1920x1080', width: 1920, height: 1080 },
    { name: '03-laptop-1280x800', width: 1280, height: 800 },
    { name: '04-laptop-1024x768', width: 1024, height: 768 },
    { name: '05-tablet-768x1024', width: 768, height: 1024 },
    { name: '06-mobile-375x667', width: 375, height: 667 },
];

const htmlFile = path.join(__dirname, '..', '_site', 'index.html');
const outputDir = path.join(__dirname, '..', 'docs', 'design', 'screenshots');

async function takeScreenshots() {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n📸 Capturing design screenshots...`);
    console.log(`   Source: ${htmlFile}\n`);

    // Launch browser
    const browser = await chromium.launch();
    const siteDir = path.join(__dirname, '..', '_site');

    for (const viewport of viewports) {
        const context = await browser.newContext({
            viewport: { width: viewport.width, height: viewport.height },
            baseURL: 'http://localhost',
        });

        const page = await context.newPage();

        // Serve the _site directory with proper MIME types
        await page.route('**/*', async (route) => {
            const url = route.request().url();
            const urlPath = new URL(url).pathname;
            const filePath = path.join(siteDir, urlPath === '/' ? 'index.html' : urlPath);

            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath);
                const ext = path.extname(filePath);
                const contentType =
                    {
                        '.html': 'text/html',
                        '.css': 'text/css',
                        '.js': 'application/javascript',
                        '.png': 'image/png',
                        '.jpg': 'image/jpeg',
                        '.jpeg': 'image/jpeg',
                        '.svg': 'image/svg+xml',
                        '.webmanifest': 'application/manifest+json',
                    }[ext] || 'application/octet-stream';

                await route.fulfill({ status: 200, contentType, body: content });
            } else {
                await route.abort();
            }
        });

        // Navigate and wait for assets
        await page.goto('http://localhost/index.html');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(500);

        // Capture screenshot
        const screenshotPath = path.join(outputDir, `${prefix}${viewport.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: false });
        console.log(`   ✓ ${viewport.name} (${viewport.width}x${viewport.height})`);

        await context.close();
    }

    await browser.close();
    console.log(`\n✅ Design screenshots saved to: ${outputDir}\n`);
}

// Run
takeScreenshots().catch((error) => {
    console.error('❌ Error taking screenshots:', error);
    process.exit(1);
});
