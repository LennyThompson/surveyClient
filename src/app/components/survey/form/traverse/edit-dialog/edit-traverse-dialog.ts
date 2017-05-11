// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-traverse-dialog",
        templateUrl: "./edit-traverse-dialog.html",
        styleUrls: ["./edit-traverse-dialog.scss"]
    }
)
export class EditTraverseComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditTraverseComponent>,
        protected _TraverseProvider: CurrentTraverseProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit Traverse";
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
