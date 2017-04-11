// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyPointType} from "./../../../../services/surveyDb/types";
import {EditSurveyPointTypeComponent} from "./../../form";
import {SurveyPointTypeServiceHttp, CurrentSurveyPointTypeProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyPointTypeProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyPointTypeHttp: SurveyPointTypeServiceHttp,
        private _SurveyPointTypeProvider: CurrentSurveyPointTypeProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyPointTypeHttp.loadSurveyPointTypeFromDatabase(ID)
        .subscribe(
                (localSurveyPointType: SurveyPointType) => this.editSurveyPointType(localSurveyPointType)
        );
    }

    public editSurveyPointType(editSurveyPointType: SurveyPointType)
    {
        this._SurveyPointTypeProvider.SurveyPointType = editSurveyPointType;
        this._dialogService.open(EditSurveyPointTypeComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointTypeHttp.updateToDatabase(result)
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