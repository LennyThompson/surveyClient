
import {Component, OnInit, Input} from "@angular/core";
import {SurveyPointType} from "../../../../services/surveyDb/types/SurveyPointType";
import {SurveyReference} from "../../../../services/surveyDb/types/SurveyReference";
import {SurveyPointTypeServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp";
import {SurveyReferenceServiceHttp} from "../../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp";
import {MdDialogRef} from "@angular/material";

import { AddEditSurveyPoint} from "./add-edit-survey-point";

require("./add-survey-point.scss");

@Component (
    {
        selector: "add-survey-point",
        templateUrl: "./add-survey-point.html"
    }
)
export class AddSurveyPointComponent extends AddEditSurveyPoint implements OnInit
{
    constructor(private m_dlgPoint: MdDialogRef<AddSurveyPointComponent>)
    {
        super();
    }

    ngOnInit(): void
    {
    }

}