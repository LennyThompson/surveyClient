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
var ProjectionSubjectProvider = (function () {
    function ProjectionSubjectProvider(_ProjectionService, _ProjectionCurrent) {
        this._ProjectionService = _ProjectionService;
        this._ProjectionCurrent = _ProjectionCurrent;
    }
    ProjectionSubjectProvider.prototype.getProjectionSummaries = function () {
        if (!this._summary) {
            this._summary = new Rx_1.BehaviorSubject([]);
        }
        this.update();
        return this._summary.asObservable();
    };
    ProjectionSubjectProvider.prototype.getProjectionSummary = function () {
        if (this._ProjectionCurrent.Projection) {
            var key = this._ProjectionCurrent.Projection.ID;
            if (!this._ProjectionSummaries) {
                this._ProjectionSummaries = new Map();
            }
            if (!this._ProjectionSummaries.has(key)) {
                this._ProjectionSummaries.set(key, new Rx_1.BehaviorSubject(null));
            }
            this.update();
            return this._ProjectionSummaries.get(key).asObservable();
        }
        throw new Error("No Projection current context is provided");
    };
    ProjectionSubjectProvider.prototype.update = function () {
        var _this = this;
        if (this._ProjectionCurrent.Projection
            &&
                this._ProjectionSummaries.has(this._ProjectionCurrent.Projection.ID)) {
            this._ProjectionService.loadProjectionFromDatabase(this._ProjectionCurrent.Projection.ID)
                .subscribe(function (result) { return _this._ProjectionSummaries.get(_this._ProjectionCurrent.Projection.ID).next(result); });
        }
        if (this._summary) {
            this._ProjectionService.loadAllFromDatabase()
                .subscribe(function (result) { return _this._summary.next(result); });
        }
    };
    return ProjectionSubjectProvider;
}());
ProjectionSubjectProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [__2.ProjectionServiceHttp,
        __1.CurrentProjectionProvider])
], ProjectionSubjectProvider);
exports.ProjectionSubjectProvider = ProjectionSubjectProvider;
//# sourceMappingURL=ProjectionSubjectProvider.js.map