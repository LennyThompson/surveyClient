// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyMeasurement} from "./../../../services/surveyDb/types/SurveyMeasurement";
import {CoordFormat} from "../pipes/format-coord";
import {DmsBearingFormat} from "../pipes/format-dms-bearing";
import {BearingFormat} from "../pipes/format-bearing";

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
    private _textBearing: string;
    constructor(
        private coordFormat: CoordFormat,
        private bearingFormat: BearingFormat
    )
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
        if (this._SurveyMeasurement.HorizDistance)
        {
            return this.coordFormat.transform(this._SurveyMeasurement.HorizDistance);
        }
        return "Horizontal distance";
    }

    get bearingPlaceholder(): string
    {
        if (this._SurveyMeasurement.Bearing)
        {
            return this.bearingFormat.transform(this._SurveyMeasurement.Bearing);
        }
        return "Bearing";
    }


}