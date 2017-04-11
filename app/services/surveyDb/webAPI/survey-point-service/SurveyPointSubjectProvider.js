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
var SurveyPointSubjectProvider = (function () {
    function SurveyPointSubjectProvider(_SurveyPointService, _SurveyPointCurrent) {
        this._SurveyPointService = _SurveyPointService;
        this._SurveyPointCurrent = _SurveyPointCurrent;
    }
    SurveyPointSubjectProvider.prototype.getSurveyPointSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyPointSubjectProvider.prototype.getSurveyPointSummary = function () {
        if (this._SurveyPointCurrent.SurveyPoint) {
            var key = this._SurveyPointCurrent.SurveyPoint.ID;
            if (!this._SurveyPointSummaries) {
                this._SurveyPointSummaries = new Map();
            }
            if (!this._SurveyPointSummaries.has(key)) {
                this._SurveyPointSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyPointSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPoint current context is provided");
    };
    SurveyPointSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyPointCurrent.SurveyPoint
            &&
                this._SurveyPointSummaries.has(this._SurveyPointCurrent.SurveyPoint.ID)) {
            this._SurveyPointService.loadSurveyPointFromDatabase(this._SurveyPointCurrent.SurveyPoint.ID)
                .subscribe(function (result) { return _this._SurveyPointSummaries.get(_this._SurveyPointCurrent.SurveyPoint.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyPointService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyPointSubjectProvider;
}());
SurveyPointSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyPointServiceHttp,
        __1.CurrentSurveyPointProvider])
], SurveyPointSubjectProvider);
exports.SurveyPointSubjectProvider = SurveyPointSubjectProvider;
//# sourceMappingURL=SurveyPointSubjectProvider.js.map