// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:58:59 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyReference} from "./../../../../services/surveyDb/types";

@Component (
    {
        selector: "survey-reference-form",
        templateUrl: "./survey-reference-form.html",
        styleUrls: ["./survey-reference-form.scss"]
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