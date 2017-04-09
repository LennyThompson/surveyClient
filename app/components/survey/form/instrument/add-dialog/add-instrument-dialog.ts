// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "../../../simple-providers";


require("./add-instrument-dialog.scss");

@Component(
    {
        selector: "add-instrument-dialog",
        templateUrl: "add-instrument-dialog.html"
    }
)
export class AddInstrumentComponent
{
    constructor
    (
        protected _InstrumentProvider: CurrentInstrumentProvider
    )
    {
    }

    public get title(): string
    {
        return "Add Instrument";
    }

    public get Instrument(): Instrument
    {
        return this._InstrumentProvider.Instrument;
    }

    public set Instrument(value: Instrument)
    {
        this._InstrumentProvider.Instrument = value;
    }
}
