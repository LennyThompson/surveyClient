// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {SurveyPoint} from "./../../../../services/surveyDb/types";
import {SurveyPointSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyPointProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-point-select",
        templateUrl: "./SurveyPoint.html",
        styleUrls: ["./SurveyPoint.scss"],
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
    protected _listSurveyPoint: Observable<SurveyPoint[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyPoint: SurveyPoint;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyPoint: SurveyPointSubjectProvider
        , private _addSurveyPoint: EditSurveyPointProvider

    )
    {
        super(validators, asyncValidators);
        this._listSurveyPoint = this._serviceSurveyPoint.getSurveyPointSummaries();
    }

    get SurveyPoint(): Observable<SurveyPoint[]>
    {
        return this._listSurveyPoint;
    }

    updateValue()
    {
        if(this._listSurveyPoint && this._currentSurveyPoint)
        {
            let subscriber = this._listSurveyPoint.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentSurveyPoint.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: SurveyPoint)
    {
        this._currentSurveyPoint = value;
        this.updateValue();
    }

    private onAddNewSurveyPoint()
    {
        this._addSurveyPoint.addSurveyPoint();
    }

}