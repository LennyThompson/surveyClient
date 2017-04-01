// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurvMeas_PtFrom} from "./../../../services/surveyDb/types/";
// Declare injectable provider for simple objects of type SurvMeas_PtFrom

@Injectable()
export class CurrentSurvMeas_PtFromProvider
{
    m_SurvMeas_PtFrom: SurvMeas_PtFrom;

    get SurvMeas_PtFrom(): SurvMeas_PtFrom
    {
        return this.m_SurvMeas_PtFrom;
    }

    set SurvMeas_PtFrom(value: SurvMeas_PtFrom)
    {
        this.m_SurvMeas_PtFrom = value;
    }

    hasExistingSurvMeas_PtFrom(): boolean
    {
        return !!this.m_SurvMeas_PtFrom;
    }
}

// Declare injectable provider for array of objects of type SurvMeas_PtFrom

@Injectable()
export class CurrentSurvMeas_PtFromListProvider
{
    m_listSurvMeas_PtFrom: SurvMeas_PtFrom[];

    get SurvMeas_PtFroms(): SurvMeas_PtFrom[]
    {
        return this.m_listSurvMeas_PtFrom;
    }

    set SurvMeas_PtFroms(value: SurvMeas_PtFrom[])
    {
        this.m_listSurvMeas_PtFrom = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurvMeas_PtFromProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurvMeas_PtFromHttp: SurvMeas_PtFromServiceHttp,
        private _SurvMeas_PtFromProvider: CurrentSurvMeas_PtFromProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurvMeas_PtFromHttp.loadSurvMeas_PtFromFromDatabase(ID)
        .subscribe(
                (localSurvMeas_PtFrom: SurvMeas_PtFrom) => edit(localSurvMeas_PtFrom)
        );
    }

    edit(editSurvMeas_PtFrom: SurvMeas_PtFrom)
    {
        this._SurvMeas_PtFromProvider.SurvMeas_PtFrom = editSurvMeas_PtFrom;
        this._dialogService.open(EditSurvMeas_PtFromComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurvMeas_PtFromHttp.updateToDatabase(result)
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
