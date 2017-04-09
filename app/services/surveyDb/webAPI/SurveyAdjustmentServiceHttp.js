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
var SurveyAdjustment_1 = require("../types/SurveyAdjustment");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
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
    __metadata("design:paramtypes", [SurveyAdjustmentServiceHttp,
        simple_providers_1.CurrentSurveyAdjustmentProvider])
], SurveyAdjustmentSubjectProvider);
exports.SurveyAdjustmentSubjectProvider = SurveyAdjustmentSubjectProvider;
var SurveyAdjustmentServiceHttp_1;
//# sourceMappingURL=SurveyAdjustmentServiceHttp.js.map