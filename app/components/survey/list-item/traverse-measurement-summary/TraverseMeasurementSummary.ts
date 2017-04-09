// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {TraverseMeasurementSummary_SurvMeas} from "./../../../../services/surveyDb/types/TraverseMeasurementSummary";
import {EditSurveyMeasurementProvider} from "../../form";

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
            this._editProvider.edit(this._SurvMeass.MeasID);
        }

}