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
var material_1 = require("@angular/material");
var add_edit_survey_measurement_1 = require("../add/add-edit-survey-measurement");
var webAPI_1 = require("../../../../services/surveyDb/webAPI");
require("./../add/add-survey-measurement.scss");
var EditSurveyMeasurementComponent = (function (_super) {
    __extends(EditSurveyMeasurementComponent, _super);
    function EditSurveyMeasurementComponent(_dialog, measProvider) {
        return _super.call(this, _dialog, measProvider) || this;
    }
    return EditSurveyMeasurementComponent;
}(add_edit_survey_measurement_1.AddEditSurveyMeasurement));
EditSurveyMeasurementComponent = __decorate([
    core_1.Component({
        selector: "edit-survey-measurement-dialog",
        templateUrl: "../add/add-survey-measurement.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        webAPI_1.CurrentSurveyMeasurementProvider])
], EditSurveyMeasurementComponent);
exports.EditSurveyMeasurementComponent = EditSurveyMeasurementComponent;
//# sourceMappingURL=edit-survey-measurement.js.map