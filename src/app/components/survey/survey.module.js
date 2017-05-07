"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
const material_2 = require("@angular/material");
const survey_routes_1 = require("./survey.routes");
const survey_details_1 = require("./details/survey-details");
const survey_list_1 = require("./list/survey-list");
const survey_1 = require("./survey");
const index_1 = require("../../services/surveyDb/webAPI/index");
const flex_layout_1 = require("@angular/flex-layout");
const format_coord_1 = require("./pipes/format-coord");
const format_bearing_1 = require("./pipes/format-bearing");
const format_dms_bearing_1 = require("./pipes/format-dms-bearing");
const add_survey_point_1 = require("./survey-point/add/add-survey-point");
const edit_survey_point_1 = require("./survey-point/edit/edit-survey-point");
const survey_summary_point_list_1 = require("./survey-point/summary/list/survey-summary-point-list");
const form_1 = require("./form");
const select_1 = require("./select");
const list_item_1 = require("./list-item");
const add_traverse_1 = require("./traverse/add/add-traverse");
const survey_measurement_1 = require("./survey-measurement");
const surveyCalculator_1 = require("../../services/surveyCalc/surveyCalculator");
const edit_traverse_1 = require("./traverse/edit/edit-traverse");
const index_2 = require("./traverse/index");
const survey_measurement_2 = require("./survey-measurement");
const index_3 = require("./survey-point/index");
const bearing_input_1 = require("./utils/bearing-input/bearing-input");
const debounce_1 = require("./utils/debounce");
const trav_drawing_1 = require("./traverse/drawing/trav-drawing");
const bearing_placeholder_1 = require("./pipes/bearing-placeholder");
const horiz_distance_placeholder_1 = require("./pipes/horiz-distance-placeholder");
const vert_distance_placeholder_1 = require("./pipes/vert-distance-placeholder");
const webAPI_1 = require("../../services/surveyDb/webAPI");
let SurveyModule = class SurveyModule {
};
SurveyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            flex_layout_1.FlexLayoutModule,
            survey_routes_1.SurveyRouter,
            material_1.MdCardModule,
            material_2.MdSelectModule
        ],
        declarations: [
            survey_list_1.SurveyListComponent,
            survey_1.SurveyComponent,
            survey_details_1.SurveyDetailsComponent,
            survey_summary_point_list_1.SurveyPointSummaryListComponent,
            index_2.SURVEY_TRAVERSE_COMPONENTS,
            index_3.SURVEY_POINT_COMPONENTS,
            format_coord_1.CoordFormat,
            format_bearing_1.BearingFormat,
            bearing_placeholder_1.BearingPlaceholder,
            horiz_distance_placeholder_1.HorizontalDistancePlaceholder,
            vert_distance_placeholder_1.VerticalDistancePlaceholder,
            format_dms_bearing_1.DmsBearingFormat,
            form_1.FORM_COMPONENTS,
            select_1.SELECT_COMPONENTS,
            survey_measurement_2.SURVEY_MEASUREMENT_COMPONENTS,
            list_item_1.LIST_ITEM_COMPONENTS,
            bearing_input_1.BearingInputContainer,
            debounce_1.Debounce,
            trav_drawing_1.TraverseDrawingComponent
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            add_survey_point_1.AddSurveyPointComponent,
            edit_survey_point_1.EditSurveyPointComponent,
            add_traverse_1.AddTraverseComponent,
            edit_traverse_1.EditTraverseComponent,
            survey_measurement_1.AddSurveyMeasurementComponent,
            survey_measurement_2.EditSurveyMeasurementComponent
        ],
        providers: [
            index_1.SUBJECT_PROVIDERS,
            index_1.HTTP_PROVIDERS,
            index_1.SIMPLE_PROVIDERS,
            webAPI_1.TraverseMeasurementSummarySubjectProvider,
            format_coord_1.CoordFormat,
            format_bearing_1.BearingFormat,
            bearing_placeholder_1.BearingPlaceholder,
            horiz_distance_placeholder_1.HorizontalDistancePlaceholder,
            vert_distance_placeholder_1.VerticalDistancePlaceholder,
            format_dms_bearing_1.DmsBearingFormat,
            surveyCalculator_1.SurveyCalculator
        ]
    })
], SurveyModule);
exports.SurveyModule = SurveyModule;
//# sourceMappingURL=survey.module.js.map