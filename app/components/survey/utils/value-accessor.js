"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValueAccessorBase = (function () {
    function ValueAccessorBase() {
        this.changed = new Array();
        this.touched = new Array();
    }
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    ValueAccessorBase.prototype.writeValue = function (value) {
        this.innerValue = value;
        console.log(this.innerValue);
    };
    ValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    ValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    ValueAccessorBase.prototype.touch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    return ValueAccessorBase;
}());
exports.ValueAccessorBase = ValueAccessorBase;
//# sourceMappingURL=value-accessor.js.map