// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";

import {SurveySummary} from "./../../../../services/surveyDb/types";

require("./survey-summary-list.scss");

@Component (
    {
        selector: "survey-summary-list",
        templateUrl: "./survey-summary-list.html"
    }
)
export class SurveySummaryListComponent implements OnInit
{
        _SurveySummaryList: Observable<SurveySummary[]>;
        constructor(
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set SurveySummaryList(value: Observable<SurveySummary[]>)
        {
            this._SurveySummaryList = value;
        }
        get SurveySummaryList(): Observable<SurveySummary[]>
        {
            return this._SurveySummaryList;
        }
}