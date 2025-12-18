export default function (eleventyConfig) {

  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Browser Sync configuration for local development
  eleventyConfig.setBrowserSyncConfig({
    files: ["_site/**/*.html", "src/assets/css/**/*.css"],
  });

  // Minimal filters used by templates
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    const d = dateObj ? new Date(dateObj) : new Date();
    return d.toISOString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html", "txt"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
