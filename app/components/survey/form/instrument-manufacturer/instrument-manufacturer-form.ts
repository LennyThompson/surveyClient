// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";

require("./instrument-manufacturer-form.scss");

@Component (
    {
        selector: "instrument-manufacturer-form",
        templateUrl: "./instrument-manufacturer-form.html"
    }
)
export class InstrumentManufacturerComponent implements OnInit
{
    private _InstrumentManufacturer: InstrumentManufacturer;
    constructor()
    {
        this._InstrumentManufacturer = new InstrumentManufacturer();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set InstrumentManufacturer(value: InstrumentManufacturer)
    {
        this._InstrumentManufacturer = value;
    }

    get InstrumentManufacturer(): InstrumentManufacturer
    {
        return this._InstrumentManufacturer;
    }
}