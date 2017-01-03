/**
 * @author: @AngularClass
 */

const webpack = require('webpack');
const helpers = require('./helpers');
const path = require("path");
/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {

      lib: "./app/lib.ts",
      data_layer: "./app/data-layer.ts",
      app: "./app/app.ts"

    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('app'), helpers.root('node_modules')],

    },
    module: {

      rules: [
        {
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader',
            'angular2-template-loader',
            'angular2-router-loader'
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader']
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        }

      ]

    },
    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      })
      , new CommonsChunkPlugin({
        name: ['lib', 'data_layer'].reverse()
      })
      , new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
        helpers.root('src'), // location of your src
        {
          // your Angular Async Route paths relative to this root directory
        }
      ),
      // new CopyWebpackPlugin([
      //   { from: 'src/assets', to: 'assets' },
      //   { from: 'src/meta'}
      // ]),
      new HtmlWebpackPlugin({
        template: 'app/index.html',
        title: 'Surveying app',
        chunksSortMode: 'dependency',
        metadata: { baseUrl: '/' },
        inject: 'body'
      }),
      // new ScriptExtHtmlWebpackPlugin({
      //   defaultAttribute: 'defer'
      // }),
      // new HtmlElementsPlugin({
      //   headTags: require('./head-config.common')
      // }),
      new LoaderOptionsPlugin({})
    ],
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  };
};
