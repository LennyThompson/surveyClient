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
    __metadata("design:paramtypes", [__2.TraverseServiceHttp,
        __1.CurrentTraverseProvider])
], TraverseSubjectProvider);
exports.TraverseSubjectProvider = TraverseSubjectProvider;
//# sourceMappingURL=TraverseSubjectProvider.js.map