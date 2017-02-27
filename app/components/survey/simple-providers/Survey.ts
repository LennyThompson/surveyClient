// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Injectable} from "@angular/core";
import {Survey} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type Survey

@Injectable()
export class CurrentSurveyProvider
{
    m_Survey: Survey;

    get Survey(): Survey
    {
        if(!this.m_Survey)
        {
            this.m_Survey = new Survey();
        }
        return this.m_Survey;
    }

    set Survey(value: Survey)
    {
        this.m_Survey = value;
    }

    hasExistingSurvey(): boolean
    {
        return !!this.m_Survey;
    }
}

// Declare injectable provider for id context of type Survey

@Injectable()
export class SurveyContextProvider
{
    m_ID: number;

    get SurveyID(): number
    {
        return this.m_ID;
    }

    set SurveyID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type Survey

@Injectable()
export class CurrentSurveyListProvider
{
    m_listSurvey: Survey[];

    get Surveys(): Survey[]
    {
        if(!this.m_listSurvey)
        {
            this.m_listSurvey = new Array<Survey>();
        }
        return this.m_listSurvey;
    }

    set Surveys(value: Survey[])
    {
        this.m_listSurvey = value;
    }
}
