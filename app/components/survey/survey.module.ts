
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
import {TraverseSummaryComponent} from "./traverse/traverse";
import {TraverseMeasurementComponent} from "./traverse/traverse-measurement/trav-measurement";
import {BearingFormat} from "./pipes/format-bearing";
import {MaterialModule} from "@angular/material";
import {AddSurveyPointComponent} from "./survey-point/add/add-survey-point";
import {CLIENT_PROVIDERS} from "../../services/clientProviders/index";
import {EditSurveyPointComponent} from "./survey-point/edit/edit-survey-point";
import {SurveyPointTypesComponent} from "./utils/survey-point-types";
import {SurveyReferenceSelectComponent} from "./utils/survey-reference-select";
import {SurveyPointSummaryListComponent} from "./survey-point/list/survey-summary-point-list";

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
            TraverseSummaryComponent,
            TraverseMeasurementComponent,
            AddSurveyPointComponent,
            EditSurveyPointComponent,
            SurveyPointTypesComponent,
            SurveyReferenceSelectComponent,
            CoordFormat,
            BearingFormat
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            AddSurveyPointComponent,
            EditSurveyPointComponent
        ],
        providers: [
            HTTP_PROVIDERS,
            CLIENT_PROVIDERS
        ]
    }
)
export class SurveyModule {}