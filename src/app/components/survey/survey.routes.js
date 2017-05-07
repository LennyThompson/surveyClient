"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const survey_details_1 = require("./details/survey-details");
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const survey_list_1 = require("./list/survey-list");
const surveyRoutes = [
    {
        path: "surveys",
        component: survey_list_1.SurveyListComponent,
        children: [
            {
                path: "details/:id",
                component: survey_details_1.SurveyDetailsComponent
            }
        ]
    }
];
let SurveyRouter = class SurveyRouter {
};
SurveyRouter = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(surveyRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], SurveyRouter);
exports.SurveyRouter = SurveyRouter;
//# sourceMappingURL=survey.routes.js.map