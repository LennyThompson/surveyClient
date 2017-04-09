// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {Projection} from "./../../../../../services/surveyDb/types";
import {CurrentProjectionProvider} from "../../../simple-providers";


require("./add-projection-dialog.scss");

@Component(
    {
        selector: "add-projection-dialog",
        templateUrl: "add-projection-dialog.html"
    }
)
export class AddProjectionComponent
{
    constructor
    (
        protected _ProjectionProvider: CurrentProjectionProvider
    )
    {
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
}
