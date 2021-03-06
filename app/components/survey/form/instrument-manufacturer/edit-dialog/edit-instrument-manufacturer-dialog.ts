// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Component} from "@angular/core";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../../../services/surveyDb/webAPI";

require("./edit-instrument-manufacturer-dialog.scss");

@Component(
    {
        selector: "edit-instrument-manufacturer-dialog",
        templateUrl: "./edit-instrument-manufacturer-dialog.html"
    }
)
export class EditInstrumentManufacturerComponent
{
    constructor
    (
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
}
