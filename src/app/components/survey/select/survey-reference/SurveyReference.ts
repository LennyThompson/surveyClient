// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {SurveyReference} from "./../../../../services/surveyDb/types";
import {SurveyReferenceSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyReferenceProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-reference-select",
        templateUrl: "./SurveyReference.html",
        styleUrls: ["./SurveyReference.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyReferenceSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyReferenceSelectComponent extends ElementBase<SurveyReference>
{
    protected _listSurveyReference: Observable<SurveyReference[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyReference: SurveyReference;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyReference: SurveyReferenceSubjectProvider
        , private _addSurveyReference: EditSurveyReferenceProvider

    )
    {
        super(validators, asyncValidators);
        this._listSurveyReference = this._serviceSurveyReference.getSurveyReferenceSummaries();
    }

    get SurveyReference(): Observable<SurveyReference[]>
    {
        return this._listSurveyReference;
    }

    updateValue()
    {
        if(this._listSurveyReference && this._currentSurveyReference)
        {
            let subscriber = this._listSurveyReference.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentSurveyReference.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: SurveyReference)
    {
        this._currentSurveyReference = value;
        this.updateValue();
    }

    private onAddNewSurveyReference()
    {
        this._addSurveyReference.addSurveyReference();
    }

}