// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type TraverseSummary

@Injectable()
export class CurrentTraverseSummaryProvider
{
    m_TraverseSummary: TraverseSummary;

    get TraverseSummary(): TraverseSummary
    {
        return this.m_TraverseSummary;
    }

    set TraverseSummary(value: TraverseSummary)
    {
        this.m_TraverseSummary = value;
    }

    hasExistingTraverseSummary(): boolean
    {
        return !!this.m_TraverseSummary;
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
