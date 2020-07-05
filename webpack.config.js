var path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const application_settings = {
  title: "BellHop",
  filename: "index.html",
  template: "./src/index.html"
};


module.exports = {

  entry: {
    home: ["./src/main.js"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    publicPath: 'http://192.168.1.8:9000/',
  },


  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: { esModule: false }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    hot: true,
    writeToDisk: true,
    publicPath: '/public/',
    hotOnly: true,
    historyApiFallback: true,
  },


  plugins: [new VueLoaderPlugin(), new HtmlWebpackPlugin(application_settings)]
};
