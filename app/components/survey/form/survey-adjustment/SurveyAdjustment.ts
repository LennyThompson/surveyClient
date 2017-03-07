// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyAdjustment} from "./../../../../services/surveyDb/types/SurveyAdjustment";

require("./SurveyAdjustment.scss");

@Component (
    {
        selector: "survey-adjustment-form",
        templateUrl: "./SurveyAdjustment.html"
    }
)
export class SurveyAdjustmentComponent implements OnInit
{
    private _SurveyAdjustment: SurveyAdjustment;
    constructor()
    {
        this._SurveyAdjustment = new SurveyAdjustment();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyAdjustment(value: SurveyAdjustment)
    {
        this._SurveyAdjustment = value;
    }

    get SurveyAdjustment(): SurveyAdjustment
    {
        return this._SurveyAdjustment;
    }
}