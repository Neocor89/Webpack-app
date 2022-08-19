//:: Imports
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//: view the package structure of your application
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //: [name] = nom du fichier
    //: [contenthash] = hash du fichier generé en auto
    filename: "[name][contenthash].js",
    clean: true, //: For not generate multiple [hashfiles]
    assetModuleFilename: '[name][ext]'
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //: all '.scss' files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/, //: all '.js' files
        exclude: /node_modules/,
        use: {
          //: Babel loader config
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { //: Config images Loader
        test: /\.(png|jpg|svg| jpeg|gif)$/i,
        type:'asset/resource'
      }
    ],
  }, //+ For html plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack app Joke generator",
      filename: "index.html",
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
