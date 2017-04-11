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
// Declare injectable provider for simple objects of type Survey
var CurrentSurveyProvider = (function () {
    function CurrentSurveyProvider() {
    }
    Object.defineProperty(CurrentSurveyProvider.prototype, "Survey", {
        get: function () {
            if (!this._Survey) {
                this._Survey = new types_1.Survey();
            }
            return this._Survey;
        },
        set: function (value) {
            this._Survey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyProvider.prototype, "Survey_ID", {
        get: function () {
            if (this.Survey) {
                return this.Survey.ID;
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
    CurrentSurveyProvider.prototype.reset = function () {
        if (this.Survey) {
            this.Survey = null;
        }
        this._ID = -1;
    };
    CurrentSurveyProvider.prototype.hasExistingSurvey = function () {
        return !!this._Survey;
    };
    return CurrentSurveyProvider;
}());
CurrentSurveyProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyProvider);
exports.CurrentSurveyProvider = CurrentSurveyProvider;
// Declare injectable provider for array of objects of type Survey
var CurrentSurveyListProvider = (function () {
    function CurrentSurveyListProvider() {
    }
    Object.defineProperty(CurrentSurveyListProvider.prototype, "Surveys", {
        get: function () {
            if (!this.m_listSurvey) {
                this.m_listSurvey = new Array();
            }
            return this.m_listSurvey;
        },
        set: function (value) {
            this.m_listSurvey = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyListProvider;
}());
CurrentSurveyListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyListProvider);
exports.CurrentSurveyListProvider = CurrentSurveyListProvider;
//# sourceMappingURL=SurveySimpleProvider.js.map