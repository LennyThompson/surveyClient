const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');

const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const GlobCopyWebpackPlugin = require('@angular/cli/plugins/glob-copy-webpack-plugin').GlobCopyWebpackPlugin;
const BaseHrefWebpackPlugin = require('@angular/cli//lib/base-href-webpack/base-href-webpack-plugin').BaseHrefWebpackPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const AotPlugin = require('@ngtools/webpack/src/plugin').AotPlugin;

const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];
const baseHref = "";
const deployUrl = "";


module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ],
        modules: [
            "./node_modules"
        ]
    },
    resolveLoader: {
        modules: [
            "./node_modules"
        ]
    },
    entry: {
        main: [
            "./src/main.ts"
        ],
        polyfills: [
            "./src/polyfills.ts"
        ],
        styles: [
            "./src/styles.css"
        ]
    },
    output: {
        path: path.join(process.cwd(), "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [
                    function (input)
                    {
                        return /(\/node_modules\/|\/usr\/local\/google)/.exec(input) === null;
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(eot|svg)$/,
                loader: "file-loader?name=[name].[hash:20].[ext]"
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                loader: "url-loader?name=[name].[hash:20].[ext]&limit=10000"
            },
            {
                exclude: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.css$/,
                loaders: [
                    "exports-loader?module.exports.toString()",
                    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                    "postcss-loader",
                    "resolve-url-loader"
                ]
            },
            {
                exclude: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.scss$|\.sass$/,
                loaders: [
                    "exports-loader?module.exports.toString()",
                    "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ]
            },
            {
                include: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: [
                        "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                        "postcss-loader"
                    ],
                    fallback: "style-loader",
                    publicPath: ""
                })
            },
            {
                include: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.scss$|\.sass$/,
                loaders: ExtractTextPlugin.extract({
                    use: [
                        "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
                        "postcss-loader",
                        "sass-loader"
                    ],
                    fallback: "style-loader",
                    publicPath: ""
                })
            },
            {
                test: /\.ts$/,
                loader: "@ngtools/webpack"
            }
        ]
    },
    plugins: [
        new NoEmitOnErrorsPlugin(),
        new GlobCopyWebpackPlugin({
            patterns: [
                "assets",
                "favicon.ico"
            ],
            globOptions: {
                cwd: "./src",
                dot: true,
                ignore: "**/.gitkeep"
            }
        }),
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true,
            chunks: "all",
            excludeChunks: [],
            title: "Webpack App",
            xhtml: true,
            chunksSortMode: function sort(left, right)
            {
                var leftIndex = entryPoints.indexOf(left.names[0]);
                var rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex)
                {
                    return 1;
                }
                else if (leftIndex < rightindex)
                {
                    return -1;
                }
                else
                {
                    return 0;
                }
            }
        }),
        new BaseHrefWebpackPlugin({}),
        new CommonsChunkPlugin({
            name: "inline",
            minChunks: null
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module)
            {
                module.resource && module.resource.startsWith(nodeModules)
            },
            chunks: [
                "main"
            ]
        }),
        new ExtractTextPlugin({
            filename: "[name].bundle.css",
            disable: true
        }),
        new LoaderOptionsPlugin({
            sourceMap: false,
            options: {
                postcss: [
                    autoprefixer(),
                    postcssUrl({
                        url: function (URL)
                        {
                            // Only convert root relative URLs, which CSS-Loader won't process into require().

                            if (!URL.startsWith('/') || URL.startsWith('//'))
                            {
                                return URL;
                            }
                            if (deployUrl.match(/:\/\//))
                            {
                                // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                                return "${deployUrl.replace(/\/$/, '')}${URL}";
                            }
                            else if (baseHref.match(/:\/\//))
                            {
                                // If baseHref contains a scheme, include it as is.
                                return baseHref.replace(/\/$/, '') +
                                    "/${deployUrl}/${URL}`.replace(/\/\/+/g, '/')";
                            }
                            else
                            {
                                // Join together base-href, deploy-url and the original URL.
                                // Also dedupe multiple slashes into single ones.
                                return "/${baseHref}/${deployUrl}/${URL}".replace(/\/\/+/g, '/');
                            }
                        }
                    })
                ],
                sassLoader: {
                    sourceMap: true,
                    includePaths: []
                }
                , resolveUrlLoader: { debug: true }
                ,
                context: ""
            }
        }),
        new AotPlugin({
            mainPath: "main.ts",
            hostReplacementPaths: {
                "environments/environment.ts": "environments/environment.ts"
            },
            exclude: [],
            tsConfigPath: "src/tsconfig.app.json",
            skipCodeGeneration: true
        })
    ],
    devServer: {
        port: 4200,
        historyApiFallback: true,
        stats: 'minimal'
    },
    node: {
        fs: "empty",
        global: true,
        crypto: "empty",
        tls: "empty",
        net: "empty",
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
