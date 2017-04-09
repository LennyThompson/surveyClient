// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Survey} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyProvider} from "./../../../simple-providers";
import {SurveyServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyComponent} from "./../../";


@Injectable (
)
export class EditSurveyProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _Survey: CurrentSurveyProvider,
        private _SurveyService: SurveyServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyService.loadSurveyFromDatabase(keyId)
            .subscribe(
                (result: Survey) => this.doEdit(result)
            );
    }

    private doEdit(editSurvey: Survey)
    {
        this._Survey.Survey = editSurvey;
        this._dialogService.open(EditSurveyComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyService.updateToDatabase(result)
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
        this._SurveyService.loadSurveyFromDatabase(keyId)
            .subscribe(
                (result: Survey) => this.doDelete(result)
            );
    }

    private doDelete(editSurvey: Survey)
    {
        console.log("no yet implemented");
    }
}