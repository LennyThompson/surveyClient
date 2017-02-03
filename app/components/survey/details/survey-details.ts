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
    m_surveyPoints: SurveyPointSummary_Pt[];
    m_traverseList: TraverseMeasurementSummary[];
    m_pointEdit: SurveyPoint;

    displayAddPoint: boolean;

    constructor
    (
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
        this.updateSurveyPoints();
        this.travMeasService.loadForPathKeyDatabase(-1, this.m_surveyId)
            .subscribe(
                (travList: TraverseMeasurementSummary[]) =>
                {
                    this.m_traverseList = travList;
                }
            );
    }

    get Points(): SurveyPointSummary_Pt[]
    {
        return this.m_surveyPoints;
    }

    get Traverses(): TraverseMeasurementSummary[]
    {
        return this.m_traverseList;
    }

    updateSurveyPoints()
    {
        this.summaryService.loadSurveyPointSummaryFromDatabase(this.m_surveyId)
            .subscribe(
                (summary: SurveyPointSummary) =>
                {
                    this.m_surveyPoints = summary.Pts;
                }
            );
    }

    onAddSurveyPoint()
    {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContRef;
        this.dialog.open(AddSurveyPointComponent, config)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this.pointService.saveSurveyPointForSurvey(result, this.m_surveyId)
                            .subscribe(
                                () =>
                                {
                                    this.updateSurveyPoints();
                                }
                            )
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }
}
