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
var format_bearing_1 = require("../../pipes/format-bearing");
var element_base_1 = require("../element-base");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
require("./bearing-input.scss");
var nextUniqueId = 0;
/**
 * Component that represents a bearing input. It encapsulates 3 input elements.
 */
var BearingInputContainer = BearingInputContainer_1 = (function (_super) {
    __extends(BearingInputContainer, _super);
    function BearingInputContainer(validators, asyncValidators, bearingFormat) {
        var _this = _super.call(this, validators, asyncValidators) || this;
        _this.bearingFormat = bearingFormat;
        /** Alignment of the input container's content. */
        _this.align = 'start';
        /** Color of the input divider, based on the theme. */
        _this.dividerColor = 'primary';
        /** Placeholder attribute of the element. */
        _this._placeholder = '';
        _this._placeholderChange = new core_1.EventEmitter();
        _this._hintLabel = '';
        // Unique id for the hint label.
        _this._hintLabelId = "md-input-hint-" + nextUniqueId++;
        _this._floatPlaceholder = 'auto';
        return _this;
    }
    Object.defineProperty(BearingInputContainer.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) {
            if (this._placeholder !== value) {
                this._placeholder = value;
                this._placeholderChange.emit(this._placeholder);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "_shouldAlwaysFloat", {
        /** Whether the floating label should always float or not. */
        get: function () {
            return this._floatPlaceholder === 'always';
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BearingInputContainer.prototype, "_canPlaceholderFloat", {
        /** Whether the placeholder can float or not. */
        get: function () {
            return true; //this._floatPlaceholder !== 'never';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "hintLabel", {
        /** Text for the input hint. */
        get: function () {
            return this._hintLabel;
        },
        set: function (value) {
            this._hintLabel = value;
            this._processHints();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "floatPlaceholder", {
        /** Whether the placeholder should always float, never float or float as the user types. */
        get: function () {
            return this._floatPlaceholder;
        },
        set: function (value) {
            this._floatPlaceholder = value || 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "degrees", {
        get: function () {
            return this._degrees;
        },
        set: function (value) {
            this._degrees = value;
            this.updateBearing();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (value) {
            this._minutes = value;
            this.updateBearing();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BearingInputContainer.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (value) {
            this._seconds = value;
            this.updateBearing();
        },
        enumerable: true,
        configurable: true
    });
    BearingInputContainer.prototype.updateBearing = function () {
        this.value = Number(this._degrees ? this._degrees : "0") + Number(this._minutes ? this._minutes : "0") / 60 + Number(this._seconds ? this._seconds : "0") / 3600;
        console.log("Bearing: " + this.value);
    };
    BearingInputContainer.prototype.updateParts = function () {
        var strBearing = this.bearingFormat.transform(this.value);
        console.log(strBearing);
        var matches = /(\d+)º(\d+)'(\d+)"/.exec(strBearing);
        if (matches !== null) {
            this._degrees = matches[1];
            this._minutes = matches[2];
            this._seconds = matches[3];
        }
    };
    BearingInputContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this._mdInputChildren) {
            throw new material_1.MdInputContainerMissingMdInputError();
        }
        this._mdInputChildren.forEach(function (child) { return _this._focusChild ? _this._focusChild = child : null; });
    };
    BearingInputContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._processHints();
        // Re-validate when things change.
        this._hintChildren.changes.subscribe(function () { return _this._processHints(); });
    };
    /** Focuses the underlying input. */
    BearingInputContainer.prototype._focusInput = function () {
        var _this = this;
        this._mdInputChildren.forEach(function (child) { return child.focused ? _this._focusChild = child : null; });
    };
    /**
     * Does any extra processing that is required when handling the hints.
     */
    BearingInputContainer.prototype._processHints = function () {
        this._validateHints();
        this._syncAriaDescribedby();
    };
    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    BearingInputContainer.prototype._validateHints = function () {
        var _this = this;
        if (this._hintChildren) {
            var startHint_1 = null;
            var endHint_1 = null;
            this._hintChildren.forEach(function (hint) {
                if (hint.align == 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw new material_1.MdInputContainerDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint_1) {
                        throw new material_1.MdInputContainerDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            });
        }
    };
    /**
     * Sets the child input's `aria-describedby` to a space-separated list of the ids
     * of the currently-specified hints, as well as a generated id for the hint label.
     */
    BearingInputContainer.prototype._syncAriaDescribedby = function () {
        var ids = [];
        var startHint = this._hintChildren ?
            this._hintChildren.find(function (hint) { return hint.align === 'start'; }) : null;
        var endHint = this._hintChildren ?
            this._hintChildren.find(function (hint) { return hint.align === 'end'; }) : null;
        if (startHint) {
            ids.push(startHint.id);
        }
        else if (this._hintLabel) {
            ids.push(this._hintLabelId);
        }
        if (endHint) {
            ids.push(endHint.id);
        }
        this._mdInputChildren ? this._mdInputChildren.forEach(function (child) { return child.ariaDescribedby = ids.join(' '); }) : null;
    };
    BearingInputContainer.prototype._onFocussed = function () {
        if (this._focusChild) {
            this._focusChild._onFocus();
        }
    };
    BearingInputContainer.prototype.isFocussed = function () {
        return this._mdInputChildren
            .filter(function (child) { return child.focused; })
            .length > 0;
    };
    BearingInputContainer.prototype._shouldForward = function (prop) {
        return this._mdInputChildren
            .map(function (child) { return child._ngControl ? child._ngControl : null; })
            .filter(function (control) { return control && control[prop]; })
            .length > 0;
    };
    BearingInputContainer.prototype.onKeypress = function (event, source) {
        if (event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
        }
    };
    return BearingInputContainer;
}(element_base_1.ElementBase));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BearingInputContainer.prototype, "align", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BearingInputContainer.prototype, "dividerColor", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BearingInputContainer.prototype, "_placeholderChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], BearingInputContainer.prototype, "placeholder", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], BearingInputContainer.prototype, "hintLabel", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], BearingInputContainer.prototype, "floatPlaceholder", null);
__decorate([
    core_1.ViewChildren(material_1.MdInputDirective),
    __metadata("design:type", core_1.QueryList)
], BearingInputContainer.prototype, "_mdInputChildren", void 0);
__decorate([
    core_1.ContentChild(material_1.MdPlaceholder),
    __metadata("design:type", material_1.MdPlaceholder)
], BearingInputContainer.prototype, "_placeholderChild", void 0);
__decorate([
    core_1.ContentChildren(material_1.MdHint),
    __metadata("design:type", core_1.QueryList)
], BearingInputContainer.prototype, "_hintChildren", void 0);
__decorate([
    core_1.ViewChild(forms_1.NgModel),
    __metadata("design:type", forms_1.NgModel)
], BearingInputContainer.prototype, "model", void 0);
BearingInputContainer = BearingInputContainer_1 = __decorate([
    core_1.Component({
        selector: "bearing-input",
        templateUrl: "bearing-input.html",
        host: {
            // Remove align attribute to prevent it from interfering with layout.
            '[attr.align]': 'null',
            '[class.mat-input-container]': 'true',
            '[class.mat-focused]': '_onFocussed()',
            // '[class.ng-untouched]': '_shouldForward("untouched")',
            // '[class.ng-touched]': '_shouldForward("touched")',
            // '[class.ng-pristine]': '_shouldForward("pristine")',
            // '[class.ng-dirty]': '_shouldForward("dirty")',
            // '[class.ng-valid]': '_shouldForward("valid")',
            // '[class.ng-invalid]': '_shouldForward("invalid")',
            // '[class.ng-pending]': '_shouldForward("pending")',
            '(click)': '_focusInput()',
        },
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: BearingInputContainer_1,
                multi: true,
            }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(forms_1.NG_VALIDATORS)),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(forms_1.NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array,
        Array,
        format_bearing_1.BearingFormat])
], BearingInputContainer);
exports.BearingInputContainer = BearingInputContainer;
var BearingInputContainer_1;
//# sourceMappingURL=bearing-input.js.map