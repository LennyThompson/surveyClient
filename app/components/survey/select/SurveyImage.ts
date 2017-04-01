// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {SurveyImage} from "./../../../services/surveyDb/types/SurveyImage";
import {SurveyImageServiceHttp} from "./../../../services/surveyDb/webAPI/SurveyImageServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-image-select",
        templateUrl: "./SurveyImage.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyImageSelectComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyImageSelectComponent extends ElementBase<SurveyImage>
{
    listSurveyImage: SurveyImage[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentSurveyImage: SurveyImage;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceSurveyImage: SurveyImageServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceSurveyImage.loadAllFromDatabase().subscribe(
            (listSurveyImage) =>
            {
                this.listSurveyImage = listSurveyImage;
                this.updateValue();
            }
        );
    }

    get SurveyImage(): SurveyImage[]
    {
        return this.listSurveyImage;
    }

    updateValue()
    {
        if(this.listSurveyImage && this.currentSurveyImage)
        {
            let currentType = lodash(this.listSurveyImage).find(type => type.ID === this.currentSurveyImage.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyImage)
    {
        this.currentSurveyImage = value;
        this.updateValue();
    }
}