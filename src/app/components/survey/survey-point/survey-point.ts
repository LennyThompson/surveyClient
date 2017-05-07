
import {Component, Input, Output} from "@angular/core";
import {SurveyPointSummary_Pt, SurveyPointSummary} from "../../../services/surveyDb/types/SurveyPointSummary";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {SurveyPointServiceHttp, SurveyPointSummaryServiceHttp, CurrentSurveyPointProvider} from "../../../services/surveyDb/webAPI";
import {SurveyPoint} from "../../../services/surveyDb/types/SurveyPoint";
import {EditSurveyPointComponent} from "./edit/edit-survey-point";

@Component(
    {
        selector: "survey-point",
        templateUrl: "./survey-point.html",
        styleUrls: ["./survey-point.scss"]
    }
)
export class SurveyPointComponent
{
    private m_point: SurveyPointSummary_Pt;

    // @Output("update")
    // onUpdatePointEvent: EventEmitter<SurveyPoint> = new EventEmitter();

    constructor
    (
        private dialog: MdDialog,
        private pointService: SurveyPointServiceHttp,
        private pointSummayService: SurveyPointSummaryServiceHttp,
        private pointProvider: CurrentSurveyPointProvider
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
                    this.pointProvider.SurveyPoint = point;
                    this.dialog.open(EditSurveyPointComponent, config)
                        .afterClosed()
                        .subscribe(
                            (result) =>
                            {
                                if(result)
                                {
                                    console.log(JSON.stringify(result));
                                    this.pointService.updateToDatabase(result)
                                        .subscribe(
                                            (result) =>
                                            {
                                                // this.onUpdatePointEvent.emit(result);
                                                // Tell parent to update...
                                                console.log("this.pointService.updateToDatabase", result);
                                            }
                                        );
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
