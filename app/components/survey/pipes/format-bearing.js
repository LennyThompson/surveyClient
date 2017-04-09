"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lodash = require("lodash");
var BearingFormat = (function () {
    function BearingFormat() {
    }
    BearingFormat.prototype.widthTransform = function (strNumber, width, strPrefix) {
        var strReturn = lodash.range(0, width - strNumber.length)
            .map(function (nPrefix) { return strPrefix; })
            .join();
        strReturn += strNumber;
        return strReturn;
    };
    BearingFormat.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!lodash.isUndefined(value)) {
            var degrees = Math.floor(value);
            var minutes = Math.floor((value - degrees) * 60);
            var seconds = Math.round(((value - degrees) * 60 - minutes) * 60);
            if (seconds === 60) {
                ++minutes;
                seconds = 0;
            }
            return degrees.toString() + "º" +
                this.widthTransform(minutes.toString(), 2, "0") + "'" +
                this.widthTransform(seconds.toString(), 2, "0") + "\"";
        }
        return "";
    };
    return BearingFormat;
}());
BearingFormat = __decorate([
    core_1.Pipe({
        name: "bearingFormat"
    })
], BearingFormat);
exports.BearingFormat = BearingFormat;
//# sourceMappingURL=format-bearing.js.map