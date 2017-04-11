// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {TraverseMeasurementSummary_SurvMeas} from "./../../../../services/surveyDb/types/TraverseMeasurementSummary";
import {EditSurveyMeasurementProvider} from "./../../edit-providers";

require("./traverse-measurement-summary-list-row.scss");

@Component (
    {
        selector: "traverse-measurement-summary",
        templateUrl: "./traverse-measurement-summary-list-row.html"
    }
)
export class TraverseMeasurementSummaryListRowComponent implements OnInit
{
        private _SurvMeass: TraverseMeasurementSummary_SurvMeas;
        constructor(
            protected _editProvider: EditSurveyMeasurementProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set SurvMeass(value: TraverseMeasurementSummary_SurvMeas)
        {
            this._SurvMeass = value;
        }

        get SurvMeass(): TraverseMeasurementSummary_SurvMeas
        {
            return this._SurvMeass;
        }
        onEdit()
        {
            this._editProvider.editID(this._SurvMeass.MeasID);
        }

}