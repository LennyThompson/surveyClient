
import {Component, OnInit, Input} from "@angular/core";
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