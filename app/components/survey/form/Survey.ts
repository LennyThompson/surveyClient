// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017

import {Component, OnInit, Input} from "@angular/core";

import {Survey} from "./../../../services/surveyDb/types/Survey";

require("./Survey.scss");

@Component (
    {
        selector: "survey-form",
        templateUrl: "./Survey.html"
    }
)
export class SurveyComponent implements OnInit
{
    private _Survey: Survey;
    constructor()
    {
        this._Survey = new Survey();
    }

    ngOnInit(): void
    {
    }

    @Input()
    set Survey(value: Survey)
    {
        this._Survey = value;
    }

    get Survey(): Survey
    {
        return this._Survey;
    }
}