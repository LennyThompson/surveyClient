// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary_PtStart} from "./../../../services/surveyDb/types/TraverseSummary";
// Declare injectable provider for simple objects of type TraverseSummary_PtStart

@Injectable()
export class CurrentTraverseSummary_PtStartProvider
{
    m_TraverseSummary_PtStart: TraverseSummary_PtStart;

    get TraverseSummary_PtStart(): TraverseSummary_PtStart
    {
        return this.m_TraverseSummary_PtStart;
    }

    set TraverseSummary_PtStart(value: TraverseSummary_PtStart)
    {
        this.m_TraverseSummary_PtStart = value;
    }

    hasExistingTraverseSummary_PtStart(): boolean
    {
        return !!this.m_TraverseSummary_PtStart;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary_PtStart

@Injectable()
export class CurrentTraverseSummary_PtStartListProvider
{
    m_listTraverseSummary_PtStart: TraverseSummary_PtStart[];

    get TraverseSummary_PtStarts(): TraverseSummary_PtStart[]
    {
        return this.m_listTraverseSummary_PtStart;
    }

    set TraverseSummary_PtStarts(value: TraverseSummary_PtStart[])
    {
        this.m_listTraverseSummary_PtStart = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseSummary_PtStartProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseSummary_PtStartHttp: TraverseSummary_PtStartServiceHttp,
        private _TraverseSummary_PtStartProvider: CurrentTraverseSummary_PtStartProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseSummary_PtStartHttp.loadTraverseSummary_PtStartFromDatabase(ID)
        .subscribe(
                (localTraverseSummary_PtStart: TraverseSummary_PtStart) => edit(localTraverseSummary_PtStart)
        );
    }

    edit(editTraverseSummary_PtStart: TraverseSummary_PtStart)
    {
        this._TraverseSummary_PtStartProvider.TraverseSummary_PtStart = editTraverseSummary_PtStart;
        this._dialogService.open(EditTraverseSummary_PtStartComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseSummary_PtStartHttp.updateToDatabase(result)
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
