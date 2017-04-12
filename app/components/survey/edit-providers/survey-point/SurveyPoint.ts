// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyPoint} from "./../../../../services/surveyDb/types";
import {EditSurveyPointComponent} from "./../../form";
import {SurveyPointServiceHttp, CurrentSurveyPointProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyPointProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyPointHttp: SurveyPointServiceHttp,
        private _SurveyPointProvider: CurrentSurveyPointProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyPointHttp.loadSurveyPointFromDatabase(ID)
        .subscribe(
                (localSurveyPoint: SurveyPoint) => this.editSurveyPoint(localSurveyPoint)
        );
    }

    public editSurveyPoint(editSurveyPoint: SurveyPoint)
    {
        this._SurveyPointProvider.SurveyPoint = editSurveyPoint;
        this._dialogService.open(EditSurveyPointComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointHttp.updateToDatabase(result)
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