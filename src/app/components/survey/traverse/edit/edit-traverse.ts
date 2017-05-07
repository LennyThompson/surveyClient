
import {Component} from "@angular/core";
import {TraverseEditBaseComponent} from "../add/add-edit-traverse";
import {MdDialogRef, MdDialog} from "@angular/material";
import {SurveyCalculator} from "../../../../services/surveyCalc/surveyCalculator";
import {SurveyPointServiceHttp, CurrentTraverseProvider,
    CurrentSurveyPointProvider,
    CurrentSurveyMeasurementProvider} from "../../../../services/surveyDb/webAPI";

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "./../add/add-traverse.html",
        styleUrls: ["./../add/add-traverse.scss"]
    }
)
export class EditTraverseComponent extends TraverseEditBaseComponent
{
    constructor
    (
        private _dialog: MdDialogRef<EditTraverseComponent>,
        _dialogService: MdDialog,
        surveyCalc: SurveyCalculator,
        travProvider: CurrentTraverseProvider,
        editPointProvider: CurrentSurveyPointProvider,
        measProvider: CurrentSurveyMeasurementProvider,
        pointService: SurveyPointServiceHttp
    )
    {
        super(_dialogService, surveyCalc, travProvider, editPointProvider, measProvider, pointService);
    }
}
