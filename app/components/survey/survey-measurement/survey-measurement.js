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
var types_1 = require("../../../services/surveyDb/types");
var webAPI_1 = require("../../../services/surveyDb/webAPI");
var material_1 = require("@angular/material");
var edit_survey_measurement_1 = require("./edit/edit-survey-measurement");
require("./survey-measurement.scss");
var SurveyMeasurementComponent = (function () {
    function SurveyMeasurementComponent(_dialogService, measurementService, measProvider) {
        this._dialogService = _dialogService;
        this.measurementService = measurementService;
        this.measProvider = measProvider;
    }
    SurveyMeasurementComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyMeasurementComponent.prototype, "SurveyMeasurement", {
        get: function () {
            return this._surveyMeasurement;
        },
        set: function (value) {
            this._surveyMeasurement = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyMeasurementComponent.prototype.onEditMeasurement = function () {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        this.measProvider.SurveyMeasurement = this.SurveyMeasurement;
        this._dialogService.open(edit_survey_measurement_1.EditSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                console.log(JSON.stringify(result));
                _this.measurementService.updateToDatabase(result)
                    .subscribe(function (result) {
                    // this.onUpdatePointEvent.emit(result);
                    // Tell parent to update...
                    console.log("this.pointService.updateToDatabase", result);
                });
            }
            else {
                console.log("Cancel");
            }
        });
    };
    return SurveyMeasurementComponent;
}());
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