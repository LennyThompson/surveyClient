// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
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
// Declare injectable provider for editing a form provider type
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var form_1 = require("./../../../form");
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
var Projection_1 = require("./../Projection");
var EditProjectionProvider = (function () {
    function EditProjectionProvider(_dialogService, _ProjectionHttp, _ProjectionProvider) {
        this._dialogService = _dialogService;
        this._ProjectionHttp = _ProjectionHttp;
        this._ProjectionProvider = _ProjectionProvider;
    }
    EditProjectionProvider.prototype.editID = function (ID) {
        var _this = this;
        this._ProjectionHttp.loadProjectionFromDatabase(ID)
            .subscribe(function (localProjection) { return _this.editProjection(localProjection); });
    };
    EditProjectionProvider.prototype.editProjection = function (editProjection) {
        var _this = this;
        this._ProjectionProvider.Projection = editProjection;
        this._dialogService.open(form_1.EditProjectionComponent)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                console.log(JSON.stringify(result));
                _this._ProjectionHttp.updateToDatabase(result)
                    .subscribe(function (result) {
                    // Tell parent to update...
                    console.log("this.pointService.updateToDatabase", result);
                });
            }
            else {
                console.log("Cancel");
            }
        });
    };
    return EditProjectionProvider;
}());
EditProjectionProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog,
        webAPI_1.ProjectionServiceHttp,
        Projection_1.CurrentProjectionProvider])
], EditProjectionProvider);
exports.EditProjectionProvider = EditProjectionProvider;
//# sourceMappingURL=Projection.js.map