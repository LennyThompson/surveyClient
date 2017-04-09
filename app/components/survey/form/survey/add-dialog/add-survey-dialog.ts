// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {Survey} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyProvider} from "../../../simple-providers";


require("./add-survey-dialog.scss");

@Component(
    {
        selector: "add-survey-dialog",
        templateUrl: "add-survey-dialog.html"
    }
)
export class AddSurveyComponent
{
    constructor
    (
        protected _SurveyProvider: CurrentSurveyProvider
    )
    {
    }

    public get title(): string
    {
        return "Add Survey";
    }

    public get Survey(): Survey
    {
        return this._SurveyProvider.Survey;
    }

    public set Survey(value: Survey)
    {
        this._SurveyProvider.Survey = value;
    }
}
