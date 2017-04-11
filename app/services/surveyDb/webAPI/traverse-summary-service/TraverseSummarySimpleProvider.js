// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:13 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Declare injectable provider for simple objects of type TraverseSummary
var CurrentTraverseSummaryProvider = (function () {
    function CurrentTraverseSummaryProvider() {
    }
    Object.defineProperty(CurrentTraverseSummaryProvider.prototype, "TraverseSummary", {
        get: function () {
            return this._TraverseSummary;
        },
        set: function (value) {
            this._TraverseSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentTraverseSummaryProvider.prototype, "TraverseSummary_ID", {
        get: function () {
            if (this.TraverseSummary) {
                return this.TraverseSummary.ID;
            }
            return this._ID;
        },
        set: function (ID) {
            this.reset();
            this._ID = ID;
        },
        enumerable: true,
        configurable: true
    });
    CurrentTraverseSummaryProvider.prototype.reset = function () {
        if (this.TraverseSummary) {
            this.TraverseSummary = null;
        }
        this._ID = -1;
    };
    CurrentTraverseSummaryProvider.prototype.hasExistingTraverseSummary = function () {
        return !!this._TraverseSummary;
    };
    return CurrentTraverseSummaryProvider;
}());
CurrentTraverseSummaryProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseSummaryProvider);
exports.CurrentTraverseSummaryProvider = CurrentTraverseSummaryProvider;
// Declare injectable provider for array of objects of type TraverseSummary
var CurrentTraverseSummaryListProvider = (function () {
    function CurrentTraverseSummaryListProvider() {
    }
    Object.defineProperty(CurrentTraverseSummaryListProvider.prototype, "TraverseSummarys", {
        get: function () {
            return this.m_listTraverseSummary;
        },
        set: function (value) {
            this.m_listTraverseSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentTraverseSummaryListProvider;
}());
CurrentTraverseSummaryListProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseSummaryListProvider);
exports.CurrentTraverseSummaryListProvider = CurrentTraverseSummaryListProvider;
//# sourceMappingURL=TraverseSummarySimpleProvider.js.map