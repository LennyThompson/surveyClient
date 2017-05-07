// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-instrument-manufacturer-dialog",
        templateUrl: "add-instrument-manufacturer-dialog.html",
        styleUrls: ["./add-instrument-manufacturer-dialog.scss"]
    }
)
export class AddInstrumentManufacturerComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddInstrumentManufacturerComponent>
        , protected _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = new InstrumentManufacturer();
    }

    public get title(): string
    {
        return "Add InstrumentManufacturer";
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