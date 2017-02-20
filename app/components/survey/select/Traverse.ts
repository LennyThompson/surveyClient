// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {Traverse} from "./../../../services/surveyDb/types/Traverse";
import {TraverseServiceHttp} from "./../../../services/surveyDb/webAPI/TraverseServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "traverse-select",
        templateUrl: "./Traverse.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: TraverseSelectComponent,
                multi: true,
            }
        ]

    }
)
export class TraverseSelectComponent extends ElementBase<Traverse>
{
    listTraverse: Traverse[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentTraverse: Traverse;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceTraverse: TraverseServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceTraverse.loadAllFromDatabase().subscribe(
            (listTraverse) =>
            {
                this.listTraverse = listTraverse;
                this.updateValue();
            }
        );
    }

    get Traverse(): Traverse[]
    {
        return this.listTraverse;
    }

    updateValue()
    {
        if(this.listTraverse && this.currentTraverse)
        {
            let currentType = lodash(this.listTraverse).find(type => type.ID === this.currentTraverse.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: Traverse)
    {
        this.currentTraverse = value;
        this.updateValue();
    }
}