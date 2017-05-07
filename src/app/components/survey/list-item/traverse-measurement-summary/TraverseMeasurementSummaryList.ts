// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";
import {EditSurveyMeasurementProvider} from "../../edit-providers/survey-measurement/SurveyMeasurement";
import {TraverseMeasurementSummary} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "traverse-measurement-summary-list",
        templateUrl: "./traverse-measurement-summary-list.html",
        styleUrls: ["./traverse-measurement-summary-list.scss"]
    }
)
export class TraverseMeasurementSummaryListComponent implements OnInit
{
        _TraverseMeasurementSummary: Observable<TraverseMeasurementSummary>;
        constructor(
            private _addSurveyMeasurement: EditSurveyMeasurementProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set TraverseMeasurementSummary(value: Observable<TraverseMeasurementSummary>)
        {
            this._TraverseMeasurementSummary = value;
        }
        get TraverseMeasurementSummary(): Observable<TraverseMeasurementSummary>
        {
            return this._TraverseMeasurementSummary;
        }

        onAddSurveyMeasurement()
        {
            this._addSurveyMeasurement.addSurveyMeasurement();
        }
}