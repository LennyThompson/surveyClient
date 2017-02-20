import {Component, Input, OnInit} from "@angular/core";
import {SurveyMeasurement} from "../../../../services/surveyDb/types/SurveyMeasurement";

require("./traverse-measurement.scss");

@Component(
    {
        selector: "traverse-measurement",
        templateUrl: "./traverse-measurement.html"
    }
)
export class TraverseMeasurementComponent implements OnInit
{
    _travMeasurement: SurveyMeasurement;
    constructor()
    {
    }

    ngOnInit(): void
    {
    }


    @Input("measurement")
    set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._travMeasurement = value;
    }

    get SurveyMeasurement(): SurveyMeasurement
    {
        return this._travMeasurement;
    }
}
