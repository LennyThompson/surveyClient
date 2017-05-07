"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
const material_1 = require("@angular/material");
const add_survey_point_1 = require("./../../add/add-survey-point");
require("./survey-point-summary-list.scss");
let SurveyPointSummaryListComponent = class SurveyPointSummaryListComponent {
    constructor(surveyContext, summaryService, pointService, dialog) {
        this.surveyContext = surveyContext;
        this.summaryService = summaryService;
        this.pointService = pointService;
        this.dialog = dialog;
        // this.updateSurveyPoints();
    }
    set SurveyId(id) {
        this.updateSurveyPoints();
    }
    updateSurveyPoints() {
        this.summaryService.loadSurveyPointSummaryFromDatabase(this.surveyContext.Survey.ID)
            .subscribe((summary) => {
            this.m_surveyPoints = summary.Pts;
        });
    }
    get Points() {
        return this.m_surveyPoints;
    }
    onUpdate(pointUpdated) {
        this.updateSurveyPoints();
    }
    onAddSurveyPoint() {
        let config = new material_1.MdDialogConfig();
        this.dialog.open(add_survey_point_1.AddSurveyPointComponent, config)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                console.log(JSON.stringify(result));
                this.pointService.saveSurveyPointForSurvey(result)
                    .subscribe(() => {
                    this.updateSurveyPoints();
                });
            }
            else {
                console.log("Cancel");
            }
        });
    }
};
__decorate([
    core_1.Input("surveyId"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SurveyPointSummaryListComponent.prototype, "SurveyId", null);
SurveyPointSummaryListComponent = __decorate([
    core_1.Component({
        selector: "survey-point-list",
        templateUrl: "survey-point-summary-list.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentSurveyProvider,
        webAPI_1.SurveyPointSummaryServiceHttp,
        webAPI_1.SurveyPointServiceHttp,
        material_1.MdDialog])
], SurveyPointSummaryListComponent);
exports.SurveyPointSummaryListComponent = SurveyPointSummaryListComponent;
//# sourceMappingURL=survey-summary-point-list.js.map