// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017
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
var types_1 = require("./../../../../services/surveyDb/types");
require("./survey-form.scss");
var SurveyComponent = (function () {
    function SurveyComponent() {
        this._Survey = new types_1.Survey();
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyComponent.prototype, "Survey", {
        get: function () {
            return this._Survey;
        },
        set: function (value) {
            this._Survey = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", types_1.Survey),
    __metadata("design:paramtypes", [types_1.Survey])
], SurveyComponent.prototype, "Survey", null);
SurveyComponent = __decorate([
    core_1.Component({
        selector: "survey-form",
        templateUrl: "./survey-form.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyComponent);
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey-form.js.map