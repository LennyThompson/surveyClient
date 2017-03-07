// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary_Trav} from "./../../../services/surveyDb/types/SurveySummary";
// Declare injectable provider for simple objects of type SurveySummary_Trav

@Injectable()
export class CurrentSurveySummary_TravProvider
{
    m_SurveySummary_Trav: SurveySummary_Trav;

    get SurveySummary_Trav(): SurveySummary_Trav
    {
        return this.m_SurveySummary_Trav;
    }

    set SurveySummary_Trav(value: SurveySummary_Trav)
    {
        this.m_SurveySummary_Trav = value;
    }

    hasExistingSurveySummary_Trav(): boolean
    {
        return !!this.m_SurveySummary_Trav;
    }
}

// Declare injectable provider for array of objects of type SurveySummary_Trav

@Injectable()
export class CurrentSurveySummary_TravListProvider
{
    m_listSurveySummary_Trav: SurveySummary_Trav[];

    get SurveySummary_Travs(): SurveySummary_Trav[]
    {
        return this.m_listSurveySummary_Trav;
    }

    set SurveySummary_Travs(value: SurveySummary_Trav[])
    {
        this.m_listSurveySummary_Trav = value;
    }
}
