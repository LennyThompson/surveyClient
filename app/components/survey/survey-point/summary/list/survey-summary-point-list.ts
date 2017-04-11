
import {Component, Input} from "@angular/core";

import {SurveyPointSummaryServiceHttp, SurveyPointServiceHttp, CurrentSurveyProvider} from "./../../../../../services/surveyDb/webAPI";
import { SurveyPoint, SurveyPointSummary} from "./../../../../../services/surveyDb/types";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {AddSurveyPointComponent} from "./../../add/add-survey-point";
import {SurveyPointSummary_Pt} from "../../../../../services/surveyDb/types/SurveyPointSummary";

require("./survey-point-summary-list.scss");

@Component(
    {
        selector: "survey-point-list",
        templateUrl: "survey-point-summary-list.html"
    }
)
export class SurveyPointSummaryListComponent
{
    m_surveyPoints: SurveyPointSummary_Pt[];

    constructor
    (
        private surveyContext: CurrentSurveyProvider,
        private summaryService: SurveyPointSummaryServiceHttp,
        private pointService: SurveyPointServiceHttp,
        private dialog: MdDialog
    )
    {
        // this.updateSurveyPoints();
    }

    @Input("surveyId")
    set SurveyId(id: number)
    {
        this.updateSurveyPoints();
    }

    updateSurveyPoints()
    {
        this.summaryService.loadSurveyPointSummaryFromDatabase(this.surveyContext.Survey.ID)
            .subscribe(
                (summary: SurveyPointSummary) =>
                {
                    this.m_surveyPoints = summary.Pts;
                }
            );
    }

    get Points(): SurveyPointSummary_Pt[]
    {
        return this.m_surveyPoints;
    }

    onUpdate(pointUpdated: SurveyPoint)
    {
        this.updateSurveyPoints();
    }

    onAddSurveyPoint()
    {
        let config = new MdDialogConfig();
        this.dialog.open(AddSurveyPointComponent, config)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this.pointService.saveSurveyPointForSurvey(result)
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