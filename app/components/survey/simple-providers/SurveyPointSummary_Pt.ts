// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointSummary_Pt} from "./../../../services/surveyDb/types/SurveyPointSummary";
// Declare injectable provider for simple objects of type SurveyPointSummary_Pt

@Injectable()
export class CurrentSurveyPointSummary_PtProvider
{
    m_SurveyPointSummary_Pt: SurveyPointSummary_Pt;

    get SurveyPointSummary_Pt(): SurveyPointSummary_Pt
    {
        return this.m_SurveyPointSummary_Pt;
    }

    set SurveyPointSummary_Pt(value: SurveyPointSummary_Pt)
    {
        this.m_SurveyPointSummary_Pt = value;
    }

    hasExistingSurveyPointSummary_Pt(): boolean
    {
        return !!this.m_SurveyPointSummary_Pt;
    }
}

// Declare injectable provider for array of objects of type SurveyPointSummary_Pt

@Injectable()
export class CurrentSurveyPointSummary_PtListProvider
{
    m_listSurveyPointSummary_Pt: SurveyPointSummary_Pt[];

    get SurveyPointSummary_Pts(): SurveyPointSummary_Pt[]
    {
        return this.m_listSurveyPointSummary_Pt;
    }

    set SurveyPointSummary_Pts(value: SurveyPointSummary_Pt[])
    {
        this.m_listSurveyPointSummary_Pt = value;
    }
}
