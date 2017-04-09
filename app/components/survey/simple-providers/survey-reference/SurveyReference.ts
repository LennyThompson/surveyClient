// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyReference} from "./../../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyReference

@Injectable()
export class CurrentSurveyReferenceProvider
{
    private _SurveyReference: SurveyReference;
    private _ID: number;

    public get SurveyReference(): SurveyReference
    {
        if(!this._SurveyReference)
        {
            this._SurveyReference = new SurveyReference();
        }
        return this._SurveyReference;
    }

    public set SurveyReference(value: SurveyReference)
    {
        this._SurveyReference = value;
    }

    public get SurveyReference_ID(): number
    {
        if(this.SurveyReference)
        {
            return this.SurveyReference.ID;
        }
        return this._ID;
    }
    public set SurveyReference_ID(ID: number)
    {
        this.reset();
        this._ID = ID;
    }

    public reset()
    {
        if(this.SurveyReference)
        {
            this.SurveyReference = null;
        }
        this._ID = -1;
    }

    hasExistingSurveyReference(): boolean
    {
        return !!this._SurveyReference;
    }
}

// Declare injectable provider for array of objects of type SurveyReference

@Injectable()
export class CurrentSurveyReferenceListProvider
{
    m_listSurveyReference: SurveyReference[];

    get SurveyReferences(): SurveyReference[]
    {
        if(!this.m_listSurveyReference)
        {
            this.m_listSurveyReference = new Array<SurveyReference>();
        }
        return this.m_listSurveyReference;
    }

    set SurveyReferences(value: SurveyReference[])
    {
        this.m_listSurveyReference = value;
    }
}
