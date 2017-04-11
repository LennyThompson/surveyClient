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
var types_1 = require("./../../../../services/surveyDb/types");
require("./survey-image-form.scss");
var SurveyImageComponent = (function () {
    function SurveyImageComponent() {
        this._SurveyImage = new types_1.SurveyImage();
    }
    SurveyImageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyImageComponent.prototype, "SurveyImage", {
        get: function () {
            return this._SurveyImage;
        },
        set: function (value) {
            this._SurveyImage = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", types_1.SurveyImage),
    __metadata("design:paramtypes", [types_1.SurveyImage])
], SurveyImageComponent.prototype, "SurveyImage", null);
SurveyImageComponent = __decorate([
    core_1.Component({
        selector: "survey-image-form",
        templateUrl: "./survey-image-form.html"
    }),
    __metadata("design:paramtypes", [])
], SurveyImageComponent);
exports.SurveyImageComponent = SurveyImageComponent;
//# sourceMappingURL=survey-image-form.js.map