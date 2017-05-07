
import {Component} from "@angular/core";
import {AddSurveyMeasurementComponent} from "../add/add-survey-measurement";
import {MdDialogRef} from "@angular/material";
import {AddEditSurveyMeasurement} from "../add/add-edit-survey-measurement";
import {CurrentSurveyMeasurementProvider} from "../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "edit-survey-measurement-dialog",
        templateUrl: "../add/add-survey-measurement.html",
        styleUrls: ["./../add/add-survey-measurement.scss"]
    }
)
export class EditSurveyMeasurementComponent extends AddEditSurveyMeasurement
{

    constructor
    (
        _dialog: MdDialogRef<AddSurveyMeasurementComponent>,
        measProvider: CurrentSurveyMeasurementProvider
    )
    {
        super(_dialog, measProvider);
    }
}
