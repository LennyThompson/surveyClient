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
// Declare injectable provider for simple objects of type SurveySummary
var CurrentSurveySummaryProvider = (function () {
    function CurrentSurveySummaryProvider() {
    }
    Object.defineProperty(CurrentSurveySummaryProvider.prototype, "SurveySummary", {
        get: function () {
            return this._SurveySummary;
        },
        set: function (value) {
            this._SurveySummary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveySummaryProvider.prototype, "SurveySummary_ID", {
        get: function () {
            if (this.SurveySummary) {
                return this.SurveySummary.ID;
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
    CurrentSurveySummaryProvider.prototype.reset = function () {
        if (this.SurveySummary) {
            this.SurveySummary = null;
        }
        this._ID = -1;
    };
    CurrentSurveySummaryProvider.prototype.hasExistingSurveySummary = function () {
        return !!this._SurveySummary;
    };
    return CurrentSurveySummaryProvider;
}());
CurrentSurveySummaryProvider = __decorate([
    core_1.Injectable()
], CurrentSurveySummaryProvider);
exports.CurrentSurveySummaryProvider = CurrentSurveySummaryProvider;
// Declare injectable provider for array of objects of type SurveySummary
var CurrentSurveySummaryListProvider = (function () {
    function CurrentSurveySummaryListProvider() {
    }
    Object.defineProperty(CurrentSurveySummaryListProvider.prototype, "SurveySummarys", {
        get: function () {
            return this.m_listSurveySummary;
        },
        set: function (value) {
            this.m_listSurveySummary = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveySummaryListProvider;
}());
CurrentSurveySummaryListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveySummaryListProvider);
exports.CurrentSurveySummaryListProvider = CurrentSurveySummaryListProvider;
//# sourceMappingURL=SurveySummarySimpleProvider.js.map