// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary} from "./../../types";

// Declare injectable provider for simple objects of type SurveySummary

@Injectable()
export class CurrentSurveySummaryProvider
{
    private _SurveySummary: SurveySummary;
    private _ID: number = -1;

    public get SurveySummary(): SurveySummary
    {
        return this._SurveySummary;
    }

    public set SurveySummary(value: SurveySummary)
    {
        this._SurveySummary = value;
        this._ID = this._SurveySummary.ID;
    }

    public get SurveySummary_ID(): number
    {
        if(this.SurveySummary)
        {
            return this.SurveySummary.ID;
        }
        return this._ID;
    }
    public set SurveySummary_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveySummary)
        {
            this._SurveySummary = null;
        }
        this._ID = -1;
    }

    hasExistingSurveySummary(): boolean
    {
        return !!this._SurveySummary;
    }
}

// Declare injectable provider for array of objects of type SurveySummary

@Injectable()
export class CurrentSurveySummaryListProvider
{
    m_listSurveySummary: SurveySummary[];

    get SurveySummarys(): SurveySummary[]
    {
        return this.m_listSurveySummary;
    }

    set SurveySummarys(value: SurveySummary[])
    {
        this.m_listSurveySummary = value;
    }
}
