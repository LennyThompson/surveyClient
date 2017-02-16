// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Projection} from "./../../../services/surveyDb/types/Projection";

require("./projection-form.scss");

@Component (
    {
        selector: "projection-form",
        templateUrl: "./Projection.html"
    }
)
export class ProjectionComponent implements OnInit
{
    private _Projection: Projection;
    constructor()
    {
        this._Projection = new Projection();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Projection(value: Projection)
    {
        this._Projection = value;
    }

    get Projection(): Projection
    {
        return this._Projection;
    }
}