// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-instrument-dialog",
        templateUrl: "add-instrument-dialog.html",
        styleUrls: ["./add-instrument-dialog.scss"]
    }
)
export class AddInstrumentComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddInstrumentComponent>
        , protected _InstrumentProvider: CurrentInstrumentProvider
    )
    {
        this._InstrumentProvider.Instrument = new Instrument();
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

    protected onClose(bOk: boolean)
    {
        return this._dialog.close(bOk ? this.Instrument : null);
    }
}
