// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";

import {TraverseMeasurementSummary} from "./../../../../services/surveyDb/types";

require("./traverse-measurement-summary-list.scss");

@Component (
    {
        selector: "traverse-measurement-summary-list",
        templateUrl: "./traverse-measurement-summary-list.html"
    }
)
export class TraverseMeasurementSummaryListComponent implements OnInit
{
        _TraverseMeasurementSummary: Observable<TraverseMeasurementSummary>;
        constructor(
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
}