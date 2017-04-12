// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveySummary} from "./../../../../services/surveyDb/types/SurveySummary";
import {EditSurveyProvider} from "./../../edit-providers";

require("./survey-summary-list-row.scss");

@Component (
    {
        selector: "survey-summary",
        templateUrl: "./survey-summary-list-row.html"
    }
)
export class SurveySummaryListRowComponent implements OnInit
{
        private _SurveySummary: SurveySummary;
        constructor(
            protected _editProvider: EditSurveyProvider
        )
        {
        }

        ngOnInit(): void
        {
        }

        @Input()
        set SurveySummary(value: SurveySummary)
        {
            this._SurveySummary = value;
        }

        get SurveySummary(): SurveySummary
        {
            return this._SurveySummary;
        }
        onEdit()
        {
            this._editProvider.editID(this._SurveySummary.ID);
        }

}