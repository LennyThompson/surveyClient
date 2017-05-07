// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Traverse} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "traverse-form",
        templateUrl: "./traverse-form.html",
        styleUrls: ["./traverse-form.scss"]
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