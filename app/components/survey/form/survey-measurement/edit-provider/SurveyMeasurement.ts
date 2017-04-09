// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SurveyMeasurement} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyMeasurementProvider} from "./../../../simple-providers";
import {SurveyMeasurementServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyMeasurementComponent} from "./../../";


@Injectable (
)
export class EditSurveyMeasurementProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _SurveyMeasurement: CurrentSurveyMeasurementProvider,
        private _SurveyMeasurementService: SurveyMeasurementServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(keyId)
            .subscribe(
                (result: SurveyMeasurement) => this.doEdit(result)
            );
    }

    private doEdit(editSurveyMeasurement: SurveyMeasurement)
    {
        this._SurveyMeasurement.SurveyMeasurement = editSurveyMeasurement;
        this._dialogService.open(EditSurveyMeasurementComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyMeasurementService.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                }
                            );
                    }
                    else
                    {
                    }
                }
            );
    }

    delete(keyId: number)
    {
        this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(keyId)
            .subscribe(
                (result: SurveyMeasurement) => this.doDelete(result)
            );
    }

    private doDelete(editSurveyMeasurement: SurveyMeasurement)
    {
        console.log("no yet implemented");
    }
}