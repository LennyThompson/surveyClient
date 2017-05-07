
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdCardModule, MdDialogModule, MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {SurveyRouter} from "./survey.routes";
import {SurveyDetailsComponent} from "./details/survey-details";
import {SurveyListComponent} from "./list/survey-list";
import {SurveyComponent} from "./survey";

import {
    HTTP_PROVIDERS, SUBJECT_PROVIDERS, SIMPLE_PROVIDERS
} from "../../services/surveyDb/webAPI/index";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CoordFormat} from "./pipes/format-coord";
import {BearingFormat} from "./pipes/format-bearing";
import {DmsBearingFormat} from "./pipes/format-dms-bearing";
import {AddSurveyPointComponent} from "./survey-point/add/add-survey-point";
import {EditSurveyPointComponent} from "./survey-point/edit/edit-survey-point";
import {SurveyPointSummaryListComponent} from "./survey-point/summary/list/survey-summary-point-list";
import {FORM_COMPONENTS, ENTRY_COMPONENTS} from "./form";
import { SELECT_COMPONENTS } from "./select";
import { LIST_ITEM_COMPONENTS } from "./list-item";
import {AddTraverseComponent} from "./traverse/add/add-traverse";
import {AddSurveyMeasurementComponent} from "./survey-measurement";
import {SurveyCalculator} from "../../services/surveyCalc/surveyCalculator";
import {EditTraverseComponent} from "./traverse/edit/edit-traverse";
import {SURVEY_TRAVERSE_COMPONENTS} from "./traverse/index";
import {SURVEY_MEASUREMENT_COMPONENTS, EditSurveyMeasurementComponent} from "./survey-measurement";
import {SURVEY_POINT_COMPONENTS} from "./survey-point/index";

import { BearingInputContainer} from "./utils/bearing-input/bearing-input";
import {Debounce} from "./utils/debounce";
import {TraverseDrawingComponent} from "./traverse/drawing/trav-drawing";
import {BearingPlaceholder} from "./pipes/bearing-placeholder";
import {HorizontalDistancePlaceholder} from "./pipes/horiz-distance-placeholder";
import {VerticalDistancePlaceholder} from "./pipes/vert-distance-placeholder";
import {TraverseMeasurementSummarySubjectProvider} from "../../services/surveyDb/webAPI";
import {EDIT_PROVIDER_COMPONENTS} from "./edit-providers";

import "./../../services/surveyDb/types";
import {SUBJECT_ACCESSORS} from "../../services/surveyDb/webAPI/AccessorIndex";

@NgModule (
    {
        imports: [
            CommonModule,
            FormsModule,
            FlexLayoutModule,
            MdCardModule,
            MdSelectModule,
            MdDialogModule,
            MdInputModule,
            BrowserAnimationsModule,
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
            BearingPlaceholder,
            HorizontalDistancePlaceholder,
            VerticalDistancePlaceholder,
            DmsBearingFormat,
            FORM_COMPONENTS,
            SELECT_COMPONENTS,
            SURVEY_MEASUREMENT_COMPONENTS,
            LIST_ITEM_COMPONENTS,
            BearingInputContainer,
            Debounce,
            TraverseDrawingComponent,
            ENTRY_COMPONENTS
        ],
        // This is where the components used in mdDialog need to be declared
        // see https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-entry-component-defined
        entryComponents: [
            AddSurveyPointComponent,
            EditSurveyPointComponent,
            AddTraverseComponent,
            EditTraverseComponent,
            AddSurveyMeasurementComponent,
            EditSurveyMeasurementComponent,
            ENTRY_COMPONENTS
        ],
        providers: [
            SUBJECT_PROVIDERS,
            SUBJECT_ACCESSORS,
            HTTP_PROVIDERS,
            SIMPLE_PROVIDERS,
            EDIT_PROVIDER_COMPONENTS,
            TraverseMeasurementSummarySubjectProvider,
            CoordFormat,
            BearingFormat,
            BearingPlaceholder,
            HorizontalDistancePlaceholder,
            VerticalDistancePlaceholder,
            DmsBearingFormat,
            SurveyCalculator
        ]
    }
)
export class SurveyModule {}
