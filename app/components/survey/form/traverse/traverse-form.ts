// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Traverse} from "./../../../../services/surveyDb/types";

require("./traverse-form.scss");

@Component (
    {
        selector: "traverse-form",
        templateUrl: "./traverse-form.html"
    }
)
export class TraverseComponent implements OnInit
{
    private _Traverse: Traverse;
    constructor()
    {
        this._Traverse = new Traverse();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Traverse(value: Traverse)
    {
        this._Traverse = value;
    }

    get Traverse(): Traverse
    {
        return this._Traverse;
    }
}