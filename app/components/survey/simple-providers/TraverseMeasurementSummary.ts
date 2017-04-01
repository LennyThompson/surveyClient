// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseMeasurementSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type TraverseMeasurementSummary

@Injectable()
export class CurrentTraverseMeasurementSummaryProvider
{
    m_TraverseMeasurementSummary: TraverseMeasurementSummary;

    get TraverseMeasurementSummary(): TraverseMeasurementSummary
    {
        return this.m_TraverseMeasurementSummary;
    }

    set TraverseMeasurementSummary(value: TraverseMeasurementSummary)
    {
        this.m_TraverseMeasurementSummary = value;
    }

    hasExistingTraverseMeasurementSummary(): boolean
    {
        return !!this.m_TraverseMeasurementSummary;
    }
}

// Declare injectable provider for array of objects of type TraverseMeasurementSummary

@Injectable()
export class CurrentTraverseMeasurementSummaryListProvider
{
    m_listTraverseMeasurementSummary: TraverseMeasurementSummary[];

    get TraverseMeasurementSummarys(): TraverseMeasurementSummary[]
    {
        return this.m_listTraverseMeasurementSummary;
    }

    set TraverseMeasurementSummarys(value: TraverseMeasurementSummary[])
    {
        this.m_listTraverseMeasurementSummary = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseMeasurementSummaryProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseMeasurementSummaryHttp: TraverseMeasurementSummaryServiceHttp,
        private _TraverseMeasurementSummaryProvider: CurrentTraverseMeasurementSummaryProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseMeasurementSummaryHttp.loadTraverseMeasurementSummaryFromDatabase(ID)
        .subscribe(
                (localTraverseMeasurementSummary: TraverseMeasurementSummary) => edit(localTraverseMeasurementSummary)
        );
    }

    edit(editTraverseMeasurementSummary: TraverseMeasurementSummary)
    {
        this._TraverseMeasurementSummaryProvider.TraverseMeasurementSummary = editTraverseMeasurementSummary;
        this._dialogService.open(EditTraverseMeasurementSummaryComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseMeasurementSummaryHttp.updateToDatabase(result)
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
