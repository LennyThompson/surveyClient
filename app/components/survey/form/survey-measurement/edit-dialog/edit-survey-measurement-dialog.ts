// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component} from "@angular/core";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider} from "../../../simple-providers";

require("./edit-survey-measurement-dialog.scss");

@Component(
    {
        selector: "edit-survey-measurement-dialog",
        templateUrl: "./edit-survey-measurement-dialog.html"
    }
)
export class EditSurveyMeasurementComponent
{
    constructor
    (
        protected _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
    )
    {
    }

    public get title(): string
    {
        return "Edit SurveyMeasurement";
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
