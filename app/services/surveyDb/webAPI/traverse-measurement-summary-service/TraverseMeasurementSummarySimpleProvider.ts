// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseMeasurementSummary} from "./../../types";

// Declare injectable provider for simple objects of type TraverseMeasurementSummary

@Injectable()
export class CurrentTraverseMeasurementSummaryProvider
{
    private _TraverseMeasurementSummary: TraverseMeasurementSummary;
    private _ID: number;

    public get TraverseMeasurementSummary(): TraverseMeasurementSummary
    {
        return this._TraverseMeasurementSummary;
    }

    public set TraverseMeasurementSummary(value: TraverseMeasurementSummary)
    {
        this._TraverseMeasurementSummary = value;
    }

    public get TraverseMeasurementSummary_ID(): number
    {
        if(this.TraverseMeasurementSummary)
        {
            return this.TraverseMeasurementSummary.ID;
        }
        return this._ID;
    }
    public set TraverseMeasurementSummary_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.TraverseMeasurementSummary)
        {
            this.TraverseMeasurementSummary = null;
        }
        this._ID = -1;
    }

    hasExistingTraverseMeasurementSummary(): boolean
    {
        return !!this._TraverseMeasurementSummary;
    }
}

// Declare injectable provider for array of objects of type TraverseMeasurementSummary

@Injectable()
export class CurrentTraverseMeasurementSummaryListProvider
{
    m_listTraverseMeasurementSummary: TraverseMeasurementSummary[];

    get TraverseMeasurementSummarys(): TraverseMeasurementSummary[]
    {
        return this.m_listTraverseMeasurementSummary;
    }

    set TraverseMeasurementSummarys(value: TraverseMeasurementSummary[])
    {
        this.m_listTraverseMeasurementSummary = value;
    }
}
