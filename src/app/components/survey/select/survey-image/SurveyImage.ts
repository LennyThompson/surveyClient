// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {SurveyImage} from "./../../../../services/surveyDb/types";
import {SurveyImageSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditSurveyImageProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "survey-image-select",
        templateUrl: "./SurveyImage.html",
        styleUrls: ["./SurveyImage.scss"],
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
    protected _listSurveyImage: Observable<SurveyImage[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentSurveyImage: SurveyImage;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceSurveyImage: SurveyImageSubjectProvider
        , private _addSurveyImage: EditSurveyImageProvider

    )
    {
        super(validators, asyncValidators);
        this._listSurveyImage = this._serviceSurveyImage.getSurveyImageSummaries();
    }

    get SurveyImage(): Observable<SurveyImage[]>
    {
        return this._listSurveyImage;
    }

    updateValue()
    {
        if(this._listSurveyImage && this._currentSurveyImage)
        {
            let subscriber = this._listSurveyImage.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentSurveyImage.ID).value();
                    super.writeValue(currentType);
                    //subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: SurveyImage)
    {
        this._currentSurveyImage = value;
        this.updateValue();
    }

    private onAddNewSurveyImage()
    {
        this._addSurveyImage.addSurveyImage();
    }

}