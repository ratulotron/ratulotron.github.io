export default function (eleventyConfig) {

  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy top-level generated files like resume.pdf
  eleventyConfig.addPassthroughCopy("src/*.pdf");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Browser Sync configuration for local development
  eleventyConfig.setBrowserSyncConfig({
    files: ["_site/**/*.html", "src/assets/css/**/*.css"],
  });

  // Collections for blog posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/**/*.md");
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // ISO date for datetime attributes
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString();
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
