
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

    constructor()
    {
        this.surveyPoint = new SurveyPoint();
    }

    set Point(value: SurveyPoint)
    {
        this.surveyPoint = value;
    }

    get Point(): SurveyPoint
    {
        return this.surveyPoint;
    }

}