// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:12 AEST 2017
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var element_base_1 = require("./../../utils/element-base");
var forms_1 = require("@angular/forms");
var webAPI_1 = require("./../../../../services/surveyDb/webAPI");
var lodash = require("lodash");
var InstrumentManufacturerSelectComponent = InstrumentManufacturerSelectComponent_1 = (function (_super) {
    __extends(InstrumentManufacturerSelectComponent, _super);
    function InstrumentManufacturerSelectComponent(validators, asyncValidators, serviceInstrumentManufacturer) {
        var _this = _super.call(this, validators, asyncValidators) || this;
        _this.serviceInstrumentManufacturer = serviceInstrumentManufacturer;
        serviceInstrumentManufacturer.loadAllFromDatabase().subscribe(function (listInstrumentManufacturer) {
            _this.listInstrumentManufacturer = listInstrumentManufacturer;
            _this.updateValue();
        });
        return _this;
    }
    Object.defineProperty(InstrumentManufacturerSelectComponent.prototype, "InstrumentManufacturer", {
        get: function () {
            return this.listInstrumentManufacturer;
        },
        enumerable: true,
        configurable: true
    });
    InstrumentManufacturerSelectComponent.prototype.updateValue = function () {
        var _this = this;
        if (this.listInstrumentManufacturer && this.currentInstrumentManufacturer) {
            var currentType = lodash(this.listInstrumentManufacturer).find(function (type) { return type.ID === _this.currentInstrumentManufacturer.ID; });
            _super.prototype.writeValue.call(this, currentType);
        }
    };
    InstrumentManufacturerSelectComponent.prototype.writeValue = function (value) {
        this.currentInstrumentManufacturer = value;
        this.updateValue();
    };
    return InstrumentManufacturerSelectComponent;
}(element_base_1.ElementBase));
__decorate([
    core_1.ViewChild(material_1.MdSelect),
    __metadata("design:type", material_1.MdSelect)
], InstrumentManufacturerSelectComponent.prototype, "select", void 0);
__decorate([
    core_1.ViewChildren(material_1.MdOption),
    __metadata("design:type", core_1.QueryList)
], InstrumentManufacturerSelectComponent.prototype, "options", void 0);
__decorate([
    core_1.ViewChild(forms_1.NgModel),
    __metadata("design:type", forms_1.NgModel)
], InstrumentManufacturerSelectComponent.prototype, "model", void 0);
InstrumentManufacturerSelectComponent = InstrumentManufacturerSelectComponent_1 = __decorate([
    core_1.Component({
        selector: "instrument-manufacturer-select",
        templateUrl: "./InstrumentManufacturer.html",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: InstrumentManufacturerSelectComponent_1,
                multi: true,
            }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(forms_1.NG_VALIDATORS)),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(forms_1.NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array,
        Array,
        webAPI_1.InstrumentManufacturerServiceHttp])
], InstrumentManufacturerSelectComponent);
exports.InstrumentManufacturerSelectComponent = InstrumentManufacturerSelectComponent;
var InstrumentManufacturerSelectComponent_1;
//# sourceMappingURL=InstrumentManufacturer.js.map