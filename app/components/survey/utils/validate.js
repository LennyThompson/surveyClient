"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var normalizeValidator = function (validator) {
    var func = validator.validate.bind(validator);
    if (typeof func === 'function') {
        return function (c) { return func(c); };
    }
    else {
        return validator;
    }
};
exports.composeValidators = function (validators) {
    if (validators == null || validators.length === 0) {
        return null;
    }
    return forms_1.Validators.compose(validators.map(normalizeValidator));
};
exports.validate = function (validators, asyncValidators) {
    return function (control) {
        var synchronousValid = function () { return exports.composeValidators(validators)(control); };
        if (asyncValidators) {
            var asyncValidator = exports.composeValidators(asyncValidators);
            return asyncValidator(control).map(function (v) {
                var secondary = synchronousValid();
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
exports.message = function (validator, key) {
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
            return "Validation failed: " + key;
    }
};
//# sourceMappingURL=validate.js.map