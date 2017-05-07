// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";
import {InstrumentManufacturerSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditInstrumentManufacturerProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-manufacturer-select",
        templateUrl: "./InstrumentManufacturer.html",
        styleUrls: ["./InstrumentManufacturer.scss"],
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
    protected _listInstrumentManufacturer: Observable<InstrumentManufacturer[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentInstrumentManufacturer: InstrumentManufacturer;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceInstrumentManufacturer: InstrumentManufacturerSubjectProvider
        , private _addInstrumentManufacturer: EditInstrumentManufacturerProvider

    )
    {
        super(validators, asyncValidators);
        this._listInstrumentManufacturer = this._serviceInstrumentManufacturer.getInstrumentManufacturerSummaries();
    }

    get InstrumentManufacturer(): Observable<InstrumentManufacturer[]>
    {
        return this._listInstrumentManufacturer;
    }

    updateValue()
    {
        if(this._listInstrumentManufacturer && this._currentInstrumentManufacturer)
        {
            let subscriber = this._listInstrumentManufacturer.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentInstrumentManufacturer.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: InstrumentManufacturer)
    {
        this._currentInstrumentManufacturer = value;
        this.updateValue();
    }

    private onAddNewInstrumentManufacturer()
    {
        this._addInstrumentManufacturer.addInstrumentManufacturer();
    }

}