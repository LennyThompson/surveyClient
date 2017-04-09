// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SurveyPointType} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyPointTypeProvider} from "./../../../simple-providers";
import {SurveyPointTypeServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyPointTypeComponent} from "./../../";


@Injectable (
)
export class EditSurveyPointTypeProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _SurveyPointType: CurrentSurveyPointTypeProvider,
        private _SurveyPointTypeService: SurveyPointTypeServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(keyId)
            .subscribe(
                (result: SurveyPointType) => this.doEdit(result)
            );
    }

    private doEdit(editSurveyPointType: SurveyPointType)
    {
        this._SurveyPointType.SurveyPointType = editSurveyPointType;
        this._dialogService.open(EditSurveyPointTypeComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyPointTypeService.updateToDatabase(result)
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
        this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(keyId)
            .subscribe(
                (result: SurveyPointType) => this.doDelete(result)
            );
    }

    private doDelete(editSurveyPointType: SurveyPointType)
    {
        console.log("no yet implemented");
    }
}