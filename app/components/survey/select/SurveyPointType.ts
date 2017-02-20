// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {SurveyPointType} from "./../../../services/surveyDb/types/SurveyPointType";
import {SurveyPointTypeServiceHttp} from "./../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-type-select",
        templateUrl: "./SurveyPointType.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyPointTypeSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyPointTypeSelectComponent extends ElementBase<SurveyPointType>
{
    listSurveyPointType: SurveyPointType[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentSurveyPointType: SurveyPointType;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceSurveyPointType: SurveyPointTypeServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceSurveyPointType.loadAllFromDatabase().subscribe(
            (listSurveyPointType) =>
            {
                this.listSurveyPointType = listSurveyPointType;
                this.updateValue();
            }
        );
    }

    get SurveyPointType(): SurveyPointType[]
    {
        return this.listSurveyPointType;
    }

    updateValue()
    {
        if(this.listSurveyPointType && this.currentSurveyPointType)
        {
            let currentType = lodash(this.listSurveyPointType).find(type => type.ID === this.currentSurveyPointType.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyPointType)
    {
        this.currentSurveyPointType = value;
        this.updateValue();
    }
}