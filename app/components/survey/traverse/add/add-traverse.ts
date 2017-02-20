
import {Component} from "@angular/core";
import {Traverse} from "../../../../services/surveyDb/types/Traverse";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {AddTraverseMeasurementComponent} from "../traverse-measurement/add/add-traverse-measurement";
import {SurveyPoint} from "../../../../services/surveyDb/types/SurveyPoint";
import {SurveyMeasurement} from "../../../../services/surveyDb/types/SurveyMeasurement";
import {SurveyCalculator, IPolar, IRectangular} from "../../../../services/surveyCalc/surveyCalculator";
import {EditPointProvider} from "../../../../services/clientProviders/point/EditPointProvider";
import {EditSurveyPointComponent} from "../../survey-point/edit/edit-survey-point";
import {SurveyPointServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import {FromPointProvider} from "../../../../services/clientProviders/point/FromPointProvider";

require("./add-traverse.scss");

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse.html"
    }
)
export class AddTraverseComponent
{
    _traverse: Traverse;

    constructor
    (
        private _dialog: MdDialogRef<AddTraverseComponent>,
        private _dialogService: MdDialog,
        private surveyCalc: SurveyCalculator,
        private editPointProvider: EditPointProvider,
        private fromPointProvider: FromPointProvider,
        private pointService: SurveyPointServiceHttp
    )
    {
        this._traverse = new Traverse();
    }

    public get Traverse(): Traverse
    {
        return this._traverse;
    }

    public set Traverse(value: Traverse)
    {
        this._traverse = value;
    }

    onAddMeasurement()
    {
        let config = new MdDialogConfig();
        if(this._traverse.SurveyMeasurement.length)
        {
            this.fromPointProvider.Point = this._traverse.SurveyMeasurement[this._traverse.SurveyMeasurement.length - 1].PointTo;
        }
        else if(this._traverse.StartPoint)
        {
            this.fromPointProvider.Point = this._traverse.StartPoint;
        }

        this._dialogService.open(AddTraverseMeasurementComponent, config)
            .afterClosed()
            .subscribe(
                (result: SurveyMeasurement) =>
                {
                    if(result)
                    {
                        result.Bearing = this.surveyCalc.toDegrees(result.Bearing);
                        this.addMeasurementTotraverse(result);
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );

    }

    isValidPoint(ptTest: SurveyPoint): boolean
    {
        // TODO: improve this test...
        if(ptTest.X === 0 && ptTest.Y === 0 && ptTest.Y === 0)
        {
            return false;
        }
        return true;
    }

    addMeasurementTotraverse(measAdd: SurveyMeasurement)
    {
        if(!this.isValidPoint(measAdd.PointTo))
        {
            let polarPt: IPolar = this.surveyCalc.convertMeasurementToPolar(measAdd);
            let rectPt: IRectangular = polarPt.toRectangular();
            let newSurveyPt: SurveyPoint = new SurveyPoint();

            newSurveyPt.X = rectPt.X;
            newSurveyPt.Y = rectPt.Y;
            newSurveyPt.Z = rectPt.Z;

            this.editPointProvider.Point = newSurveyPt;
            let config = new MdDialogConfig();
            this._dialogService.open(EditSurveyPointComponent, config)
                .afterClosed()
                .subscribe(
                    (result) =>
                    {
                        if(result)
                        {
                            this.pointService.updateToDatabase(result)
                                .subscribe(
                                    (result) =>
                                    {
                                        // this.onUpdatePointEvent.emit(result);
                                        // Tell parent to update...
                                        console.log("this.pointService.updateToDatabase", result);
                                        measAdd.PointTo = result;
                                        this._traverse.addSurveyMeasurement(measAdd);
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
        else
        {
            this._traverse.addSurveyMeasurement(measAdd);
        }
    }
}