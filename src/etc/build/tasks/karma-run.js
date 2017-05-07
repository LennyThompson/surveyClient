var karma = require("karma");
var gutil = require("gulp-util");
var path = require("path");
var karmaParseConfig = require("karma/lib/config").parseConfig;
var configSrc = require("./../config/config");

function karmaRun(context, options, callback)
{
    var karmaConfig = configSrc(context).PATHS.karma_config;

    // https://gist.github.com/renegare/9173656

    var configFilePath = path.resolve(karmaConfig);
    config
    var log = gutil.log;
    var colors = gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {

        config[key] = options[key];
    });

    log("config: " + JSON.stringify(config));

    var server = new karma.Server(, function(exitCode) {

        log('Karma has exited with ' + colors.red(exitCode));
        callback();
        process.exit(exitCode);
    });
    server.start();
};

module.exports = karmaRun;