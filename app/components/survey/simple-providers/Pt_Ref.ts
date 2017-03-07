// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {Pt_Ref} from "./../../../services/surveyDb/types/SurveyPointSummary";
// Declare injectable provider for simple objects of type Pt_Ref

@Injectable()
export class CurrentPt_RefProvider
{
    m_Pt_Ref: Pt_Ref;

    get Pt_Ref(): Pt_Ref
    {
        return this.m_Pt_Ref;
    }

    set Pt_Ref(value: Pt_Ref)
    {
        this.m_Pt_Ref = value;
    }

    hasExistingPt_Ref(): boolean
    {
        return !!this.m_Pt_Ref;
    }
}

// Declare injectable provider for array of objects of type Pt_Ref

@Injectable()
export class CurrentPt_RefListProvider
{
    m_listPt_Ref: Pt_Ref[];

    get Pt_Refs(): Pt_Ref[]
    {
        return this.m_listPt_Ref;
    }

    set Pt_Refs(value: Pt_Ref[])
    {
        this.m_listPt_Ref = value;
    }
}
