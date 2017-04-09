// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SurveyPoint} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider} from "./../../../simple-providers";
import {SurveyPointServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyPointComponent} from "./../../";


@Injectable (
)
export class EditSurveyPointProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _SurveyPoint: CurrentSurveyPointProvider,
        private _SurveyPointService: SurveyPointServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyPointService.loadSurveyPointFromDatabase(keyId)
            .subscribe(
                (result: SurveyPoint) => this.doEdit(result)
            );
    }

    private doEdit(editSurveyPoint: SurveyPoint)
    {
        this._SurveyPoint.SurveyPoint = editSurveyPoint;
        this._dialogService.open(EditSurveyPointComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyPointService.updateToDatabase(result)
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
        this._SurveyPointService.loadSurveyPointFromDatabase(keyId)
            .subscribe(
                (result: SurveyPoint) => this.doDelete(result)
            );
    }

    private doDelete(editSurveyPoint: SurveyPoint)
    {
        console.log("no yet implemented");
    }
}