// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "../../../simple-providers";

require("./edit-instrument-dialog.scss");

@Component(
    {
        selector: "edit-instrument-dialog",
        templateUrl: "./edit-instrument-dialog.html"
    }
)
export class EditInstrumentComponent
{
    constructor
    (
        protected _InstrumentProvider: CurrentInstrumentProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit Instrument";
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
