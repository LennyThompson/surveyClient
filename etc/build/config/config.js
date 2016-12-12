var path = require("path");
var lodashMerge = require("lodash").merge;
var configContext = require("./configContext");

var BASE_CONFIG =
    {
        PATHS: {
            webpack_entry: {
                main: "./app/index.ts",
                lib: "./app/lib.ts",
                data_layer: "./app/data-layer.ts"
            },
            lint_path: "./app/**/*.ts",
            sass: [ "./app/**/*.scss" ],
            templates: [ "./app/**/*.html" ],
            karma_config: "./etc/build/config/karma/karma.conf.js"
        },
        APP: {
            root: "./",
            path: "./app",
            main: "index.ts"
        }
    };

var CONFIG =
{
    PATHS: {
        webpack_output: {
            path: path.resolve("./www/build"),
            filename: "[name].[chunkhash].bundle.js",
            sourceMapFilename: '[name].[chunkhash].bundle.map'
        },
        webpack_entry_list: [
            "./app/index.ts",
            "./app/lib.ts",
            "./app/data-layer.ts"
        ]
    },
    APP: {
        result: "[name].bundle.js",
        webpack_config: path.resolve(__dirname, "./webpack/webpack_dev.config.js"),
        outdir: path.resolve("./www/build/bundle/")
    }
};

var DEV_CONFIG = CONFIG;

var TEST_CONFIG =
    {
        PATHS: {
            webpack_output: {
                path: path.resolve("./www/build"),
                filename: "test.bundle.js",
                sourceMapFilename: 'test.bundle.map'
            },
            spec: [ "./app/**/*.spec.ts"]
        },
        APP: {
            result: "test.bundle.js",
            webpack_config: path.resolve(__dirname, "./webpack/webpack_test.config.js"),
            outdir: path.resolve("./www/build/bundle/")
        }
    };

function getConfig(context)
{
    var returnConfig = BASE_CONFIG;
    if(configContext.isTestContext(context))
    {
        returnConfig = lodashMerge(returnConfig, TEST_CONFIG);
    }
    else if(configContext.isDevContext(context))
    {
        returnConfig = lodashMerge(returnConfig, DEV_CONFIG);
    }
    else
    {
        returnConfig = lodashMerge(returnConfig, CONFIG);
    }
    return returnConfig;
}

module.exports = getConfig;
