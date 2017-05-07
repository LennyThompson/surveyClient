var configSrc = require("./../config");
var configContext = require("./../configContext");

module.exports = function(options)
{
    return  {
        entry: configSrc(configContext.DEV).PATHS.webpack_entry,
        output: configSrc(configContext.DEV).PATHS.webpack_output
    };
};