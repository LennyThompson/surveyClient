// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary_PtEnd} from "./../../../services/surveyDb/types/TraverseSummary";
// Declare injectable provider for simple objects of type TraverseSummary_PtEnd

@Injectable()
export class CurrentTraverseSummary_PtEndProvider
{
    m_TraverseSummary_PtEnd: TraverseSummary_PtEnd;

    get TraverseSummary_PtEnd(): TraverseSummary_PtEnd
    {
        return this.m_TraverseSummary_PtEnd;
    }

    set TraverseSummary_PtEnd(value: TraverseSummary_PtEnd)
    {
        this.m_TraverseSummary_PtEnd = value;
    }

    hasExistingTraverseSummary_PtEnd(): boolean
    {
        return !!this.m_TraverseSummary_PtEnd;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary_PtEnd

@Injectable()
export class CurrentTraverseSummary_PtEndListProvider
{
    m_listTraverseSummary_PtEnd: TraverseSummary_PtEnd[];

    get TraverseSummary_PtEnds(): TraverseSummary_PtEnd[]
    {
        return this.m_listTraverseSummary_PtEnd;
    }

    set TraverseSummary_PtEnds(value: TraverseSummary_PtEnd[])
    {
        this.m_listTraverseSummary_PtEnd = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseSummary_PtEndProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseSummary_PtEndHttp: TraverseSummary_PtEndServiceHttp,
        private _TraverseSummary_PtEndProvider: CurrentTraverseSummary_PtEndProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseSummary_PtEndHttp.loadTraverseSummary_PtEndFromDatabase(ID)
        .subscribe(
                (localTraverseSummary_PtEnd: TraverseSummary_PtEnd) => edit(localTraverseSummary_PtEnd)
        );
    }

    edit(editTraverseSummary_PtEnd: TraverseSummary_PtEnd)
    {
        this._TraverseSummary_PtEndProvider.TraverseSummary_PtEnd = editTraverseSummary_PtEnd;
        this._dialogService.open(EditTraverseSummary_PtEndComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseSummary_PtEndHttp.updateToDatabase(result)
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
