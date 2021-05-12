const path = require('path');
const rules = require('./rules');
const plugins = require('./plugins');
const devMode = require('./constants').devMode;

const config = {
  target: 'web',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
  module: {
    rules,
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    hot: devMode,
    port: 8080,
  },
};

if (devMode) {
  config.devtool = 'source-map';
}

module.exports = config;
