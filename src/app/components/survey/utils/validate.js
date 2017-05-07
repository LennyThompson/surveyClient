"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const rxjs_1 = require("rxjs");
const normalizeValidator = (validator) => {
    const func = validator.validate.bind(validator);
    if (typeof func === 'function') {
        return (c) => func(c);
    }
    else {
        return validator;
    }
};
exports.composeValidators = (validators) => {
    if (validators == null || validators.length === 0) {
        return null;
    }
    return forms_1.Validators.compose(validators.map(normalizeValidator));
};
exports.validate = (validators, asyncValidators) => {
    return (control) => {
        const synchronousValid = () => exports.composeValidators(validators)(control);
        if (asyncValidators) {
            const asyncValidator = exports.composeValidators(asyncValidators);
            return asyncValidator(control).map(v => {
                const secondary = synchronousValid();
                if (secondary || v) {
                    return Object.assign({}, secondary, v);
                }
            });
        }
        if (validators) {
            return rxjs_1.Observable.of(synchronousValid());
        }
        return rxjs_1.Observable.of(null);
    };
};
exports.message = (validator, key) => {
    switch (key) {
        case 'required':
            return 'Please enter a value';
        case 'pattern':
            return 'Value does not match required pattern';
        case 'minlength':
            return 'Value must be N characters';
        case 'maxlength':
            return 'Value must be a maximum of N characters';
    }
    switch (typeof validator[key]) {
        case 'string':
            return validator[key];
        default:
            return `Validation failed: ${key}`;
    }
};
//# sourceMappingURL=validate.js.map