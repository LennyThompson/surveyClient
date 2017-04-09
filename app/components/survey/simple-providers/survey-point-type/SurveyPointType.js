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
// Declare injectable provider for simple objects of type SurveyPointType
var CurrentSurveyPointTypeProvider = (function () {
    function CurrentSurveyPointTypeProvider() {
    }
    Object.defineProperty(CurrentSurveyPointTypeProvider.prototype, "SurveyPointType", {
        get: function () {
            if (!this._SurveyPointType) {
                this._SurveyPointType = new types_1.SurveyPointType();
            }
            return this._SurveyPointType;
        },
        set: function (value) {
            this._SurveyPointType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyPointTypeProvider.prototype, "SurveyPointType_ID", {
        get: function () {
            if (this.SurveyPointType) {
                return this.SurveyPointType.ID;
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
    CurrentSurveyPointTypeProvider.prototype.reset = function () {
        if (this.SurveyPointType) {
            this.SurveyPointType = null;
        }
        this._ID = -1;
    };
    CurrentSurveyPointTypeProvider.prototype.hasExistingSurveyPointType = function () {
        return !!this._SurveyPointType;
    };
    return CurrentSurveyPointTypeProvider;
}());
CurrentSurveyPointTypeProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointTypeProvider);
exports.CurrentSurveyPointTypeProvider = CurrentSurveyPointTypeProvider;
// Declare injectable provider for array of objects of type SurveyPointType
var CurrentSurveyPointTypeListProvider = (function () {
    function CurrentSurveyPointTypeListProvider() {
    }
    Object.defineProperty(CurrentSurveyPointTypeListProvider.prototype, "SurveyPointTypes", {
        get: function () {
            if (!this.m_listSurveyPointType) {
                this.m_listSurveyPointType = new Array();
            }
            return this.m_listSurveyPointType;
        },
        set: function (value) {
            this.m_listSurveyPointType = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyPointTypeListProvider;
}());
CurrentSurveyPointTypeListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyPointTypeListProvider);
exports.CurrentSurveyPointTypeListProvider = CurrentSurveyPointTypeListProvider;
//# sourceMappingURL=SurveyPointType.js.map