// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import {Component, OnInit, Input} from "@angular/core";
import {Observable} from "rxjs";
import {EditSurveyProvider} from "../../edit-providers/survey/Survey";
import {SurveySummary} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-summary-list",
        templateUrl: "./survey-summary-list.html",
        styleUrls: ["./survey-summary-list.scss"]
    }
)
export class SurveySummaryListComponent implements OnInit
{
        _SurveySummaryList: SurveySummary[];
        constructor(
            private _addSurvey: EditSurveyProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set SurveySummaryList(value: SurveySummary[])
        {
            this._SurveySummaryList = value;
        }
        get SurveySummaryList(): SurveySummary[]
        {
            return this._SurveySummaryList;
        }

        onAddSurvey()
        {
            this._addSurvey.addSurvey();
        }
}