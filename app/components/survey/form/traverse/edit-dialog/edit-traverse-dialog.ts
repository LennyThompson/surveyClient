// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

import {Component} from "@angular/core";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider} from "./../../../../../services/surveyDb/webAPI";

require("./edit-traverse-dialog.scss");

@Component(
    {
        selector: "edit-traverse-dialog",
        templateUrl: "./edit-traverse-dialog.html"
    }
)
export class EditTraverseComponent
{
    constructor
    (
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
}
