
import {Component, Input} from "@angular/core";
import {SurveyPointSummary_Pt} from "../../../services/surveyDb/types/SurveyPointSummary";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyPointServiceHttp} from "../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import {SurveyPoint} from "../../../services/surveyDb/types/SurveyPoint";
import {EditPointProvider} from "../../../services/clientProviders/point/EditPointProvider";
import {EditSurveyPointComponent} from "./edit/edit-survey-point";

require("./survey-point.scss");


@Component(
    {
        selector: "survey-point",
        templateUrl: "./survey-point.html"
    }
)
export class SurveyPointComponent
{
    private m_point: SurveyPointSummary_Pt

    constructor
    (
        private dialog: MdDialog,
        private pointService: SurveyPointServiceHttp,
        private pointProvider: EditPointProvider
    )
    {

    }

    @Input("point")
    set Point(point: SurveyPointSummary_Pt)
    {
        this.m_point = point;
    }

    get Point(): SurveyPointSummary_Pt
    {
        return this.m_point;
    }

    onEditPoint()
    {
        this.pointService.loadSurveyPointFromDatabase(this.Point.PtID)
            .subscribe(
                (point: SurveyPoint) =>
                {
                    let config = new MdDialogConfig();
                    this.pointProvider.Point = point;
                    this.dialog.open(EditSurveyPointComponent, config)
                        .afterClosed()
                        .subscribe(
                            (result) =>
                            {
                                if(result)
                                {
                                    console.log(JSON.stringify(result));
                                    this.pointService.saveToDatabase(result);
                                }
                                else
                                {
                                    console.log("Cancel");
                                }
                            }
                        );
                }
            )

    }

    onDeletePoint()
    {
        console.log("Delete point");
    }
}