// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveySummary

@Injectable()
export class CurrentSurveySummaryProvider
{
    m_SurveySummary: SurveySummary;

    get SurveySummary(): SurveySummary
    {
        return this.m_SurveySummary;
    }

    set SurveySummary(value: SurveySummary)
    {
        this.m_SurveySummary = value;
    }

    hasExistingSurveySummary(): boolean
    {
        return !!this.m_SurveySummary;
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
