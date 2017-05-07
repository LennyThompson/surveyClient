// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-reference-dialog",
        templateUrl: "add-survey-reference-dialog.html",
        styleUrls: ["./add-survey-reference-dialog.scss"]
    }
)
export class AddSurveyReferenceComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddSurveyReferenceComponent>
        , protected _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
        this._SurveyReferenceProvider.SurveyReference = new SurveyReference();
    }

    public get title(): string
    {
        return "Add SurveyReference";
    }

    public get SurveyReference(): SurveyReference
    {
        return this._SurveyReferenceProvider.SurveyReference;
    }

    public set SurveyReference(value: SurveyReference)
    {
        this._SurveyReferenceProvider.SurveyReference = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.SurveyReference);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
