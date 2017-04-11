"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var survey_routes_1 = require("./survey.routes");
var survey_details_1 = require("./details/survey-details");
var survey_list_1 = require("./list/survey-list");
var survey_1 = require("./survey");
var index_1 = require("../../services/surveyDb/webAPI/index");
var flex_layout_1 = require("@angular/flex-layout");
var format_coord_1 = require("./pipes/format-coord");
var format_bearing_1 = require("./pipes/format-bearing");
var format_dms_bearing_1 = require("./pipes/format-dms-bearing");
var material_1 = require("@angular/material");
var add_survey_point_1 = require("./survey-point/add/add-survey-point");
var edit_survey_point_1 = require("./survey-point/edit/edit-survey-point");
var survey_summary_point_list_1 = require("./survey-point/summary/list/survey-summary-point-list");
var form_1 = require("./form");
var select_1 = require("./select");
var list_item_1 = require("./list-item");
var add_traverse_1 = require("./traverse/add/add-traverse");
var survey_measurement_1 = require("./survey-measurement");
var surveyCalculator_1 = require("../../services/surveyCalc/surveyCalculator");
var edit_traverse_1 = require("./traverse/edit/edit-traverse");
var index_2 = require("./traverse/index");
var survey_measurement_2 = require("./survey-measurement");
var index_3 = require("./survey-point/index");
var angular2_text_mask_1 = require("angular2-text-mask");
var bearing_input_1 = require("./utils/bearing-input/bearing-input");
var debounce_1 = require("./utils/debounce");
var trav_drawing_1 = require("./traverse/drawing/trav-drawing");
var bearing_placeholder_1 = require("./pipes/bearing-placeholder");
var horiz_distance_placeholder_1 = require("./pipes/horiz-distance-placeholder");
var vert_distance_placeholder_1 = require("./pipes/vert-distance-placeholder");
var webAPI_1 = require("../../services/surveyDb/webAPI");
var SurveyModule = (function () {
    function SurveyModule() {
    }
    return SurveyModule;
}());
SurveyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            survey_routes_1.SurveyRouter,
            angular2_text_mask_1.TextMaskModule
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