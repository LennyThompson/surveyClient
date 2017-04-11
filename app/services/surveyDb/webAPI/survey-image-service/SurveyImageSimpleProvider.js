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
// Declare injectable provider for simple objects of type SurveyImage
var CurrentSurveyImageProvider = (function () {
    function CurrentSurveyImageProvider() {
    }
    Object.defineProperty(CurrentSurveyImageProvider.prototype, "SurveyImage", {
        get: function () {
            if (!this._SurveyImage) {
                this._SurveyImage = new types_1.SurveyImage();
            }
            return this._SurveyImage;
        },
        set: function (value) {
            this._SurveyImage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentSurveyImageProvider.prototype, "SurveyImage_ID", {
        get: function () {
            if (this.SurveyImage) {
                return this.SurveyImage.ID;
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
    CurrentSurveyImageProvider.prototype.reset = function () {
        if (this.SurveyImage) {
            this.SurveyImage = null;
        }
        this._ID = -1;
    };
    CurrentSurveyImageProvider.prototype.hasExistingSurveyImage = function () {
        return !!this._SurveyImage;
    };
    return CurrentSurveyImageProvider;
}());
CurrentSurveyImageProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyImageProvider);
exports.CurrentSurveyImageProvider = CurrentSurveyImageProvider;
// Declare injectable provider for array of objects of type SurveyImage
var CurrentSurveyImageListProvider = (function () {
    function CurrentSurveyImageListProvider() {
    }
    Object.defineProperty(CurrentSurveyImageListProvider.prototype, "SurveyImages", {
        get: function () {
            if (!this.m_listSurveyImage) {
                this.m_listSurveyImage = new Array();
            }
            return this.m_listSurveyImage;
        },
        set: function (value) {
            this.m_listSurveyImage = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentSurveyImageListProvider;
}());
CurrentSurveyImageListProvider = __decorate([
    core_1.Injectable()
], CurrentSurveyImageListProvider);
exports.CurrentSurveyImageListProvider = CurrentSurveyImageListProvider;
//# sourceMappingURL=SurveyImageSimpleProvider.js.map