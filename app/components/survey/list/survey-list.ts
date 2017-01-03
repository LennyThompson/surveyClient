import {Component, Input} from "@angular/core";
import {SurveySummary} from "../../../services/surveyDb/types/SurveySummary";
import {Observable} from "rxjs";
import {SurveySummaryServiceHttp} from "../../../services/surveyDb/webAPI/SurveySummaryServiceHttp";

@Component({
    selector: "survey-list",
    templateUrl: "./survey-list.html",
})
export class SurveyListComponent
{
    private m_listSurveys : Observable<SurveySummary[]>;
    constructor(private surveyService : SurveySummaryServiceHttp)
    {
        this.m_listSurveys = surveyService.loadAllFromDatabase();
    }

    get Surveys() : Observable<SurveySummary[]>
    {
        return this.m_listSurveys;
    }
}