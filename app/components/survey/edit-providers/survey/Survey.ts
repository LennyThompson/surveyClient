// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Survey} from "./../../../../services/surveyDb/types";
import {EditSurveyComponent} from "./../../form";
import {SurveyServiceHttp, CurrentSurveyProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyHttp: SurveyServiceHttp,
        private _SurveyProvider: CurrentSurveyProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyHttp.loadSurveyFromDatabase(ID)
        .subscribe(
                (localSurvey: Survey) => this.editSurvey(localSurvey)
        );
    }

    public editSurvey(editSurvey: Survey)
    {
        this._SurveyProvider.Survey = editSurvey;
        this._dialogService.open(EditSurveyComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyHttp.updateToDatabase(result)
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