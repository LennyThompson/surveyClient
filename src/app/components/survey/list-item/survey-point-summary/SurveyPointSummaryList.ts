// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";
import {EditSurveyPointProvider} from "../../edit-providers/survey-point/SurveyPoint";
import {SurveyPointSummary} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-point-summary-list",
        templateUrl: "./survey-point-summary-list.html",
        styleUrls: ["./survey-point-summary-list.scss"]
    }
)
export class SurveyPointSummaryListComponent implements OnInit
{
        _SurveyPointSummary: Observable<SurveyPointSummary>;
        constructor(
            private _addSurveyPoint: EditSurveyPointProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set SurveyPointSummary(value: Observable<SurveyPointSummary>)
        {
            this._SurveyPointSummary = value;
        }
        get SurveyPointSummary(): Observable<SurveyPointSummary>
        {
            return this._SurveyPointSummary;
        }

        onAddSurveyPoint()
        {
            this._addSurveyPoint.addSurveyPoint();
        }
}