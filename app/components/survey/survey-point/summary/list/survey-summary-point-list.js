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
var core_1 = require("@angular/core");
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
var material_1 = require("@angular/material");
var add_survey_point_1 = require("./../../add/add-survey-point");
require("./survey-point-summary-list.scss");
var SurveyPointSummaryListComponent = (function () {
    function SurveyPointSummaryListComponent(surveyContext, summaryService, pointService, dialog) {
        this.surveyContext = surveyContext;
        this.summaryService = summaryService;
        this.pointService = pointService;
        this.dialog = dialog;
        // this.updateSurveyPoints();
    }
    Object.defineProperty(SurveyPointSummaryListComponent.prototype, "SurveyId", {
        set: function (id) {
            this.updateSurveyPoints();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPointSummaryListComponent.prototype.updateSurveyPoints = function () {
        var _this = this;
        this.summaryService.loadSurveyPointSummaryFromDatabase(this.surveyContext.Survey.ID)
            .subscribe(function (summary) {
            _this.m_surveyPoints = summary.Pts;
        });
    };
    Object.defineProperty(SurveyPointSummaryListComponent.prototype, "Points", {
        get: function () {
            return this.m_surveyPoints;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPointSummaryListComponent.prototype.onUpdate = function (pointUpdated) {
        this.updateSurveyPoints();
    };
    SurveyPointSummaryListComponent.prototype.onAddSurveyPoint = function () {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        this.dialog.open(add_survey_point_1.AddSurveyPointComponent, config)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                console.log(JSON.stringify(result));
                _this.pointService.saveSurveyPointForSurvey(result)
                    .subscribe(function () {
                    _this.updateSurveyPoints();
                });
            }
            else {
                console.log("Cancel");
            }
        });
    };
    return SurveyPointSummaryListComponent;
}());
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