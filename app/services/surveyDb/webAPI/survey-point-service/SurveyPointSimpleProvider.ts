// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPoint} from "./../../types";

// Declare injectable provider for simple objects of type SurveyPoint

@Injectable()
export class CurrentSurveyPointProvider
{
    private _SurveyPoint: SurveyPoint;
    private _ID: number;

    public get SurveyPoint(): SurveyPoint
    {
        if(!this._SurveyPoint)
        {
            this._SurveyPoint = new SurveyPoint();
        }
        return this._SurveyPoint;
    }

    public set SurveyPoint(value: SurveyPoint)
    {
        this._SurveyPoint = value;
    }

    public get SurveyPoint_ID(): number
    {
        if(this.SurveyPoint)
        {
            return this.SurveyPoint.ID;
        }
        return this._ID;
    }
    public set SurveyPoint_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveyPoint)
        {
            this.SurveyPoint = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyPoint(): boolean
    {
        return !!this._SurveyPoint;
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
