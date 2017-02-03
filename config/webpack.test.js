/**
 * @author: @AngularClass
 */

const helpers = require('./helpers');
const path = require('path');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  return {

    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [ path.resolve(__dirname, 'app'), 'node_modules' ]

    },

    module: {

      rules: [

        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'source-map-loader',
          exclude: [
            // these packages have problems with their sourcemaps
            helpers.root('node_modules/rxjs'),
            helpers.root('node_modules/@angular')
          ]
        },

        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
          query: {
            // use inline sourcemaps for "karma-remap-coverage" reporter
            sourceMap: false,
            inlineSourceMap: true,
            compilerOptions: {

              // Remove TypeScript helpers to be injected
              // below by DefinePlugin
              removeComments: true

            }
          },
          exclude: [/\.e2e\.ts$/]
        },

        {
          test: /\.json$/,
          use: 'json-loader',
          exclude: [helpers.root('app/index.html')]
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('app/index.html')]
        },
        // css-loader requires the "root=." config so that it can resolve the transformed require for url loader,
        // and subsequently generate the content into the bundle
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader?root=.!sass-loader"
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('app/index.html')]
        },
        {
          enforce: 'post',
          test: /\.(js|ts)$/,
          use: 'istanbul-instrumenter-loader',
          include: helpers.root('app'),
          exclude: [
            /\.(e2e|spec)\.ts$/,
            /node_modules/
          ]
        }

      ]
    },
    plugins: [

      new DefinePlugin({
        'ENV': JSON.stringify(ENV),
        'HMR': false,
        'process.env': {
          'ENV': JSON.stringify(ENV),
          'NODE_ENV': JSON.stringify(ENV),
          'HMR': false,
        }
      }),
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('app'), // location of your src
        {
          // your Angular Async Route paths relative to this root directory
        }
      ),
      new LoaderOptionsPlugin({
        debug: true,
        options: {

        }
      })

    ],
    node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  };
};
