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
var SurveyPointTypeSubjectProvider = (function () {
    function SurveyPointTypeSubjectProvider(_SurveyPointTypeService, _SurveyPointTypeCurrent) {
        this._SurveyPointTypeService = _SurveyPointTypeService;
        this._SurveyPointTypeCurrent = _SurveyPointTypeCurrent;
    }
    SurveyPointTypeSubjectProvider.prototype.getSurveyPointTypeSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    SurveyPointTypeSubjectProvider.prototype.getSurveyPointTypeSummary = function () {
        if (this._SurveyPointTypeCurrent.SurveyPointType) {
            var key = this._SurveyPointTypeCurrent.SurveyPointType.ID;
            if (!this._SurveyPointTypeSummaries) {
                this._SurveyPointTypeSummaries = new Map();
            }
            if (!this._SurveyPointTypeSummaries.has(key)) {
                this._SurveyPointTypeSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._SurveyPointTypeSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPointType current context is provided");
    };
    SurveyPointTypeSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._SurveyPointTypeCurrent.SurveyPointType
            &&
                this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType.ID)) {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(this._SurveyPointTypeCurrent.SurveyPointType.ID)
                .subscribe(function (result) { return _this._SurveyPointTypeSummaries.get(_this._SurveyPointTypeCurrent.SurveyPointType.ID).next(result); });
        }
        if (this._summary) {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return SurveyPointTypeSubjectProvider;
}());
SurveyPointTypeSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.SurveyPointTypeServiceHttp,
        __1.CurrentSurveyPointTypeProvider])
], SurveyPointTypeSubjectProvider);
exports.SurveyPointTypeSubjectProvider = SurveyPointTypeSubjectProvider;
//# sourceMappingURL=SurveyPointTypeSubjectProvider.js.map