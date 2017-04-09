// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "../../../simple-providers";


require("./add-instrument-manufacturer-dialog.scss");

@Component(
    {
        selector: "add-instrument-manufacturer-dialog",
        templateUrl: "add-instrument-manufacturer-dialog.html"
    }
)
export class AddInstrumentManufacturerComponent
{
    constructor
    (
        protected _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
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
}
