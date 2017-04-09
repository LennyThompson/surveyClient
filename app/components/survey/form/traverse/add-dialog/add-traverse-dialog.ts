// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider} from "../../../simple-providers";


require("./add-traverse-dialog.scss");

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse-dialog.html"
    }
)
export class AddTraverseComponent
{
    constructor
    (
        protected _TraverseProvider: CurrentTraverseProvider
    )
    {
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
}
