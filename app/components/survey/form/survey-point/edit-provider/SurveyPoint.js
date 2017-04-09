// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017
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
var material_1 = require("@angular/material");
var simple_providers_1 = require("./../../../simple-providers");
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
var _1 = require("./../../");
var EditSurveyPointProvider = (function () {
    function EditSurveyPointProvider(_dialogService, _SurveyPoint, _SurveyPointService) {
        this._dialogService = _dialogService;
        this._SurveyPoint = _SurveyPoint;
        this._SurveyPointService = _SurveyPointService;
    }
    EditSurveyPointProvider.prototype.edit = function (keyId) {
        var _this = this;
        this._SurveyPointService.loadSurveyPointFromDatabase(keyId)
            .subscribe(function (result) { return _this.doEdit(result); });
    };
    EditSurveyPointProvider.prototype.doEdit = function (editSurveyPoint) {
        var _this = this;
        this._SurveyPoint.SurveyPoint = editSurveyPoint;
        this._dialogService.open(_1.EditSurveyPointComponent)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this._SurveyPointService.updateToDatabase(result)
                    .subscribe(function (result) {
                });
            }
            else {
            }
        });
    };
    EditSurveyPointProvider.prototype.delete = function (keyId) {
        var _this = this;
        this._SurveyPointService.loadSurveyPointFromDatabase(keyId)
            .subscribe(function (result) { return _this.doDelete(result); });
    };
    EditSurveyPointProvider.prototype.doDelete = function (editSurveyPoint) {
        console.log("no yet implemented");
    };
    return EditSurveyPointProvider;
}());
EditSurveyPointProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog,
        simple_providers_1.CurrentSurveyPointProvider,
        webAPI_1.SurveyPointServiceHttp])
], EditSurveyPointProvider);
exports.EditSurveyPointProvider = EditSurveyPointProvider;
//# sourceMappingURL=SurveyPoint.js.map