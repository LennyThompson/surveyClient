// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {SurveyPoint} from "./../../../../services/surveyDb/types";
import {SurveyPointServiceHttp} from "./../../../../services/surveyDb/webAPI";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-select",
        templateUrl: "./SurveyPoint.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyPointSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyPointSelectComponent extends ElementBase<SurveyPoint>
{
    listSurveyPoint: SurveyPoint[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentSurveyPoint: SurveyPoint;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceSurveyPoint: SurveyPointServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceSurveyPoint.loadAllFromDatabase().subscribe(
            (listSurveyPoint) =>
            {
                this.listSurveyPoint = listSurveyPoint;
                this.updateValue();
            }
        );
    }

    get SurveyPoint(): SurveyPoint[]
    {
        return this.listSurveyPoint;
    }

    updateValue()
    {
        if(this.listSurveyPoint && this.currentSurveyPoint)
        {
            let currentType = lodash(this.listSurveyPoint).find(type => type.ID === this.currentSurveyPoint.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyPoint)
    {
        this.currentSurveyPoint = value;
        this.updateValue();
    }
}