var TEST_CONTEXT = "test";
var DEV_CONTEXT = "dev";

module.exports.isTestContext = function(context)
{
    return context ? context === TEST_CONTEXT : false;
};

module.exports.isDevContext = function(context)
{
    return context ? context === DEV_CONTEXT : false;
};

module.exports.isProdContext = function(context)
{
    return !context;
};

module.exports.TEST = TEST_CONTEXT;
module.exports.DEV = DEV_CONTEXT;
