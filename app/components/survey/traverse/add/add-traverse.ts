
import {Component} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {SurveyCalculator} from "../../../../services/surveyCalc/surveyCalculator";
import {SurveyPointServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import {TraverseEditBaseComponent} from "./add-edit-traverse";
import {CurrentTraverseProvider, CurrentSurveyPointProvider, CurrentSurveyMeasurementProvider} from "../../simple-providers";

require("./add-traverse.scss");

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse.html"
    }
)
export class AddTraverseComponent extends TraverseEditBaseComponent
{
    constructor
    (
        private _dialog: MdDialogRef<AddTraverseComponent>,
        _dialogService: MdDialog,
        surveyCalc: SurveyCalculator,
        traverseProvider: CurrentTraverseProvider,
        measProvider: CurrentSurveyMeasurementProvider,
        pointProvider: CurrentSurveyPointProvider,
        pointService: SurveyPointServiceHttp
    )
    {
        super(_dialogService, surveyCalc, traverseProvider, pointProvider, measProvider, pointService);
    }

}