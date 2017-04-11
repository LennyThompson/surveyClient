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
    __metadata("design:paramtypes", [__2.TraverseClosureServiceHttp,
        __1.CurrentTraverseClosureProvider])
], TraverseClosureSubjectProvider);
exports.TraverseClosureSubjectProvider = TraverseClosureSubjectProvider;
//# sourceMappingURL=TraverseClosureSubjectProvider.js.map