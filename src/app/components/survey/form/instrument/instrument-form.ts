// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Instrument} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "instrument-form",
        templateUrl: "./instrument-form.html",
        styleUrls: ["./instrument-form.scss"]
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