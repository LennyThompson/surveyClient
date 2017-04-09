
import {Traverse} from "../../../../services/surveyDb/types/Traverse";
import {SurveyPoint} from "../../../../services/surveyDb/types/SurveyPoint";
import {SurveyMeasurement} from "../../../../services/surveyDb/types/SurveyMeasurement";
import {AddSurveyMeasurementComponent} from "../../survey-measurement";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {EditSurveyPointComponent} from "../../survey-point/edit/edit-survey-point";
import {SurveyCalculator} from "../../../../services/surveyCalc/surveyCalculator";
import {SurveyPointServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import
{
    CurrentTraverseProvider,
    CurrentSurveyPointProvider,
    CurrentSurveyMeasurementProvider
} from "../../simple-providers";

export class TraverseEditBaseComponent
{
    constructor
    (
        private _dialogService: MdDialog,
        private surveyCalc: SurveyCalculator,
        private travProvider: CurrentTraverseProvider,
        private pointProvider: CurrentSurveyPointProvider,
        private measProvider: CurrentSurveyMeasurementProvider,
        private pointService: SurveyPointServiceHttp
    )
    {
    }

    get Traverse(): Traverse
    {
        return this.travProvider.Traverse;
    }

    set Traverse(value: Traverse)
    {
        this.travProvider.Traverse = value;
    }

    onAddMeasurement()
    {
        let config = new MdDialogConfig();
        this.measProvider.SurveyMeasurement = new SurveyMeasurement();
        if(this.Traverse.SurveyMeasurement.length)
        {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.SurveyMeasurement[this.Traverse.SurveyMeasurement.length - 1].PointTo;
        }
        else if(this.Traverse.StartPoint)
        {
            this.measProvider.SurveyMeasurement.PointFrom = this.Traverse.StartPoint;
        }
        this._dialogService.open(AddSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe(
                (result: SurveyMeasurement) =>
                {
                    if(result)
                    {
                        result.Bearing = this.surveyCalc.toDegrees(result.Bearing);
                        result.SurveyID = 1;
                        this.addMeasurementToTraverse(result);
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

    addMeasurementToTraverse(measAdd: SurveyMeasurement)
    {
        if(!this.isValidPoint(measAdd.PointTo))
        {
            this.surveyCalc.updateMeasurement(measAdd);
            this.pointProvider.SurveyPoint = measAdd.PointTo;
            let config = new MdDialogConfig();
            this._dialogService.open(EditSurveyPointComponent, config)
                .afterClosed()
                .subscribe(
                    (result) =>
                    {
                        if(result)
                        {
                            let firstReturn = this.pointService.saveSurveyPointForSurvey(result).first();
                            firstReturn.subscribe(
                                (point) =>
                                {
                                    measAdd.PointTo = point;
                                    this.Traverse.addSurveyMeasurement(measAdd);
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
        else
        {
            this.Traverse.addSurveyMeasurement(measAdd);
        }
    }
}