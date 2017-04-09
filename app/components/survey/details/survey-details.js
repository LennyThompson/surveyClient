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
var SurveyPointSummaryServiceHttp_1 = require("../../../services/surveyDb/webAPI/SurveyPointSummaryServiceHttp");
var TraverseMeasurementSummaryServiceHttp_1 = require("../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp");
var SurveyPointServiceHttp_1 = require("../../../services/surveyDb/webAPI/SurveyPointServiceHttp");
var SurveyPoint_1 = require("../../../services/surveyDb/types/SurveyPoint");
var material_1 = require("@angular/material");
var simple_providers_1 = require("./../simple-providers");
require("./survey-details.scss");
var SurveyDetailsComponent = (function () {
    function SurveyDetailsComponent(surveyContext, summaryService, travMeasService, pointService, dialog, viewContRef) {
        this.surveyContext = surveyContext;
        this.summaryService = summaryService;
        this.travMeasService = travMeasService;
        this.pointService = pointService;
        this.dialog = dialog;
        this.viewContRef = viewContRef;
        this.m_pointEdit = new SurveyPoint_1.SurveyPoint();
    }
    SurveyDetailsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveyDetailsComponent.prototype, "SurveyId", {
        get: function () {
            return this.m_surveyId;
        },
        set: function (id) {
            this.m_surveyId = id;
            this.surveyContext.Survey_ID = id;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyDetailsComponent;
}());
__decorate([
    core_1.Input("surveyId"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SurveyDetailsComponent.prototype, "SurveyId", null);
SurveyDetailsComponent = __decorate([
    core_1.Component({
        selector: "survey-details",
        templateUrl: "./survey-details.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentSurveyProvider,
        SurveyPointSummaryServiceHttp_1.SurveyPointSummaryServiceHttp,
        TraverseMeasurementSummaryServiceHttp_1.TraverseMeasurementSummaryServiceHttp,
        SurveyPointServiceHttp_1.SurveyPointServiceHttp,
        material_1.MdDialog,
        core_1.ViewContainerRef])
], SurveyDetailsComponent);
exports.SurveyDetailsComponent = SurveyDetailsComponent;
//# sourceMappingURL=survey-details.js.map