// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary_PtStart} from "./../../../services/surveyDb/types/TraverseSummary";
// Declare injectable provider for simple objects of type TraverseSummary_PtStart

@Injectable()
export class CurrentTraverseSummary_PtStartProvider
{
    m_TraverseSummary_PtStart: TraverseSummary_PtStart;

    get TraverseSummary_PtStart(): TraverseSummary_PtStart
    {
        return this.m_TraverseSummary_PtStart;
    }

    set TraverseSummary_PtStart(value: TraverseSummary_PtStart)
    {
        this.m_TraverseSummary_PtStart = value;
    }

    hasExistingTraverseSummary_PtStart(): boolean
    {
        return !!this.m_TraverseSummary_PtStart;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary_PtStart

@Injectable()
export class CurrentTraverseSummary_PtStartListProvider
{
    m_listTraverseSummary_PtStart: TraverseSummary_PtStart[];

    get TraverseSummary_PtStarts(): TraverseSummary_PtStart[]
    {
        return this.m_listTraverseSummary_PtStart;
    }

    set TraverseSummary_PtStarts(value: TraverseSummary_PtStart[])
    {
        this.m_listTraverseSummary_PtStart = value;
    }
}
