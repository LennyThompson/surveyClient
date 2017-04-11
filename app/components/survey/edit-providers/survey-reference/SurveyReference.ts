// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyReference} from "./../../../../services/surveyDb/types";
import {EditSurveyReferenceComponent} from "./../../form";
import {SurveyReferenceServiceHttp, CurrentSurveyReferenceProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyReferenceProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyReferenceHttp: SurveyReferenceServiceHttp,
        private _SurveyReferenceProvider: CurrentSurveyReferenceProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyReferenceHttp.loadSurveyReferenceFromDatabase(ID)
        .subscribe(
                (localSurveyReference: SurveyReference) => this.editSurveyReference(localSurveyReference)
        );
    }

    public editSurveyReference(editSurveyReference: SurveyReference)
    {
        this._SurveyReferenceProvider.SurveyReference = editSurveyReference;
        this._dialogService.open(EditSurveyReferenceComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyReferenceHttp.updateToDatabase(result)
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