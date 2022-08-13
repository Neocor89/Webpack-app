const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //+ [name] = nom du fichier [contenthash] = hash du fichier generé en auto
    filename: "[name][contenthash].js",
  }, //+ For Sass module
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  }, //+ For html plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack app Joke generator",
      filename: "index.html",
      template: 'src/template.html',
    }),
  ],
};
