// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {TraverseSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type TraverseSummary

@Injectable()
export class CurrentTraverseSummaryProvider
{
    m_TraverseSummary: TraverseSummary;

    get TraverseSummary(): TraverseSummary
    {
        return this.m_TraverseSummary;
    }

    set TraverseSummary(value: TraverseSummary)
    {
        this.m_TraverseSummary = value;
    }

    hasExistingTraverseSummary(): boolean
    {
        return !!this.m_TraverseSummary;
    }
}

// Declare injectable provider for array of objects of type TraverseSummary

@Injectable()
export class CurrentTraverseSummaryListProvider
{
    m_listTraverseSummary: TraverseSummary[];

    get TraverseSummarys(): TraverseSummary[]
    {
        return this.m_listTraverseSummary;
    }

    set TraverseSummarys(value: TraverseSummary[])
    {
        this.m_listTraverseSummary = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseSummaryProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseSummaryHttp: TraverseSummaryServiceHttp,
        private _TraverseSummaryProvider: CurrentTraverseSummaryProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseSummaryHttp.loadTraverseSummaryFromDatabase(ID)
        .subscribe(
                (localTraverseSummary: TraverseSummary) => edit(localTraverseSummary)
        );
    }

    edit(editTraverseSummary: TraverseSummary)
    {
        this._TraverseSummaryProvider.TraverseSummary = editTraverseSummary;
        this._dialogService.open(EditTraverseSummaryComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseSummaryHttp.updateToDatabase(result)
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
