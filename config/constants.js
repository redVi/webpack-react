const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const envFile = devMode ? '.local.env' : '.env';

const env = require('dotenv').config({
  path: path.resolve(__dirname, `../${envFile}`),
}).parsed;

module.exports = {
  devMode,
  env,
};
