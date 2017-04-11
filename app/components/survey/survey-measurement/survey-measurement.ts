import {Component, Input, OnInit} from "@angular/core";
import {SurveyMeasurement} from "../../../services/surveyDb/types";
import {SurveyMeasurementServiceHttp, CurrentSurveyMeasurementProvider} from "../../../services/surveyDb/webAPI";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {EditSurveyMeasurementComponent} from "./edit/edit-survey-measurement";
import {Observable} from "rxjs";

require("./survey-measurement.scss");

@Component(
    {
        selector: "survey-measurement",
        templateUrl: "survey-measurement.html"
    }
)
export class SurveyMeasurementComponent implements OnInit
{
    _surveyMeasurement: SurveyMeasurement;
    constructor
    (
        private _dialogService: MdDialog,
        private measurementService: SurveyMeasurementServiceHttp,
        private measProvider: CurrentSurveyMeasurementProvider
    )
    {

    }

    ngOnInit(): void
    {
    }


    @Input("measurement")
    set SurveyMeasurement(value: SurveyMeasurement)
    {
        this._surveyMeasurement = value;
    }

    get SurveyMeasurement(): SurveyMeasurement
    {
        return this._surveyMeasurement;
    }

    onEditMeasurement()
    {
        let config = new MdDialogConfig();
        this.measProvider.SurveyMeasurement = this.SurveyMeasurement;
        this._dialogService.open(EditSurveyMeasurementComponent, config)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this.measurementService.updateToDatabase(result)
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
}
