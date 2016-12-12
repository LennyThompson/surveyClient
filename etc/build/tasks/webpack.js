var gulp = require("gulp");
var webpack = require("gulp-webpack");
var named = require('vinyl-named');
var path = require("path");
var gutil = require("gulp-util");
var configSrc = require("./../config/config");
var configContext = require("./../config/configContext");
var webpackConfig = require("./../config/webpack/webpack.config");

exports = module.exports = function()
{
    var options = { context: configContext.DEV, webpack_options: {} };
    return gulp.src(configSrc(options.context).PATHS.webpack_entry_list)
        .pipe(named())
        .pipe(webpack(webpackConfig(options)))
        .pipe(gulp.dest(configSrc(options.context).APP.outdir));
};
