
import {Injectable} from "@angular/core";
import {SurveyPoint} from "../../surveyDb/types/SurveyPoint";
@Injectable()
export class FromPointProvider
{
    m_ptEdit: SurveyPoint;

    get Point(): SurveyPoint
    {
        return this.m_ptEdit;
    }

    set Point(ptEdit: SurveyPoint)
    {
        this.m_ptEdit = ptEdit;
    }
}