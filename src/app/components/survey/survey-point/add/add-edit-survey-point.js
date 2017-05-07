"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddEditSurveyPoint {
    constructor(pointProvider) {
        this.pointProvider = pointProvider;
    }
    set Point(value) {
        this.pointProvider.SurveyPoint = value;
    }
    get Point() {
        return this.pointProvider.SurveyPoint;
    }
}
exports.AddEditSurveyPoint = AddEditSurveyPoint;
//# sourceMappingURL=add-edit-survey-point.js.map