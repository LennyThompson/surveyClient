// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {Survey} from "./../../../../services/surveyDb/types";
import {SurveySubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-select",
        templateUrl: "./Survey.html",
        styleUrls: ["./Survey.scss"],
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
    protected _listSurvey: Observable<Survey[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurvey: Survey;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurvey: SurveySubjectProvider
    )
    {
        super(validators, asyncValidators);
        this._listSurvey = this._serviceSurvey.getSurveySummaries();
    }

    get Survey(): Observable<Survey[]>
    {
        return this._listSurvey;
    }

    updateValue()
    {
        if(this._listSurvey && this._currentSurvey)
        {
            let subscriber = this._listSurvey.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentSurvey.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: Survey)
    {
        this._currentSurvey = value;
        this.updateValue();
    }

}