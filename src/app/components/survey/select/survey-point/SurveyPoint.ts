// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import {
    Component, ViewChild, ViewChildren, QueryList, Inject, Optional, OnInit, OnDestroy,
    AfterContentInit
} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Observable, Subscription} from "rxjs/Rx";

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
export class SurveyPointSelectComponent extends ElementBase<SurveyPoint> implements OnInit, OnDestroy, AfterContentInit
{
    protected _listSurveyPoint: SurveyPoint[];
    protected _listSubscribe: Subscription;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    // protected _currentSurveyPoint: SurveyPoint;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyPoint: SurveyPointSubjectProvider
        , private _addSurveyPoint: EditSurveyPointProvider

    )
    {
        super(validators, asyncValidators);
    }

    public ngOnInit(): void
    {
        if(!this._listSubscribe)
        {
            this._listSubscribe = this._serviceSurveyPoint.getSurveyPointSummaries().takeUntil(Observable.of(this._listSurveyPoint !== null && this._listSurveyPoint.length > 0))
                .subscribe(
                    list =>
                    {
                        this._listSurveyPoint = list;
                        console.log("list is ready...", list.length);
                        this.updateSelectedValue();
                    }
                );
        }
    }

    public ngOnDestroy(): void
    {
        if(this._listSubscribe)
        {
            this._listSubscribe.unsubscribe();
        }
    }

    ngAfterContentInit(): void
    {
        // this.updateSelectedValue();
    }

    get SurveyPoint(): SurveyPoint[]
    {
        if(this._listSurveyPoint && this._listSurveyPoint.length)
        {
            // this.updateSelectedValue();
        }
        return this._listSurveyPoint;
    }

    writeValue(value: SurveyPoint)
    {
        super.writeValue(value);
        console.log("model is ready...");
        this.updateSelectedValue();
    }

    isSelectedOption(item: SurveyPoint): boolean
    {
        return this.value ? this.value.ID === item.ID : false;
    }

    protected _initialSelectComplete: boolean;
    updateSelectedValue()
    {
        if
        (
            !this._initialSelectComplete
            &&
            this._listSurveyPoint
            &&
            this._listSurveyPoint.length
            &&
            this.value
        )
        {
            let currentType = lodash(this._listSurveyPoint).filter(type => type.ID === this.value.ID).first();
            console.log("select is ready...", currentType);
            super.writeValue(currentType);
            this._initialSelectComplete = true;
        }
    }

    private onAddNewSurveyPoint()
    {
        this._addSurveyPoint.addSurveyPoint();
    }

}