// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyImage} from "./../../../../../services/surveyDb/types";
import {CurrentSurveyImageProvider, CurrentSurveyProvider, CurrentSurveyPointProvider} from "./../../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-survey-image-dialog",
        templateUrl: "add-survey-image-dialog.html",
        styleUrls: ["./add-survey-image-dialog.scss"]
    }
)
export class AddSurveyImageComponent
{
    constructor
    (
        protected _dialog: MdDialogRef<AddSurveyImageComponent>
        , protected _SurveyImageProvider: CurrentSurveyImageProvider
        , protected _SurveyProvider: CurrentSurveyProvider
        , protected _SurveyPointProvider: CurrentSurveyPointProvider


    )
    {
        this._SurveyImageProvider.SurveyImage = new SurveyImage();
        // TODO: Determine where this should really go, as this is also covered in the EditSurveyImageProvider, which can potentially add more context.
        //       Left here so that this component can be used independently of the EditSurveyImageProvider
        this._SurveyImageProvider.SurveyImage.SurveyID = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;
        this._SurveyImageProvider.SurveyImage.PointAtID = this._SurveyPointProvider.SurveyPoint ? this._SurveyPointProvider.SurveyPoint.ID : this._SurveyPointProvider.SurveyPoint_ID;


    }

    public get title(): string
    {
        return "Add SurveyImage";
    }

    public get SurveyImage(): SurveyImage
    {
        return this._SurveyImageProvider.SurveyImage;
    }

    public set SurveyImage(value: SurveyImage)
    {
        this._SurveyImageProvider.SurveyImage = value;
    }

    protected onClose()
    {
        return this._dialog.close(this.SurveyImage);
    }

    protected onCancel()
    {
        return this._dialog.close(null);
    }
}
