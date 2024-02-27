const HtmlWebpackplugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackplugin({
      title: "Output",
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
};
