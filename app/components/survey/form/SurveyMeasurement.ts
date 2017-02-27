// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyMeasurement} from "./../../../services/surveyDb/types/SurveyMeasurement";
import {CoordFormat} from "../pipes/format-coord";

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
    constructor(private coordFormat: CoordFormat)
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

    get horizDistancePlaceholder(): string
    {
        if(this._SurveyMeasurement.HorizDistance)
        {
            return this.coordFormat.transform(this._SurveyMeasurement.HorizDistance);
        }
        return "Horizontal distance";
    }
}