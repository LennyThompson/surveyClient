// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017
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
var SurveyAdjustment_1 = require("./../../../../services/surveyDb/types/SurveyAdjustment");
require("./SurveyAdjustment.scss");
var SurveyAdjustmentComponent = (function () {
    function SurveyAdjustmentComponent() {
        this._SurveyAdjustment = new SurveyAdjustment_1.SurveyAdjustment();
    }
    SurveyAdjustmentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyAdjustmentComponent.prototype, "SurveyAdjustment", {
        get: function () {
            return this._SurveyAdjustment;
        },
        set: function (value) {
            this._SurveyAdjustment = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyAdjustmentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", SurveyAdjustment_1.SurveyAdjustment),
    __metadata("design:paramtypes", [SurveyAdjustment_1.SurveyAdjustment])
], SurveyAdjustmentComponent.prototype, "SurveyAdjustment", null);
SurveyAdjustmentComponent = __decorate([
    core_1.Component({
        selector: "survey-adjustment-form",
        templateUrl: "./SurveyAdjustment.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyAdjustmentComponent);
exports.SurveyAdjustmentComponent = SurveyAdjustmentComponent;
//# sourceMappingURL=SurveyAdjustment.js.map