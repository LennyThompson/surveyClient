
import {Component, OnInit} from "@angular/core";
import {AddEditSurveyPoint} from "../add/add-edit-survey-point";
import {MdDialogRef} from "@angular/material";
import {CurrentSurveyPointProvider} from "../../../../services/surveyDb/webAPI";

require("./../add/add-survey-point.scss");

@Component (
    {
        selector: "edit-survey-point",
        templateUrl: "./../add/add-survey-point.html"
    }
)
export class EditSurveyPointComponent extends AddEditSurveyPoint implements OnInit
{
    constructor
    (
        pointProvider: CurrentSurveyPointProvider,
        private m_dlgPoint: MdDialogRef<EditSurveyPointComponent>
    )
    {
        super(pointProvider);
    }

    ngOnInit(): void
    {
    }
}