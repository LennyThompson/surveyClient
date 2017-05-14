// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyPointType} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointTypeProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-point-type-dialog",
        templateUrl: "add-survey-point-type-dialog.html",
        styleUrls: ["./add-survey-point-type-dialog.scss"]
    }
)
export class AddSurveyPointTypeComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddSurveyPointTypeComponent>
        , protected _SurveyPointTypeProvider: CurrentSurveyPointTypeProvider
    )
    {
        this._SurveyPointTypeProvider.SurveyPointType = new SurveyPointType();
    }

    public get title(): string
    {
        return "Add SurveyPointType";
    }

    public get SurveyPointType(): SurveyPointType
    {
        return this._SurveyPointTypeProvider.SurveyPointType;
    }

    public set SurveyPointType(value: SurveyPointType)
    {
        this._SurveyPointTypeProvider.SurveyPointType = value;
    }

    protected onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.SurveyPointType : null);
    }
}
