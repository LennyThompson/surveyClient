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
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
require("./edit-survey-image-dialog.scss");
var EditSurveyImageComponent = (function () {
    function EditSurveyImageComponent(_SurveyImageProvider) {
        this._SurveyImageProvider = _SurveyImageProvider;
    }
    Object.defineProperty(EditSurveyImageComponent.prototype, "title", {
        get: function () {
            return "Edit SurveyImage";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditSurveyImageComponent.prototype, "SurveyImage", {
        get: function () {
            return this._SurveyImageProvider.SurveyImage;
        },
        set: function (value) {
            this._SurveyImageProvider.SurveyImage = value;
        },
        enumerable: true,
        configurable: true
    });
    return EditSurveyImageComponent;
}());
EditSurveyImageComponent = __decorate([
    core_1.Component({
        selector: "edit-survey-image-dialog",
        templateUrl: "./edit-survey-image-dialog.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentSurveyImageProvider])
], EditSurveyImageComponent);
exports.EditSurveyImageComponent = EditSurveyImageComponent;
//# sourceMappingURL=edit-survey-image-dialog.js.map