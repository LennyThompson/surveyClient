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
var DmsBearingFormat = (function () {
    function DmsBearingFormat() {
    }
    DmsBearingFormat.prototype.widthTransform = function (strNumber, width, strPrefix) {
        var strReturn = lodash.range(0, width - strNumber.length)
            .map(function (nPrefix) { return strPrefix; })
            .join();
        strReturn += strNumber;
        return strReturn;
    };
    DmsBearingFormat.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!lodash.isUndefined(value)) {
            var degrees = Math.floor(value);
            var minutes = Math.floor((value - degrees) * 100);
            var seconds = Math.ceil(((value - degrees) * 100 - minutes) * 100);
            return degrees.toString() + "º" +
                this.widthTransform(minutes.toString(), 2, "0") + "'" +
                this.widthTransform(seconds.toString(), 2, "0") + "\"";
        }
        return "";
    };
    return DmsBearingFormat;
}());
DmsBearingFormat = __decorate([
    core_1.Pipe({
        name: "dmsBearingFormat"
    })
], DmsBearingFormat);
exports.DmsBearingFormat = DmsBearingFormat;
//# sourceMappingURL=format-dms-bearing.js.map