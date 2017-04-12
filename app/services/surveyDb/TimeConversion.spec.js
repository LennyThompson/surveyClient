"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var TimeConversion_1 = require("./TimeConversion");
describe("Test the TimeConversion functions", function () {
    it("Should construct a valid date from serialised json date", function () {
        var strDate = "2016-11-12 06:21:48";
        var date = TimeConversion_1.TimeConversion.toDate(strDate);
        // Get the local time zone offset
        var tzOffset = date.getTimezoneOffset();
        var tzOffsetHours = tzOffset / 60;
        var tzOffsetMinutes = tzOffset - (tzOffsetHours * 60);
        chai_1.expect(date).to.exist;
        chai_1.expect(date.getFullYear()).to.equal(2016);
        chai_1.expect(date.getMonth()).to.equal(10);
        chai_1.expect(date.getDate()).to.equal(12);
        chai_1.expect(date.getHours()).to.equal(6 - tzOffsetHours);
        chai_1.expect(date.getMinutes()).to.equal(21 - tzOffsetMinutes);
        chai_1.expect(date.getSeconds()).to.equal(48);
    });
});
//# sourceMappingURL=TimeConversion.spec.js.map