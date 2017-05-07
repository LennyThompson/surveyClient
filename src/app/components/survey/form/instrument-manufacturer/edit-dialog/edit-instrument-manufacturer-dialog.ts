// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-instrument-manufacturer-dialog",
        templateUrl: "./edit-instrument-manufacturer-dialog.html",
        styleUrls: ["./edit-instrument-manufacturer-dialog.scss"]
    }
)
export class EditInstrumentManufacturerComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditInstrumentManufacturerComponent>,
        protected _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit InstrumentManufacturer";
    }

    public get InstrumentManufacturer(): InstrumentManufacturer
    {
        return this._InstrumentManufacturerProvider.InstrumentManufacturer;
    }

    public set InstrumentManufacturer(value: InstrumentManufacturer)
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.InstrumentManufacturer);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
