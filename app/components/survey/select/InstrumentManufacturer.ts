// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {InstrumentManufacturer} from "./../../../services/surveyDb/types/InstrumentManufacturer";
import {InstrumentManufacturerServiceHttp} from "./../../../services/surveyDb/webAPI/InstrumentManufacturerServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-manufacturer-select",
        templateUrl: "./InstrumentManufacturer.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: InstrumentManufacturerSelectComponent,
                multi: true,
            }
        ]

    }
)
export class InstrumentManufacturerSelectComponent extends ElementBase<InstrumentManufacturer>
{
    listInstrumentManufacturer: InstrumentManufacturer[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentInstrumentManufacturer: InstrumentManufacturer;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceInstrumentManufacturer: InstrumentManufacturerServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceInstrumentManufacturer.loadAllFromDatabase().subscribe(
            (listInstrumentManufacturer) =>
            {
                this.listInstrumentManufacturer = listInstrumentManufacturer;
                this.updateValue();
            }
        );
    }

    get InstrumentManufacturer(): InstrumentManufacturer[]
    {
        return this.listInstrumentManufacturer;
    }

    updateValue()
    {
        if(this.listInstrumentManufacturer && this.currentInstrumentManufacturer)
        {
            let currentType = lodash(this.listInstrumentManufacturer).find(type => type.ID === this.currentInstrumentManufacturer.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: InstrumentManufacturer)
    {
        this.currentInstrumentManufacturer = value;
        this.updateValue();
    }
}