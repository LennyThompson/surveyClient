// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyPoint} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-point-dialog",
        templateUrl: "./edit-survey-point-dialog.html",
        styleUrls: ["./edit-survey-point-dialog.scss"]
    }
)
export class EditSurveyPointComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditSurveyPointComponent>,
        protected _SurveyPointProvider: CurrentSurveyPointProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit SurveyPoint";
    }

    public get SurveyPoint(): SurveyPoint
    {
        return this._SurveyPointProvider.SurveyPoint;
    }

    public set SurveyPoint(value: SurveyPoint)
    {
        this._SurveyPointProvider.SurveyPoint = value;
    }

    protected onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.SurveyPoint : null);
    }
}
