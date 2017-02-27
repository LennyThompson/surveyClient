
import {Component} from "@angular/core";
import {AddSurveyMeasurementComponent} from "../add/add-survey-measurement";
import {SurveyContextProvider, CurrentSurveyMeasurementProvider } from "./../../simple-providers";
import {MdDialogRef} from "@angular/material";
import {AddEditSurveyMeasurement} from "../add/add-edit-survey-measurement";

require("./../add/add-survey-measurement.scss");

@Component(
    {
        selector: "edit-survey-measurement-dialog",
        templateUrl: "../add/add-survey-measurement.html"
    }
)
export class EditSurveyMeasurementComponent extends AddEditSurveyMeasurement
{
    constructor
    (
        _dialog: MdDialogRef<AddSurveyMeasurementComponent>,
        surveyContext: SurveyContextProvider,
        measProvider: CurrentSurveyMeasurementProvider
    )
    {
        super(_dialog, surveyContext, measProvider);
    }
}