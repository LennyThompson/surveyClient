
import {Component} from "@angular/core";
import {TraverseMeasurementSummary} from "../../../../services/surveyDb/types/TraverseMeasurementSummary";
import {SurveyContextProvider} from "../../../../services/clientProviders/survey/surveyContextProvider";
import {TraverseMeasurementSummaryServiceHttp} from "../../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {TraverseServiceHttp} from "../../../../services/surveyDb/webAPI/TraverseServiceHttp";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {AddTraverseComponent} from "../add/add-traverse";
import {Traverse} from "../../../../services/surveyDb/types/Traverse";

require("./traverse-summary-list.scss");

@Component(
    {
        selector: "traverse-summary-list",
        templateUrl: "./traverse-summary-list.html"
    }
)
export class TravserseSummaryListComponent
{
    private _traverseList: TraverseMeasurementSummary[];

    constructor(
        private surveyContext: SurveyContextProvider,
        private travMeasService: TraverseMeasurementSummaryServiceHttp,
        private travService: TraverseServiceHttp,
        private dialog: MdDialog
    )
    {
        this.updateTraverseList();
    }

    set Traverses(value: TraverseMeasurementSummary[])
    {
        this._traverseList = value;
    }

    get Traverses(): TraverseMeasurementSummary[]
    {
        if(!this._traverseList)
        {
            this.updateTraverseList();
        }
        return this._traverseList;
    }

    updateTraverseList()
    {
        if(this.surveyContext.SurveyID)
        {
            this.travMeasService.loadForPathKeyDatabase(-1, this.surveyContext.SurveyID)
                .subscribe(
                    (travList: TraverseMeasurementSummary[]) =>
                    {
                        this._traverseList = travList;
                    }
                );
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
                        if(!result.EndPoint)
                        {
                            result.EndPoint = result.SurveyMeasurement[result.SurveyMeasurement.length - -1].PointTo;
                        }
                        this.travService.saveToDatabase(result)
                            .subscribe(
                                () =>
                                {
                                    this.updateTraverseList();
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