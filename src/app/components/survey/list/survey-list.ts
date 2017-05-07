import {Component, Input} from "@angular/core";
import {SurveySummary} from "../../../services/surveyDb/types";
import {Observable} from "rxjs";
import {
    SurveySummarySubjectProvider,
} from "../../../services/surveyDb/webAPI";


@Component({
    // selector: "survey-list",
    templateUrl: "./survey-list.html",
    styleUrls: ["./survey-list.scss"]
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
