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
// Declare injectable provider for simple objects of type TraverseMeasurementSummary
var CurrentTraverseMeasurementSummaryProvider = (function () {
    function CurrentTraverseMeasurementSummaryProvider() {
    }
    Object.defineProperty(CurrentTraverseMeasurementSummaryProvider.prototype, "TraverseMeasurementSummary", {
        get: function () {
            return this._TraverseMeasurementSummary;
        },
        set: function (value) {
            this._TraverseMeasurementSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentTraverseMeasurementSummaryProvider.prototype, "TraverseMeasurementSummary_ID", {
        get: function () {
            if (this.TraverseMeasurementSummary) {
                return this.TraverseMeasurementSummary.ID;
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
    CurrentTraverseMeasurementSummaryProvider.prototype.reset = function () {
        if (this.TraverseMeasurementSummary) {
            this.TraverseMeasurementSummary = null;
        }
        this._ID = -1;
    };
    CurrentTraverseMeasurementSummaryProvider.prototype.hasExistingTraverseMeasurementSummary = function () {
        return !!this._TraverseMeasurementSummary;
    };
    return CurrentTraverseMeasurementSummaryProvider;
}());
CurrentTraverseMeasurementSummaryProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseMeasurementSummaryProvider);
exports.CurrentTraverseMeasurementSummaryProvider = CurrentTraverseMeasurementSummaryProvider;
// Declare injectable provider for array of objects of type TraverseMeasurementSummary
var CurrentTraverseMeasurementSummaryListProvider = (function () {
    function CurrentTraverseMeasurementSummaryListProvider() {
    }
    Object.defineProperty(CurrentTraverseMeasurementSummaryListProvider.prototype, "TraverseMeasurementSummarys", {
        get: function () {
            return this.m_listTraverseMeasurementSummary;
        },
        set: function (value) {
            this.m_listTraverseMeasurementSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentTraverseMeasurementSummaryListProvider;
}());
CurrentTraverseMeasurementSummaryListProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseMeasurementSummaryListProvider);
exports.CurrentTraverseMeasurementSummaryListProvider = CurrentTraverseMeasurementSummaryListProvider;
//# sourceMappingURL=TraverseMeasurementSummarySimpleProvider.js.map