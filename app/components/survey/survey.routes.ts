

import {SurveyDetailsComponent} from "./details/survey-details";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SurveyListComponent} from "./list/survey-list";

const surveyRoutes: Routes = [
    {
        path: "surveys",
        component: SurveyListComponent,
        children: [
            {
                path: "details/:id",
                component: SurveyDetailsComponent
            }
        ]
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