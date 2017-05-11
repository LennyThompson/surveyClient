// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {Traverse} from "./../../../../services/surveyDb/types";
import {TraverseSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "traverse-select",
        templateUrl: "./Traverse.html",
        styleUrls: ["./Traverse.scss"],
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
    protected _listTraverse: Observable<Traverse[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentTraverse: Traverse;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceTraverse: TraverseSubjectProvider
    )
    {
        super(validators, asyncValidators);
        this._listTraverse = this._serviceTraverse.getTraverseSummaries();
    }

    get Traverse(): Observable<Traverse[]>
    {
        return this._listTraverse;
    }

    updateValue()
    {
        if(this._listTraverse && this._currentTraverse)
        {
            let subscriber = this._listTraverse.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentTraverse.ID).value();
                    super.writeValue(currentType);
                    //subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: Traverse)
    {
        this._currentTraverse = value;
        this.updateValue();
    }

}