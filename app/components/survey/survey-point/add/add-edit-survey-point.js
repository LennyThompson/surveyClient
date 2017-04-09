"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddEditSurveyPoint = (function () {
    function AddEditSurveyPoint(pointProvider) {
        this.pointProvider = pointProvider;
    }
    Object.defineProperty(AddEditSurveyPoint.prototype, "Point", {
        get: function () {
            return this.pointProvider.SurveyPoint;
        },
        set: function (value) {
            this.pointProvider.SurveyPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddEditSurveyPoint;
}());
exports.AddEditSurveyPoint = AddEditSurveyPoint;
//# sourceMappingURL=add-edit-survey-point.js.map