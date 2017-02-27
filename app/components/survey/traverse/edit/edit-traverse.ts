
import {Component} from "@angular/core";
import {TraverseEditBaseComponent} from "../add/add-edit-traverse";
import {MdDialogRef, MdDialog} from "@angular/material";
import {SurveyCalculator} from "../../../../services/surveyCalc/surveyCalculator";
import {SurveyPointServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointServiceHttp";
import
{
    CurrentTraverseProvider,
    CurrentSurveyPointProvider,
    CurrentSurveyMeasurementProvider
} from "../../simple-providers";

require("./../add/add-traverse.scss");

@Component(
    {
        selector: "add-traverse-dialog",
        templateUrl: "./../add/add-traverse.html"
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