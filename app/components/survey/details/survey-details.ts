import {Component, Input, OnInit, ViewContainerRef} from "@angular/core";
import {SurveyPointSummaryServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointSummaryServiceHttp";
import {TraverseMeasurementSummaryServiceHttp} from "../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {SurveyPointServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import {SurveyPoint} from "../../../services/surveyDb/types/SurveyPoint";
import {MdDialog} from "@angular/material";
import {SurveyContextProvider} from "./../simple-providers";

require("./survey-details.scss");

@Component(
    {
        selector: "survey-details",
        templateUrl: "./survey-details.html"
    }
)
export class SurveyDetailsComponent implements OnInit
{
    m_surveyId: number;
    m_pointEdit: SurveyPoint;

    constructor
    (
        private surveyContext: SurveyContextProvider,
        private summaryService: SurveyPointSummaryServiceHttp,
        private travMeasService: TraverseMeasurementSummaryServiceHttp,
        private pointService: SurveyPointServiceHttp,
        private dialog: MdDialog,
        private viewContRef: ViewContainerRef
    )
    {
        this.m_pointEdit = new SurveyPoint();
    }

    ngOnInit(): void
    {
    }

    @Input("surveyId")
    set SurveyId(id: number)
    {
        this.m_surveyId = id;
        this.surveyContext.SurveyID = id;
    }

    get SurveyId(): number
    {
        return this.m_surveyId;
    }
}
