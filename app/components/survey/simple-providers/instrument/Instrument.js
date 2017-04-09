// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var types_1 = require("./../../../../services/surveyDb/types");
// Declare injectable provider for simple objects of type Instrument
var CurrentInstrumentProvider = (function () {
    function CurrentInstrumentProvider() {
    }
    Object.defineProperty(CurrentInstrumentProvider.prototype, "Instrument", {
        get: function () {
            if (!this._Instrument) {
                this._Instrument = new types_1.Instrument();
            }
            return this._Instrument;
        },
        set: function (value) {
            this._Instrument = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentInstrumentProvider.prototype, "Instrument_ID", {
        get: function () {
            if (this.Instrument) {
                return this.Instrument.ID;
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
    CurrentInstrumentProvider.prototype.reset = function () {
        if (this.Instrument) {
            this.Instrument = null;
        }
        this._ID = -1;
    };
    CurrentInstrumentProvider.prototype.hasExistingInstrument = function () {
        return !!this._Instrument;
    };
    return CurrentInstrumentProvider;
}());
CurrentInstrumentProvider = __decorate([
    core_1.Injectable()
], CurrentInstrumentProvider);
exports.CurrentInstrumentProvider = CurrentInstrumentProvider;
// Declare injectable provider for array of objects of type Instrument
var CurrentInstrumentListProvider = (function () {
    function CurrentInstrumentListProvider() {
    }
    Object.defineProperty(CurrentInstrumentListProvider.prototype, "Instruments", {
        get: function () {
            if (!this.m_listInstrument) {
                this.m_listInstrument = new Array();
            }
            return this.m_listInstrument;
        },
        set: function (value) {
            this.m_listInstrument = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentInstrumentListProvider;
}());
CurrentInstrumentListProvider = __decorate([
    core_1.Injectable()
], CurrentInstrumentListProvider);
exports.CurrentInstrumentListProvider = CurrentInstrumentListProvider;
//# sourceMappingURL=Instrument.js.map