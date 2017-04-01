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
var SurveyPointType_1 = require("./../../../../services/surveyDb/types/SurveyPointType");
require("./SurveyPointType.scss");
var SurveyPointTypeComponent = (function () {
    function SurveyPointTypeComponent() {
        this._SurveyPointType = new SurveyPointType_1.SurveyPointType();
    }
    SurveyPointTypeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyPointTypeComponent.prototype, "SurveyPointType", {
        get: function () {
            return this._SurveyPointType;
        },
        set: function (value) {
            this._SurveyPointType = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyPointTypeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", SurveyPointType_1.SurveyPointType),
    __metadata("design:paramtypes", [SurveyPointType_1.SurveyPointType])
], SurveyPointTypeComponent.prototype, "SurveyPointType", null);
SurveyPointTypeComponent = __decorate([
    core_1.Component({
        selector: "survey-point-type-form",
        templateUrl: "./SurveyPointType.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyPointTypeComponent);
exports.SurveyPointTypeComponent = SurveyPointTypeComponent;
//# sourceMappingURL=SurveyPointType.js.map