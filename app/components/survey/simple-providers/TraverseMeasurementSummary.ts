// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseMeasurementSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type TraverseMeasurementSummary

@Injectable()
export class CurrentTraverseMeasurementSummaryProvider
{
    m_TraverseMeasurementSummary: TraverseMeasurementSummary;

    get TraverseMeasurementSummary(): TraverseMeasurementSummary
    {
        return this.m_TraverseMeasurementSummary;
    }

    set TraverseMeasurementSummary(value: TraverseMeasurementSummary)
    {
        this.m_TraverseMeasurementSummary = value;
    }

    hasExistingTraverseMeasurementSummary(): boolean
    {
        return !!this.m_TraverseMeasurementSummary;
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
