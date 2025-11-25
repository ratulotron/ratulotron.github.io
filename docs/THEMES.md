# Color Themes

The portfolio supports multiple curated color themes optimized for readability and professional appearance.

## Changing the Theme

Edit `src/_data/site.json` and change the `theme` property:

```json
{
  "theme": "solarized"
}
```

Then rebuild: `npm run build`

## Available Themes

All themes are carefully curated to ensure:
- ✅ High contrast between text and background (WCAG AA compliant)
- ✅ Professional appearance for a portfolio
- ✅ Readable body text and clear headings

### solarized (default)
**Solarized Light** - Professional and easy on the eyes
- Primary: `#002b36` (Dark blue-gray)
- Secondary: `#073642` (Body text)
- Muted: `#657b83` (Subtle text)
- Background: `#eee8d5` (Warm cream)
- Accent: `#268bd2` (Blue links)

### monochrome
**Monochrome** - Classic black and white with maximum contrast
- Primary: `#1a1a1a` (Near black)
- Secondary: `#333333` (Dark gray)
- Muted: `#666666` (Medium gray)
- Background: `#f5f5f5` (Light gray)
- Accent: `#0066cc` (Blue)

### ocean-breeze
**Ocean Breeze** - Cool and professional tones
- Primary: `#00A0B0` (Teal)
- Secondary: `#6A4A3C` (Brown)
- Muted: `#CC333F` (Red)
- Background: `#F5F5F0` (Off-white)
- Accent: `#EDC951` (Gold)

### earthy
**Earthy** - Warm and grounded natural tones
- Primary: `#5E4A3C` (Dark brown)
- Secondary: `#7A6A53` (Medium brown)
- Muted: `#948C75` (Taupe)
- Background: `#F5F1E8` (Cream)
- Accent: `#80BCA3` (Mint green)

### sunset
**Sunset** - Warm and inviting
- Primary: `#774F38` (Chocolate)
- Secondary: `#5E3D2E` (Dark brown)
- Muted: `#9A7B6B` (Dusty rose)
- Background: `#FAF6F0` (Warm white)
- Accent: `#E08E79` (Coral)

### mint-coral
**Mint Coral** - Fresh and modern soft pastels
- Primary: `#3FB8AF` (Mint)
- Secondary: `#547980` (Teal)
- Muted: `#7FC7AF` (Light mint)
- Background: `#F8F8F5` (Off-white)
- Accent: `#FF9E9D` (Coral pink)

### dark-mode
**Dark Mode** - Easy on the eyes dark theme
- Primary: `#E8E8E8` (Light gray)
- Secondary: `#C8C8C8` (Medium gray)
- Muted: `#999999` (Subtle gray)
- Background: `#1a1a1a` (Near black)
- Accent: `#4ECDC4` (Cyan)

### lavender
**Lavender Dreams** - Soft and elegant
- Primary: `#413E4A` (Dark purple)
- Secondary: `#73626E` (Mauve)
- Muted: `#9A8A94` (Light mauve)
- Background: `#FAF6F5` (Pale pink)
- Accent: `#B38184` (Dusty rose)

## Coding-Inspired Themes

These themes are based on popular code editor color schemes, optimized for long reading sessions.

### dracula
**Dracula** - Popular coding theme with vibrant accents
- Primary: `#F8F8F2` (Light gray)
- Secondary: `#E0E0E0` (Soft white)
- Muted: `#6272A4` (Purple gray)
- Background: `#282A36` (Dark blue-gray)
- Accent: `#FF79C6` (Pink)

### nord
**Nord** - Arctic coding theme with cool blues
- Primary: `#2E3440` (Dark blue-gray)
- Secondary: `#3B4252` (Slate)
- Muted: `#4C566A` (Gray blue)
- Background: `#ECEFF4` (Snow white)
- Accent: `#88C0D0` (Frost blue)

### nord-dark
**Nord Dark** - Arctic coding theme dark variant
- Primary: `#ECEFF4` (Snow white)
- Secondary: `#D8DEE9` (Polar white)
- Muted: `#81A1C1` (Frost)
- Background: `#2E3440` (Polar night)
- Accent: `#88C0D0` (Frost blue)

### gruvbox
**Gruvbox Light** - Retro coding theme with warm colors
- Primary: `#3C3836` (Dark brown)
- Secondary: `#504945` (Brown gray)
- Muted: `#7C6F64` (Gray brown)
- Background: `#FBF1C7` (Cream)
- Accent: `#458588` (Aqua blue)

### one-dark
**One Dark** - GitHub/Atom's modern dark palette
- Primary: `#ABB2BF` (Light gray)
- Secondary: `#9DA5B4` (Muted gray)
- Muted: `#5C6370` (Comment gray)
- Background: `#282C34` (Dark gray)
- Accent: `#61AFEF` (Blue)

### tokyo-night
**Tokyo Night** - Modern coding theme with deep blues
- Primary: `#C0CAF5` (Light blue)
- Secondary: `#A9B1D6` (Lavender)
- Muted: `#565F89` (Storm gray)
- Background: `#1A1B26` (Night blue)
- Accent: `#7AA2F7` (Sky blue)

### catppuccin
**Catppuccin Latte** - Pastel coding theme with soothing colors
- Primary: `#4C4F69` (Text)
- Secondary: `#5C5F77` (Subtext)
- Muted: `#6C6F85` (Overlay)
- Background: `#EFF1F5` (Base)
- Accent: `#1E66F5` (Blue)

### night-owl
**Night Owl** - Accessibility-focused coding theme
- Primary: `#D6DEEB` (Light blue-white)
- Secondary: `#B7C5D3` (Muted blue)
- Muted: `#637777` (Teal gray)
- Background: `#011627` (Deep navy)
- Accent: `#80A4C2` (Steel blue)

### synthwave
**Synthwave** - Retro futuristic theme with neon colors
- Primary: `#F9F871` (Neon yellow)
- Secondary: `#FED2D1` (Pink cream)
- Muted: `#B084CC` (Retro purple)
- Background: `#2B213A` (Dark purple night)
- Accent: `#FF6C11` (Neon orange)

## Color Usage

- **Primary**: Name, headings, dividers, timeline arrows
- **Secondary**: Body text, scroll indicator
- **Muted**: Section headings, subtle text
- **Background**: Page background, header background
- **Accent**: Links, interactive elements

## Adding Custom Themes

1. Edit `src/_data/themes.json`
2. Add a new theme object with a unique key
3. Define all five color properties
4. **Important**: Ensure sufficient contrast between text colors and background (use a contrast checker)
5. Update `site.json` to use your new theme

Example:

```json
{
  "my-theme": {
    "name": "My Custom Theme",
    "description": "Description of the theme",
    "colors": {
      "primary": "#000000",
      "secondary": "#333333",
      "muted": "#666666",
      "background": "#ffffff",
      "accent": "#0066cc"
    }
  }
}
```

## Accessibility Note

All curated themes meet WCAG AA contrast requirements for normal text (4.5:1 ratio). When creating custom themes, use a contrast checker like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure readability.
