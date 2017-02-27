"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeConversion = (function () {
    function TimeConversion() {
    }
    TimeConversion.toDate = function (strJsonDate) {
        var dateMatch = TimeConversion.DATE_REGEX.exec(strJsonDate);
        if (dateMatch !== null) {
            return new Date(Date.UTC(Number(dateMatch[1]), Number(dateMatch[2]) - 1, Number(dateMatch[3]), Number(dateMatch[4]), Number(dateMatch[5]), Number(dateMatch[6])));
        }
        return null;
    };
    TimeConversion.fromDate = function (dateFrom) {
        return dateFrom.toISOString();
    };
    return TimeConversion;
}());
TimeConversion.DATE_REGEX = /(\d+)-(\d+)-(\d+)\s(\d+):(\d+):(\d+)/;
exports.TimeConversion = TimeConversion;
//# sourceMappingURL=TimeConversion.js.map