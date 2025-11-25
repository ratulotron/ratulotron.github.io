# Font Schemes

The portfolio supports multiple configurable font schemes, each carefully curated for different aesthetics and professional contexts.

## Changing the Font Scheme

Edit `src/_data/site.json` and change the `fontScheme` property:

```json
{
  "fontScheme": "technical"
}
```

Then rebuild: `npm run build` or the dev server will auto-reload if running `npm start`

## Available Font Schemes

### playful
**Playful** - Mix of decorative and classical fonts
- Name: Bungee Shade (decorative outline)
- Tagline: Bungee (bold display)
- Headings: Bungee (bold display)
- Body: EB Garamond (classical serif)
- Links: Quicksand (rounded sans)
- UI: Quicksand (rounded sans)
- **Best for**: Creative portfolios, artistic expression

### technical
**Technical & Modern** - Clean sans-serif with monospace accents
- Name: IBM Plex Sans (technical sans-serif)
- Tagline: IBM Plex Sans
- Headings: IBM Plex Sans
- Body: Inter (highly readable sans)
- Links: IBM Plex Mono (monospace)
- UI: IBM Plex Mono (monospace)
- **Best for**: Software engineers, technical professionals

### professional
**Professional & Readable** - Corporate-friendly with monospace accents
- Name: Work Sans (professional sans)
- Tagline: Work Sans
- Headings: Work Sans
- Body: Work Sans
- Links: Source Code Pro (coding font)
- UI: Source Code Pro
- **Best for**: Corporate environments, business portfolios

### geometric
**Geometric & Modern** - Angular shapes with coding vibe
- Name: Space Grotesk (geometric display)
- Tagline: Space Grotesk
- Headings: Space Grotesk
- Body: Inter (readable sans)
- Links: Space Mono (monospace)
- UI: Space Mono
- **Best for**: Modern tech companies, balanced personality

### minimalist
**Minimalist** - Single font family for ultra-clean look
- Name: Inter (all elements)
- Tagline: Inter
- Headings: Inter
- Body: Inter
- Links: Inter
- UI: Inter
- **Best for**: Minimal design lovers, focus on content

### monospace
**Full Monospace** - Terminal aesthetic for pure coder style
- Name: JetBrains Mono (all elements)
- Tagline: JetBrains Mono
- Headings: JetBrains Mono
- Body: JetBrains Mono
- Links: JetBrains Mono
- UI: JetBrains Mono
- **Best for**: Developers, hacker aesthetic, terminal lovers

### elegant
**Elegant Engineer** - Sophisticated serif with clean sans
- Name: Playfair Display (elegant serif)
- Tagline: Playfair Display
- Headings: Source Sans Pro (clean sans)
- Body: Source Sans Pro
- Links: Source Sans Pro
- UI: Source Code Pro (monospace)
- **Best for**: Senior engineers, refined professionalism

### startup
**Startup Vibes** - Bold and friendly modern tech feel
- Name: Poppins (all elements)
- Tagline: Poppins
- Headings: Poppins
- Body: Poppins
- Links: Poppins
- UI: Poppins
- **Best for**: Startup culture, friendly tech companies

## Font Usage

Different font types are applied to specific elements:

- **Name**: Your name in the header (largest, most distinctive)
- **Tagline**: Your tagline/subtitle below the divider
- **Heading**: Section headings (Philosophy, Timeline, About)
- **Body**: Main paragraph text, most readable
- **Link**: Social menu links and in-text links
- **UI**: Timeline years, indicators, interface elements

## Recommendations by Role

### Software Engineer / Backend Developer
- **Best**: `technical`, `professional`, `monospace`
- These emphasize technical expertise and coding background

### Frontend Developer / Web Designer
- **Best**: `geometric`, `minimalist`, `startup`
- These show design sensibility and modern aesthetics

### Full Stack Developer
- **Best**: `technical`, `geometric`, `professional`
- Balanced between technical and design-aware

### Data Engineer / Data Scientist
- **Best**: `technical`, `professional`, `minimalist`
- Clean, analytical, focused on clarity

### Tech Lead / Engineering Manager
- **Best**: `professional`, `elegant`, `geometric`
- Professional with leadership presence

### Creative Technologist
- **Best**: `current`, `geometric`, `startup`
- Shows personality while maintaining tech credibility

## Adding Custom Font Schemes

1. Edit `src/_data/fonts.json`
2. Add a new scheme object with a unique key
3. Define all six font properties with font family names
4. Add corresponding Google Fonts link in `src/_includes/layouts/base.njk` (or self-host fonts)
5. Update `site.json` to use your new scheme

Example:

```json
{
  "my-scheme": {
    "name": "My Custom Scheme",
    "description": "Description of the scheme",
    "fonts": {
      "name": "'My Font', sans-serif",
      "tagline": "'My Font', sans-serif",
      "heading": "'My Font', sans-serif",
      "body": "'My Font', sans-serif",
      "link": "'My Font', sans-serif",
      "ui": "'My Font', sans-serif"
    }
  }
}
```

## Font Loading

- **All fonts are self-hosted** in `src/assets/fonts/` for privacy, performance, and reliability
- Fonts are declared in `src/assets/css/style.css` using `@font-face`
- All fonts use `font-display: swap` to prevent render blocking

## Performance Notes

- Self-hosted fonts eliminate external DNS lookups
- Font weights are limited to 400 (regular) and 700 (bold) for optimal performance
- No tracking or external dependencies (except Font Awesome icons)
- Total font directory size: ~7.5MB for all 8 schemes
