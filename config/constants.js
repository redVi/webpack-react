const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';
const envFile = isDev ? '.local.env' : '.env';

const env = require('dotenv').config({
  path: path.resolve(__dirname, `../${envFile}`),
}).parsed;

module.exports = {
  isDev,
  env,
};
