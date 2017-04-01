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
var Traverse_1 = require("../types/Traverse");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var TraverseServiceHttp = TraverseServiceHttp_1 = (function () {
    function TraverseServiceHttp(httpService, _SurveySummarySubject, _TraverseSummarySubject, _TraverseMeasurementSummarySubject) {
        this.httpService = httpService;
        this._SurveySummarySubject = _SurveySummarySubject;
        this._TraverseSummarySubject = _TraverseSummarySubject;
        this._TraverseMeasurementSummarySubject = _TraverseMeasurementSummarySubject;
    }
    TraverseServiceHttp.prototype.saveToDatabase = function (typeTraverse) {
        var _this = this;
        var strPath = TraverseServiceHttp_1.buildPath();
        var strJsonBody = typeTraverse.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return Traverse_1.Traverse.fromJsonObject(resp.json()); })
            .map(function (obsTraverse) { return _this.notifyObservers(obsTraverse); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    TraverseServiceHttp.prototype.updateToDatabase = function (typeTraverse) {
        var _this = this;
        var strPath = TraverseServiceHttp_1.buildPath();
        var strJsonBody = typeTraverse.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return Traverse_1.Traverse.fromJsonObject(resp.json()); })
            .map(function (obsTraverse) { return _this.notifyObservers(obsTraverse); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    TraverseServiceHttp.prototype.notifyObservers = function (updateTraverse) {
        this._SurveySummarySubject.updateForTraverse(updateTraverse);
        this._TraverseSummarySubject.updateForTraverse(updateTraverse);
        this._TraverseMeasurementSummarySubject.updateForTraverse(updateTraverse);
        return updateTraverse;
    };
    TraverseServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = TraverseServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return Traverse_1.Traverse.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    TraverseServiceHttp.prototype.loadTraverseFromDatabase = function (nID) {
        var strPath = TraverseServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return Traverse_1.Traverse.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    TraverseServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/Traverses";
        return strPath;
    };
    return TraverseServiceHttp;
}());
TraverseServiceHttp = TraverseServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        _1.SurveySummarySubjectProvider,
        _1.TraverseSummarySubjectProvider,
        _1.TraverseMeasurementSummarySubjectProvider])
], TraverseServiceHttp);
exports.TraverseServiceHttp = TraverseServiceHttp;
var TraverseSubjectProvider = (function () {
    function TraverseSubjectProvider(_TraverseService) {
        this._TraverseService = _TraverseService;
        this._mapSummaries = new Map();
    }
    TraverseSubjectProvider.prototype.getTraverse = function (keyID) {
        var keyLocal = keyID ? keyID : 0;
        if (!this._mapSummaries.has(keyLocal)) {
            this._mapSummaries.set(keyLocal, new Rx_1.BehaviorSubject([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    };
    TraverseSubjectProvider.prototype.update = function (keyID) {
        var _this = this;
        var keyLocal = keyID ? keyID : 0;
        if (keyID) {
            this._TraverseService.loadTraverseFromDatabase(keyLocal)
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next([result]); });
        }
        else {
            this._TraverseService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next(result); });
        }
    };
    return TraverseSubjectProvider;
}());
TraverseSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [TraverseServiceHttp])
], TraverseSubjectProvider);
exports.TraverseSubjectProvider = TraverseSubjectProvider;
var TraverseServiceHttp_1;
//# sourceMappingURL=TraverseServiceHttp.js.map