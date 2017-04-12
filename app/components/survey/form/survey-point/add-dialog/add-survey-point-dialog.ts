// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Component} from "@angular/core";
import {SurveyPoint} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider} from "./../../../../../services/surveyDb/webAPI";


require("./add-survey-point-dialog.scss");

@Component(
    {
        selector: "add-survey-point-dialog",
        templateUrl: "add-survey-point-dialog.html"
    }
)
export class AddSurveyPointComponent
{
    constructor
    (
        protected _SurveyPointProvider: CurrentSurveyPointProvider
    )
    {
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
}
