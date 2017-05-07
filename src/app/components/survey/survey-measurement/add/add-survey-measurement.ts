
import {Component} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {AddEditSurveyMeasurement} from "./add-edit-survey-measurement";
import {CurrentSurveyMeasurementProvider} from "../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement.html",
        styleUrls: ["./add-survey-measurement.scss"]
    }
)
export class AddSurveyMeasurementComponent extends AddEditSurveyMeasurement
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
