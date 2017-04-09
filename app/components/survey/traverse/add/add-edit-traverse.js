"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyMeasurement_1 = require("../../../../services/surveyDb/types/SurveyMeasurement");
var survey_measurement_1 = require("../../survey-measurement");
var material_1 = require("@angular/material");
var edit_survey_point_1 = require("../../survey-point/edit/edit-survey-point");
var TraverseEditBaseComponent = (function () {
    function TraverseEditBaseComponent(_dialogService, surveyCalc, travProvider, pointProvider, measProvider, pointService) {
        this._dialogService = _dialogService;
        this.surveyCalc = surveyCalc;
        this.travProvider = travProvider;
        this.pointProvider = pointProvider;
        this.measProvider = measProvider;
        this.pointService = pointService;
    }
    Object.defineProperty(TraverseEditBaseComponent.prototype, "Traverse", {
        get: function () {
            return this.travProvider.Traverse;
        },
        set: function (value) {
            this.travProvider.Traverse = value;
        },
        enumerable: true,
        configurable: true
    });
    TraverseEditBaseComponent.prototype.onAddMeasurement = function () {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        this.measProvider.SurveyMeasurement = new SurveyMeasurement_1.SurveyMeasurement();
        if (this.Traverse.SurveyMeasurement.length) {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.SurveyMeasurement[this.Traverse.SurveyMeasurement.length - 1].PointTo;
        }
        else if (this.Traverse.StartPoint) {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.StartPoint;
        }
        this._dialogService.open(survey_measurement_1.AddSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                result.Bearing = _this.surveyCalc.toDegrees(result.Bearing);
                result.SurveyID = 1;
                _this.addMeasurementToTraverse(result);
            }
            else {
                console.log("Cancel");
            }
        });
    };
    TraverseEditBaseComponent.prototype.isValidPoint = function (ptTest) {
        // TODO: improve this test...
        if (ptTest.X === 0 && ptTest.Y === 0 && ptTest.Y === 0) {
            return false;
        }
        return true;
    };
    TraverseEditBaseComponent.prototype.addMeasurementToTraverse = function (measAdd) {
        var _this = this;
        if (!this.isValidPoint(measAdd.PointTo)) {
            this.surveyCalc.updateMeasurement(measAdd);
            this.pointProvider.SurveyPoint = measAdd.PointTo;
            var config = new material_1.MdDialogConfig();
            this._dialogService.open(edit_survey_point_1.EditSurveyPointComponent, config)
                .afterClosed()
                .subscribe(function (result) {
                if (result) {
                    var firstReturn = _this.pointService.saveSurveyPointForSurvey(result).first();
                    firstReturn.subscribe(function (point) {
                        measAdd.PointTo = point;
                        _this.Traverse.addSurveyMeasurement(measAdd);
                    });
                }
                else {
                    console.log("Cancel");
                }
            });
        }
        else {
            this.Traverse.addSurveyMeasurement(measAdd);
        }
    };
    return TraverseEditBaseComponent;
}());
exports.TraverseEditBaseComponent = TraverseEditBaseComponent;
//# sourceMappingURL=add-edit-traverse.js.map