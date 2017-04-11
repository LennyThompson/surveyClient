

import {AddSurveyMeasurementComponent} from "./add-survey-measurement";
import {MdDialogRef} from "@angular/material";
import {SurveyMeasurement} from "../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider} from "../../../../services/surveyDb/webAPI";

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

