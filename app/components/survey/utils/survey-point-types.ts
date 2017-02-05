import {OnInit, Component, ViewChild, ViewChildren, QueryList, AfterContentInit, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {SurveyPointTypeServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp";
import {Observable} from "rxjs";
import {SurveyPointType} from "../../../services/surveyDb/types/SurveyPointType";
import {ElementBase} from "./element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-types-select",
        templateUrl: "./survey-point-types.html",
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SurveyPointTypesComponent,
                multi: true,
            }
        ]

    }
)
export class SurveyPointTypesComponent extends ElementBase<SurveyPointType>
{
    listPointTypes: SurveyPointType[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentType: SurveyPointType;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private pointTypesService: SurveyPointTypeServiceHttp
    )
    {
        super(validators, asyncValidators);
        pointTypesService.loadAllFromDatabase().subscribe(
            (listTypes) =>
            {
                this.listPointTypes = listTypes;
                this.updateValue();
            }
        );
    }

    get PointTypes(): SurveyPointType[]
    {
        return this.listPointTypes;
    }

    updateValue()
    {
        if(this.listPointTypes && this.currentType)
        {
            let currentType = lodash(this.listPointTypes).find(type => type.ID === this.currentType.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: SurveyPointType)
    {
        this.currentType = value;
        this.updateValue();
    }

}