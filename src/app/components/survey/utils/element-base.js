"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value_accessor_1 = require("./value-accessor");
const validate_1 = require("./validate");
class ElementBase extends value_accessor_1.ValueAccessorBase {
    constructor(validators, asyncValidators) {
        super();
        this.validators = validators;
        this.asyncValidators = asyncValidators;
    }
    validate() {
        return validate_1.validate(this.validators, this.asyncValidators)(this.model.control);
    }
    get invalid() {
        return this.validate().map(v => Object.keys(v || {}).length > 0);
    }
    get failures() {
        return this.validate().map(v => Object.keys(v).map(k => validate_1.message(v, k)));
    }
}
exports.ElementBase = ElementBase;
//# sourceMappingURL=element-base.js.map