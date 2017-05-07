
import {Component} from "@angular/core";
import {TraverseMeasurementSummary, Traverse} from "./../../../../../services/surveyDb/types";
import {} from "./../../../simple-providers";
import {TraverseServiceHttp, CurrentSurveyProvider, TraverseMeasurementSummarySubjectProvider} from "./../../../../../services/surveyDb/webAPI";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {AddTraverseComponent} from "./../../add/add-traverse";
import {Observable} from "rxjs";

@Component(
    {
        selector: "traverse-summary-list",
        templateUrl: "traverse-summary-list.html",
        styleUrls: ["./traverse-summary-list.scss"]
    }
)
export class TravserseSummaryListComponent
{
    private _traverseList: Observable<TraverseMeasurementSummary[]>;

    constructor(
        private surveyContext: CurrentSurveyProvider,
        private travMeasService: TraverseMeasurementSummarySubjectProvider,
        private travService: TraverseServiceHttp,
        private dialog: MdDialog
    )
    {
        this._traverseList = this.travMeasService.getTraverseMeasurementSummarySummaries();
    }

    get Traverses(): Observable<TraverseMeasurementSummary[]>
    {
        if(!this._traverseList)
        {
            console.log("Lodaing traverse list");
            this.updateTraverseList();
        }
        return this._traverseList;
    }

    private updateTraverseList()
    {
    }

    onAddTraverse()
    {
        let config = new MdDialogConfig();
        this.dialog.open(AddTraverseComponent, config)
            .afterClosed()
            .subscribe(
                (result: Traverse) =>
                {
                    if(result)
                    {
                        result.SurveyID = this.surveyContext.Survey.ID;
                        if(!result.EndPoint || !result.EndPoint.ID)
                        {
                            result.EndPoint = result.SurveyMeasurement[result.SurveyMeasurement.length - 1].PointTo;
                        }
                        this.travService.saveToDatabase(result)
                            .subscribe(
                                () =>
                                {
                                    // this.travMeasService.updateTraverseSummaries(this.surveyContext.SurveyID);
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
