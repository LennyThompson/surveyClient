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
const types_1 = require("../../../services/surveyDb/types");
const webAPI_1 = require("../../../services/surveyDb/webAPI");
const material_1 = require("@angular/material");
const edit_survey_measurement_1 = require("./edit/edit-survey-measurement");
require("./survey-measurement.scss");
let SurveyMeasurementComponent = class SurveyMeasurementComponent {
    constructor(_dialogService, measurementService, measProvider) {
        this._dialogService = _dialogService;
        this.measurementService = measurementService;
        this.measProvider = measProvider;
    }
    ngOnInit() {
    }
    set SurveyMeasurement(value) {
        this._surveyMeasurement = value;
    }
    get SurveyMeasurement() {
        return this._surveyMeasurement;
    }
    onEditMeasurement() {
        let config = new material_1.MdDialogConfig();
        this.measProvider.SurveyMeasurement = this.SurveyMeasurement;
        this._dialogService.open(edit_survey_measurement_1.EditSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                console.log(JSON.stringify(result));
                this.measurementService.updateToDatabase(result)
                    .subscribe((result) => {
                    // this.onUpdatePointEvent.emit(result);
                    // Tell parent to update...
                    console.log("this.pointService.updateToDatabase", result);
                });
            }
            else {
                console.log("Cancel");
            }
        });
    }
};
__decorate([
    core_1.Input("measurement"),
    __metadata("design:type", types_1.SurveyMeasurement),
    __metadata("design:paramtypes", [types_1.SurveyMeasurement])
], SurveyMeasurementComponent.prototype, "SurveyMeasurement", null);
SurveyMeasurementComponent = __decorate([
    core_1.Component({
        selector: "survey-measurement",
        templateUrl: "survey-measurement.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialog,
        webAPI_1.SurveyMeasurementServiceHttp,
        webAPI_1.CurrentSurveyMeasurementProvider])
], SurveyMeasurementComponent);
exports.SurveyMeasurementComponent = SurveyMeasurementComponent;
//# sourceMappingURL=survey-measurement.js.map