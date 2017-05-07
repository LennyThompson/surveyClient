// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-reference-dialog",
        templateUrl: "./edit-survey-reference-dialog.html",
        styleUrls: ["./edit-survey-reference-dialog.scss"]
    }
)
export class EditSurveyReferenceComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditSurveyReferenceComponent>,
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

    protected onClose()
    {
        return this._dialog.close(this.SurveyReference);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
