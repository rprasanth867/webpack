const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {loader: "css-loader", options: {sourceMap: true}},
          {loader: "postcss-loader", options: {sourceMap: true}},
          {loader: "sass-loader", options: {sourceMap: true}}
        ],
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: "Html Plugin title"
      })
    ]
};