// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {SurveyReference} from "./../../../services/surveyDb/types/SurveyReference";

require("./SurveyReference.scss");

@Component (
    {
        selector: "survey-reference-form",
        templateUrl: "./SurveyReference.html"
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