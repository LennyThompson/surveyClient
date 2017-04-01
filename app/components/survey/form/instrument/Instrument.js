// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017
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
var Instrument_1 = require("./../../../../services/surveyDb/types/Instrument");
require("./Instrument.scss");
var InstrumentComponent = (function () {
    function InstrumentComponent() {
        this._Instrument = new Instrument_1.Instrument();
    }
    InstrumentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InstrumentComponent.prototype, "Instrument", {
        get: function () {
            return this._Instrument;
        },
        set: function (value) {
            this._Instrument = value;
        },
        enumerable: true,
        configurable: true
    });
    return InstrumentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Instrument_1.Instrument),
    __metadata("design:paramtypes", [Instrument_1.Instrument])
], InstrumentComponent.prototype, "Instrument", null);
InstrumentComponent = __decorate([
    core_1.Component({
        selector: "instrument-form",
        templateUrl: "./Instrument.html"
    }),
    __metadata("design:paramtypes", [])
], InstrumentComponent);
exports.InstrumentComponent = InstrumentComponent;
//# sourceMappingURL=Instrument.js.map