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
var core_1 = require("@angular/core");
var SurveySummary_1 = require("../../services/surveyDb/types/SurveySummary");
var router_1 = require("@angular/router");
require("./survey.scss");
var SurveyComponent = (function () {
    function SurveyComponent(route, router) {
        this.route = route;
        this.router = router;
        this.m_showDetails = false;
    }
    Object.defineProperty(SurveyComponent.prototype, "Survey", {
        get: function () {
            return this.m_surveyItem;
        },
        set: function (surveyItem) {
            this.m_surveyItem = surveyItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyComponent.prototype, "showDetails", {
        get: function () {
            return this.m_showDetails;
        },
        enumerable: true,
        configurable: true
    });
    SurveyComponent.prototype.onShowDetails = function () {
        this.m_showDetails = true;
    };
    return SurveyComponent;
}());
__decorate([
    core_1.Input("survey"),
    __metadata("design:type", SurveySummary_1.SurveySummary),
    __metadata("design:paramtypes", [SurveySummary_1.SurveySummary])
], SurveyComponent.prototype, "Survey", null);
SurveyComponent = __decorate([
    core_1.Component({
        selector: "survey-item",
        templateUrl: "./survey.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], SurveyComponent);
exports.SurveyComponent = SurveyComponent;
//# sourceMappingURL=survey.js.map