// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurvMeas_PtTo} from "./../../../services/surveyDb/types/";
// Declare injectable provider for simple objects of type SurvMeas_PtTo

@Injectable()
export class CurrentSurvMeas_PtToProvider
{
    m_SurvMeas_PtTo: SurvMeas_PtTo;

    get SurvMeas_PtTo(): SurvMeas_PtTo
    {
        return this.m_SurvMeas_PtTo;
    }

    set SurvMeas_PtTo(value: SurvMeas_PtTo)
    {
        this.m_SurvMeas_PtTo = value;
    }

    hasExistingSurvMeas_PtTo(): boolean
    {
        return !!this.m_SurvMeas_PtTo;
    }
}

// Declare injectable provider for array of objects of type SurvMeas_PtTo

@Injectable()
export class CurrentSurvMeas_PtToListProvider
{
    m_listSurvMeas_PtTo: SurvMeas_PtTo[];

    get SurvMeas_PtTos(): SurvMeas_PtTo[]
    {
        return this.m_listSurvMeas_PtTo;
    }

    set SurvMeas_PtTos(value: SurvMeas_PtTo[])
    {
        this.m_listSurvMeas_PtTo = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurvMeas_PtToProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurvMeas_PtToHttp: SurvMeas_PtToServiceHttp,
        private _SurvMeas_PtToProvider: CurrentSurvMeas_PtToProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurvMeas_PtToHttp.loadSurvMeas_PtToFromDatabase(ID)
        .subscribe(
                (localSurvMeas_PtTo: SurvMeas_PtTo) => edit(localSurvMeas_PtTo)
        );
    }

    edit(editSurvMeas_PtTo: SurvMeas_PtTo)
    {
        this._SurvMeas_PtToProvider.SurvMeas_PtTo = editSurvMeas_PtTo;
        this._dialogService.open(EditSurvMeas_PtToComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurvMeas_PtToHttp.updateToDatabase(result)
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
