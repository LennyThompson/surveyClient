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
require("./add-survey-point-type-dialog.scss");
var AddSurveyPointTypeComponent = (function () {
    function AddSurveyPointTypeComponent(_SurveyPointTypeProvider) {
        this._SurveyPointTypeProvider = _SurveyPointTypeProvider;
    }
    Object.defineProperty(AddSurveyPointTypeComponent.prototype, "title", {
        get: function () {
            return "Add SurveyPointType";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddSurveyPointTypeComponent.prototype, "SurveyPointType", {
        get: function () {
            return this._SurveyPointTypeProvider.SurveyPointType;
        },
        set: function (value) {
            this._SurveyPointTypeProvider.SurveyPointType = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddSurveyPointTypeComponent;
}());
AddSurveyPointTypeComponent = __decorate([
    core_1.Component({
        selector: "add-survey-point-type-dialog",
        templateUrl: "add-survey-point-type-dialog.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentSurveyPointTypeProvider])
], AddSurveyPointTypeComponent);
exports.AddSurveyPointTypeComponent = AddSurveyPointTypeComponent;
//# sourceMappingURL=add-survey-point-type-dialog.js.map