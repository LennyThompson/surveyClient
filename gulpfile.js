var tslint = require('gulp-tslint');
var gulp = require('gulp');
var gutil = require('gulp-util');
var cleanCss = require('gulp-clean-css');
var path = require('path');
var sass = require('gulp-sass');
var sh = require('shelljs');
var plumber = require('gulp-plumber');
// var karmaRun = require("./etc/build/tasks/karma-run");
var karma = require("karma");
var karmaParseConfig = require("karma/lib/config").parseConfig;
const webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackTask = require("./etc/build/tasks/webpack");
var webpackWatchTask = require("./etc/build/tasks/webpackWatch");

var configContext = require("./etc/build/config/configContext");
var configSrc = require("./etc/build/config/config");

var pkg = require('./package.json');

gulp.task("default", ["lint", "sass", "webpack"]);

gulp.task("git-check", function (done) {

    if (!sh.which("git")) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task("lint", function () {

    return gulp.src(configSrc(configContext.DEV).PATHS.lint_path)
        .pipe(tslint())
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});

// gulp.task("webpack", webpackTask);
gulp.task("webpack", function(callback)
{
    process.env.NODE_ENV = "dev";
    webpack(
        require('./config/webpack.dev')({env: 'development'}),
        function(err, stats)
        {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        }
    );
});

gulp.task
(
    "webpack-dev-server",
    function(callback)
    {
        // modify some webpack config options

        var myConfig = require('./config/webpack.dev')({env: 'development'});
        // Start a webpack-dev-server
        new WebpackDevServer(
            webpack(myConfig),
            {
                publicPath: "/" + myConfig.output.publicPath,
                stats: {
                    colors: true
                }
            }
        )
        .listen(
            3000, "localhost",
            function(err)
            {
                if(err) throw new gutil.PluginError("webpack-dev-server", err);
                gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/build/index.html");
            }
        );
    }
);

gulp.task("sass", function (done) {

    gulp.src(configSrc(configContext.DEV).PATHS.sass)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./www/build/css/"))
        .pipe(cleanCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(gulp.dest("./www/build/css/"))
        .on("end", done);
});

gulp.task("watch", function ()
{
    gulp.watch(configSrc(configContext.DEV).PATHS.lint_path, ["lint", "webpack"]);
    gulp.watch(configSrc(configContext.DEV).PATHS.templates, ["webpack"]);
    gulp.watch(configSrc(configContext.DEV).PATHS.sass, ["sass"]);
});



gulp.task("test", function (done) {

    karmaRun({
        autoWatch: false,
        singleRun: true
    }, done);
});

gulp.task("test-watch", function (done) {

    karmaRun({
        autoWatch: true,
        singleRun: false
    }, done);
});

function karmaRun(options, callback)
{
    // https://gist.github.com/renegare/9173656

    var configFilePath = path.resolve("./karma.conf.js");
    var log = gutil.log;
    var colors = gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {

        config[key] = options[key];
    });

    var server = new karma.Server(config, function(exitCode) {

        log('Karma has exited with ' + colors.red(exitCode));
        if(callback)
        {
            callback();
        }
        process.exit(exitCode);
    });
    server.start();
};

