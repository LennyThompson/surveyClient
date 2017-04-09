// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SurveyReference} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyReferenceProvider} from "./../../../simple-providers";
import {SurveyReferenceServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyReferenceComponent} from "./../../";


@Injectable (
)
export class EditSurveyReferenceProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _SurveyReference: CurrentSurveyReferenceProvider,
        private _SurveyReferenceService: SurveyReferenceServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyReferenceService.loadSurveyReferenceFromDatabase(keyId)
            .subscribe(
                (result: SurveyReference) => this.doEdit(result)
            );
    }

    private doEdit(editSurveyReference: SurveyReference)
    {
        this._SurveyReference.SurveyReference = editSurveyReference;
        this._dialogService.open(EditSurveyReferenceComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyReferenceService.updateToDatabase(result)
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
        this._SurveyReferenceService.loadSurveyReferenceFromDatabase(keyId)
            .subscribe(
                (result: SurveyReference) => this.doDelete(result)
            );
    }

    private doDelete(editSurveyReference: SurveyReference)
    {
        console.log("no yet implemented");
    }
}