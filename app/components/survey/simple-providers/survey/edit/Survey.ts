// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Survey} from "./../../../../../services/surveyDb/types";
import {EditSurveyComponent} from "./../../../form";
import {SurveyServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {CurrentSurveyProvider} from "./../Survey";

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