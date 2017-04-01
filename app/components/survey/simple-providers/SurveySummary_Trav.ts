// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

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

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveySummary_TravProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveySummary_TravHttp: SurveySummary_TravServiceHttp,
        private _SurveySummary_TravProvider: CurrentSurveySummary_TravProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveySummary_TravHttp.loadSurveySummary_TravFromDatabase(ID)
        .subscribe(
                (localSurveySummary_Trav: SurveySummary_Trav) => edit(localSurveySummary_Trav)
        );
    }

    edit(editSurveySummary_Trav: SurveySummary_Trav)
    {
        this._SurveySummary_TravProvider.SurveySummary_Trav = editSurveySummary_Trav;
        this._dialogService.open(EditSurveySummary_TravComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveySummary_TravHttp.updateToDatabase(result)
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
