// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {Instrument} from "./../../../services/surveyDb/types/Instrument";
import {InstrumentServiceHttp} from "./../../../services/surveyDb/webAPI/InstrumentServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-select",
        templateUrl: "./Instrument.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: InstrumentSelectComponent,
                multi: true,
            }
        ]

    }
)
export class InstrumentSelectComponent extends ElementBase<Instrument>
{
    listInstrument: Instrument[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentInstrument: Instrument;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceInstrument: InstrumentServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceInstrument.loadAllFromDatabase().subscribe(
            (listInstrument) =>
            {
                this.listInstrument = listInstrument;
                this.updateValue();
            }
        );
    }

    get Instrument(): Instrument[]
    {
        return this.listInstrument;
    }

    updateValue()
    {
        if(this.listInstrument && this.currentInstrument)
        {
            let currentType = lodash(this.listInstrument).find(type => type.ID === this.currentInstrument.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: Instrument)
    {
        this.currentInstrument = value;
        this.updateValue();
    }
}