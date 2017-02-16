
import {Component, OnInit} from "@angular/core";
import {SurveyPointTypeServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp";
import {SurveyReferenceServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp";
import {MdDialogRef} from "@angular/material";
import {EditPointProvider} from "../../../../services/clientProviders/point/EditPointProvider";
import {AddEditSurveyPoint} from "../add/add-edit-survey-point";
import {SurveyPointType} from "../../../../services/surveyDb/types/SurveyPointType";
import {SurveyReference} from "../../../../services/surveyDb/types/SurveyReference";

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
        private m_dlgPoint: MdDialogRef<EditSurveyPointComponent>,
        private pointProvider: EditPointProvider
    )
    {
        super();
        this.surveyPoint = pointProvider.Point;
    }

    ngOnInit(): void
    {
    }
}