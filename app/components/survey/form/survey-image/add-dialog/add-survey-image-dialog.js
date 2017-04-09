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
var simple_providers_1 = require("../../../simple-providers");
require("./add-survey-image-dialog.scss");
var AddSurveyImageComponent = (function () {
    function AddSurveyImageComponent(_SurveyImageProvider) {
        this._SurveyImageProvider = _SurveyImageProvider;
    }
    Object.defineProperty(AddSurveyImageComponent.prototype, "title", {
        get: function () {
            return "Add SurveyImage";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSurveyImageComponent.prototype, "SurveyImage", {
        get: function () {
            return this._SurveyImageProvider.SurveyImage;
        },
        set: function (value) {
            this._SurveyImageProvider.SurveyImage = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddSurveyImageComponent;
}());
AddSurveyImageComponent = __decorate([
    core_1.Component({
        selector: "add-survey-image-dialog",
        templateUrl: "add-survey-image-dialog.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentSurveyImageProvider])
], AddSurveyImageComponent);
exports.AddSurveyImageComponent = AddSurveyImageComponent;
//# sourceMappingURL=add-survey-image-dialog.js.map