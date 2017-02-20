import {Component, Input, OnInit, ViewContainerRef} from "@angular/core";
import {SurveyPointSummary, SurveyPointSummary_Pt} from "../../../services/surveyDb/types/SurveyPointSummary";
import {SurveyPointSummaryServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointSummaryServiceHttp";
import {TraverseMeasurementSummary} from "../../../services/surveyDb/types/TraverseMeasurementSummary";
import {TraverseMeasurementSummaryServiceHttp} from "../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {AddSurveyPointComponent} from "../survey-point/add/add-survey-point";
import {SurveyPointServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import {SurveyPoint} from "../../../services/surveyDb/types/SurveyPoint";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {EditPointProvider} from "../../../services/clientProviders/point/EditPointProvider";
import {SurveyContextProvider} from "../../../services/clientProviders/survey/surveyContextProvider";

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
