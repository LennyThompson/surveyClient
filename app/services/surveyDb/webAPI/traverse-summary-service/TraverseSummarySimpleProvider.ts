// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary} from "./../../types";

// Declare injectable provider for simple objects of type TraverseSummary

@Injectable()
export class CurrentTraverseSummaryProvider
{
    private _TraverseSummary: TraverseSummary;
    private _ID: number;

    public get TraverseSummary(): TraverseSummary
    {
        return this._TraverseSummary;
    }

    public set TraverseSummary(value: TraverseSummary)
    {
        this._TraverseSummary = value;
    }

    public get TraverseSummary_ID(): number
    {
        if(this.TraverseSummary)
        {
            return this.TraverseSummary.ID;
        }
        return this._ID;
    }
    public set TraverseSummary_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.TraverseSummary)
        {
            this.TraverseSummary = null;
        }
        this._ID = -1;
    }

    hasExistingTraverseSummary(): boolean
    {
        return !!this._TraverseSummary;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary

@Injectable()
export class CurrentTraverseSummaryListProvider
{
    m_listTraverseSummary: TraverseSummary[];

    get TraverseSummarys(): TraverseSummary[]
    {
        return this.m_listTraverseSummary;
    }

    set TraverseSummarys(value: TraverseSummary[])
    {
        this.m_listTraverseSummary = value;
    }
}
