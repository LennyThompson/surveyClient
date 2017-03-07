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
var SurveyPoint_1 = require("./../../../../services/surveyDb/types/SurveyPoint");
require("./SurveyPoint.scss");
var SurveyPointComponent = (function () {
    function SurveyPointComponent() {
        this._SurveyPoint = new SurveyPoint_1.SurveyPoint();
    }
    SurveyPointComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyPointComponent.prototype, "SurveyPoint", {
        get: function () {
            return this._SurveyPoint;
        },
        set: function (value) {
            this._SurveyPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyPointComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", SurveyPoint_1.SurveyPoint),
    __metadata("design:paramtypes", [SurveyPoint_1.SurveyPoint])
], SurveyPointComponent.prototype, "SurveyPoint", null);
SurveyPointComponent = __decorate([
    core_1.Component({
        selector: "survey-point-form",
        templateUrl: "./SurveyPoint.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyPointComponent);
exports.SurveyPointComponent = SurveyPointComponent;
//# sourceMappingURL=SurveyPoint.js.map