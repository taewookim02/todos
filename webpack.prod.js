const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  // Add production-specific settings like minification plugins, etc.
});
