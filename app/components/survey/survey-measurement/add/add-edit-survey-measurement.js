"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddEditSurveyMeasurement = (function () {
    function AddEditSurveyMeasurement(_dialog, measProvider) {
        this._dialog = _dialog;
        this.measProvider = measProvider;
    }
    Object.defineProperty(AddEditSurveyMeasurement.prototype, "SurveyMeasurement", {
        get: function () {
            return this.measProvider.SurveyMeasurement;
        },
        set: function (value) {
            this.measProvider.SurveyMeasurement = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddEditSurveyMeasurement;
}());
exports.AddEditSurveyMeasurement = AddEditSurveyMeasurement;
//# sourceMappingURL=add-edit-survey-measurement.js.map