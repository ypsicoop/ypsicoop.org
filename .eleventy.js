const Image = require("@11ty/eleventy-img");

function imageShortcode(src, alt) {
  let options = {
    widths: [500],
    formats: ["avif", "jpeg"]
  };

  Image(src, options)

  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async",
  };

  let metadata = Image.statsSync(src, options)

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksShortcode("image", imageShortcode);

  return {
    passthroughFileCopy: true
  };
};