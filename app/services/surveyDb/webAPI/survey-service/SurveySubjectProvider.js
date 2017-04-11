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
var __2 = require("./..");
var SurveySubjectProvider = (function () {
    function SurveySubjectProvider(_SurveyService, _SurveyCurrent) {
        this._SurveyService = _SurveyService;
        this._SurveyCurrent = _SurveyCurrent;
    }
    SurveySubjectProvider.prototype.getSurveySummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveySubjectProvider.prototype.getSurveySummary = function () {
        if (this._SurveyCurrent.Survey) {
            var key = this._SurveyCurrent.Survey.ID;
            if (!this._SurveySummaries) {
                this._SurveySummaries = new Map();
            }
            if (!this._SurveySummaries.has(key)) {
                this._SurveySummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }
        throw new Error("No Survey current context is provided");
    };
    SurveySubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyCurrent.Survey
            &&
                this._SurveySummaries.has(this._SurveyCurrent.Survey.ID)) {
            this._SurveyService.loadSurveyFromDatabase(this._SurveyCurrent.Survey.ID)
                .subscribe(function (result) { return _this._SurveySummaries.get(_this._SurveyCurrent.Survey.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveySubjectProvider;
}());
SurveySubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyServiceHttp,
        __1.CurrentSurveyProvider])
], SurveySubjectProvider);
exports.SurveySubjectProvider = SurveySubjectProvider;
//# sourceMappingURL=SurveySubjectProvider.js.map