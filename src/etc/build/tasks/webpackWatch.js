var gulp = require("gulp");
var webpack = require("gulp-webpack");
var path = require("path");
var gutil = require("gulp-util");

var APP = require("../config/config").APP;

exports = module.exports = function()
{
    var webpackConfig = require(path.resolve(APP.webpack_config));
    webpackConfig.watch = true;
    return gulp.src(path.join(APP.path, APP.main))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(APP.outdir));
}
