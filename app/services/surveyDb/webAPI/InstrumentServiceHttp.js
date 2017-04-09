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
var Instrument_1 = require("../types/Instrument");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var simple_providers_1 = require("./../../../components/survey/simple-providers");
var simple_providers_2 = require("./../../../components/survey/simple-providers");
var InstrumentServiceHttp = InstrumentServiceHttp_1 = (function () {
    function InstrumentServiceHttp(httpService, _SurveyProvider) {
        this.httpService = httpService;
        this._SurveyProvider = _SurveyProvider;
    }
    InstrumentServiceHttp.prototype.saveToDatabase = function (typeInstrument) {
        var _this = this;
        var strPath = InstrumentServiceHttp_1.buildPath();
        var strJsonBody = typeInstrument.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return Instrument_1.Instrument.fromJsonObject(resp.json()); })
            .map(function (obsInstrument) { return _this.notifyObservers(obsInstrument); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    InstrumentServiceHttp.prototype.updateToDatabase = function (typeInstrument) {
        var _this = this;
        var strPath = InstrumentServiceHttp_1.buildPath();
        var strJsonBody = typeInstrument.toJson();
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.put(strPath, strJsonBody, options)
            .map(function (resp) { return Instrument_1.Instrument.fromJsonObject(resp.json()); })
            .map(function (obsInstrument) { return _this.notifyObservers(obsInstrument); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    InstrumentServiceHttp.prototype.saveInstrumentForSurvey = function (typeInstrument) {
        var _this = this;
        var strPath = InstrumentServiceHttp_1.buildPath();
        strPath += "/addInstrumentToSurvey";
        var strJsonBody = "{ \"ID\": " + this._SurveyProvider.Survey.ID + ", Instrument: " + typeInstrument.toJson() + " }";
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpService.post(strPath, strJsonBody, options)
            .map(function (resp) { return _this.notifyObservers(Instrument_1.Instrument.fromJsonObject(resp.json())); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || "Server error"); });
    };
    InstrumentServiceHttp.prototype.notifyObservers = function (updateInstrument) {
        return updateInstrument;
    };
    InstrumentServiceHttp.prototype.loadAllFromDatabase = function () {
        var strPath = InstrumentServiceHttp_1.buildPath();
        return this.httpService.get(strPath)
            .map(function (resp) { return Instrument_1.Instrument.arrayFromJson(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    InstrumentServiceHttp.prototype.loadInstrumentFromDatabase = function (nID) {
        var strPath = InstrumentServiceHttp_1.buildPath();
        var params = new http_1.URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map(function (resp) { return Instrument_1.Instrument.fromJsonObject(resp.json()); })
            .catch(function (error) { return Rx_1.Observable.throw("error"); });
    };
    InstrumentServiceHttp.buildPath = function () {
        var strPath = "http://localhost:49876/api" + "/Instruments";
        return strPath;
    };
    return InstrumentServiceHttp;
}());
InstrumentServiceHttp = InstrumentServiceHttp_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        simple_providers_2.CurrentSurveyProvider])
], InstrumentServiceHttp);
exports.InstrumentServiceHttp = InstrumentServiceHttp;
var InstrumentSubjectProvider = (function () {
    function InstrumentSubjectProvider(_InstrumentService, _InstrumentCurrent) {
        this._InstrumentService = _InstrumentService;
        this._InstrumentCurrent = _InstrumentCurrent;
    }
    InstrumentSubjectProvider.prototype.getInstrumentSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    InstrumentSubjectProvider.prototype.getInstrumentSummary = function () {
        if (this._InstrumentCurrent.Instrument) {
            var key = this._InstrumentCurrent.Instrument.ID;
            if (!this._InstrumentSummaries) {
                this._InstrumentSummaries = new Map();
            }
            if (!this._InstrumentSummaries.has(key)) {
                this._InstrumentSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._InstrumentSummaries.get(key).asObservable();
        }
        throw new Error("No Instrument current context is provided");
    };
    InstrumentSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._InstrumentCurrent.Instrument
            &&
                this._InstrumentSummaries.has(this._InstrumentCurrent.Instrument.ID)) {
            this._InstrumentService.loadInstrumentFromDatabase(this._InstrumentCurrent.Instrument.ID)
                .subscribe(function (result) { return _this._InstrumentSummaries.get(_this._InstrumentCurrent.Instrument.ID).next(result); });
        }
        if (this._summary) {
            this._InstrumentService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return InstrumentSubjectProvider;
}());
InstrumentSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [InstrumentServiceHttp,
        simple_providers_1.CurrentInstrumentProvider])
], InstrumentSubjectProvider);
exports.InstrumentSubjectProvider = InstrumentSubjectProvider;
var InstrumentServiceHttp_1;
//# sourceMappingURL=InstrumentServiceHttp.js.map