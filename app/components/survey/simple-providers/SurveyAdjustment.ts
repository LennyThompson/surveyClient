// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyAdjustment} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyAdjustment

@Injectable()
export class CurrentSurveyAdjustmentProvider
{
    m_SurveyAdjustment: SurveyAdjustment;

    get SurveyAdjustment(): SurveyAdjustment
    {
        if(!this.m_SurveyAdjustment)
        {
            this.m_SurveyAdjustment = new SurveyAdjustment();
        }
        return this.m_SurveyAdjustment;
    }

    set SurveyAdjustment(value: SurveyAdjustment)
    {
        this.m_SurveyAdjustment = value;
    }

    hasExistingSurveyAdjustment(): boolean
    {
        return !!this.m_SurveyAdjustment;
    }
}

// Declare injectable provider for id context of type SurveyAdjustment

@Injectable()
export class SurveyAdjustmentContextProvider
{
    m_ID: number;

    get SurveyAdjustmentID(): number
    {
        return this.m_ID;
    }

    set SurveyAdjustmentID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type SurveyAdjustment

@Injectable()
export class CurrentSurveyAdjustmentListProvider
{
    m_listSurveyAdjustment: SurveyAdjustment[];

    get SurveyAdjustments(): SurveyAdjustment[]
    {
        if(!this.m_listSurveyAdjustment)
        {
            this.m_listSurveyAdjustment = new Array<SurveyAdjustment>();
        }
        return this.m_listSurveyAdjustment;
    }

    set SurveyAdjustments(value: SurveyAdjustment[])
    {
        this.m_listSurveyAdjustment = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyAdjustmentProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyAdjustmentHttp: SurveyAdjustmentServiceHttp,
        private _SurveyAdjustmentProvider: CurrentSurveyAdjustmentProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyAdjustmentHttp.loadSurveyAdjustmentFromDatabase(ID)
        .subscribe(
                (localSurveyAdjustment: SurveyAdjustment) => edit(localSurveyAdjustment)
        );
    }

    edit(editSurveyAdjustment: SurveyAdjustment)
    {
        this._SurveyAdjustmentProvider.SurveyAdjustment = editSurveyAdjustment;
        this._dialogService.open(EditSurveyAdjustmentComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyAdjustmentHttp.updateToDatabase(result)
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
