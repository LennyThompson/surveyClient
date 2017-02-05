
import {Component, OnInit, Input} from "@angular/core";
import {SurveyPoint} from "../../../../services/surveyDb/types/SurveyPoint";
import {Observable} from "rxjs";
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
    m_strTypeAbbr: string;
    m_strRefName: string;

    constructor
    (
        private m_dlgPoint: MdDialogRef<AddSurveyPointComponent>,
        typeService: SurveyPointTypeServiceHttp,
        referenceService: SurveyReferenceServiceHttp
    )
    {
        super(typeService, referenceService);
    }

    ngOnInit(): void
    {
    }


    set PointType(value: SurveyPointType)
    {
        this.surveyPoint.PointType = value;
    }

    get PointType(): SurveyPointType
    {
        return this.surveyPoint.PointType;
    }

    set PointRef(value: SurveyReference)
    {
        this.surveyPoint.Reference = value;
    }

    get PointRef(): SurveyReference
    {
        return this.surveyPoint.Reference;
    }
}