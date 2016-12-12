/**
 * @author: @AngularClass
 */

module.exports = function(config)
{
    var configuration = {

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',
        frameworks: ["mocha", "chai-as-promised", "chai", "sinon"],
        exclude: [ ],
        files: [
            { pattern: "./config/spec.bundle.js", watched: false }
        ],
        preprocessors: { "./config/spec.bundle.js": ["coverage", "webpack", "sourcemap"] },
        webpack: require("./webpack.test.js")({env: "test"}),

        // For remap-istanbul we need to output the original coverage report and then consume that in the remap to get ts coverage...

        coverageReporter: {
            type : 'json',
            subdir : '.',
            file : 'coverage-final.json'
        },
        remapCoverageReporter: {
            "text-summary": null,
            json: "./coverage/coverage.json",
            html: "./coverage/html"
        },

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: { stats: "errors-only"},

    reporters: [ "mocha", "coverage", "remap-coverage" ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
        "PhantomJS"
    ],

        customLaunchers: {
            ChromeTravisCi: {
                base: "PhantomJS",
                flags: ["--no-sandbox"]
            }
        },
        singleRun: false
    };

  if (process.env.TRAVIS){
    configuration.browsers = [
      "ChromeTravisCi"
    ];
  }

  config.set(configuration);
};
