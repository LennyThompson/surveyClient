import {Component, Input} from "@angular/core";
import {Survey} from "../../services/surveyDb/types/Survey";

@Component({
    selector: "survey-item",
    templateUrl: "./survey.html",
})
export class SurveyComponent
{
    private m_surveyItem : Survey;
    constructor()
    {
    }

    get Survey() : Survey
    {
        return this.m_surveyItem;
    }

    @Input("survey")
    set Survey(surveyItem : Survey)
    {
        this.m_surveyItem = surveyItem;
    }
}
