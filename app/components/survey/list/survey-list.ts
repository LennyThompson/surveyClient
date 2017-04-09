import {Component, Input} from "@angular/core";
import {SurveySummary} from "../../../services/surveyDb/types/SurveySummary";
import {Observable} from "rxjs";
import {
    SurveySummaryServiceHttp,
    SurveySummarySubjectProvider
} from "../../../services/surveyDb/webAPI/SurveySummaryServiceHttp";
import {TraverseSummaryServiceHttp} from "../../../services/surveyDb/webAPI/TraverseSummaryServiceHttp";
import {TraverseSummary} from "../../../services/surveyDb/types/TraverseSummary";

@Component({
    selector: "survey-list",
    templateUrl: "./survey-list.html",
})
export class SurveyListComponent
{
    private m_listSurveys : Observable<SurveySummary[]>;
    constructor(private surveyService : SurveySummarySubjectProvider)
    {
        this.m_listSurveys = surveyService.getSurveySummarySummaries();
    }

    get Surveys() : Observable<SurveySummary[]>
    {
        return this.m_listSurveys;
    }
}