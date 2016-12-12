var gulp = require("gulp");
var runKarma = require("./karma-run");

exports = module.exports = function(done)
{
    runKarma('karma.conf.js', {
        autoWatch: false,
        singleRun: false
    }, done);
};
