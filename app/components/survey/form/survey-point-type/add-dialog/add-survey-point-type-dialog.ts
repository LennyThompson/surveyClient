// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {SurveyPointType} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointTypeProvider} from "../../../simple-providers";


require("./add-survey-point-type-dialog.scss");

@Component(
    {
        selector: "add-survey-point-type-dialog",
        templateUrl: "add-survey-point-type-dialog.html"
    }
)
export class AddSurveyPointTypeComponent
{
    constructor
    (
        protected _SurveyPointTypeProvider: CurrentSurveyPointTypeProvider
    )
    {
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
}
