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
// Declare injectable provider for simple objects of type SurveyReference
var CurrentSurveyReferenceProvider = (function () {
    function CurrentSurveyReferenceProvider() {
    }
    Object.defineProperty(CurrentSurveyReferenceProvider.prototype, "SurveyReference", {
        get: function () {
            if (!this._SurveyReference) {
                this._SurveyReference = new types_1.SurveyReference();
            }
            return this._SurveyReference;
        },
        set: function (value) {
            this._SurveyReference = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyReferenceProvider.prototype, "SurveyReference_ID", {
        get: function () {
            if (this.SurveyReference) {
                return this.SurveyReference.ID;
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
    CurrentSurveyReferenceProvider.prototype.reset = function () {
        if (this.SurveyReference) {
            this.SurveyReference = null;
        }
        this._ID = -1;
    };
    CurrentSurveyReferenceProvider.prototype.hasExistingSurveyReference = function () {
        return !!this._SurveyReference;
    };
    return CurrentSurveyReferenceProvider;
}());
CurrentSurveyReferenceProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyReferenceProvider);
exports.CurrentSurveyReferenceProvider = CurrentSurveyReferenceProvider;
// Declare injectable provider for array of objects of type SurveyReference
var CurrentSurveyReferenceListProvider = (function () {
    function CurrentSurveyReferenceListProvider() {
    }
    Object.defineProperty(CurrentSurveyReferenceListProvider.prototype, "SurveyReferences", {
        get: function () {
            if (!this.m_listSurveyReference) {
                this.m_listSurveyReference = new Array();
            }
            return this.m_listSurveyReference;
        },
        set: function (value) {
            this.m_listSurveyReference = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyReferenceListProvider;
}());
CurrentSurveyReferenceListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyReferenceListProvider);
exports.CurrentSurveyReferenceListProvider = CurrentSurveyReferenceListProvider;
//# sourceMappingURL=SurveyReferenceSimpleProvider.js.map