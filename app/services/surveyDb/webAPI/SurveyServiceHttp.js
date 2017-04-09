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
var Survey_1 = require("../types/Survey");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var SurveyServiceHttp = SurveyServiceHttp_1 = (function () {
    function SurveyServiceHttp(httpService, _SurveyPointSummarySubject, _SurveySummarySubject) {
        this.httpService = httpService;
        this._SurveyPointSummarySubject = _SurveyPointSummarySubject;
        this._SurveySummarySubject = _SurveySummarySubject;
    }
    SurveyServiceHttp.prototype.saveToDatabase = function (typeSurvey) {
        var _this = this;
        var strPath = SurveyServiceHttp_1.buildPath();
        var strJsonBody = typeSurvey.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return Survey_1.Survey.fromJsonObject(resp.json()); })
            .map(function (obsSurvey) { return _this.notifyObservers(obsSurvey); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyServiceHttp.prototype.updateToDatabase = function (typeSurvey) {
        var _this = this;
        var strPath = SurveyServiceHttp_1.buildPath();
        var strJsonBody = typeSurvey.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return Survey_1.Survey.fromJsonObject(resp.json()); })
            .map(function (obsSurvey) { return _this.notifyObservers(obsSurvey); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyServiceHttp.prototype.notifyObservers = function (updateSurvey) {
        this._SurveyPointSummarySubject.updateForSurvey();
        this._SurveySummarySubject.updateForSurvey();
        return updateSurvey;
    };
    SurveyServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return Survey_1.Survey.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyServiceHttp.prototype.loadSurveyFromDatabase = function (nID) {
        var strPath = SurveyServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return Survey_1.Survey.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/Surveys";
        return strPath;
    };
    return SurveyServiceHttp;
}());
SurveyServiceHttp = SurveyServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        _1.SurveyPointSummarySubjectProvider, typeof (_a = typeof _1.SurveySummarySubjectProvider !== "undefined" && _1.SurveySummarySubjectProvider) === "function" && _a || Object])
], SurveyServiceHttp);
exports.SurveyServiceHttp = SurveyServiceHttp;
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
    __metadata("design:paramtypes", [SurveyServiceHttp,
        simple_providers_1.CurrentSurveyProvider])
], SurveySubjectProvider);
exports.SurveySubjectProvider = SurveySubjectProvider;
var SurveyServiceHttp_1, _a;
//# sourceMappingURL=SurveyServiceHttp.js.map