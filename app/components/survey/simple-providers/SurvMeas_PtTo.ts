// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {SurvMeas_PtTo} from "./../../../services/surveyDb/types/TraverseMeasurementSummary";
// Declare injectable provider for simple objects of type SurvMeas_PtTo

@Injectable()
export class CurrentSurvMeas_PtToProvider
{
    m_SurvMeas_PtTo: SurvMeas_PtTo;

    get SurvMeas_PtTo(): SurvMeas_PtTo
    {
        return this.m_SurvMeas_PtTo;
    }

    set SurvMeas_PtTo(value: SurvMeas_PtTo)
    {
        this.m_SurvMeas_PtTo = value;
    }

    hasExistingSurvMeas_PtTo(): boolean
    {
        return !!this.m_SurvMeas_PtTo;
    }
}

// Declare injectable provider for array of objects of type SurvMeas_PtTo

@Injectable()
export class CurrentSurvMeas_PtToListProvider
{
    m_listSurvMeas_PtTo: SurvMeas_PtTo[];

    get SurvMeas_PtTos(): SurvMeas_PtTo[]
    {
        return this.m_listSurvMeas_PtTo;
    }

    set SurvMeas_PtTos(value: SurvMeas_PtTo[])
    {
        this.m_listSurvMeas_PtTo = value;
    }
}
