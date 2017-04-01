// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveySummary

@Injectable()
export class CurrentSurveySummaryProvider
{
    m_SurveySummary: SurveySummary;

    get SurveySummary(): SurveySummary
    {
        return this.m_SurveySummary;
    }

    set SurveySummary(value: SurveySummary)
    {
        this.m_SurveySummary = value;
    }

    hasExistingSurveySummary(): boolean
    {
        return !!this.m_SurveySummary;
    }
}

// Declare injectable provider for array of objects of type SurveySummary

@Injectable()
export class CurrentSurveySummaryListProvider
{
    m_listSurveySummary: SurveySummary[];

    get SurveySummarys(): SurveySummary[]
    {
        return this.m_listSurveySummary;
    }

    set SurveySummarys(value: SurveySummary[])
    {
        this.m_listSurveySummary = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveySummaryProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveySummaryHttp: SurveySummaryServiceHttp,
        private _SurveySummaryProvider: CurrentSurveySummaryProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveySummaryHttp.loadSurveySummaryFromDatabase(ID)
        .subscribe(
                (localSurveySummary: SurveySummary) => edit(localSurveySummary)
        );
    }

    edit(editSurveySummary: SurveySummary)
    {
        this._SurveySummaryProvider.SurveySummary = editSurveySummary;
        this._dialogService.open(EditSurveySummaryComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveySummaryHttp.updateToDatabase(result)
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
