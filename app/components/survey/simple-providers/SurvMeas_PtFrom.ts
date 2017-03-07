// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {SurvMeas_PtFrom} from "./../../../services/surveyDb/types/TraverseMeasurementSummary";
// Declare injectable provider for simple objects of type SurvMeas_PtFrom

@Injectable()
export class CurrentSurvMeas_PtFromProvider
{
    m_SurvMeas_PtFrom: SurvMeas_PtFrom;

    get SurvMeas_PtFrom(): SurvMeas_PtFrom
    {
        return this.m_SurvMeas_PtFrom;
    }

    set SurvMeas_PtFrom(value: SurvMeas_PtFrom)
    {
        this.m_SurvMeas_PtFrom = value;
    }

    hasExistingSurvMeas_PtFrom(): boolean
    {
        return !!this.m_SurvMeas_PtFrom;
    }
}

// Declare injectable provider for array of objects of type SurvMeas_PtFrom

@Injectable()
export class CurrentSurvMeas_PtFromListProvider
{
    m_listSurvMeas_PtFrom: SurvMeas_PtFrom[];

    get SurvMeas_PtFroms(): SurvMeas_PtFrom[]
    {
        return this.m_listSurvMeas_PtFrom;
    }

    set SurvMeas_PtFroms(value: SurvMeas_PtFrom[])
    {
        this.m_listSurvMeas_PtFrom = value;
    }
}
