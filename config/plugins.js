const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('./utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = require('./constants').isDev;
const env = require('./constants').env;

const plugins = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist/**/*')],
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        globOptions: {
          ignore: ['**/index.html']
        }
      },
    ],
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, '../public/index.html'),
    minify: isDev ? {} : {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new InterpolateHtmlPlugin(HtmlWebpackPlugin, env),
  ...(isDev ? [] : [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    }),
  ]),
];

module.exports = plugins;
