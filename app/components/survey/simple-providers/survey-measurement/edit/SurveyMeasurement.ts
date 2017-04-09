// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {EditSurveyMeasurementComponent} from "./../../../form";
import {SurveyMeasurementServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {CurrentSurveyMeasurementProvider} from "./../SurveyMeasurement";

@Injectable()
export class EditSurveyMeasurementProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyMeasurementHttp: SurveyMeasurementServiceHttp,
        private _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyMeasurementHttp.loadSurveyMeasurementFromDatabase(ID)
        .subscribe(
                (localSurveyMeasurement: SurveyMeasurement) => this.editSurveyMeasurement(localSurveyMeasurement)
        );
    }

    public editSurveyMeasurement(editSurveyMeasurement: SurveyMeasurement)
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = editSurveyMeasurement;
        this._dialogService.open(EditSurveyMeasurementComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyMeasurementHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("this.pointService.updateToDatabase", result);
                                }
                            );
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }
}