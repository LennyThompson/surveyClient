// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {SurveyPointType} from "./../../../../services/surveyDb/types";
import {SurveyPointTypeSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyPointTypeProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-type-select",
        templateUrl: "./SurveyPointType.html",
        styleUrls: ["./SurveyPointType.scss"],
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
    protected _listSurveyPointType: Observable<SurveyPointType[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyPointType: SurveyPointType;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyPointType: SurveyPointTypeSubjectProvider
        , private _addSurveyPointType: EditSurveyPointTypeProvider

    )
    {
        super(validators, asyncValidators);
        this._listSurveyPointType = this._serviceSurveyPointType.getSurveyPointTypeSummaries();
    }

    get SurveyPointType(): Observable<SurveyPointType[]>
    {
        return this._listSurveyPointType;
    }

    updateValue()
    {
        if(this._listSurveyPointType && this._currentSurveyPointType)
        {
            let subscriber = this._listSurveyPointType.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentSurveyPointType.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: SurveyPointType)
    {
        this._currentSurveyPointType = value;
        this.updateValue();
    }

    private onAddNewSurveyPointType()
    {
        this._addSurveyPointType.addSurveyPointType();
    }

}