// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider} from "../../../simple-providers";


require("./add-survey-measurement-dialog.scss");

@Component(
    {
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement-dialog.html"
    }
)
export class AddSurveyMeasurementComponent
{
    constructor
    (
        protected _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
    )
    {
    }

    public get title(): string
    {
        return "Add SurveyMeasurement";
    }

    public get SurveyMeasurement(): SurveyMeasurement
    {
        return this._SurveyMeasurementProvider.SurveyMeasurement;
    }

    public set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = value;
    }
}
