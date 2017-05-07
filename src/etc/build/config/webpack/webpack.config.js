var webpackMerge = require("webpack-merge");
var configSrc = require("./../config");
var configContext = require("./../configContext");
var webpackCommon = require("./webpack.common");

function getWebpackSpecificConfig(context)
{
    return require(configSrc(context).APP.webpack_config);
}

module.exports = function(options)
{
    console.log("webpack.config.js " + JSON.stringify(options));
    var webpackConfig = webpackMerge(webpackCommon(options.context), getWebpackSpecificConfig(options.context)(options.webpack_options));
    return webpackConfig;
};