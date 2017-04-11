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
// Declare injectable provider for simple objects of type InstrumentManufacturer
var CurrentInstrumentManufacturerProvider = (function () {
    function CurrentInstrumentManufacturerProvider() {
    }
    Object.defineProperty(CurrentInstrumentManufacturerProvider.prototype, "InstrumentManufacturer", {
        get: function () {
            if (!this._InstrumentManufacturer) {
                this._InstrumentManufacturer = new types_1.InstrumentManufacturer();
            }
            return this._InstrumentManufacturer;
        },
        set: function (value) {
            this._InstrumentManufacturer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentInstrumentManufacturerProvider.prototype, "InstrumentManufacturer_ID", {
        get: function () {
            if (this.InstrumentManufacturer) {
                return this.InstrumentManufacturer.ID;
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
    CurrentInstrumentManufacturerProvider.prototype.reset = function () {
        if (this.InstrumentManufacturer) {
            this.InstrumentManufacturer = null;
        }
        this._ID = -1;
    };
    CurrentInstrumentManufacturerProvider.prototype.hasExistingInstrumentManufacturer = function () {
        return !!this._InstrumentManufacturer;
    };
    return CurrentInstrumentManufacturerProvider;
}());
CurrentInstrumentManufacturerProvider = __decorate([
    core_1.Injectable()
], CurrentInstrumentManufacturerProvider);
exports.CurrentInstrumentManufacturerProvider = CurrentInstrumentManufacturerProvider;
// Declare injectable provider for array of objects of type InstrumentManufacturer
var CurrentInstrumentManufacturerListProvider = (function () {
    function CurrentInstrumentManufacturerListProvider() {
    }
    Object.defineProperty(CurrentInstrumentManufacturerListProvider.prototype, "InstrumentManufacturers", {
        get: function () {
            if (!this.m_listInstrumentManufacturer) {
                this.m_listInstrumentManufacturer = new Array();
            }
            return this.m_listInstrumentManufacturer;
        },
        set: function (value) {
            this.m_listInstrumentManufacturer = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentInstrumentManufacturerListProvider;
}());
CurrentInstrumentManufacturerListProvider = __decorate([
    core_1.Injectable()
], CurrentInstrumentManufacturerListProvider);
exports.CurrentInstrumentManufacturerListProvider = CurrentInstrumentManufacturerListProvider;
//# sourceMappingURL=InstrumentManufacturerSimpleProvider.js.map