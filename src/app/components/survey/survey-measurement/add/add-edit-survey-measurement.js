"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddEditSurveyMeasurement {
    constructor(_dialog, measProvider) {
        this._dialog = _dialog;
        this.measProvider = measProvider;
    }
    get SurveyMeasurement() {
        return this.measProvider.SurveyMeasurement;
    }
    set SurveyMeasurement(value) {
        this.measProvider.SurveyMeasurement = value;
    }
}
exports.AddEditSurveyMeasurement = AddEditSurveyMeasurement;
//# sourceMappingURL=add-edit-survey-measurement.js.map