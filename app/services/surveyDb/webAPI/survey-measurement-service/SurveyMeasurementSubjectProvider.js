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
var SurveyMeasurementSubjectProvider = (function () {
    function SurveyMeasurementSubjectProvider(_SurveyMeasurementService, _SurveyMeasurementCurrent) {
        this._SurveyMeasurementService = _SurveyMeasurementService;
        this._SurveyMeasurementCurrent = _SurveyMeasurementCurrent;
    }
    SurveyMeasurementSubjectProvider.prototype.getSurveyMeasurementSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyMeasurementSubjectProvider.prototype.getSurveyMeasurementSummary = function () {
        if (this._SurveyMeasurementCurrent.SurveyMeasurement) {
            var key = this._SurveyMeasurementCurrent.SurveyMeasurement.ID;
            if (!this._SurveyMeasurementSummaries) {
                this._SurveyMeasurementSummaries = new Map();
            }
            if (!this._SurveyMeasurementSummaries.has(key)) {
                this._SurveyMeasurementSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyMeasurementSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyMeasurement current context is provided");
    };
    SurveyMeasurementSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyMeasurementCurrent.SurveyMeasurement
            &&
                this._SurveyMeasurementSummaries.has(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)) {
            this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
                .subscribe(function (result) { return _this._SurveyMeasurementSummaries.get(_this._SurveyMeasurementCurrent.SurveyMeasurement.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyMeasurementService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyMeasurementSubjectProvider;
}());
SurveyMeasurementSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyMeasurementServiceHttp,
        __1.CurrentSurveyMeasurementProvider])
], SurveyMeasurementSubjectProvider);
exports.SurveyMeasurementSubjectProvider = SurveyMeasurementSubjectProvider;
//# sourceMappingURL=SurveyMeasurementSubjectProvider.js.map