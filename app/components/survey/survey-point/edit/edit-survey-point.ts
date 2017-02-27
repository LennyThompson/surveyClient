
import {Component, OnInit} from "@angular/core";
import {AddEditSurveyPoint} from "../add/add-edit-survey-point";
import {CurrentSurveyPointProvider} from "../../simple-providers";

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
        pointProvider: CurrentSurveyPointProvider
    )
    {
        super(pointProvider);
    }

    ngOnInit(): void
    {
    }
}