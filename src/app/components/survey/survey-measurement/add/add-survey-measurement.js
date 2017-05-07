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
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const add_edit_survey_measurement_1 = require("./add-edit-survey-measurement");
const webAPI_1 = require("../../../../services/surveyDb/webAPI");
require("./add-survey-measurement.scss");
let AddSurveyMeasurementComponent = class AddSurveyMeasurementComponent extends add_edit_survey_measurement_1.AddEditSurveyMeasurement {
    constructor(_dialog, measProvider) {
        super(_dialog, measProvider);
    }
};
AddSurveyMeasurementComponent = __decorate([
    core_1.Component({
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        webAPI_1.CurrentSurveyMeasurementProvider])
], AddSurveyMeasurementComponent);
exports.AddSurveyMeasurementComponent = AddSurveyMeasurementComponent;
//# sourceMappingURL=add-survey-measurement.js.map