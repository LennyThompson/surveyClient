
import {Component, Input} from "@angular/core";

import {SurveyPointSummaryServiceHttp} from "./../../../../../services/surveyDb/webAPI/SurveyPointSummaryServiceHttp";
import {SurveyPointSummary_Pt, SurveyPointSummary} from "./../../../../../services/surveyDb/types/SurveyPointSummary";
import {SurveyPoint} from "./../../../../../services/surveyDb/types/SurveyPoint";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {AddSurveyPointComponent} from "./../../add/add-survey-point";
import {SurveyPointServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {SurveyContextProvider} from "../../../simple-providers";

require("./survey-point-summary-list.scss");

@Component(
    {
        selector: "survey-point-list",
        templateUrl: "survey-point-summary-list.html"
    }
)
export class SurveyPointSummaryListComponent
{
    m_surveyId: number;
    m_surveyPoints: SurveyPointSummary_Pt[];

    constructor
    (
        private surveyContext: SurveyContextProvider,
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
        this.m_surveyId = id;
        this.updateSurveyPoints();
    }

    updateSurveyPoints()
    {
        this.summaryService.loadSurveyPointSummaryFromDatabase(this.m_surveyId )
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