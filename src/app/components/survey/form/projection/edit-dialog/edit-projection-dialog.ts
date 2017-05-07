// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Projection} from "./../../../../../services/surveyDb/types";
import {CurrentProjectionProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-projection-dialog",
        templateUrl: "./edit-projection-dialog.html",
        styleUrls: ["./edit-projection-dialog.scss"]
    }
)
export class EditProjectionComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditProjectionComponent>,
        protected _ProjectionProvider: CurrentProjectionProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit Projection";
    }

    public get Projection(): Projection
    {
        return this._ProjectionProvider.Projection;
    }

    public set Projection(value: Projection)
    {
        this._ProjectionProvider.Projection = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.Projection);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
