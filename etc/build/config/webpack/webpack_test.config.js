var configSrc = require("./../config");
var configContext = require("./../configContext");

module.exports = function(options)
{
    return  {
        entry: configSrc(configContext.TEST).PATHS.webpack_entry,
        output: configSrc(configContext.TEST).PATHS.webpack_output
    };
};