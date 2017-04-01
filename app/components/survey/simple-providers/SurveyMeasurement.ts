// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyMeasurement} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyMeasurement

@Injectable()
export class CurrentSurveyMeasurementProvider
{
    m_SurveyMeasurement: SurveyMeasurement;

    get SurveyMeasurement(): SurveyMeasurement
    {
        if(!this.m_SurveyMeasurement)
        {
            this.m_SurveyMeasurement = new SurveyMeasurement();
        }
        return this.m_SurveyMeasurement;
    }

    set SurveyMeasurement(value: SurveyMeasurement)
    {
        this.m_SurveyMeasurement = value;
    }

    hasExistingSurveyMeasurement(): boolean
    {
        return !!this.m_SurveyMeasurement;
    }
}

// Declare injectable provider for id context of type SurveyMeasurement

@Injectable()
export class SurveyMeasurementContextProvider
{
    m_ID: number;

    get SurveyMeasurementID(): number
    {
        return this.m_ID;
    }

    set SurveyMeasurementID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type SurveyMeasurement

@Injectable()
export class CurrentSurveyMeasurementListProvider
{
    m_listSurveyMeasurement: SurveyMeasurement[];

    get SurveyMeasurements(): SurveyMeasurement[]
    {
        if(!this.m_listSurveyMeasurement)
        {
            this.m_listSurveyMeasurement = new Array<SurveyMeasurement>();
        }
        return this.m_listSurveyMeasurement;
    }

    set SurveyMeasurements(value: SurveyMeasurement[])
    {
        this.m_listSurveyMeasurement = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyMeasurementProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyMeasurementHttp: SurveyMeasurementServiceHttp,
        private _SurveyMeasurementProvider: CurrentSurveyMeasurementProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyMeasurementHttp.loadSurveyMeasurementFromDatabase(ID)
        .subscribe(
                (localSurveyMeasurement: SurveyMeasurement) => edit(localSurveyMeasurement)
        );
    }

    edit(editSurveyMeasurement: SurveyMeasurement)
    {
        this._SurveyMeasurementProvider.SurveyMeasurement = editSurveyMeasurement;
        this._dialogService.open(EditSurveyMeasurementComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyMeasurementHttp.updateToDatabase(result)
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
