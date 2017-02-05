import {Injectable} from "@angular/core";
@Injectable()
export class SurveyContextProvider
{
    m_surveyID: number;

    get SurveyID(): number
    {
        return this.m_surveyID;
    }

    set SurveyID(surveyID: number)
    {
        this.m_surveyID = surveyID;
    }
}

