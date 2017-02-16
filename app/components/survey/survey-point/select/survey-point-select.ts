import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import * as lodash from "lodash";
import {SurveyPoint} from "../../../../services/surveyDb/types/SurveyPoint";
import {SurveyPointServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointServiceHttp";

@Component(
    {
        selector: "survey-point-select",
        templateUrl: "./survey-point-select.html",
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
    listPoints: SurveyPoint[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentPt: SurveyPoint;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private pointService: SurveyPointServiceHttp
    )
    {
        super(validators, asyncValidators);
        pointService.loadAllFromDatabase().subscribe(
            (listPts) =>
            {
                this.listPoints = listPts;
                this.updateValue();
            }
        );
    }

    get Points(): SurveyPoint[]
    {
        return this.listPoints;
    }

    updateValue()
    {
        if(this.listPoints && this.currentPt)
        {
            let currentType = lodash(this.listPoints).find(type => type.ID === this.currentPt.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyPoint)
    {
        this.currentPt = value;
        this.updateValue();
    }

}