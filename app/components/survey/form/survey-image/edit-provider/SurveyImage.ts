// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SurveyImage} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyImageProvider} from "./../../../simple-providers";
import {SurveyImageServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditSurveyImageComponent} from "./../../";


@Injectable (
)
export class EditSurveyImageProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _SurveyImage: CurrentSurveyImageProvider,
        private _SurveyImageService: SurveyImageServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._SurveyImageService.loadSurveyImageFromDatabase(keyId)
            .subscribe(
                (result: SurveyImage) => this.doEdit(result)
            );
    }

    private doEdit(editSurveyImage: SurveyImage)
    {
        this._SurveyImage.SurveyImage = editSurveyImage;
        this._dialogService.open(EditSurveyImageComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._SurveyImageService.updateToDatabase(result)
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
        this._SurveyImageService.loadSurveyImageFromDatabase(keyId)
            .subscribe(
                (result: SurveyImage) => this.doDelete(result)
            );
    }

    private doDelete(editSurveyImage: SurveyImage)
    {
        console.log("no yet implemented");
    }
}