// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {InstrumentManufacturer} from "./../../../services/surveyDb/types/InstrumentManufacturer";

require("./InstrumentManufacturer.scss");

@Component (
    {
        selector: "instrument-manufacturer-form",
        templateUrl: "./InstrumentManufacturer.html"
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