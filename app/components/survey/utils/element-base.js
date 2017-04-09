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
Object.defineProperty(exports, "__esModule", { value: true });
var value_accessor_1 = require("./value-accessor");
var validate_1 = require("./validate");
var ElementBase = (function (_super) {
    __extends(ElementBase, _super);
    function ElementBase(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.validators = validators;
        _this.asyncValidators = asyncValidators;
        return _this;
    }
    ElementBase.prototype.validate = function () {
        return validate_1.validate(this.validators, this.asyncValidators)(this.model.control);
    };
    Object.defineProperty(ElementBase.prototype, "invalid", {
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v || {}).length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementBase.prototype, "failures", {
        get: function () {
            return this.validate().map(function (v) { return Object.keys(v).map(function (k) { return validate_1.message(v, k); }); });
        },
        enumerable: true,
        configurable: true
    });
    return ElementBase;
}(value_accessor_1.ValueAccessorBase));
exports.ElementBase = ElementBase;
//# sourceMappingURL=element-base.js.map