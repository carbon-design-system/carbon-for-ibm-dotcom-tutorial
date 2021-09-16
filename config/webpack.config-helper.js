'use strict';
const path = require('path');
const fs = require('fs');
const Webpack = require('webpack');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dotenv = require('dotenv').config({ path: __dirname + '/../.env' });

/**
 * Returns the list of html pages in a given directory
 *
 * @param {string} dir Directory string
 * @returns {string[]} List of html pages
 * @private
 */
function _getPages(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return path.extname(file).toLowerCase() === '.html';
  });
}

/**
 * Generates the page entries for webpack
 *
 * @returns {*[]}
 * @private
 */
function _renderPageEntries() {
  const pages = _getPages(path.join(__dirname, '../src'));
  let renderedPages = [];

  for (let i = 0; i < pages.length; i++) {
    renderedPages.push(
      new HtmlWebpackPlugin({
        hash: true,
        inject: true,
        template: path.join(__dirname, `../src/${pages[i]}`),
        filename: `./${pages[i]}`,
      })
    );
  }

  return renderedPages;
}

module.exports = (options) => {
  const dest = path.join(__dirname, '../dist');

  let webpackConfig = {
    mode: 'production',
    devtool: options.devtool,
    entry: {
      global: './src/assets/js/app.js',
    },
    output: {
      path: dest,
      filename: './assets/js/[name].js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './assets/css/[name].css',
      }),
      new Webpack.DefinePlugin({
        'process.env': JSON.stringify(
          Object.assign({}, dotenv.parsed || {}, {
            NODE_ENV: options.isProduction ? 'production' : 'development',
          })
        ),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/assets',
            to: './assets',
            globOptions: {
              ignore: ['**/scss/**/*.scss'],
            },
          },
        ],
      }),
    ],
    resolve: {
      modules: ['node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './assets/fonts',
              },
            },
          ],
        },
        {
          test: /\.(gif|jpg|png)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './assets/images',
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: options.isProduction,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('../tools/postcss-fix-host-pseudo')(),
                    require('autoprefixer')({
                      overrideBrowserslist: ['last 1 version', 'ie >= 11'],
                    }),
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: sass,
                webpackImporter: false,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, '..', 'node_modules')],
                  additionalData: `
                    $feature-flags: (
                      enable-css-custom-properties: true
                    );
                  `,
                },
              },
            },
          ],
        },
      ],
    },
  };

  if (options.isProduction) {
    webpackConfig.optimization = {
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024,
        maxSize: 1024 * 1024,
      },
      minimizer: [
        new TerserPlugin({
          sourceMap: options.isProduction,
          terserOptions: {
            mangle: false,
          },
        }),
      ],
    };
  }

  webpackConfig.plugins = webpackConfig.plugins.concat(_renderPageEntries());

  return webpackConfig;
};
