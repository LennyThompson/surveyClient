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
var SurveyAdjustmentSubjectProvider = (function () {
    function SurveyAdjustmentSubjectProvider(_SurveyAdjustmentService, _SurveyAdjustmentCurrent) {
        this._SurveyAdjustmentService = _SurveyAdjustmentService;
        this._SurveyAdjustmentCurrent = _SurveyAdjustmentCurrent;
    }
    SurveyAdjustmentSubjectProvider.prototype.getSurveyAdjustmentSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyAdjustmentSubjectProvider.prototype.getSurveyAdjustmentSummary = function () {
        if (this._SurveyAdjustmentCurrent.SurveyAdjustment) {
            var key = this._SurveyAdjustmentCurrent.SurveyAdjustment.ID;
            if (!this._SurveyAdjustmentSummaries) {
                this._SurveyAdjustmentSummaries = new Map();
            }
            if (!this._SurveyAdjustmentSummaries.has(key)) {
                this._SurveyAdjustmentSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyAdjustmentSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyAdjustment current context is provided");
    };
    SurveyAdjustmentSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyAdjustmentCurrent.SurveyAdjustment
            &&
                this._SurveyAdjustmentSummaries.has(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)) {
            this._SurveyAdjustmentService.loadSurveyAdjustmentFromDatabase(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
                .subscribe(function (result) { return _this._SurveyAdjustmentSummaries.get(_this._SurveyAdjustmentCurrent.SurveyAdjustment.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyAdjustmentService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyAdjustmentSubjectProvider;
}());
SurveyAdjustmentSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyAdjustmentServiceHttp,
        __1.CurrentSurveyAdjustmentProvider])
], SurveyAdjustmentSubjectProvider);
exports.SurveyAdjustmentSubjectProvider = SurveyAdjustmentSubjectProvider;
//# sourceMappingURL=SurveyAdjustmentSubjectProvider.js.map