"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var simple_providers_1 = require("./../../simple-providers");
var material_1 = require("@angular/material");
var add_edit_survey_measurement_1 = require("./add-edit-survey-measurement");
require("./add-survey-measurement.scss");
var AddSurveyMeasurementComponent = (function (_super) {
    __extends(AddSurveyMeasurementComponent, _super);
    function AddSurveyMeasurementComponent(_dialog, measProvider) {
        return _super.call(this, _dialog, measProvider) || this;
    }
    return AddSurveyMeasurementComponent;
}(add_edit_survey_measurement_1.AddEditSurveyMeasurement));
AddSurveyMeasurementComponent = __decorate([
    core_1.Component({
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        simple_providers_1.CurrentSurveyMeasurementProvider])
], AddSurveyMeasurementComponent);
exports.AddSurveyMeasurementComponent = AddSurveyMeasurementComponent;
//# sourceMappingURL=add-survey-measurement.js.map