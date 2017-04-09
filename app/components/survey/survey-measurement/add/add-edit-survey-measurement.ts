

import {CurrentSurveyMeasurementProvider} from "../../simple-providers";
import {AddSurveyMeasurementComponent} from "./add-survey-measurement";
import {MdDialogRef} from "@angular/material";
import {SurveyMeasurement} from "../../../../services/surveyDb/types/SurveyMeasurement";

export class AddEditSurveyMeasurement
{
    constructor
    (
        protected _dialog: MdDialogRef<AddSurveyMeasurementComponent>,
        protected measProvider: CurrentSurveyMeasurementProvider
    )
    {

    }

    public get SurveyMeasurement(): SurveyMeasurement
    {
        return this.measProvider.SurveyMeasurement;
    }

    public set SurveyMeasurement(value: SurveyMeasurement)
    {
        this.measProvider.SurveyMeasurement = value;
    }

}

