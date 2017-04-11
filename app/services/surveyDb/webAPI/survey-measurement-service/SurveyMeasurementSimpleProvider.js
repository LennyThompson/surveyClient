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
var types_1 = require("./../../types");
// Declare injectable provider for simple objects of type SurveyMeasurement
var CurrentSurveyMeasurementProvider = (function () {
    function CurrentSurveyMeasurementProvider() {
    }
    Object.defineProperty(CurrentSurveyMeasurementProvider.prototype, "SurveyMeasurement", {
        get: function () {
            if (!this._SurveyMeasurement) {
                this._SurveyMeasurement = new types_1.SurveyMeasurement();
            }
            return this._SurveyMeasurement;
        },
        set: function (value) {
            this._SurveyMeasurement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyMeasurementProvider.prototype, "SurveyMeasurement_ID", {
        get: function () {
            if (this.SurveyMeasurement) {
                return this.SurveyMeasurement.ID;
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
    CurrentSurveyMeasurementProvider.prototype.reset = function () {
        if (this.SurveyMeasurement) {
            this.SurveyMeasurement = null;
        }
        this._ID = -1;
    };
    CurrentSurveyMeasurementProvider.prototype.hasExistingSurveyMeasurement = function () {
        return !!this._SurveyMeasurement;
    };
    return CurrentSurveyMeasurementProvider;
}());
CurrentSurveyMeasurementProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyMeasurementProvider);
exports.CurrentSurveyMeasurementProvider = CurrentSurveyMeasurementProvider;
// Declare injectable provider for array of objects of type SurveyMeasurement
var CurrentSurveyMeasurementListProvider = (function () {
    function CurrentSurveyMeasurementListProvider() {
    }
    Object.defineProperty(CurrentSurveyMeasurementListProvider.prototype, "SurveyMeasurements", {
        get: function () {
            if (!this.m_listSurveyMeasurement) {
                this.m_listSurveyMeasurement = new Array();
            }
            return this.m_listSurveyMeasurement;
        },
        set: function (value) {
            this.m_listSurveyMeasurement = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyMeasurementListProvider;
}());
CurrentSurveyMeasurementListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyMeasurementListProvider);
exports.CurrentSurveyMeasurementListProvider = CurrentSurveyMeasurementListProvider;
//# sourceMappingURL=SurveyMeasurementSimpleProvider.js.map