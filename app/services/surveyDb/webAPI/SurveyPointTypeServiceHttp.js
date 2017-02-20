// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017
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
var SurveyPointType_1 = require("../types/SurveyPointType");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp_1 = (function () {
    function SurveyPointTypeServiceHttp(httpService) {
        this.httpService = httpService;
    }
    SurveyPointTypeServiceHttp.prototype.saveToDatabase = function (typeSurveyPointType) {
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPointType.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyPointTypeServiceHttp.prototype.updateToDatabase = function (typeSurveyPointType) {
        var strPath = SurveyPointTypeServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyPointType.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyPointType_1.SurveyPointType.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
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
    __metadata("design:paramtypes", [http_1.Http])
], SurveyPointTypeServiceHttp);
exports.SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp;
var SurveyPointTypeServiceHttp_1;
//# sourceMappingURL=SurveyPointTypeServiceHttp.js.map