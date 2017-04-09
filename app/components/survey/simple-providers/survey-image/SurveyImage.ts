// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyImage} from "./../../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyImage

@Injectable()
export class CurrentSurveyImageProvider
{
    private _SurveyImage: SurveyImage;
    private _ID: number;

    public get SurveyImage(): SurveyImage
    {
        if(!this._SurveyImage)
        {
            this._SurveyImage = new SurveyImage();
        }
        return this._SurveyImage;
    }

    public set SurveyImage(value: SurveyImage)
    {
        this._SurveyImage = value;
    }

    public get SurveyImage_ID(): number
    {
        if(this.SurveyImage)
        {
            return this.SurveyImage.ID;
        }
        return this._ID;
    }
    public set SurveyImage_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveyImage)
        {
            this.SurveyImage = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyImage(): boolean
    {
        return !!this._SurveyImage;
    }
}

// Declare injectable provider for array of objects of type SurveyImage

@Injectable()
export class CurrentSurveyImageListProvider
{
    m_listSurveyImage: SurveyImage[];

    get SurveyImages(): SurveyImage[]
    {
        if(!this.m_listSurveyImage)
        {
            this.m_listSurveyImage = new Array<SurveyImage>();
        }
        return this.m_listSurveyImage;
    }

    set SurveyImages(value: SurveyImage[])
    {
        this.m_listSurveyImage = value;
    }
}
