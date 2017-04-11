// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:13 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var __1 = require("./..");
var __2 = require("./..");
var SurveyImageSubjectProvider = (function () {
    function SurveyImageSubjectProvider(_SurveyImageService, _SurveyImageCurrent) {
        this._SurveyImageService = _SurveyImageService;
        this._SurveyImageCurrent = _SurveyImageCurrent;
    }
    SurveyImageSubjectProvider.prototype.getSurveyImageSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyImageSubjectProvider.prototype.getSurveyImageSummary = function () {
        if (this._SurveyImageCurrent.SurveyImage) {
            var key = this._SurveyImageCurrent.SurveyImage.ID;
            if (!this._SurveyImageSummaries) {
                this._SurveyImageSummaries = new Map();
            }
            if (!this._SurveyImageSummaries.has(key)) {
                this._SurveyImageSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyImageSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyImage current context is provided");
    };
    SurveyImageSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyImageCurrent.SurveyImage
            &&
                this._SurveyImageSummaries.has(this._SurveyImageCurrent.SurveyImage.ID)) {
            this._SurveyImageService.loadSurveyImageFromDatabase(this._SurveyImageCurrent.SurveyImage.ID)
                .subscribe(function (result) { return _this._SurveyImageSummaries.get(_this._SurveyImageCurrent.SurveyImage.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyImageService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyImageSubjectProvider;
}());
SurveyImageSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyImageServiceHttp,
        __1.CurrentSurveyImageProvider])
], SurveyImageSubjectProvider);
exports.SurveyImageSubjectProvider = SurveyImageSubjectProvider;
//# sourceMappingURL=SurveyImageSubjectProvider.js.map