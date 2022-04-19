const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let htmlPageNames = ["event", "shop"]; // 새로운 페이지 생성할때 이름 붙혀넣기

let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `src/views/${name}.html`,
    filename: `views/${name}.html`,
  });
});

module.exports = {
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
  ].concat(multipleHtmlPlugins),

  entry: "./src/js/index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 9000,
  },
};
