"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const lodash = require("lodash");
let BearingPlaceholder = class BearingPlaceholder {
    widthTransform(strNumber, width, strPrefix) {
        let strReturn = lodash.range(0, width - strNumber.length)
            .map(nPrefix => strPrefix)
            .join();
        strReturn += strNumber;
        return strReturn;
    }
    transform(value, ...args) {
        if (!lodash.isUndefined(value)) {
            let degrees = Math.floor(value);
            let minutes = Math.floor((value - degrees) * 60);
            let seconds = Math.round(((value - degrees) * 60 - minutes) * 60);
            if (seconds === 60) {
                ++minutes;
                seconds = 0;
            }
            return degrees.toString() + "º" +
                this.widthTransform(minutes.toString(), 2, "0") + "'" +
                this.widthTransform(seconds.toString(), 2, "0") + "\"";
        }
        return "Bearing";
    }
};
BearingPlaceholder = __decorate([
    core_1.Pipe({
        name: "bearingPlaceholder"
    })
], BearingPlaceholder);
exports.BearingPlaceholder = BearingPlaceholder;
//# sourceMappingURL=bearing-placeholder.js.map