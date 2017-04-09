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
var InstrumentManufacturer_1 = require("../types/InstrumentManufacturer");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var InstrumentManufacturerServiceHttp = InstrumentManufacturerServiceHttp_1 = (function () {
    function InstrumentManufacturerServiceHttp(httpService) {
        this.httpService = httpService;
    }
    InstrumentManufacturerServiceHttp.prototype.saveToDatabase = function (typeInstrumentManufacturer) {
        var _this = this;
        var strPath = InstrumentManufacturerServiceHttp_1.buildPath();
        var strJsonBody = typeInstrumentManufacturer.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return InstrumentManufacturer_1.InstrumentManufacturer.fromJsonObject(resp.json()); })
            .map(function (obsInstrumentManufacturer) { return _this.notifyObservers(obsInstrumentManufacturer); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    InstrumentManufacturerServiceHttp.prototype.updateToDatabase = function (typeInstrumentManufacturer) {
        var _this = this;
        var strPath = InstrumentManufacturerServiceHttp_1.buildPath();
        var strJsonBody = typeInstrumentManufacturer.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return InstrumentManufacturer_1.InstrumentManufacturer.fromJsonObject(resp.json()); })
            .map(function (obsInstrumentManufacturer) { return _this.notifyObservers(obsInstrumentManufacturer); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    InstrumentManufacturerServiceHttp.prototype.notifyObservers = function (updateInstrumentManufacturer) {
        return updateInstrumentManufacturer;
    };
    InstrumentManufacturerServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = InstrumentManufacturerServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return InstrumentManufacturer_1.InstrumentManufacturer.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    InstrumentManufacturerServiceHttp.prototype.loadInstrumentManufacturerFromDatabase = function (nID) {
        var strPath = InstrumentManufacturerServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return InstrumentManufacturer_1.InstrumentManufacturer.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    InstrumentManufacturerServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/InstrumentManufacturers";
        return strPath;
    };
    return InstrumentManufacturerServiceHttp;
}());
InstrumentManufacturerServiceHttp = InstrumentManufacturerServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InstrumentManufacturerServiceHttp);
exports.InstrumentManufacturerServiceHttp = InstrumentManufacturerServiceHttp;
var InstrumentManufacturerSubjectProvider = (function () {
    function InstrumentManufacturerSubjectProvider(_InstrumentManufacturerService, _InstrumentManufacturerCurrent) {
        this._InstrumentManufacturerService = _InstrumentManufacturerService;
        this._InstrumentManufacturerCurrent = _InstrumentManufacturerCurrent;
    }
    InstrumentManufacturerSubjectProvider.prototype.getInstrumentManufacturerSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    InstrumentManufacturerSubjectProvider.prototype.getInstrumentManufacturerSummary = function () {
        if (this._InstrumentManufacturerCurrent.InstrumentManufacturer) {
            var key = this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID;
            if (!this._InstrumentManufacturerSummaries) {
                this._InstrumentManufacturerSummaries = new Map();
            }
            if (!this._InstrumentManufacturerSummaries.has(key)) {
                this._InstrumentManufacturerSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._InstrumentManufacturerSummaries.get(key).asObservable();
        }
        throw new Error("No InstrumentManufacturer current context is provided");
    };
    InstrumentManufacturerSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._InstrumentManufacturerCurrent.InstrumentManufacturer
            &&
                this._InstrumentManufacturerSummaries.has(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)) {
            this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
                .subscribe(function (result) { return _this._InstrumentManufacturerSummaries.get(_this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID).next(result); });
        }
        if (this._summary) {
            this._InstrumentManufacturerService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return InstrumentManufacturerSubjectProvider;
}());
InstrumentManufacturerSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [InstrumentManufacturerServiceHttp,
        simple_providers_1.CurrentInstrumentManufacturerProvider])
], InstrumentManufacturerSubjectProvider);
exports.InstrumentManufacturerSubjectProvider = InstrumentManufacturerSubjectProvider;
var InstrumentManufacturerServiceHttp_1;
//# sourceMappingURL=InstrumentManufacturerServiceHttp.js.map