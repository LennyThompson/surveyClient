// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016
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
var SurveyImage_1 = require("../types/SurveyImage");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var SurveyImageServiceHttp = SurveyImageServiceHttp_1 = (function () {
    function SurveyImageServiceHttp(httpService) {
        this.httpService = httpService;
    }
    SurveyImageServiceHttp.prototype.saveToDatabase = function (typeSurveyImage) {
        var strPath = SurveyImageServiceHttp_1.buildPath();
        var strJsonBody = typeSurveyImage.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return SurveyImage_1.SurveyImage.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    SurveyImageServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = SurveyImageServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyImage_1.SurveyImage.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyImageServiceHttp.prototype.loadSurveyImageServiceFromDatabase = function (nID) {
        var strPath = SurveyImageServiceHttp_1.buildPath(nID);
        return this.httpService.get(strPath)
            .map(function (resp) { return SurveyImage_1.SurveyImage.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    SurveyImageServiceHttp.buildPath = function (nID) {
        var strPath = "http://localhost:49876/api" + "/SurveyImages";
        if (nID) {
            strPath += "?ID=" + nID;
        }
        return strPath;
    };
    return SurveyImageServiceHttp;
}());
SurveyImageServiceHttp = SurveyImageServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SurveyImageServiceHttp);
exports.SurveyImageServiceHttp = SurveyImageServiceHttp;
var SurveyImageServiceHttp_1;
//# sourceMappingURL=SurveyImageServiceHttp.js.map