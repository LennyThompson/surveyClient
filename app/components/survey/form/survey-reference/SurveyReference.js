// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017
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
var SurveyReference_1 = require("./../../../../services/surveyDb/types/SurveyReference");
require("./SurveyReference.scss");
var SurveyReferenceComponent = (function () {
    function SurveyReferenceComponent() {
        this._SurveyReference = new SurveyReference_1.SurveyReference();
    }
    SurveyReferenceComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyReferenceComponent.prototype, "SurveyReference", {
        get: function () {
            return this._SurveyReference;
        },
        set: function (value) {
            this._SurveyReference = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyReferenceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", SurveyReference_1.SurveyReference),
    __metadata("design:paramtypes", [SurveyReference_1.SurveyReference])
], SurveyReferenceComponent.prototype, "SurveyReference", null);
SurveyReferenceComponent = __decorate([
    core_1.Component({
        selector: "survey-reference-form",
        templateUrl: "./SurveyReference.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyReferenceComponent);
exports.SurveyReferenceComponent = SurveyReferenceComponent;
//# sourceMappingURL=SurveyReference.js.map