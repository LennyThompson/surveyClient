// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointType} from "./../../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyPointType

@Injectable()
export class CurrentSurveyPointTypeProvider
{
    private _SurveyPointType: SurveyPointType;
    private _ID: number;

    public get SurveyPointType(): SurveyPointType
    {
        if(!this._SurveyPointType)
        {
            this._SurveyPointType = new SurveyPointType();
        }
        return this._SurveyPointType;
    }

    public set SurveyPointType(value: SurveyPointType)
    {
        this._SurveyPointType = value;
    }

    public get SurveyPointType_ID(): number
    {
        if(this.SurveyPointType)
        {
            return this.SurveyPointType.ID;
        }
        return this._ID;
    }
    public set SurveyPointType_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveyPointType)
        {
            this.SurveyPointType = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyPointType(): boolean
    {
        return !!this._SurveyPointType;
    }
}

// Declare injectable provider for array of objects of type SurveyPointType

@Injectable()
export class CurrentSurveyPointTypeListProvider
{
    m_listSurveyPointType: SurveyPointType[];

    get SurveyPointTypes(): SurveyPointType[]
    {
        if(!this.m_listSurveyPointType)
        {
            this.m_listSurveyPointType = new Array<SurveyPointType>();
        }
        return this.m_listSurveyPointType;
    }

    set SurveyPointTypes(value: SurveyPointType[])
    {
        this.m_listSurveyPointType = value;
    }
}
