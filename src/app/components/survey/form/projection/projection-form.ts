// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Projection} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "projection-form",
        templateUrl: "./projection-form.html",
        styleUrls: ["./projection-form.scss"]
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