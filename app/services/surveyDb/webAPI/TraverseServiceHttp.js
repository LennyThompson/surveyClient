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
var Traverse_1 = require("../types/Traverse");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var _1 = require("./");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
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
        this._SurveySummarySubject.updateForTraverse();
        this._TraverseSummarySubject.updateForTraverse();
        this._TraverseMeasurementSummarySubject.updateForTraverse();
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
    __metadata("design:paramtypes", [http_1.Http, typeof (_a = typeof _1.SurveySummarySubjectProvider !== "undefined" && _1.SurveySummarySubjectProvider) === "function" && _a || Object, typeof (_b = typeof _1.TraverseSummarySubjectProvider !== "undefined" && _1.TraverseSummarySubjectProvider) === "function" && _b || Object, typeof (_c = typeof _1.TraverseMeasurementSummarySubjectProvider !== "undefined" && _1.TraverseMeasurementSummarySubjectProvider) === "function" && _c || Object])
], TraverseServiceHttp);
exports.TraverseServiceHttp = TraverseServiceHttp;
var TraverseSubjectProvider = (function () {
    function TraverseSubjectProvider(_TraverseService, _TraverseCurrent) {
        this._TraverseService = _TraverseService;
        this._TraverseCurrent = _TraverseCurrent;
    }
    TraverseSubjectProvider.prototype.getTraverseSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    TraverseSubjectProvider.prototype.getTraverseSummary = function () {
        if (this._TraverseCurrent.Traverse) {
            var key = this._TraverseCurrent.Traverse.ID;
            if (!this._TraverseSummaries) {
                this._TraverseSummaries = new Map();
            }
            if (!this._TraverseSummaries.has(key)) {
                this._TraverseSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._TraverseSummaries.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    };
    TraverseSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._TraverseCurrent.Traverse
            &&
                this._TraverseSummaries.has(this._TraverseCurrent.Traverse.ID)) {
            this._TraverseService.loadTraverseFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(function (result) { return _this._TraverseSummaries.get(_this._TraverseCurrent.Traverse.ID).next(result); });
        }
        if (this._summary) {
            this._TraverseService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return TraverseSubjectProvider;
}());
TraverseSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [TraverseServiceHttp,
        simple_providers_1.CurrentTraverseProvider])
], TraverseSubjectProvider);
exports.TraverseSubjectProvider = TraverseSubjectProvider;
var TraverseServiceHttp_1, _a, _b, _c;
//# sourceMappingURL=TraverseServiceHttp.js.map