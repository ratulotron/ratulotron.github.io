#!/usr/bin/env node

/**
 * Generate Open Graph image from site data
 * Uses @vercel/og to create a 1200x630px image with site name and tagline
 */

import { ImageResponse } from '@vercel/og';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createElement as h } from 'react';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read site data
const siteData = JSON.parse(
    readFileSync(join(__dirname, '../src/_data/site.json'), 'utf-8')
);
const themesData = JSON.parse(
    readFileSync(join(__dirname, '../src/_data/themes.json'), 'utf-8')
);

// Get current theme colors
const currentTheme = themesData[siteData.theme] || themesData.solarized;
const colors = currentTheme.colors;

async function generateOGImage() {
    console.log('\n🎨 Generating OG image...');
    console.log(`   Name: ${siteData.name}`);
    console.log(`   Tagline: ${siteData.tagline}`);
    console.log(`   Theme: ${siteData.theme}\n`);

    // Create the image using React.createElement (no JSX)
    const imageResponse = new ImageResponse(
        h(
            'div',
            {
                style: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.background,
                    padding: '100px',
                },
            },
            [
                h(
                    'div',
                    {
                        key: 'name',
                        style: {
                            fontSize: 72,
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginBottom: 20,
                            textAlign: 'center',
                            letterSpacing: '-0.02em',
                        },
                    },
                    siteData.name
                ),
                h(
                    'div',
                    {
                        key: 'tagline',
                        style: {
                            fontSize: 36,
                            color: colors.secondary,
                            textAlign: 'center',
                            letterSpacing: '0.05em',
                        },
                    },
                    siteData.tagline
                ),
            ]
        ),
        {
            width: 1200,
            height: 630,
        }
    );

    // Convert to buffer
    const buffer = await imageResponse.arrayBuffer();

    // Save to file
    const outputPath = join(__dirname, '../src/assets/images/og-image.jpg');
    writeFileSync(outputPath, Buffer.from(buffer));

    console.log(`✅ OG image generated: ${outputPath}\n`);
}

generateOGImage().catch((error) => {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
});
