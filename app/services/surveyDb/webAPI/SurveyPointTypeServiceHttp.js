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
var SurveyPointType_1 = require("../types/SurveyPointType");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp_1 = (function () {
    function SurveyPointTypeServiceHttp(httpService, _SurveyPointSummarySubject, _SurveySummarySubject) {
        this.httpService = httpService;
        this._SurveyPointSummarySubject = _SurveyPointSummarySubject;
        this._SurveySummarySubject = _SurveySummarySubject;
    }
    SurveyPointTypeServiceHttp.prototype.saveToDatabase = function (typeSurveyPointType) {
        var _this = this;
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPointType.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.fromJsonObject(resp.json()); })
            .map(function (obsSurveyPointType) { return _this.notifyObservers(obsSurveyPointType); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointTypeServiceHttp.prototype.updateToDatabase = function (typeSurveyPointType) {
        var _this = this;
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPointType.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.fromJsonObject(resp.json()); })
            .map(function (obsSurveyPointType) { return _this.notifyObservers(obsSurveyPointType); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointTypeServiceHttp.prototype.notifyObservers = function (updateSurveyPointType) {
        this._SurveyPointSummarySubject.updateForSurveyPointType();
        this._SurveySummarySubject.updateForSurveyPointType();
        return updateSurveyPointType;
    };
    SurveyPointTypeServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointTypeServiceHttp.prototype.loadSurveyPointTypeFromDatabase = function (nID) {
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointTypeServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyPointTypes";
        return strPath;
    };
    return SurveyPointTypeServiceHttp;
}());
SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        _1.SurveyPointSummarySubjectProvider, typeof (_a = typeof _1.SurveySummarySubjectProvider !== "undefined" && _1.SurveySummarySubjectProvider) === "function" && _a || Object])
], SurveyPointTypeServiceHttp);
exports.SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp;
var SurveyPointTypeSubjectProvider = (function () {
    function SurveyPointTypeSubjectProvider(_SurveyPointTypeService, _SurveyPointTypeCurrent) {
        this._SurveyPointTypeService = _SurveyPointTypeService;
        this._SurveyPointTypeCurrent = _SurveyPointTypeCurrent;
    }
    SurveyPointTypeSubjectProvider.prototype.getSurveyPointTypeSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyPointTypeSubjectProvider.prototype.getSurveyPointTypeSummary = function () {
        if (this._SurveyPointTypeCurrent.SurveyPointType) {
            var key = this._SurveyPointTypeCurrent.SurveyPointType.ID;
            if (!this._SurveyPointTypeSummaries) {
                this._SurveyPointTypeSummaries = new Map();
            }
            if (!this._SurveyPointTypeSummaries.has(key)) {
                this._SurveyPointTypeSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyPointTypeSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPointType current context is provided");
    };
    SurveyPointTypeSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyPointTypeCurrent.SurveyPointType
            &&
                this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType.ID)) {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(this._SurveyPointTypeCurrent.SurveyPointType.ID)
                .subscribe(function (result) { return _this._SurveyPointTypeSummaries.get(_this._SurveyPointTypeCurrent.SurveyPointType.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyPointTypeSubjectProvider;
}());
SurveyPointTypeSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [SurveyPointTypeServiceHttp,
        simple_providers_1.CurrentSurveyPointTypeProvider])
], SurveyPointTypeSubjectProvider);
exports.SurveyPointTypeSubjectProvider = SurveyPointTypeSubjectProvider;
var SurveyPointTypeServiceHttp_1, _a;
//# sourceMappingURL=SurveyPointTypeServiceHttp.js.map