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
var TraverseClosure_1 = require("../types/TraverseClosure");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var TraverseClosureServiceHttp = TraverseClosureServiceHttp_1 = (function () {
    function TraverseClosureServiceHttp(httpService) {
        this.httpService = httpService;
    }
    TraverseClosureServiceHttp.prototype.saveToDatabase = function (typeTraverseClosure) {
        var _this = this;
        var strPath = TraverseClosureServiceHttp_1.buildPath();
        var strJsonBody = typeTraverseClosure.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return TraverseClosure_1.TraverseClosure.fromJsonObject(resp.json()); })
            .map(function (obsTraverseClosure) { return _this.notifyObservers(obsTraverseClosure); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    TraverseClosureServiceHttp.prototype.updateToDatabase = function (typeTraverseClosure) {
        var _this = this;
        var strPath = TraverseClosureServiceHttp_1.buildPath();
        var strJsonBody = typeTraverseClosure.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return TraverseClosure_1.TraverseClosure.fromJsonObject(resp.json()); })
            .map(function (obsTraverseClosure) { return _this.notifyObservers(obsTraverseClosure); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    TraverseClosureServiceHttp.prototype.notifyObservers = function (updateTraverseClosure) {
        return updateTraverseClosure;
    };
    TraverseClosureServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = TraverseClosureServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return TraverseClosure_1.TraverseClosure.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    TraverseClosureServiceHttp.prototype.loadTraverseClosureFromDatabase = function (nID) {
        var strPath = TraverseClosureServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return TraverseClosure_1.TraverseClosure.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    TraverseClosureServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/TraverseClosures";
        return strPath;
    };
    return TraverseClosureServiceHttp;
}());
TraverseClosureServiceHttp = TraverseClosureServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TraverseClosureServiceHttp);
exports.TraverseClosureServiceHttp = TraverseClosureServiceHttp;
var TraverseClosureSubjectProvider = (function () {
    function TraverseClosureSubjectProvider(_TraverseClosureService, _TraverseClosureCurrent) {
        this._TraverseClosureService = _TraverseClosureService;
        this._TraverseClosureCurrent = _TraverseClosureCurrent;
    }
    TraverseClosureSubjectProvider.prototype.getTraverseClosureSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    TraverseClosureSubjectProvider.prototype.getTraverseClosureSummary = function () {
        if (this._TraverseClosureCurrent.TraverseClosure) {
            var key = this._TraverseClosureCurrent.TraverseClosure.ID;
            if (!this._TraverseClosureSummaries) {
                this._TraverseClosureSummaries = new Map();
            }
            if (!this._TraverseClosureSummaries.has(key)) {
                this._TraverseClosureSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._TraverseClosureSummaries.get(key).asObservable();
        }
        throw new Error("No TraverseClosure current context is provided");
    };
    TraverseClosureSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._TraverseClosureCurrent.TraverseClosure
            &&
                this._TraverseClosureSummaries.has(this._TraverseClosureCurrent.TraverseClosure.ID)) {
            this._TraverseClosureService.loadTraverseClosureFromDatabase(this._TraverseClosureCurrent.TraverseClosure.ID)
                .subscribe(function (result) { return _this._TraverseClosureSummaries.get(_this._TraverseClosureCurrent.TraverseClosure.ID).next(result); });
        }
        if (this._summary) {
            this._TraverseClosureService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return TraverseClosureSubjectProvider;
}());
TraverseClosureSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [TraverseClosureServiceHttp,
        simple_providers_1.CurrentTraverseClosureProvider])
], TraverseClosureSubjectProvider);
exports.TraverseClosureSubjectProvider = TraverseClosureSubjectProvider;
var TraverseClosureServiceHttp_1;
//# sourceMappingURL=TraverseClosureServiceHttp.js.map