import {Component, Input} from "@angular/core";
import {Survey} from "../../../services/surveyDb/types/Survey";
import {SurveyServiceHttp} from "../../../services/surveyDb/webAPI/SurveyServiceHttp";
import {Observable} from "rxjs";

@Component({
    selector: "survey-list",
    templateUrl: "./survey-list.html",
})
export class SurveyListComponent
{
    private m_listSurveys : Observable<Survey[]>;
    constructor(private surveyService : SurveyServiceHttp)
    {
        this.m_listSurveys = surveyService.loadAllFromDatabase();
    }

    get Surveys() : Observable<Survey[]>
    {
        return this.m_listSurveys;
    }
}