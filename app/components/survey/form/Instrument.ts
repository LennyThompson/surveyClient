// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Instrument} from "./../../../services/surveyDb/types/Instrument";

require("./Instrument.scss");

@Component (
    {
        selector: "instrument-form",
        templateUrl: "./Instrument.html"
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