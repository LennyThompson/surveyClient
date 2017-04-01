// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyMeasurement} from "./../../../../services/surveyDb/types/SurveyMeasurement";

require("./SurveyMeasurement.scss");

@Component (
    {
        selector: "survey-measurement-form",
        templateUrl: "./SurveyMeasurement.html"
    }
)
export class SurveyMeasurementComponent implements OnInit
{
    private _SurveyMeasurement: SurveyMeasurement;
    constructor()
    {
        this._SurveyMeasurement = new SurveyMeasurement();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._SurveyMeasurement = value;
    }

    get SurveyMeasurement(): SurveyMeasurement
    {
        return this._SurveyMeasurement;
    }
}