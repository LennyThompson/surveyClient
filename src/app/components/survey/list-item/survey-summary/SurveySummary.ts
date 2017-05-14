// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";
import {SurveySummary} from "./../../../../services/surveyDb/types/SurveySummary";
import {EditSurveyProvider, EditTraverseProvider} from "./../../edit-providers";
import {SurveySummary_Trav} from "./../../../../services/surveyDb/types/SurveySummary";



@Component (
    {
        selector: "survey-summary",
        templateUrl: "./survey-summary-list-row.html",
        styleUrls: ["./survey-summary-list-row.scss"]
    }
)
export class SurveySummaryListRowComponent implements OnInit
{
        private _SurveySummary: SurveySummary;
        private _expanded: boolean = false;
        constructor(
            protected _editProvider: EditSurveyProvider
            , protected _currentProvider: CurrentSurveyProvider
            , protected _editTraverseProvider: EditTraverseProvider

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
        onDelete()
        {
            //this._deleteProvider.delete(this.SurveySummary.ID);
        }

        get isExpanded(): boolean
        {
            return this._expanded;
        }

        onExpand()
        {
            this._expanded = !this._expanded;
        }

        onEditSurveySummaryTravs(Travs: SurveySummary_Trav)
        {
            this._currentProvider.Survey_ID = this._SurveySummary.ID;
            this._editTraverseProvider.editID(Travs.TravID);
        }
        onDeleteSurveySummaryTravs(Travs: SurveySummary_Trav)
        {
            //this._editTraverseProvider.delete(Travs.TravID);
        }
        onAddSurveySummaryTravs()
        {
            this._currentProvider.Survey_ID = this._SurveySummary.ID;
            this._editTraverseProvider.addTraverse();
        }

}