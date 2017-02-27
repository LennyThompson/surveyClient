// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyReference} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyReference

@Injectable()
export class CurrentSurveyReferenceProvider
{
    m_SurveyReference: SurveyReference;

    get SurveyReference(): SurveyReference
    {
        if(!this.m_SurveyReference)
        {
            this.m_SurveyReference = new SurveyReference();
        }
        return this.m_SurveyReference;
    }

    set SurveyReference(value: SurveyReference)
    {
        this.m_SurveyReference = value;
    }

    hasExistingSurveyReference(): boolean
    {
        return !!this.m_SurveyReference;
    }
}

// Declare injectable provider for id context of type SurveyReference

@Injectable()
export class SurveyReferenceContextProvider
{
    m_ID: number;

    get SurveyReferenceID(): number
    {
        return this.m_ID;
    }

    set SurveyReferenceID(value: number)
    {
        this.m_ID = value;
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
