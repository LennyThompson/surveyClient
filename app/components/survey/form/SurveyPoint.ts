// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyPoint} from "./../../../services/surveyDb/types/SurveyPoint";

require("./survey-point-form.scss");

@Component (
    {
        selector: "survey-point-form",
        templateUrl: "./SurveyPoint.html"
    }
)
export class SurveyPointComponent implements OnInit
{
    private _SurveyPoint: SurveyPoint;
    constructor()
    {
        this._SurveyPoint = new SurveyPoint();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyPoint(value: SurveyPoint)
    {
        this._SurveyPoint = value;
    }

    get SurveyPoint(): SurveyPoint
    {
        return this._SurveyPoint;
    }
}