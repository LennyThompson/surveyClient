"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SurveyMeasurement_1 = require("../../../../services/surveyDb/types/SurveyMeasurement");
const survey_measurement_1 = require("../../survey-measurement");
const material_1 = require("@angular/material");
const edit_survey_point_1 = require("../../survey-point/edit/edit-survey-point");
class TraverseEditBaseComponent {
    constructor(_dialogService, surveyCalc, travProvider, pointProvider, measProvider, pointService) {
        this._dialogService = _dialogService;
        this.surveyCalc = surveyCalc;
        this.travProvider = travProvider;
        this.pointProvider = pointProvider;
        this.measProvider = measProvider;
        this.pointService = pointService;
    }
    get Traverse() {
        return this.travProvider.Traverse;
    }
    set Traverse(value) {
        this.travProvider.Traverse = value;
    }
    onAddMeasurement() {
        let config = new material_1.MdDialogConfig();
        this.measProvider.SurveyMeasurement = new SurveyMeasurement_1.SurveyMeasurement();
        if (this.Traverse.SurveyMeasurement.length) {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.SurveyMeasurement[this.Traverse.SurveyMeasurement.length - 1].PointTo;
        }
        else if (this.Traverse.StartPoint) {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.StartPoint;
        }
        this._dialogService.open(survey_measurement_1.AddSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                result.Bearing = this.surveyCalc.toDegrees(result.Bearing);
                result.SurveyID = 1;
                this.addMeasurementToTraverse(result);
            }
            else {
                console.log("Cancel");
            }
        });
    }
    isValidPoint(ptTest) {
        // TODO: improve this test...
        if (ptTest.X === 0 && ptTest.Y === 0 && ptTest.Y === 0) {
            return false;
        }
        return true;
    }
    addMeasurementToTraverse(measAdd) {
        if (!this.isValidPoint(measAdd.PointTo)) {
            this.surveyCalc.updateMeasurement(measAdd);
            this.pointProvider.SurveyPoint = measAdd.PointTo;
            let config = new material_1.MdDialogConfig();
            this._dialogService.open(edit_survey_point_1.EditSurveyPointComponent, config)
                .afterClosed()
                .subscribe((result) => {
                if (result) {
                    let firstReturn = this.pointService.saveSurveyPointForSurvey(result).first();
                    firstReturn.subscribe((point) => {
                        measAdd.PointTo = point;
                        this.Traverse.addSurveyMeasurement(measAdd);
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
    }
}
exports.TraverseEditBaseComponent = TraverseEditBaseComponent;
//# sourceMappingURL=add-edit-traverse.js.map