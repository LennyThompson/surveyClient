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
var SurveyAdjustment_1 = require("../types/SurveyAdjustment");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var SurveyAdjustmentServiceHttp = SurveyAdjustmentServiceHttp_1 = (function () {
    function SurveyAdjustmentServiceHttp(httpService) {
        this.httpService = httpService;
    }
    SurveyAdjustmentServiceHttp.prototype.saveToDatabase = function (typeSurveyAdjustment) {
        var _this = this;
        var strPath = SurveyAdjustmentServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyAdjustment.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyAdjustment_1.SurveyAdjustment.fromJsonObject(resp.json()); })
            .map(function (obsSurveyAdjustment) { return _this.notifyObservers(obsSurveyAdjustment); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyAdjustmentServiceHttp.prototype.updateToDatabase = function (typeSurveyAdjustment) {
        var _this = this;
        var strPath = SurveyAdjustmentServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyAdjustment.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyAdjustment_1.SurveyAdjustment.fromJsonObject(resp.json()); })
            .map(function (obsSurveyAdjustment) { return _this.notifyObservers(obsSurveyAdjustment); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyAdjustmentServiceHttp.prototype.notifyObservers = function (updateSurveyAdjustment) {
        return updateSurveyAdjustment;
    };
    SurveyAdjustmentServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyAdjustmentServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyAdjustment_1.SurveyAdjustment.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyAdjustmentServiceHttp.prototype.loadSurveyAdjustmentFromDatabase = function (nID) {
        var strPath = SurveyAdjustmentServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return SurveyAdjustment_1.SurveyAdjustment.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyAdjustmentServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyAdjustments";
        return strPath;
    };
    return SurveyAdjustmentServiceHttp;
}());
SurveyAdjustmentServiceHttp = SurveyAdjustmentServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SurveyAdjustmentServiceHttp);
exports.SurveyAdjustmentServiceHttp = SurveyAdjustmentServiceHttp;
var SurveyAdjustmentSubjectProvider = (function () {
    function SurveyAdjustmentSubjectProvider(_SurveyAdjustmentService) {
        this._SurveyAdjustmentService = _SurveyAdjustmentService;
        this._mapSummaries = new Map();
    }
    SurveyAdjustmentSubjectProvider.prototype.getSurveyAdjustment = function (keyID) {
        var keyLocal = keyID ? keyID : 0;
        if (!this._mapSummaries.has(keyLocal)) {
            this._mapSummaries.set(keyLocal, new Rx_1.BehaviorSubject([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    };
    SurveyAdjustmentSubjectProvider.prototype.update = function (keyID) {
        var _this = this;
        var keyLocal = keyID ? keyID : 0;
        if (keyID) {
            this._SurveyAdjustmentService.loadSurveyAdjustmentFromDatabase(keyLocal)
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next([result]); });
        }
        else {
            this._SurveyAdjustmentService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next(result); });
        }
    };
    return SurveyAdjustmentSubjectProvider;
}());
SurveyAdjustmentSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [SurveyAdjustmentServiceHttp])
], SurveyAdjustmentSubjectProvider);
exports.SurveyAdjustmentSubjectProvider = SurveyAdjustmentSubjectProvider;
var SurveyAdjustmentServiceHttp_1;
//# sourceMappingURL=SurveyAdjustmentServiceHttp.js.map