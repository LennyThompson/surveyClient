// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyImage} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyImage

@Injectable()
export class CurrentSurveyImageProvider
{
    m_SurveyImage: SurveyImage;

    get SurveyImage(): SurveyImage
    {
        if(!this.m_SurveyImage)
        {
            this.m_SurveyImage = new SurveyImage();
        }
        return this.m_SurveyImage;
    }

    set SurveyImage(value: SurveyImage)
    {
        this.m_SurveyImage = value;
    }

    hasExistingSurveyImage(): boolean
    {
        return !!this.m_SurveyImage;
    }
}

// Declare injectable provider for id context of type SurveyImage

@Injectable()
export class SurveyImageContextProvider
{
    m_ID: number;

    get SurveyImageID(): number
    {
        return this.m_ID;
    }

    set SurveyImageID(value: number)
    {
        this.m_ID = value;
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
