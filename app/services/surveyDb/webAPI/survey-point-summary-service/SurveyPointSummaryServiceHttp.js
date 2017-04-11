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
var types_1 = require("./../../types");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var __1 = require("./..");
var SurveyPointSummaryServiceHttp = SurveyPointSummaryServiceHttp_1 = (function () {
    function SurveyPointSummaryServiceHttp(httpService, _SurveySummarySubject) {
        this.httpService = httpService;
        this._SurveySummarySubject = _SurveySummarySubject;
    }
    SurveyPointSummaryServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyPointSummaryServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return types_1.SurveyPointSummary.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointSummaryServiceHttp.prototype.loadSurveyPointSummaryFromDatabase = function (nID) {
        var strPath = SurveyPointSummaryServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return types_1.SurveyPointSummary.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyPointSummaryServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/SurveyPointSummarys";
        return strPath;
    };
    return SurveyPointSummaryServiceHttp;
}());
SurveyPointSummaryServiceHttp = SurveyPointSummaryServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        __1.SurveySummarySubjectProvider])
], SurveyPointSummaryServiceHttp);
exports.SurveyPointSummaryServiceHttp = SurveyPointSummaryServiceHttp;
var SurveyPointSummaryServiceHttp_1;
//# sourceMappingURL=SurveyPointSummaryServiceHttp.js.map