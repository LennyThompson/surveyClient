// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

import {Injectable} from "@angular/core";
import {Pt_PtType} from "./../../../services/surveyDb/types/SurveyPointSummary";
// Declare injectable provider for simple objects of type Pt_PtType

@Injectable()
export class CurrentPt_PtTypeProvider
{
    m_Pt_PtType: Pt_PtType;

    get Pt_PtType(): Pt_PtType
    {
        return this.m_Pt_PtType;
    }

    set Pt_PtType(value: Pt_PtType)
    {
        this.m_Pt_PtType = value;
    }

    hasExistingPt_PtType(): boolean
    {
        return !!this.m_Pt_PtType;
    }
}

// Declare injectable provider for array of objects of type Pt_PtType

@Injectable()
export class CurrentPt_PtTypeListProvider
{
    m_listPt_PtType: Pt_PtType[];

    get Pt_PtTypes(): Pt_PtType[]
    {
        return this.m_listPt_PtType;
    }

    set Pt_PtTypes(value: Pt_PtType[])
    {
        this.m_listPt_PtType = value;
    }
}
