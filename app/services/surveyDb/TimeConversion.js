"use strict";
var TimeConversion = (function () {
    function TimeConversion() {
    }
    TimeConversion.toDate = function (strJsonDate) {
        var dateReturn = new Date(strJsonDate);
        return dateReturn;
    };
    TimeConversion.fromDate = function (dateFrom) {
        return dateFrom.toISOString();
    };
    return TimeConversion;
}());
exports.TimeConversion = TimeConversion;
//# sourceMappingURL=TimeConversion.js.map