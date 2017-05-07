// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyMeasurement} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-measurement-form",
        templateUrl: "./survey-measurement-form.html",
        styleUrls: ["./survey-measurement-form.scss"]
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