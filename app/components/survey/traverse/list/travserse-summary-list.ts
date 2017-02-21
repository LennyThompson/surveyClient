
import {Component} from "@angular/core";
import {TraverseMeasurementSummary} from "../../../../services/surveyDb/types/TraverseMeasurementSummary";
import {SurveyContextProvider} from "../../../../services/clientProviders/survey/surveyContextProvider";
import {TraverseMeasurementSummaryServiceHttp} from "../../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {TraverseServiceHttp} from "../../../../services/surveyDb/webAPI/TraverseServiceHttp";
import {MdDialog, MdDialogConfig} from "@angular/material";
import {AddTraverseComponent} from "../add/add-traverse";
import {Traverse} from "../../../../services/surveyDb/types/Traverse";
import {Observable} from "rxjs";

require("./traverse-summary-list.scss");

@Component(
    {
        selector: "traverse-summary-list",
        templateUrl: "./traverse-summary-list.html"
    }
)
export class TravserseSummaryListComponent
{
    private _traverseList: Observable<TraverseMeasurementSummary[]>;

    constructor(
        private surveyContext: SurveyContextProvider,
        private travMeasService: TraverseMeasurementSummaryServiceHttp,
        private travService: TraverseServiceHttp,
        private dialog: MdDialog
    )
    {
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

    updateTraverseList()
    {
        if(this.surveyContext.SurveyID)
        {
            this._traverseList = this.travMeasService.loadForPathKeyDatabase(-1, this.surveyContext.SurveyID);
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