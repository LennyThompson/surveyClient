// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {Survey} from "./../../../services/surveyDb/types/Survey";
import {SurveyServiceHttp} from "./../../../services/surveyDb/webAPI/SurveyServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-select",
        templateUrl: "./Survey.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveySelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveySelectComponent extends ElementBase<Survey>
{
    listSurvey: Survey[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentSurvey: Survey;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceSurvey: SurveyServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceSurvey.loadAllFromDatabase().subscribe(
            (listSurvey) =>
            {
                this.listSurvey = listSurvey;
                this.updateValue();
            }
        );
    }

    get Survey(): Survey[]
    {
        return this.listSurvey;
    }

    updateValue()
    {
        if(this.listSurvey && this.currentSurvey)
        {
            let currentType = lodash(this.listSurvey).find(type => type.ID === this.currentSurvey.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: Survey)
    {
        this.currentSurvey = value;
        this.updateValue();
    }
}