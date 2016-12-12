const webpack = require("webpack");
const path = require("path");
var configSrc = require("./../config");
/*
 * Webpack Plugins
 */

const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = function (context)
{
    return {
        resolve: {
            extensions: [".ts", ".js", ".json"],
            modules: [path.resolve(configSrc(context).APP.path), "node_modules"]

        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        "awesome-typescript-loader"
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                // css-loader requires the "root=." config so that it can resolve the transformed require for url loader,
                // and subsequently generate the content into the bundle
                {
                    test: /\.scss$/,
                    loader: "style-loader!css-loader?root=.!sass-loader"
                },
                // Using url-loader to bundle all image, graphics and font content...
                {
                    test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|svg)(\?.*$|$)/i,
                    loader: "url-loader"
                }
            ]
        },
        plugins: [
            new CommonsChunkPlugin({
                name: ["lib"].reverse()
            }),
            new LoaderOptionsPlugin({})
        ]
    };
}