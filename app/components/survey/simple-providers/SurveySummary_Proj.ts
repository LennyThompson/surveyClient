// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary_Proj} from "./../../../services/surveyDb/types/SurveySummary";
// Declare injectable provider for simple objects of type SurveySummary_Proj

@Injectable()
export class CurrentSurveySummary_ProjProvider
{
    m_SurveySummary_Proj: SurveySummary_Proj;

    get SurveySummary_Proj(): SurveySummary_Proj
    {
        return this.m_SurveySummary_Proj;
    }

    set SurveySummary_Proj(value: SurveySummary_Proj)
    {
        this.m_SurveySummary_Proj = value;
    }

    hasExistingSurveySummary_Proj(): boolean
    {
        return !!this.m_SurveySummary_Proj;
    }
}

// Declare injectable provider for array of objects of type SurveySummary_Proj

@Injectable()
export class CurrentSurveySummary_ProjListProvider
{
    m_listSurveySummary_Proj: SurveySummary_Proj[];

    get SurveySummary_Projs(): SurveySummary_Proj[]
    {
        return this.m_listSurveySummary_Proj;
    }

    set SurveySummary_Projs(value: SurveySummary_Proj[])
    {
        this.m_listSurveySummary_Proj = value;
    }
}
