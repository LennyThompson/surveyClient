"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueAccessorBase {
    constructor() {
        this.changed = new Array();
        this.touched = new Array();
    }
    get value() {
        return this.innerValue;
    }
    set value(value) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.changed.forEach(f => f(value));
        }
    }
    writeValue(value) {
        this.innerValue = value;
        console.log(this.innerValue);
    }
    registerOnChange(fn) {
        this.changed.push(fn);
    }
    registerOnTouched(fn) {
        this.touched.push(fn);
    }
    touch() {
        this.touched.forEach(f => f());
    }
}
exports.ValueAccessorBase = ValueAccessorBase;
//# sourceMappingURL=value-accessor.js.map