// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary_PtSurv} from "./../../../services/surveyDb/types/SurveySummary";
// Declare injectable provider for simple objects of type SurveySummary_PtSurv

@Injectable()
export class CurrentSurveySummary_PtSurvProvider
{
    m_SurveySummary_PtSurv: SurveySummary_PtSurv;

    get SurveySummary_PtSurv(): SurveySummary_PtSurv
    {
        return this.m_SurveySummary_PtSurv;
    }

    set SurveySummary_PtSurv(value: SurveySummary_PtSurv)
    {
        this.m_SurveySummary_PtSurv = value;
    }

    hasExistingSurveySummary_PtSurv(): boolean
    {
        return !!this.m_SurveySummary_PtSurv;
    }
}

// Declare injectable provider for array of objects of type SurveySummary_PtSurv

@Injectable()
export class CurrentSurveySummary_PtSurvListProvider
{
    m_listSurveySummary_PtSurv: SurveySummary_PtSurv[];

    get SurveySummary_PtSurvs(): SurveySummary_PtSurv[]
    {
        return this.m_listSurveySummary_PtSurv;
    }

    set SurveySummary_PtSurvs(value: SurveySummary_PtSurv[])
    {
        this.m_listSurveySummary_PtSurv = value;
    }
}
