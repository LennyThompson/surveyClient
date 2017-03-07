// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {TraverseClosure} from "./../../../../services/surveyDb/types/TraverseClosure";

require("./TraverseClosure.scss");

@Component (
    {
        selector: "traverse-closure-form",
        templateUrl: "./TraverseClosure.html"
    }
)
export class TraverseClosureComponent implements OnInit
{
    private _TraverseClosure: TraverseClosure;
    constructor()
    {
        this._TraverseClosure = new TraverseClosure();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set TraverseClosure(value: TraverseClosure)
    {
        this._TraverseClosure = value;
    }

    get TraverseClosure(): TraverseClosure
    {
        return this._TraverseClosure;
    }
}