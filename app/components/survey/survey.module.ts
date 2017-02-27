
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SurveyRouter} from "./survey.routes";
import {SurveyDetailsComponent} from "./details/survey-details";
import {SurveyPointComponent} from "./survey-point/survey-point";
import {SurveyListComponent} from "./list/survey-list";
import {SurveyComponent} from "./survey";

import {HTTP_PROVIDERS} from "../../services/surveyDb/webAPI/index";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CoordFormat} from "./pipes/format-coord";
import {BearingFormat} from "./pipes/format-bearing";
import {MaterialModule} from "@angular/material";
import {AddSurveyPointComponent} from "./survey-point/add/add-survey-point";
import {SIMPLE_PROVIDER_COMPONENTS} from "./simple-providers";
import {EditSurveyPointComponent} from "./survey-point/edit/edit-survey-point";
import {SurveyPointSummaryListComponent} from "./survey-point/summary/list/survey-summary-point-list";
import { FORM_COMPONENTS } from "./form";
import { SELECT_COMPONENTS } from "./select";
import {AddTraverseComponent} from "./traverse/add/add-traverse";
import {AddSurveyMeasurementComponent} from "./survey-measurement";
import {SurveyCalculator} from "../../services/surveyCalc/surveyCalculator";
import {EditTraverseComponent} from "./traverse/edit/edit-traverse";
import {SURVEY_TRAVERSE_COMPONENTS} from "./traverse/index";
import {SURVEY_MEASUREMENT_COMPONENTS, EditSurveyMeasurementComponent} from "./survey-measurement";
import {SURVEY_POINT_COMPONENTS} from "./survey-point/index";

@NgModule (
    {
        imports: [
            CommonModule,
            FormsModule,
            MaterialModule.forRoot(),
            FlexLayoutModule.forRoot(),
            SurveyRouter
        ],
        declarations: [
            SurveyListComponent,
            SurveyComponent,
            SurveyDetailsComponent,
            SurveyPointSummaryListComponent,
            SURVEY_TRAVERSE_COMPONENTS,
            SURVEY_POINT_COMPONENTS,
            CoordFormat,
            BearingFormat,
            FORM_COMPONENTS,
            SELECT_COMPONENTS,
            SURVEY_MEASUREMENT_COMPONENTS
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            AddSurveyPointComponent,
            EditSurveyPointComponent,
            AddTraverseComponent,
            EditTraverseComponent,
            AddSurveyMeasurementComponent,
            EditSurveyMeasurementComponent
        ],
        providers: [
            HTTP_PROVIDERS,
            SIMPLE_PROVIDER_COMPONENTS,
            CoordFormat,
            BearingFormat,
            SurveyCalculator
        ]
    }
)
export class SurveyModule {}