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
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var __1 = require("./..");
var __2 = require("./..");
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
    __metadata("design:paramtypes", [__2.InstrumentServiceHttp,
        __1.CurrentInstrumentProvider])
], InstrumentSubjectProvider);
exports.InstrumentSubjectProvider = InstrumentSubjectProvider;
//# sourceMappingURL=InstrumentSubjectProvider.js.map