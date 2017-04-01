// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveySummary_PtSurv} from "./../../../services/surveyDb/types/SurveySummary";
// Declare injectable provider for simple objects of type SurveySummary_PtSurv

@Injectable()
export class CurrentSurveySummary_PtSurvProvider
{
    m_SurveySummary_PtSurv: SurveySummary_PtSurv;

    get SurveySummary_PtSurv(): SurveySummary_PtSurv
    {
        return this.m_SurveySummary_PtSurv;
    }

    set SurveySummary_PtSurv(value: SurveySummary_PtSurv)
    {
        this.m_SurveySummary_PtSurv = value;
    }

    hasExistingSurveySummary_PtSurv(): boolean
    {
        return !!this.m_SurveySummary_PtSurv;
    }
}

// Declare injectable provider for array of objects of type SurveySummary_PtSurv

@Injectable()
export class CurrentSurveySummary_PtSurvListProvider
{
    m_listSurveySummary_PtSurv: SurveySummary_PtSurv[];

    get SurveySummary_PtSurvs(): SurveySummary_PtSurv[]
    {
        return this.m_listSurveySummary_PtSurv;
    }

    set SurveySummary_PtSurvs(value: SurveySummary_PtSurv[])
    {
        this.m_listSurveySummary_PtSurv = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveySummary_PtSurvProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveySummary_PtSurvHttp: SurveySummary_PtSurvServiceHttp,
        private _SurveySummary_PtSurvProvider: CurrentSurveySummary_PtSurvProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveySummary_PtSurvHttp.loadSurveySummary_PtSurvFromDatabase(ID)
        .subscribe(
                (localSurveySummary_PtSurv: SurveySummary_PtSurv) => edit(localSurveySummary_PtSurv)
        );
    }

    edit(editSurveySummary_PtSurv: SurveySummary_PtSurv)
    {
        this._SurveySummary_PtSurvProvider.SurveySummary_PtSurv = editSurveySummary_PtSurv;
        this._dialogService.open(EditSurveySummary_PtSurvComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveySummary_PtSurvHttp.updateToDatabase(result)
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
