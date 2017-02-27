// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Traverse} from "./../../../services/surveyDb/types/Traverse";

require("./Traverse.scss");

@Component (
    {
        selector: "traverse-form",
        templateUrl: "./Traverse.html"
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