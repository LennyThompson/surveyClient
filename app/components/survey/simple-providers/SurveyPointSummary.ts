// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryProvider
{
    m_SurveyPointSummary: SurveyPointSummary;

    get SurveyPointSummary(): SurveyPointSummary
    {
        return this.m_SurveyPointSummary;
    }

    set SurveyPointSummary(value: SurveyPointSummary)
    {
        this.m_SurveyPointSummary = value;
    }

    hasExistingSurveyPointSummary(): boolean
    {
        return !!this.m_SurveyPointSummary;
    }
}

// Declare injectable provider for array of objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryListProvider
{
    m_listSurveyPointSummary: SurveyPointSummary[];

    get SurveyPointSummarys(): SurveyPointSummary[]
    {
        return this.m_listSurveyPointSummary;
    }

    set SurveyPointSummarys(value: SurveyPointSummary[])
    {
        this.m_listSurveyPointSummary = value;
    }
}
