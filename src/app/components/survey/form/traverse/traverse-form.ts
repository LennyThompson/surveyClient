// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Traverse} from "./../../../../services/surveyDb/types";
import {TraverseMeasurementSummary} from "../../../../services/surveyDb/types/TraverseMeasurementSummary";
import {Observable} from "rxjs";
import {TraverseMeasurementSummarySubjectProvider} from "../../../../services/surveyDb/webAPI/traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

@Component (
    {
        selector: "traverse-form",
        templateUrl: "./traverse-form.html",
        styleUrls: ["./traverse-form.scss"]
    }
)
export class TraverseComponent implements OnInit
{
    private _Traverse: Traverse;
    constructor(private _TarvserMeasurementSummary: TraverseMeasurementSummarySubjectProvider)
    {
        this._Traverse = new Traverse();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Traverse(value: Traverse)
    {
        this._Traverse = value;
    }

    get Traverse(): Traverse
    {
        return this._Traverse;
    }

    get traverseSummary(): Observable<TraverseMeasurementSummary>
    {
        if(this._Traverse && this._Traverse.ID > 0)
        {
            return this._TarvserMeasurementSummary.getTraverseMeasurementSummarySummary();
        }
        return new Observable<TraverseMeasurementSummary>(null);
    }
}