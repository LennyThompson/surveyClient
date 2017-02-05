import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import * as lodash from "lodash";
import {SurveyReference} from "../../../services/surveyDb/types/SurveyReference";
import {SurveyReferenceServiceHttp} from "../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp";

@Component(
    {
        selector: "survey-reference-select",
        templateUrl: "./survey-reference-select.html",
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
    listReferences: SurveyReference[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentRef: SurveyReference;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private referncesService: SurveyReferenceServiceHttp
    )
    {
        super(validators, asyncValidators);
        referncesService.loadAllFromDatabase().subscribe(
            (listRefs) =>
            {
                this.listReferences = listRefs;
                this.updateValue();
            }
        );
    }

    get References(): SurveyReference[]
    {
        return this.listReferences;
    }

    updateValue()
    {
        if(this.listReferences && this.currentRef)
        {
            let currentType = lodash(this.listReferences).find(type => type.ID === this.currentRef.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyReference)
    {
        this.currentRef = value;
        this.updateValue();
    }

}