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
// Declare injectable provider for simple objects of type SurveyPoint
var CurrentSurveyPointProvider = (function () {
    function CurrentSurveyPointProvider() {
    }
    Object.defineProperty(CurrentSurveyPointProvider.prototype, "SurveyPoint", {
        get: function () {
            if (!this._SurveyPoint) {
                this._SurveyPoint = new types_1.SurveyPoint();
            }
            return this._SurveyPoint;
        },
        set: function (value) {
            this._SurveyPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyPointProvider.prototype, "SurveyPoint_ID", {
        get: function () {
            if (this.SurveyPoint) {
                return this.SurveyPoint.ID;
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
    CurrentSurveyPointProvider.prototype.reset = function () {
        if (this.SurveyPoint) {
            this.SurveyPoint = null;
        }
        this._ID = -1;
    };
    CurrentSurveyPointProvider.prototype.hasExistingSurveyPoint = function () {
        return !!this._SurveyPoint;
    };
    return CurrentSurveyPointProvider;
}());
CurrentSurveyPointProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointProvider);
exports.CurrentSurveyPointProvider = CurrentSurveyPointProvider;
// Declare injectable provider for array of objects of type SurveyPoint
var CurrentSurveyPointListProvider = (function () {
    function CurrentSurveyPointListProvider() {
    }
    Object.defineProperty(CurrentSurveyPointListProvider.prototype, "SurveyPoints", {
        get: function () {
            if (!this.m_listSurveyPoint) {
                this.m_listSurveyPoint = new Array();
            }
            return this.m_listSurveyPoint;
        },
        set: function (value) {
            this.m_listSurveyPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyPointListProvider;
}());
CurrentSurveyPointListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointListProvider);
exports.CurrentSurveyPointListProvider = CurrentSurveyPointListProvider;
//# sourceMappingURL=SurveyPoint.js.map