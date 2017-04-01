// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017
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
        this._SurveyPointSummarySubject.updateForSurveyPointType(updateSurveyPointType);
        this._SurveySummarySubject.updateForSurveyPointType(updateSurveyPointType);
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
        _1.SurveyPointSummarySubjectProvider,
        _1.SurveySummarySubjectProvider])
], SurveyPointTypeServiceHttp);
exports.SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp;
var SurveyPointTypeSubjectProvider = (function () {
    function SurveyPointTypeSubjectProvider(_SurveyPointTypeService) {
        this._SurveyPointTypeService = _SurveyPointTypeService;
        this._mapSummaries = new Map();
    }
    SurveyPointTypeSubjectProvider.prototype.getSurveyPointType = function (keyID) {
        var keyLocal = keyID ? keyID : 0;
        if (!this._mapSummaries.has(keyLocal)) {
            this._mapSummaries.set(keyLocal, new Rx_1.BehaviorSubject([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    };
    SurveyPointTypeSubjectProvider.prototype.update = function (keyID) {
        var _this = this;
        var keyLocal = keyID ? keyID : 0;
        if (keyID) {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(keyLocal)
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next([result]); });
        }
        else {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next(result); });
        }
    };
    return SurveyPointTypeSubjectProvider;
}());
SurveyPointTypeSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [SurveyPointTypeServiceHttp])
], SurveyPointTypeSubjectProvider);
exports.SurveyPointTypeSubjectProvider = SurveyPointTypeSubjectProvider;
var SurveyPointTypeServiceHttp_1;
//# sourceMappingURL=SurveyPointTypeServiceHttp.js.map