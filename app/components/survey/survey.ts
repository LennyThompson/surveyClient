import {Component, Input} from "@angular/core";
import {Survey} from "../../services/surveyDb/types/Survey";
import {SurveySummary} from "../../services/surveyDb/types/SurveySummary";

@Component({
    selector: "survey-item",
    templateUrl: "./survey.html",
})
export class SurveyComponent
{
    private m_surveyItem : SurveySummary;
    constructor()
    {
    }

    @Input("survey")
    set Survey(surveyItem : SurveySummary)
    {
        this.m_surveyItem = surveyItem;
    }
    get Survey() : SurveySummary
    {
        return this.m_surveyItem;
    }

}
