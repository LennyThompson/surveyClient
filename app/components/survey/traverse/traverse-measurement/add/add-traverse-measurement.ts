
import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {SurveyMeasurement} from "../../../../../services/surveyDb/types/SurveyMeasurement";
import {FromPointProvider} from "../../../../../services/clientProviders/point/FromPointProvider";

require("./add-traverse-measurement.scss");

@Component(
    {
        selector: "add-traverse-measurement-dialog",
        templateUrl: "./add-traverse-measurement.html"
    }
)
export class AddTraverseMeasurementComponent
{
    _traverseMeasurement: SurveyMeasurement;

    constructor
    (
        private _dialog: MdDialogRef<AddTraverseMeasurementComponent>,
        private fromPointProvider: FromPointProvider
    )
    {
        this._traverseMeasurement = new SurveyMeasurement();
        if(this.fromPointProvider.Point)
        {
            this._traverseMeasurement.PointFrom = this.fromPointProvider.Point;
        }
    }

    public get TraverseMeasurement(): SurveyMeasurement
    {
        return this._traverseMeasurement;
    }

    public set TraverseMeasurement(value: SurveyMeasurement)
    {
        this._traverseMeasurement = value;
    }
}