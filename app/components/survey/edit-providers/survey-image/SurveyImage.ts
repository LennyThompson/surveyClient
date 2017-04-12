// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyImage} from "./../../../../services/surveyDb/types";
import {EditSurveyImageComponent} from "./../../form";
import {SurveyImageServiceHttp, CurrentSurveyImageProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyImageProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyImageHttp: SurveyImageServiceHttp,
        private _SurveyImageProvider: CurrentSurveyImageProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._SurveyImageHttp.loadSurveyImageFromDatabase(ID)
        .subscribe(
                (localSurveyImage: SurveyImage) => this.editSurveyImage(localSurveyImage)
        );
    }

    public editSurveyImage(editSurveyImage: SurveyImage)
    {
        this._SurveyImageProvider.SurveyImage = editSurveyImage;
        this._dialogService.open(EditSurveyImageComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyImageHttp.updateToDatabase(result)
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