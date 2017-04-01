
import {Component} from "@angular/core";
import {TraverseMeasurementSummary, Traverse} from "./../../../../../services/surveyDb/types";
import {SurveyContextProvider} from "./../../../simple-providers";
import {TraverseMeasurementSummaryServiceHttp, TraverseServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {AddTraverseComponent} from "./../../add/add-traverse";
import {Observable} from "rxjs";
import {TraverseMeasurementSummarySubjectService} from "../../../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";

require("./traverse-summary-list.scss");

@Component(
    {
        selector: "traverse-summary-list",
        templateUrl: "traverse-summary-list.html"
    }
)
export class TravserseSummaryListComponent
{
    private _traverseList: Observable<TraverseMeasurementSummary[]>;

    constructor(
        private surveyContext: SurveyContextProvider,
        private travMeasService: TraverseMeasurementSummarySubjectService,
        private travService: TraverseServiceHttp,
        private dialog: MdDialog
    )
    {
        this._traverseList = this.travMeasService.getTraverseSummaries(this.surveyContext.SurveyID);
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
        if(this.surveyContext.SurveyID)
        {
        }
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
                        result.SurveyID = this.surveyContext.SurveyID;
                        if(!result.EndPoint || !result.EndPoint.ID)
                        {
                            result.EndPoint = result.SurveyMeasurement[result.SurveyMeasurement.length - 1].PointTo;
                        }
                        this.travService.saveToDatabase(result)
                            .subscribe(
                                () =>
                                {
                                    this.travMeasService.updateTraverseSummaries(this.surveyContext.SurveyID);
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