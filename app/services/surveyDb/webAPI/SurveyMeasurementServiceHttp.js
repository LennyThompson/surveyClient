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
var SurveyMeasurement_1 = require("../types/SurveyMeasurement");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var simple_providers_2 = require("./../../../components/survey/simple-providers");
var SurveyMeasurementServiceHttp = SurveyMeasurementServiceHttp_1 = (function () {
    function SurveyMeasurementServiceHttp(httpService, _TraverseProvider, _TraverseMeasurementSummarySubject) {
        this.httpService = httpService;
        this._TraverseProvider = _TraverseProvider;
        this._TraverseMeasurementSummarySubject = _TraverseMeasurementSummarySubject;
    }
    SurveyMeasurementServiceHttp.prototype.saveToDatabase = function (typeSurveyMeasurement) {
        var _this = this;
        var strPath = SurveyMeasurementServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyMeasurement.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(resp.json()); })
            .map(function (obsSurveyMeasurement) { return _this.notifyObservers(obsSurveyMeasurement); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyMeasurementServiceHttp.prototype.updateToDatabase = function (typeSurveyMeasurement) {
        var _this = this;
        var strPath = SurveyMeasurementServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyMeasurement.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(resp.json()); })
            .map(function (obsSurveyMeasurement) { return _this.notifyObservers(obsSurveyMeasurement); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyMeasurementServiceHttp.prototype.saveSurveyMeasurementForTraverse = function (typeSurveyMeasurement) {
        var _this = this;
        var strPath = SurveyMeasurementServiceHttp_1.buildPath();
        strPath += "/addSurveyMeasurementToTraverse";
        var strJsonBody = "{ \"ID\": " + this._TraverseProvider.Traverse.ID + ", SurveyMeasurement: " + typeSurveyMeasurement.toJson() + " }";
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return _this.notifyObservers(SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(resp.json())); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyMeasurementServiceHttp.prototype.notifyObservers = function (updateSurveyMeasurement) {
        this._TraverseMeasurementSummarySubject.updateForSurveyMeasurement();
        return updateSurveyMeasurement;
    };
    SurveyMeasurementServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyMeasurementServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyMeasurement_1.SurveyMeasurement.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyMeasurementServiceHttp.prototype.loadSurveyMeasurementFromDatabase = function (nID) {
        var strPath = SurveyMeasurementServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyMeasurementServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyMeasurements";
        return strPath;
    };
    return SurveyMeasurementServiceHttp;
}());
SurveyMeasurementServiceHttp = SurveyMeasurementServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        simple_providers_2.CurrentTraverseProvider, typeof (_a = typeof _1.TraverseMeasurementSummarySubjectProvider !== "undefined" && _1.TraverseMeasurementSummarySubjectProvider) === "function" && _a || Object])
], SurveyMeasurementServiceHttp);
exports.SurveyMeasurementServiceHttp = SurveyMeasurementServiceHttp;
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
    __metadata("design:paramtypes", [SurveyMeasurementServiceHttp,
        simple_providers_1.CurrentSurveyMeasurementProvider])
], SurveyMeasurementSubjectProvider);
exports.SurveyMeasurementSubjectProvider = SurveyMeasurementSubjectProvider;
var SurveyMeasurementServiceHttp_1, _a;
//# sourceMappingURL=SurveyMeasurementServiceHttp.js.map