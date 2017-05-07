// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyPoint} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-point-dialog",
        templateUrl: "add-survey-point-dialog.html",
        styleUrls: ["./add-survey-point-dialog.scss"]
    }
)
export class AddSurveyPointComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddSurveyPointComponent>
        , protected _SurveyPointProvider: CurrentSurveyPointProvider
    )
    {
        this._SurveyPointProvider.SurveyPoint = new SurveyPoint();
    }

    public get title(): string
    {
        return "Add SurveyPoint";
    }

    public get SurveyPoint(): SurveyPoint
    {
        return this._SurveyPointProvider.SurveyPoint;
    }

    public set SurveyPoint(value: SurveyPoint)
    {
        this._SurveyPointProvider.SurveyPoint = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.SurveyPoint);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
