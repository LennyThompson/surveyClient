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
    __metadata("design:paramtypes", [__2.InstrumentManufacturerServiceHttp,
        __1.CurrentInstrumentManufacturerProvider])
], InstrumentManufacturerSubjectProvider);
exports.InstrumentManufacturerSubjectProvider = InstrumentManufacturerSubjectProvider;
//# sourceMappingURL=InstrumentManufacturerSubjectProvider.js.map