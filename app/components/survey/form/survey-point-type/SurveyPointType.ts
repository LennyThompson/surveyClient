// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyPointType} from "./../../../../services/surveyDb/types/SurveyPointType";

require("./SurveyPointType.scss");

@Component (
    {
        selector: "survey-point-type-form",
        templateUrl: "./SurveyPointType.html"
    }
)
export class SurveyPointTypeComponent implements OnInit
{
    private _SurveyPointType: SurveyPointType;
    constructor()
    {
        this._SurveyPointType = new SurveyPointType();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyPointType(value: SurveyPointType)
    {
        this._SurveyPointType = value;
    }

    get SurveyPointType(): SurveyPointType
    {
        return this._SurveyPointType;
    }
}