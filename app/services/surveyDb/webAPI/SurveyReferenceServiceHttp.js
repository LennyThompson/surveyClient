// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017
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
var SurveyReference_1 = require("../types/SurveyReference");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var SurveyReferenceServiceHttp = SurveyReferenceServiceHttp_1 = (function () {
    function SurveyReferenceServiceHttp(httpService, _SurveyPointSummarySubject, _SurveySummarySubject) {
        this.httpService = httpService;
        this._SurveyPointSummarySubject = _SurveyPointSummarySubject;
        this._SurveySummarySubject = _SurveySummarySubject;
    }
    SurveyReferenceServiceHttp.prototype.saveToDatabase = function (typeSurveyReference) {
        var _this = this;
        var strPath = SurveyReferenceServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyReference.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyReference_1.SurveyReference.fromJsonObject(resp.json()); })
            .map(function (obsSurveyReference) { return _this.notifyObservers(obsSurveyReference); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyReferenceServiceHttp.prototype.updateToDatabase = function (typeSurveyReference) {
        var _this = this;
        var strPath = SurveyReferenceServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyReference.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyReference_1.SurveyReference.fromJsonObject(resp.json()); })
            .map(function (obsSurveyReference) { return _this.notifyObservers(obsSurveyReference); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyReferenceServiceHttp.prototype.notifyObservers = function (updateSurveyReference) {
        this._SurveyPointSummarySubject.updateForSurveyReference();
        this._SurveySummarySubject.updateForSurveyReference();
        return updateSurveyReference;
    };
    SurveyReferenceServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyReferenceServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyReference_1.SurveyReference.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyReferenceServiceHttp.prototype.loadSurveyReferenceFromDatabase = function (nID) {
        var strPath = SurveyReferenceServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return SurveyReference_1.SurveyReference.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyReferenceServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyReferences";
        return strPath;
    };
    return SurveyReferenceServiceHttp;
}());
SurveyReferenceServiceHttp = SurveyReferenceServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        _1.SurveyPointSummarySubjectProvider, typeof (_a = typeof _1.SurveySummarySubjectProvider !== "undefined" && _1.SurveySummarySubjectProvider) === "function" && _a || Object])
], SurveyReferenceServiceHttp);
exports.SurveyReferenceServiceHttp = SurveyReferenceServiceHttp;
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
    __metadata("design:paramtypes", [SurveyReferenceServiceHttp,
        simple_providers_1.CurrentSurveyReferenceProvider])
], SurveyReferenceSubjectProvider);
exports.SurveyReferenceSubjectProvider = SurveyReferenceSubjectProvider;
var SurveyReferenceServiceHttp_1, _a;
//# sourceMappingURL=SurveyReferenceServiceHttp.js.map