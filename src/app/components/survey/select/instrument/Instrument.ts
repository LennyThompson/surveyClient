// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {Instrument} from "./../../../../services/surveyDb/types";
import {InstrumentSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditInstrumentProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "instrument-select",
        templateUrl: "./Instrument.html",
        styleUrls: ["./Instrument.scss"],
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
    protected _listInstrument: Observable<Instrument[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentInstrument: Instrument;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceInstrument: InstrumentSubjectProvider
        , private _addInstrument: EditInstrumentProvider

    )
    {
        super(validators, asyncValidators);
        this._listInstrument = this._serviceInstrument.getInstrumentSummaries();
    }

    get Instrument(): Observable<Instrument[]>
    {
        return this._listInstrument;
    }

    updateValue()
    {
        if(this._listInstrument && this._currentInstrument)
        {
            let subscriber = this._listInstrument.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentInstrument.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: Instrument)
    {
        this._currentInstrument = value;
        this.updateValue();
    }

    private onAddNewInstrument()
    {
        this._addInstrument.addInstrument();
    }

}