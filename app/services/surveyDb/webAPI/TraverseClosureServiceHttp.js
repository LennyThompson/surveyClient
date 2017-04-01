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
var TraverseClosure_1 = require("../types/TraverseClosure");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
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
    function TraverseClosureSubjectProvider(_TraverseClosureService) {
        this._TraverseClosureService = _TraverseClosureService;
        this._mapSummaries = new Map();
    }
    TraverseClosureSubjectProvider.prototype.getTraverseClosure = function (keyID) {
        var keyLocal = keyID ? keyID : 0;
        if (!this._mapSummaries.has(keyLocal)) {
            this._mapSummaries.set(keyLocal, new Rx_1.BehaviorSubject([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    };
    TraverseClosureSubjectProvider.prototype.update = function (keyID) {
        var _this = this;
        var keyLocal = keyID ? keyID : 0;
        if (keyID) {
            this._TraverseClosureService.loadTraverseClosureFromDatabase(keyLocal)
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next([result]); });
        }
        else {
            this._TraverseClosureService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._mapSummaries.get(keyLocal).next(result); });
        }
    };
    return TraverseClosureSubjectProvider;
}());
TraverseClosureSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [TraverseClosureServiceHttp])
], TraverseClosureSubjectProvider);
exports.TraverseClosureSubjectProvider = TraverseClosureSubjectProvider;
var TraverseClosureServiceHttp_1;
//# sourceMappingURL=TraverseClosureServiceHttp.js.map