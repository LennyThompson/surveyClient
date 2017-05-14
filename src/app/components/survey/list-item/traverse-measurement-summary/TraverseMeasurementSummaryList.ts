// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
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
        _TraverseMeasurementSummary: TraverseMeasurementSummary;
        constructor(
            private _addSurveyMeasurement: EditSurveyMeasurementProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set TraverseMeasurementSummary(value: TraverseMeasurementSummary)
        {
            this._TraverseMeasurementSummary = value;
        }
        get TraverseMeasurementSummary(): TraverseMeasurementSummary
        {
            return this._TraverseMeasurementSummary;
        }

        get hasValidList(): boolean
        {
            return this.TraverseMeasurementSummary !== undefined && this.TraverseMeasurementSummary !== null;
        }

        onAddSurveyMeasurement()
        {
            this._addSurveyMeasurement.addSurveyMeasurement();
        }
}