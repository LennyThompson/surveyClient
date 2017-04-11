
import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";

import { AddEditSurveyPoint} from "./add-edit-survey-point";
import {CurrentSurveyPointProvider} from "../../../../services/surveyDb/webAPI";

require("./add-survey-point.scss");

@Component (
    {
        selector: "add-survey-point",
        templateUrl: "./add-survey-point.html"
    }
)
export class AddSurveyPointComponent extends AddEditSurveyPoint implements OnInit
{
    constructor
    (
        pointProvider: CurrentSurveyPointProvider,
        private m_dlgPoint: MdDialogRef<AddSurveyPointComponent>
    )
    {
        super(pointProvider);
    }

    ngOnInit(): void
    {
    }

}