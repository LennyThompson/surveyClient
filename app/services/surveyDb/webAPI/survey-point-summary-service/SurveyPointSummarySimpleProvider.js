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
// Declare injectable provider for simple objects of type SurveyPointSummary
var CurrentSurveyPointSummaryProvider = (function () {
    function CurrentSurveyPointSummaryProvider() {
    }
    Object.defineProperty(CurrentSurveyPointSummaryProvider.prototype, "SurveyPointSummary", {
        get: function () {
            return this._SurveyPointSummary;
        },
        set: function (value) {
            this._SurveyPointSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyPointSummaryProvider.prototype, "SurveyPointSummary_ID", {
        get: function () {
            if (this.SurveyPointSummary) {
                return this.SurveyPointSummary.ID;
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
    CurrentSurveyPointSummaryProvider.prototype.reset = function () {
        if (this.SurveyPointSummary) {
            this.SurveyPointSummary = null;
        }
        this._ID = -1;
    };
    CurrentSurveyPointSummaryProvider.prototype.hasExistingSurveyPointSummary = function () {
        return !!this._SurveyPointSummary;
    };
    return CurrentSurveyPointSummaryProvider;
}());
CurrentSurveyPointSummaryProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointSummaryProvider);
exports.CurrentSurveyPointSummaryProvider = CurrentSurveyPointSummaryProvider;
// Declare injectable provider for array of objects of type SurveyPointSummary
var CurrentSurveyPointSummaryListProvider = (function () {
    function CurrentSurveyPointSummaryListProvider() {
    }
    Object.defineProperty(CurrentSurveyPointSummaryListProvider.prototype, "SurveyPointSummarys", {
        get: function () {
            return this.m_listSurveyPointSummary;
        },
        set: function (value) {
            this.m_listSurveyPointSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyPointSummaryListProvider;
}());
CurrentSurveyPointSummaryListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointSummaryListProvider);
exports.CurrentSurveyPointSummaryListProvider = CurrentSurveyPointSummaryListProvider;
//# sourceMappingURL=SurveyPointSummarySimpleProvider.js.map