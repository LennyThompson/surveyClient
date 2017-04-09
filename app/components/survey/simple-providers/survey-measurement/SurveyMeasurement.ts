// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyMeasurement} from "./../../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyMeasurement

@Injectable()
export class CurrentSurveyMeasurementProvider
{
    private _SurveyMeasurement: SurveyMeasurement;
    private _ID: number;

    public get SurveyMeasurement(): SurveyMeasurement
    {
        if(!this._SurveyMeasurement)
        {
            this._SurveyMeasurement = new SurveyMeasurement();
        }
        return this._SurveyMeasurement;
    }

    public set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._SurveyMeasurement = value;
    }

    public get SurveyMeasurement_ID(): number
    {
        if(this.SurveyMeasurement)
        {
            return this.SurveyMeasurement.ID;
        }
        return this._ID;
    }
    public set SurveyMeasurement_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveyMeasurement)
        {
            this.SurveyMeasurement = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyMeasurement(): boolean
    {
        return !!this._SurveyMeasurement;
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
