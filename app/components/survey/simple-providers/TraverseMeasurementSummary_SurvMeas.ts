// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseMeasurementSummary_SurvMeas} from "./../../../services/surveyDb/types/TraverseMeasurementSummary";
// Declare injectable provider for simple objects of type TraverseMeasurementSummary_SurvMeas

@Injectable()
export class CurrentTraverseMeasurementSummary_SurvMeasProvider
{
    m_TraverseMeasurementSummary_SurvMeas: TraverseMeasurementSummary_SurvMeas;

    get TraverseMeasurementSummary_SurvMeas(): TraverseMeasurementSummary_SurvMeas
    {
        return this.m_TraverseMeasurementSummary_SurvMeas;
    }

    set TraverseMeasurementSummary_SurvMeas(value: TraverseMeasurementSummary_SurvMeas)
    {
        this.m_TraverseMeasurementSummary_SurvMeas = value;
    }

    hasExistingTraverseMeasurementSummary_SurvMeas(): boolean
    {
        return !!this.m_TraverseMeasurementSummary_SurvMeas;
    }
}

// Declare injectable provider for array of objects of type TraverseMeasurementSummary_SurvMeas

@Injectable()
export class CurrentTraverseMeasurementSummary_SurvMeasListProvider
{
    m_listTraverseMeasurementSummary_SurvMeas: TraverseMeasurementSummary_SurvMeas[];

    get TraverseMeasurementSummary_SurvMeass(): TraverseMeasurementSummary_SurvMeas[]
    {
        return this.m_listTraverseMeasurementSummary_SurvMeas;
    }

    set TraverseMeasurementSummary_SurvMeass(value: TraverseMeasurementSummary_SurvMeas[])
    {
        this.m_listTraverseMeasurementSummary_SurvMeas = value;
    }
}
