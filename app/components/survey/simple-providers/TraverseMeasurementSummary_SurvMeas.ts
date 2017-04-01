// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

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

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseMeasurementSummary_SurvMeasProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseMeasurementSummary_SurvMeasHttp: TraverseMeasurementSummary_SurvMeasServiceHttp,
        private _TraverseMeasurementSummary_SurvMeasProvider: CurrentTraverseMeasurementSummary_SurvMeasProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseMeasurementSummary_SurvMeasHttp.loadTraverseMeasurementSummary_SurvMeasFromDatabase(ID)
        .subscribe(
                (localTraverseMeasurementSummary_SurvMeas: TraverseMeasurementSummary_SurvMeas) => edit(localTraverseMeasurementSummary_SurvMeas)
        );
    }

    edit(editTraverseMeasurementSummary_SurvMeas: TraverseMeasurementSummary_SurvMeas)
    {
        this._TraverseMeasurementSummary_SurvMeasProvider.TraverseMeasurementSummary_SurvMeas = editTraverseMeasurementSummary_SurvMeas;
        this._dialogService.open(EditTraverseMeasurementSummary_SurvMeasComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseMeasurementSummary_SurvMeasHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("this.pointService.updateToDatabase", result);
                                }
                            );
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }
}
