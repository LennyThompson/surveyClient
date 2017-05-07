import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SurveyListComponent} from "./list/survey-list";

const surveyRoutes: Routes = [
    {
        path: "surveys",
        component: SurveyListComponent
    }
];

@NgModule (
    {
        imports: [
            RouterModule.forChild(surveyRoutes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class SurveyRouter {}
