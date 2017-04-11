// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Instrument} from "./../../../../services/surveyDb/types";

require("./instrument-form.scss");

@Component (
    {
        selector: "instrument-form",
        templateUrl: "./instrument-form.html"
    }
)
export class InstrumentComponent implements OnInit
{
    private _Instrument: Instrument;
    constructor()
    {
        this._Instrument = new Instrument();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Instrument(value: Instrument)
    {
        this._Instrument = value;
    }

    get Instrument(): Instrument
    {
        return this._Instrument;
    }
}