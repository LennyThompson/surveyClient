// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:12 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
require("./survey-summary-list.scss");
var SurveySummaryListComponent = (function () {
    function SurveySummaryListComponent() {
    }
    SurveySummaryListComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveySummaryListComponent.prototype, "SurveySummaryList", {
        get: function () {
            return this._SurveySummaryList;
        },
        set: function (value) {
            this._SurveySummaryList = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveySummaryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", rxjs_1.Observable),
    __metadata("design:paramtypes", [rxjs_1.Observable])
], SurveySummaryListComponent.prototype, "SurveySummaryList", null);
SurveySummaryListComponent = __decorate([
    core_1.Component({
        selector: "survey-summary-list",
        templateUrl: "./survey-summary-list.html"
    }),
    __metadata("design:paramtypes", [])
], SurveySummaryListComponent);
exports.SurveySummaryListComponent = SurveySummaryListComponent;
//# sourceMappingURL=SurveySummaryList.js.map