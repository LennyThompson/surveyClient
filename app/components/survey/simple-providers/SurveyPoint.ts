// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPoint} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyPoint

@Injectable()
export class CurrentSurveyPointProvider
{
    m_SurveyPoint: SurveyPoint;

    get SurveyPoint(): SurveyPoint
    {
        if(!this.m_SurveyPoint)
        {
            this.m_SurveyPoint = new SurveyPoint();
        }
        return this.m_SurveyPoint;
    }

    set SurveyPoint(value: SurveyPoint)
    {
        this.m_SurveyPoint = value;
    }

    hasExistingSurveyPoint(): boolean
    {
        return !!this.m_SurveyPoint;
    }
}

// Declare injectable provider for id context of type SurveyPoint

@Injectable()
export class SurveyPointContextProvider
{
    m_ID: number;

    get SurveyPointID(): number
    {
        return this.m_ID;
    }

    set SurveyPointID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type SurveyPoint

@Injectable()
export class CurrentSurveyPointListProvider
{
    m_listSurveyPoint: SurveyPoint[];

    get SurveyPoints(): SurveyPoint[]
    {
        if(!this.m_listSurveyPoint)
        {
            this.m_listSurveyPoint = new Array<SurveyPoint>();
        }
        return this.m_listSurveyPoint;
    }

    set SurveyPoints(value: SurveyPoint[])
    {
        this.m_listSurveyPoint = value;
    }
}
