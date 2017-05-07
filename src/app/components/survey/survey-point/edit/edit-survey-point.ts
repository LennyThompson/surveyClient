
import {Component, OnInit} from "@angular/core";
import {AddEditSurveyPoint} from "../add/add-edit-survey-point";
import {MdDialogRef} from "@angular/material";
import {CurrentSurveyPointProvider} from "../../../../services/surveyDb/webAPI";


@Component (
    {
        selector: "edit-survey-point",
        templateUrl: "./../add/add-survey-point.html",
        styleUrls: ["./../add/add-survey-point.scss"]
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
