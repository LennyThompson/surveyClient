// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-measurement-dialog",
        templateUrl: "./edit-survey-measurement-dialog.html",
        styleUrls: ["./edit-survey-measurement-dialog.scss"]
    }
)
export class EditSurveyMeasurementComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<EditSurveyMeasurementComponent>,
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

    protected onClose()
    {
        return this._dialog.close(this.SurveyMeasurement);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
