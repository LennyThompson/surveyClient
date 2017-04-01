// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary_Proj} from "./../../../services/surveyDb/types/SurveySummary";
// Declare injectable provider for simple objects of type SurveySummary_Proj

@Injectable()
export class CurrentSurveySummary_ProjProvider
{
    m_SurveySummary_Proj: SurveySummary_Proj;

    get SurveySummary_Proj(): SurveySummary_Proj
    {
        return this.m_SurveySummary_Proj;
    }

    set SurveySummary_Proj(value: SurveySummary_Proj)
    {
        this.m_SurveySummary_Proj = value;
    }

    hasExistingSurveySummary_Proj(): boolean
    {
        return !!this.m_SurveySummary_Proj;
    }
}

// Declare injectable provider for array of objects of type SurveySummary_Proj

@Injectable()
export class CurrentSurveySummary_ProjListProvider
{
    m_listSurveySummary_Proj: SurveySummary_Proj[];

    get SurveySummary_Projs(): SurveySummary_Proj[]
    {
        return this.m_listSurveySummary_Proj;
    }

    set SurveySummary_Projs(value: SurveySummary_Proj[])
    {
        this.m_listSurveySummary_Proj = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveySummary_ProjProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveySummary_ProjHttp: SurveySummary_ProjServiceHttp,
        private _SurveySummary_ProjProvider: CurrentSurveySummary_ProjProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveySummary_ProjHttp.loadSurveySummary_ProjFromDatabase(ID)
        .subscribe(
                (localSurveySummary_Proj: SurveySummary_Proj) => edit(localSurveySummary_Proj)
        );
    }

    edit(editSurveySummary_Proj: SurveySummary_Proj)
    {
        this._SurveySummary_ProjProvider.SurveySummary_Proj = editSurveySummary_Proj;
        this._dialogService.open(EditSurveySummary_ProjComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveySummary_ProjHttp.updateToDatabase(result)
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
