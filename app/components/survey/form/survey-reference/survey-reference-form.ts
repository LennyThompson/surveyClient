// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyReference} from "./../../../../services/surveyDb/types";

require("./survey-reference-form.scss");

@Component (
    {
        selector: "survey-reference-form",
        templateUrl: "./survey-reference-form.html"
    }
)
export class SurveyReferenceComponent implements OnInit
{
    private _SurveyReference: SurveyReference;
    constructor()
    {
        this._SurveyReference = new SurveyReference();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set SurveyReference(value: SurveyReference)
    {
        this._SurveyReference = value;
    }

    get SurveyReference(): SurveyReference
    {
        return this._SurveyReference;
    }
}