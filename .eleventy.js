const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
  let metadata = await Image(src, {
    widths: [500],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async",
  };

  console.log('Image', alt)

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
};