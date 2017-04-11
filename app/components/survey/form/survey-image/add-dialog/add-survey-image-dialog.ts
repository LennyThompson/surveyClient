// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

import {Component} from "@angular/core";
import {SurveyImage} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyImageProvider} from "./../../../../../services/surveyDb/webAPI";


require("./add-survey-image-dialog.scss");

@Component(
    {
        selector: "add-survey-image-dialog",
        templateUrl: "add-survey-image-dialog.html"
    }
)
export class AddSurveyImageComponent
{
    constructor
    (
        protected _SurveyImageProvider: CurrentSurveyImageProvider
    )
    {
    }

    public get title(): string
    {
        return "Add SurveyImage";
    }

    public get SurveyImage(): SurveyImage
    {
        return this._SurveyImageProvider.SurveyImage;
    }

    public set SurveyImage(value: SurveyImage)
    {
        this._SurveyImageProvider.SurveyImage = value;
    }
}
