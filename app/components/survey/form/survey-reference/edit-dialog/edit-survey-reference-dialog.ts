// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "../../../simple-providers";

require("./edit-survey-reference-dialog.scss");

@Component(
    {
        selector: "edit-survey-reference-dialog",
        templateUrl: "./edit-survey-reference-dialog.html"
    }
)
export class EditSurveyReferenceComponent
{
    constructor
    (
        protected _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit SurveyReference";
    }

    public get SurveyReference(): SurveyReference
    {
        return this._SurveyReferenceProvider.SurveyReference;
    }

    public set SurveyReference(value: SurveyReference)
    {
        this._SurveyReferenceProvider.SurveyReference = value;
    }
}
