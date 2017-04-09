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
var EditInstrumentManufacturerProvider = (function () {
    function EditInstrumentManufacturerProvider(_dialogService, _InstrumentManufacturer, _InstrumentManufacturerService) {
        this._dialogService = _dialogService;
        this._InstrumentManufacturer = _InstrumentManufacturer;
        this._InstrumentManufacturerService = _InstrumentManufacturerService;
    }
    EditInstrumentManufacturerProvider.prototype.edit = function (keyId) {
        var _this = this;
        this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(keyId)
            .subscribe(function (result) { return _this.doEdit(result); });
    };
    EditInstrumentManufacturerProvider.prototype.doEdit = function (editInstrumentManufacturer) {
        var _this = this;
        this._InstrumentManufacturer.InstrumentManufacturer = editInstrumentManufacturer;
        this._dialogService.open(_1.EditInstrumentManufacturerComponent)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this._InstrumentManufacturerService.updateToDatabase(result)
                    .subscribe(function (result) {
                });
            }
            else {
            }
        });
    };
    EditInstrumentManufacturerProvider.prototype.delete = function (keyId) {
        var _this = this;
        this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(keyId)
            .subscribe(function (result) { return _this.doDelete(result); });
    };
    EditInstrumentManufacturerProvider.prototype.doDelete = function (editInstrumentManufacturer) {
        console.log("no yet implemented");
    };
    return EditInstrumentManufacturerProvider;
}());
EditInstrumentManufacturerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog,
        simple_providers_1.CurrentInstrumentManufacturerProvider,
        webAPI_1.InstrumentManufacturerServiceHttp])
], EditInstrumentManufacturerProvider);
exports.EditInstrumentManufacturerProvider = EditInstrumentManufacturerProvider;
//# sourceMappingURL=InstrumentManufacturer.js.map