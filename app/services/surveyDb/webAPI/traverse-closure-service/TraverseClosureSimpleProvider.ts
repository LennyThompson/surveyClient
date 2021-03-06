// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseClosure} from "./../../types";

// Declare injectable provider for simple objects of type TraverseClosure

@Injectable()
export class CurrentTraverseClosureProvider
{
    private _TraverseClosure: TraverseClosure;
    private _ID: number;

    public get TraverseClosure(): TraverseClosure
    {
        if(!this._TraverseClosure)
        {
            this._TraverseClosure = new TraverseClosure();
        }
        return this._TraverseClosure;
    }

    public set TraverseClosure(value: TraverseClosure)
    {
        this._TraverseClosure = value;
    }

    public get TraverseClosure_ID(): number
    {
        if(this.TraverseClosure)
        {
            return this.TraverseClosure.ID;
        }
        return this._ID;
    }
    public set TraverseClosure_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.TraverseClosure)
        {
            this.TraverseClosure = null;
        }
        this._ID = -1;
    }

    hasExistingTraverseClosure(): boolean
    {
        return !!this._TraverseClosure;
    }
}

// Declare injectable provider for array of objects of type TraverseClosure

@Injectable()
export class CurrentTraverseClosureListProvider
{
    m_listTraverseClosure: TraverseClosure[];

    get TraverseClosures(): TraverseClosure[]
    {
        if(!this.m_listTraverseClosure)
        {
            this.m_listTraverseClosure = new Array<TraverseClosure>();
        }
        return this.m_listTraverseClosure;
    }

    set TraverseClosures(value: TraverseClosure[])
    {
        this.m_listTraverseClosure = value;
    }
}
