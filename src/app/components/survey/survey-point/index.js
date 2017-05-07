"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const survey_point_1 = require("./survey-point");
const add_survey_point_1 = require("./add/add-survey-point");
const edit_survey_point_1 = require("./edit/edit-survey-point");
const survey_summary_point_list_1 = require("./summary/list/survey-summary-point-list");
exports.SURVEY_POINT_COMPONENTS = [
    survey_point_1.SurveyPointComponent,
    add_survey_point_1.AddSurveyPointComponent,
    edit_survey_point_1.EditSurveyPointComponent,
    survey_summary_point_list_1.SurveyPointSummaryListComponent
];
var survey_point_2 = require("./survey-point");
exports.SurveyPointComponent = survey_point_2.SurveyPointComponent;
var add_survey_point_2 = require("./add/add-survey-point");
exports.AddSurveyPointComponent = add_survey_point_2.AddSurveyPointComponent;
var edit_survey_point_2 = require("./edit/edit-survey-point");
exports.EditSurveyPointComponent = edit_survey_point_2.EditSurveyPointComponent;
var survey_summary_point_list_2 = require("./summary/list/survey-summary-point-list");
exports.SurveyPointSummaryListComponent = survey_summary_point_list_2.SurveyPointSummaryListComponent;
//# sourceMappingURL=index.js.map