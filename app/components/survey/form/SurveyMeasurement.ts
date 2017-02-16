// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyMeasurement} from "./../../../services/surveyDb/types/SurveyMeasurement";

require("./survey-measurement-form.scss");

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