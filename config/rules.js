const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = require('./constants').devMode;

const cssRules = devMode ? 'style-loader' : { loader: MiniCssExtractPlugin.loader };

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$/,
    use: [
      cssRules,
      {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  stage: 3,
                  features: {
                    'nesting-rules': true
                  }
                },
              ],
            ],
          },
        },
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
  },
];
