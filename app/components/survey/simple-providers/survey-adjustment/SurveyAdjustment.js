// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var types_1 = require("./../../../../services/surveyDb/types");
// Declare injectable provider for simple objects of type SurveyAdjustment
var CurrentSurveyAdjustmentProvider = (function () {
    function CurrentSurveyAdjustmentProvider() {
    }
    Object.defineProperty(CurrentSurveyAdjustmentProvider.prototype, "SurveyAdjustment", {
        get: function () {
            if (!this._SurveyAdjustment) {
                this._SurveyAdjustment = new types_1.SurveyAdjustment();
            }
            return this._SurveyAdjustment;
        },
        set: function (value) {
            this._SurveyAdjustment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyAdjustmentProvider.prototype, "SurveyAdjustment_ID", {
        get: function () {
            if (this.SurveyAdjustment) {
                return this.SurveyAdjustment.ID;
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
    CurrentSurveyAdjustmentProvider.prototype.reset = function () {
        if (this.SurveyAdjustment) {
            this.SurveyAdjustment = null;
        }
        this._ID = -1;
    };
    CurrentSurveyAdjustmentProvider.prototype.hasExistingSurveyAdjustment = function () {
        return !!this._SurveyAdjustment;
    };
    return CurrentSurveyAdjustmentProvider;
}());
CurrentSurveyAdjustmentProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyAdjustmentProvider);
exports.CurrentSurveyAdjustmentProvider = CurrentSurveyAdjustmentProvider;
// Declare injectable provider for array of objects of type SurveyAdjustment
var CurrentSurveyAdjustmentListProvider = (function () {
    function CurrentSurveyAdjustmentListProvider() {
    }
    Object.defineProperty(CurrentSurveyAdjustmentListProvider.prototype, "SurveyAdjustments", {
        get: function () {
            if (!this.m_listSurveyAdjustment) {
                this.m_listSurveyAdjustment = new Array();
            }
            return this.m_listSurveyAdjustment;
        },
        set: function (value) {
            this.m_listSurveyAdjustment = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyAdjustmentListProvider;
}());
CurrentSurveyAdjustmentListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyAdjustmentListProvider);
exports.CurrentSurveyAdjustmentListProvider = CurrentSurveyAdjustmentListProvider;
//# sourceMappingURL=SurveyAdjustment.js.map