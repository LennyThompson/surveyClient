// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:46 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyImage} from "./../../../../services/surveyDb/types";

require("./survey-image-form.scss");

@Component (
    {
        selector: "survey-image-form",
        templateUrl: "./survey-image-form.html"
    }
)
export class SurveyImageComponent implements OnInit
{
    private _SurveyImage: SurveyImage;
    constructor()
    {
        this._SurveyImage = new SurveyImage();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyImage(value: SurveyImage)
    {
        this._SurveyImage = value;
    }

    get SurveyImage(): SurveyImage
    {
        return this._SurveyImage;
    }
}