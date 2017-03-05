// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseClosure} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type TraverseClosure

@Injectable()
export class CurrentTraverseClosureProvider
{
    m_TraverseClosure: TraverseClosure;

    get TraverseClosure(): TraverseClosure
    {
        if(!this.m_TraverseClosure)
        {
            this.m_TraverseClosure = new TraverseClosure();
        }
        return this.m_TraverseClosure;
    }

    set TraverseClosure(value: TraverseClosure)
    {
        this.m_TraverseClosure = value;
    }

    hasExistingTraverseClosure(): boolean
    {
        return !!this.m_TraverseClosure;
    }
}

// Declare injectable provider for id context of type TraverseClosure

@Injectable()
export class TraverseClosureContextProvider
{
    m_ID: number;

    get TraverseClosureID(): number
    {
        return this.m_ID;
    }

    set TraverseClosureID(value: number)
    {
        this.m_ID = value;
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
