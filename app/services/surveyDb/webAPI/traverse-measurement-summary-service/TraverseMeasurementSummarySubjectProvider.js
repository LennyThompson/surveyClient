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
var TraverseMeasurementSummarySubjectProvider = (function () {
    function TraverseMeasurementSummarySubjectProvider(_TraverseMeasurementSummaryService, _SurveyCurrent, _TraverseCurrent) {
        this._TraverseMeasurementSummaryService = _TraverseMeasurementSummaryService;
        this._SurveyCurrent = _SurveyCurrent;
        this._TraverseCurrent = _TraverseCurrent;
    }
    TraverseMeasurementSummarySubjectProvider.prototype.getTraverseMeasurementSummarySummaries = function () {
        if (this._SurveyCurrent.Survey) {
            var key = this._SurveyCurrent.Survey_ID;
            if (!this._SurveySummaries) {
                this._SurveySummaries = new Map();
            }
            if (!this._SurveySummaries.has(key)) {
                this._SurveySummaries.set(key, new Rx_1.BehaviorSubject([]));
            }
            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    TraverseMeasurementSummarySubjectProvider.prototype.getTraverseMeasurementSummarySummary = function () {
        if (this._TraverseCurrent.Traverse) {
            var key = this._TraverseCurrent.Traverse_ID;
            if (!this._TraverseSummary) {
                this._TraverseSummary = new Map();
            }
            if (!this._TraverseSummary.has(key)) {
                this._TraverseSummary.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._TraverseSummary.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    };
    TraverseMeasurementSummarySubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._TraverseCurrent.Traverse
            &&
                this._TraverseSummary.has(this._TraverseCurrent.Traverse_ID)) {
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(function (result) { return _this._TraverseSummary.get(_this._TraverseCurrent.Traverse_ID).next(result); });
        }
        this._TraverseMeasurementSummaryService.loadForPathFromDatabase(this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey_ID : -1, -1)
            .subscribe(function (result) {
            _this._SurveySummaries.get(_this._SurveyCurrent.Survey_ID).next(result);
        });
        if (this._summary) {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    TraverseMeasurementSummarySubjectProvider.prototype.updateForSurveyMeasurement = function () {
        this.update();
    };
    TraverseMeasurementSummarySubjectProvider.prototype.updateForSurveyPoint = function () {
        this.update();
    };
    TraverseMeasurementSummarySubjectProvider.prototype.updateForTraverse = function () {
        this.update();
    };
    return TraverseMeasurementSummarySubjectProvider;
}());
TraverseMeasurementSummarySubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.TraverseMeasurementSummaryServiceHttp,
        __1.CurrentSurveyProvider,
        __1.CurrentTraverseProvider])
], TraverseMeasurementSummarySubjectProvider);
exports.TraverseMeasurementSummarySubjectProvider = TraverseMeasurementSummarySubjectProvider;
//# sourceMappingURL=TraverseMeasurementSummarySubjectProvider.js.map