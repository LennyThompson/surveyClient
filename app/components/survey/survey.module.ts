
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
import {TraverseSummaryComponent} from "./traverse/traverse-summary";
import {
    TraverseMeasurementSummaryComponent
} from "./traverse/traverse-measurement/summary/trav-measurement";
import {BearingFormat} from "./pipes/format-bearing";
import {MaterialModule} from "@angular/material";
import {AddSurveyPointComponent} from "./survey-point/add/add-survey-point";
import {CLIENT_PROVIDERS} from "../../services/clientProviders/index";
import {EditSurveyPointComponent} from "./survey-point/edit/edit-survey-point";
import {SurveyPointSummaryListComponent} from "./survey-point/list/survey-summary-point-list";
import { FORM_COMPONENTS } from "./form";
import { SELECT_COMPONENTS } from "./select";
import {AddTraverseComponent} from "./traverse/add/add-traverse";
import {AddTraverseMeasurementComponent} from "./traverse/traverse-measurement/add/add-traverse-measurement";
import {TraverseMeasurementComponent} from "./traverse/traverse-measurement/traverse-measurement";
import {SurveyCalculator} from "../../services/surveyCalc/surveyCalculator";
import {TravserseSummaryListComponent} from "./traverse/list/travserse-summary-list";

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
            SurveyPointComponent,
            SurveyPointSummaryListComponent,
            TravserseSummaryListComponent,
            TraverseSummaryComponent,
            TraverseMeasurementSummaryComponent,
            TraverseMeasurementComponent,
            AddSurveyPointComponent,
            EditSurveyPointComponent,
            CoordFormat,
            BearingFormat,
            AddTraverseComponent,
            AddTraverseMeasurementComponent,
            FORM_COMPONENTS,
            SELECT_COMPONENTS
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            AddSurveyPointComponent,
            EditSurveyPointComponent,
            AddTraverseComponent,
            AddTraverseMeasurementComponent
        ],
        providers: [
            HTTP_PROVIDERS,
            CLIENT_PROVIDERS,
            CoordFormat,
            BearingFormat,
            SurveyCalculator
        ]
    }
)
export class SurveyModule {}