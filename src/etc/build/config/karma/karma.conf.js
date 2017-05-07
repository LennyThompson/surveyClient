var configContext = require("./../configContext");
var configSrc = require("./../config");

module.exports = function(config)
{

    console.log(configSrc(configContext.TEST).APP.webpack_config);
    var configFn = require(configSrc(configContext.TEST).APP.webpack_config);
    config.set(
        {

            basePath: "./",
            frameworks: ["mocha", "chai", "sinon"],

            files: [
                "./app/before.ts"
            ],

            preprocessors: {
                "./app/before.ts": ["webpack"]
            },
            webpack: configFn({ context: configContext.TEST }),

            autoWatch: true,


            browsers: ["PhantomJS"],

            plugins: [
              "karma-chrome-launcher",
              "karma-jasmine",
              "karma-junit-reporter",
              "karma-webpack"
            ]

    }
    );
};
