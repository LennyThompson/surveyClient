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
var core_1 = require("@angular/core");
var Survey_1 = require("../../services/surveyDb/types/Survey");
var SurveyComponent = (function () {
    function SurveyComponent() {
    }
    Object.defineProperty(SurveyComponent.prototype, "Survey", {
        get: function () {
            return this.m_surveyItem;
        },
        set: function (surveyItem) {
            this.m_surveyItem = surveyItem;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    core_1.Component({
        selector: "survey-item",
        templateUrl: "./survey.html",
    }),
    __metadata("design:paramtypes", [])
], SurveyComponent);
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.js.map