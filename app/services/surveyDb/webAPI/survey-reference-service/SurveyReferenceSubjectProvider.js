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
var SurveyReferenceSubjectProvider = (function () {
    function SurveyReferenceSubjectProvider(_SurveyReferenceService, _SurveyReferenceCurrent) {
        this._SurveyReferenceService = _SurveyReferenceService;
        this._SurveyReferenceCurrent = _SurveyReferenceCurrent;
    }
    SurveyReferenceSubjectProvider.prototype.getSurveyReferenceSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyReferenceSubjectProvider.prototype.getSurveyReferenceSummary = function () {
        if (this._SurveyReferenceCurrent.SurveyReference) {
            var key = this._SurveyReferenceCurrent.SurveyReference.ID;
            if (!this._SurveyReferenceSummaries) {
                this._SurveyReferenceSummaries = new Map();
            }
            if (!this._SurveyReferenceSummaries.has(key)) {
                this._SurveyReferenceSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyReferenceSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyReference current context is provided");
    };
    SurveyReferenceSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyReferenceCurrent.SurveyReference
            &&
                this._SurveyReferenceSummaries.has(this._SurveyReferenceCurrent.SurveyReference.ID)) {
            this._SurveyReferenceService.loadSurveyReferenceFromDatabase(this._SurveyReferenceCurrent.SurveyReference.ID)
                .subscribe(function (result) { return _this._SurveyReferenceSummaries.get(_this._SurveyReferenceCurrent.SurveyReference.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyReferenceService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyReferenceSubjectProvider;
}());
SurveyReferenceSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyReferenceServiceHttp,
        __1.CurrentSurveyReferenceProvider])
], SurveyReferenceSubjectProvider);
exports.SurveyReferenceSubjectProvider = SurveyReferenceSubjectProvider;
//# sourceMappingURL=SurveyReferenceSubjectProvider.js.map