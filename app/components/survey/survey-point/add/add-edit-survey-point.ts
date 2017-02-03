
import {SurveyPoint} from "../../../../services/surveyDb/types/SurveyPoint";
import {Observable} from "rxjs";
import {SurveyPointType} from "../../../../services/surveyDb/types/SurveyPointType";
import {SurveyReference} from "../../../../services/surveyDb/types/SurveyReference";
import {SurveyPointTypeServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp";
import {SurveyReferenceServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp";

import * as lodash from "lodash";

export class AddEditSurveyPoint
{
    surveyPoint: SurveyPoint;
    pointTypeList: SurveyPointType[];
    pointReferences: SurveyReference[];

    m_nTypeId: number;
    m_nRefId: number;

    constructor
    (
        private typeService: SurveyPointTypeServiceHttp,
        private referenceService: SurveyReferenceServiceHttp
    )
    {
        this.surveyPoint = new SurveyPoint();
        this.typeService.loadAllFromDatabase().subscribe(
            (listTypes: SurveyPointType[]) =>
            {
                this.pointTypeList = listTypes;
            }
        );
        this.referenceService.loadAllFromDatabase().subscribe(
            (listRefs: SurveyReference[]) =>
            {
                this.pointReferences = listRefs;
            }
        );
    }

    set Point(value: SurveyPoint)
    {
        this.surveyPoint = value;
    }

    get Point(): SurveyPoint
    {
        return this.surveyPoint;
    }

    get PointTypeID(): number
    {
        console.log("PointTypeID ", this.m_nTypeId);
        return this.m_nTypeId;
    }

    set PointTypeId(value: number)
    {
        this.surveyPoint.PointType = lodash(this.PointTypes).find(ptType => ptType.ID === value);
        this.m_nTypeId = value;
    }

    get PointRefID(): number
    {
        return this.m_nRefId;
    }

    set PointRefID(value: number)
    {
        this.surveyPoint.Reference = lodash(this.PointReferences).find(ptRef => ptRef.ID === value);
        this.m_nRefId = value;
    }

    get PointTypes(): SurveyPointType[]
    {
        return this.pointTypeList;
    }

    get PointReferences(): SurveyReference[]
    {
        return this.pointReferences;
    }

    protected onSetPointTypeList(listTypes: SurveyPointType[])
    {

    }
}