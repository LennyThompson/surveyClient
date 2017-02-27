
import {Component} from "@angular/core";
import {SurveyMeasurement} from "../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider, SurveyContextProvider, CurrentSurveyMeasurementProvider} from "./../../simple-providers";
import {MdDialog, MdDialogRef} from "@angular/material";
import {AddEditSurveyMeasurement} from "./add-edit-survey-measurement";

require("./add-survey-measurement.scss");

@Component(
    {
        selector: "add-survey-measurement-dialog",
        templateUrl: "add-survey-measurement.html"
    }
)
export class AddSurveyMeasurementComponent extends AddEditSurveyMeasurement
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