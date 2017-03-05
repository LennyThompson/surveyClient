// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary_PtEnd} from "./../../../services/surveyDb/types/TraverseSummary";
// Declare injectable provider for simple objects of type TraverseSummary_PtEnd

@Injectable()
export class CurrentTraverseSummary_PtEndProvider
{
    m_TraverseSummary_PtEnd: TraverseSummary_PtEnd;

    get TraverseSummary_PtEnd(): TraverseSummary_PtEnd
    {
        return this.m_TraverseSummary_PtEnd;
    }

    set TraverseSummary_PtEnd(value: TraverseSummary_PtEnd)
    {
        this.m_TraverseSummary_PtEnd = value;
    }

    hasExistingTraverseSummary_PtEnd(): boolean
    {
        return !!this.m_TraverseSummary_PtEnd;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary_PtEnd

@Injectable()
export class CurrentTraverseSummary_PtEndListProvider
{
    m_listTraverseSummary_PtEnd: TraverseSummary_PtEnd[];

    get TraverseSummary_PtEnds(): TraverseSummary_PtEnd[]
    {
        return this.m_listTraverseSummary_PtEnd;
    }

    set TraverseSummary_PtEnds(value: TraverseSummary_PtEnd[])
    {
        this.m_listTraverseSummary_PtEnd = value;
    }
}
