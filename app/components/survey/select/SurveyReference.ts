// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {SurveyReference} from "./../../../services/surveyDb/types/SurveyReference";
import {SurveyReferenceServiceHttp} from "./../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-reference-select",
        templateUrl: "./SurveyReference.html",
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
    listSurveyReference: SurveyReference[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentSurveyReference: SurveyReference;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceSurveyReference: SurveyReferenceServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceSurveyReference.loadAllFromDatabase().subscribe(
            (listSurveyReference) =>
            {
                this.listSurveyReference = listSurveyReference;
                this.updateValue();
            }
        );
    }

    get SurveyReference(): SurveyReference[]
    {
        return this.listSurveyReference;
    }

    updateValue()
    {
        if(this.listSurveyReference && this.currentSurveyReference)
        {
            let currentType = lodash(this.listSurveyReference).find(type => type.ID === this.currentSurveyReference.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyReference)
    {
        this.currentSurveyReference = value;
        this.updateValue();
    }
}