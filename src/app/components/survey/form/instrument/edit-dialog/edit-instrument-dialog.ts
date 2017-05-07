// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-instrument-dialog",
        templateUrl: "./edit-instrument-dialog.html",
        styleUrls: ["./edit-instrument-dialog.scss"]
    }
)
export class EditInstrumentComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditInstrumentComponent>,
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

    protected onClose()
    {
        return this._dialog.close(this.Instrument);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
