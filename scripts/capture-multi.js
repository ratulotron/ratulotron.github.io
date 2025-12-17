#!/usr/bin/env node

/**
 * Capture multiple theme/font combinations.
 * - Temporarily updates src/_data/site.json with each combo
 * - Runs pnpm build
 * - Runs capture-screenshots.js with a label prefix for filenames
 * - Restores the original site.json at the end
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const sitePath = path.join(root, 'src', '_data', 'site.json');

const combos = [
    { label: 'swiss-neo', theme: 'swiss', fontScheme: 'neo' },
    { label: 'midnight-ibm', theme: 'midnight', fontScheme: 'ibm' },
    { label: 'paper-editorial', theme: 'paper', fontScheme: 'editorial' },
    { label: 'dracula-monostack', theme: 'dracula', fontScheme: 'monostack' },
    { label: 'nord-humanist', theme: 'nord', fontScheme: 'humanist' },
];

const original = JSON.parse(fs.readFileSync(sitePath, 'utf-8'));

function writeSite(theme, fontScheme) {
    const next = { ...original, theme, fontScheme };
    fs.writeFileSync(sitePath, JSON.stringify(next, null, 2));
}

try {
    for (const combo of combos) {
        console.log(`\n🎨 Applying theme/font: ${combo.label}`);
        writeSite(combo.theme, combo.fontScheme);

        execSync('pnpm run build', { stdio: 'inherit', cwd: root });
        execSync(`node scripts/capture-screenshots.js --label=${combo.label}`, {
            stdio: 'inherit',
            cwd: root,
        });
    }
} catch (error) {
    console.error('❌ Error during multi-capture:', error);
    process.exitCode = 1;
} finally {
    fs.writeFileSync(sitePath, JSON.stringify(original, null, 2));
    console.log('\n✅ Restored original src/_data/site.json');
}
