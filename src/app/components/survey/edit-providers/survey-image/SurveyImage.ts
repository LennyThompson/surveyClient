// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyImage} from "./../../../../services/surveyDb/types";
import {EditSurveyImageComponent, AddSurveyImageComponent} from "./../../form";
import {SurveyImageServiceHttp, CurrentSurveyImageProvider, CurrentSurveyProvider, CurrentSurveyPointProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditSurveyImageProvider
{
    constructor(
        private _dialogService: MdDialog
        , private _SurveyImageHttp: SurveyImageServiceHttp
        , private _SurveyImageProvider: CurrentSurveyImageProvider
        , private _currentSurvey: CurrentSurveyProvider
        , private _currentSurveyPoint: CurrentSurveyPointProvider
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
                                    console.log("SurveyImageHttp.updateToDatabase", result);
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

    public addSurveyImage()
    {
        this._dialogService.open(AddSurveyImageComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        let bSaved: boolean = false;
                        console.log(JSON.stringify(result));
                        result.SurveyID = this._currentSurvey.Survey_ID;
                        result.PointAtID = this._currentSurveyPoint.SurveyPoint_ID;

                        if(!bSaved)
                        {
                            this._SurveyImageHttp.saveToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // Tell parent to update...
                                        console.log("SurveyImageHttp.saveToDatabase", result);
                                    }
                                );
                        }
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }
}