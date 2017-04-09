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
var SurveyPoint_1 = require("../types/SurveyPoint");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var simple_providers_2 = require("./../../../components/survey/simple-providers");
var SurveyPointServiceHttp = SurveyPointServiceHttp_1 = (function () {
    function SurveyPointServiceHttp(httpService, _SurveyProvider, _SurveyPointSummarySubject, _SurveySummarySubject, _TraverseSummarySubject, _TraverseMeasurementSummarySubject) {
        this.httpService = httpService;
        this._SurveyProvider = _SurveyProvider;
        this._SurveyPointSummarySubject = _SurveyPointSummarySubject;
        this._SurveySummarySubject = _SurveySummarySubject;
        this._TraverseSummarySubject = _TraverseSummarySubject;
        this._TraverseMeasurementSummarySubject = _TraverseMeasurementSummarySubject;
    }
    SurveyPointServiceHttp.prototype.saveToDatabase = function (typeSurveyPoint) {
        var _this = this;
        var strPath = SurveyPointServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPoint.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPoint_1.SurveyPoint.fromJsonObject(resp.json()); })
            .map(function (obsSurveyPoint) { return _this.notifyObservers(obsSurveyPoint); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointServiceHttp.prototype.updateToDatabase = function (typeSurveyPoint) {
        var _this = this;
        var strPath = SurveyPointServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPoint.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPoint_1.SurveyPoint.fromJsonObject(resp.json()); })
            .map(function (obsSurveyPoint) { return _this.notifyObservers(obsSurveyPoint); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointServiceHttp.prototype.saveSurveyPointForSurvey = function (typeSurveyPoint) {
        var _this = this;
        var strPath = SurveyPointServiceHttp_1.buildPath();
        strPath += "/addSurveyPointToSurvey";
        var strJsonBody = "{ \"ID\": " + this._SurveyProvider.Survey.ID + ", SurveyPoint: " + typeSurveyPoint.toJson() + " }";
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return _this.notifyObservers(SurveyPoint_1.SurveyPoint.fromJsonObject(resp.json())); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointServiceHttp.prototype.notifyObservers = function (updateSurveyPoint) {
        this._SurveyPointSummarySubject.updateForSurveyPoint();
        this._SurveySummarySubject.updateForSurveyPoint();
        this._TraverseSummarySubject.updateForSurveyPoint();
        this._TraverseMeasurementSummarySubject.updateForSurveyPoint();
        return updateSurveyPoint;
    };
    SurveyPointServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyPointServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyPoint_1.SurveyPoint.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointServiceHttp.prototype.loadSurveyPointFromDatabase = function (nID) {
        var strPath = SurveyPointServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return SurveyPoint_1.SurveyPoint.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyPoints";
        return strPath;
    };
    return SurveyPointServiceHttp;
}());
SurveyPointServiceHttp = SurveyPointServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        simple_providers_2.CurrentSurveyProvider,
        _1.SurveyPointSummarySubjectProvider, typeof (_a = typeof _1.SurveySummarySubjectProvider !== "undefined" && _1.SurveySummarySubjectProvider) === "function" && _a || Object, typeof (_b = typeof _1.TraverseSummarySubjectProvider !== "undefined" && _1.TraverseSummarySubjectProvider) === "function" && _b || Object, typeof (_c = typeof _1.TraverseMeasurementSummarySubjectProvider !== "undefined" && _1.TraverseMeasurementSummarySubjectProvider) === "function" && _c || Object])
], SurveyPointServiceHttp);
exports.SurveyPointServiceHttp = SurveyPointServiceHttp;
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
    __metadata("design:paramtypes", [SurveyPointServiceHttp,
        simple_providers_1.CurrentSurveyPointProvider])
], SurveyPointSubjectProvider);
exports.SurveyPointSubjectProvider = SurveyPointSubjectProvider;
var SurveyPointServiceHttp_1, _a, _b, _c;
//# sourceMappingURL=SurveyPointServiceHttp.js.map