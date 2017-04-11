// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:13 AEST 2017
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
var Rx_1 = require("rxjs/Rx");
var __1 = require("./..");
var SurveyPointSummarySubjectProvider = (function () {
    function SurveyPointSummarySubjectProvider(_SurveyPointSummaryService) {
        this._SurveyPointSummaryService = _SurveyPointSummaryService;
    }
    SurveyPointSummarySubjectProvider.prototype.getSurveyPointSummarySummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyPointSummarySubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._summary) {
            this._SurveyPointSummaryService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    SurveyPointSummarySubjectProvider.prototype.updateForSurvey = function () {
        this.update();
    };
    SurveyPointSummarySubjectProvider.prototype.updateForSurveyPoint = function () {
        this.update();
    };
    SurveyPointSummarySubjectProvider.prototype.updateForSurveyReference = function () {
        this.update();
    };
    SurveyPointSummarySubjectProvider.prototype.updateForSurveyPointType = function () {
        this.update();
    };
    return SurveyPointSummarySubjectProvider;
}());
SurveyPointSummarySubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__1.SurveyPointSummaryServiceHttp])
], SurveyPointSummarySubjectProvider);
exports.SurveyPointSummarySubjectProvider = SurveyPointSummarySubjectProvider;
//# sourceMappingURL=SurveyPointSummarySubjectProvider.js.map