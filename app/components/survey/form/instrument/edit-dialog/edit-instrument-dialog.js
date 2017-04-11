// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:12 AEST 2017
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
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
require("./edit-instrument-dialog.scss");
var EditInstrumentComponent = (function () {
    function EditInstrumentComponent(_InstrumentProvider) {
        this._InstrumentProvider = _InstrumentProvider;
    }
    Object.defineProperty(EditInstrumentComponent.prototype, "title", {
        get: function () {
            return "Edit Instrument";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditInstrumentComponent.prototype, "Instrument", {
        get: function () {
            return this._InstrumentProvider.Instrument;
        },
        set: function (value) {
            this._InstrumentProvider.Instrument = value;
        },
        enumerable: true,
        configurable: true
    });
    return EditInstrumentComponent;
}());
EditInstrumentComponent = __decorate([
    core_1.Component({
        selector: "edit-instrument-dialog",
        templateUrl: "./edit-instrument-dialog.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentInstrumentProvider])
], EditInstrumentComponent);
exports.EditInstrumentComponent = EditInstrumentComponent;
//# sourceMappingURL=edit-instrument-dialog.js.map