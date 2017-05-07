
import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";

import { AddEditSurveyPoint} from "./add-edit-survey-point";
import {CurrentSurveyPointProvider} from "../../../../services/surveyDb/webAPI";


@Component (
    {
        selector: "add-survey-point",
        templateUrl: "./add-survey-point.html",
        styleUrls: ["./add-survey-point.scss"]
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
