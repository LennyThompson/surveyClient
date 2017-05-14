// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Projection} from "./../../../../../services/surveyDb/types";
import {CurrentProjectionProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-projection-dialog",
        templateUrl: "add-projection-dialog.html",
        styleUrls: ["./add-projection-dialog.scss"]
    }
)
export class AddProjectionComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddProjectionComponent>
        , protected _ProjectionProvider: CurrentProjectionProvider
    )
    {
        this._ProjectionProvider.Projection = new Projection();
    }

    public get title(): string
    {
        return "Add Projection";
    }

    public get Projection(): Projection
    {
        return this._ProjectionProvider.Projection;
    }

    public set Projection(value: Projection)
    {
        this._ProjectionProvider.Projection = value;
    }

    protected onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Projection : null);
    }
}
