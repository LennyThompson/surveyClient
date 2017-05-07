// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "instrument-manufacturer-form",
        templateUrl: "./instrument-manufacturer-form.html",
        styleUrls: ["./instrument-manufacturer-form.scss"]
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