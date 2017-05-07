// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider, CurrentSurveyProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse-dialog.html",
        styleUrls: ["./add-traverse-dialog.scss"]
    }
)
export class AddTraverseComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddTraverseComponent>
        , protected _TraverseProvider: CurrentTraverseProvider
        , protected _SurveyProvider: CurrentSurveyProvider


    )
    {
        this._TraverseProvider.Traverse = new Traverse();
        // TODO: Determine where this should really go, as this is also covered in the EditTraverseProvider, which can potentially add more context.
        //       Left here so that this component can be used independently of the EditTraverseProvider
        this._TraverseProvider.Traverse.SurveyID = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;


    }

    public get title(): string
    {
        return "Add Traverse";
    }

    public get Traverse(): Traverse
    {
        return this._TraverseProvider.Traverse;
    }

    public set Traverse(value: Traverse)
    {
        this._TraverseProvider.Traverse = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.Traverse);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
