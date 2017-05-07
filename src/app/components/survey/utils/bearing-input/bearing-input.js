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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const format_bearing_1 = require("../../pipes/format-bearing");
const element_base_1 = require("../element-base");
const forms_1 = require("@angular/forms");
const material_1 = require("@angular/material");
require("./bearing-input.scss");
let nextUniqueId = 0;
/**
 * Component that represents a bearing input. It encapsulates 3 input elements.
 */
let BearingInputContainer = BearingInputContainer_1 = class BearingInputContainer extends element_base_1.ElementBase {
    constructor(validators, asyncValidators, bearingFormat) {
        super(validators, asyncValidators);
        this.bearingFormat = bearingFormat;
        /** Alignment of the input container's content. */
        this.align = 'start';
        /** Color of the input divider, based on the theme. */
        this.dividerColor = 'primary';
        /** Placeholder attribute of the element. */
        this._placeholder = '';
        this._placeholderChange = new core_1.EventEmitter();
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `md-input-hint-${nextUniqueId++}`;
        this._floatPlaceholder = 'auto';
    }
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        if (this._placeholder !== value) {
            this._placeholder = value;
            this._placeholderChange.emit(this._placeholder);
        }
    }
    /** Whether the floating label should always float or not. */
    get _shouldAlwaysFloat() {
        return this._floatPlaceholder === 'always';
    }
    ;
    /** Whether the placeholder can float or not. */
    get _canPlaceholderFloat() {
        return true; //this._floatPlaceholder !== 'never';
    }
    /** Text for the input hint. */
    get hintLabel() {
        return this._hintLabel;
    }
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /** Whether the placeholder should always float, never float or float as the user types. */
    get floatPlaceholder() {
        return this._floatPlaceholder;
    }
    set floatPlaceholder(value) {
        this._floatPlaceholder = value || 'auto';
    }
    get degrees() {
        return this._degrees;
    }
    set degrees(value) {
        this._degrees = value;
        this.updateBearing();
    }
    get minutes() {
        return this._minutes;
    }
    set minutes(value) {
        this._minutes = value;
        this.updateBearing();
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        this._seconds = value;
        this.updateBearing();
    }
    updateBearing() {
        this.value = Number(this._degrees ? this._degrees : "0") + Number(this._minutes ? this._minutes : "0") / 60 + Number(this._seconds ? this._seconds : "0") / 3600;
        console.log("Bearing: " + this.value);
    }
    updateParts() {
        let strBearing = this.bearingFormat.transform(this.value);
        console.log(strBearing);
        let matches = /(\d+)º(\d+)'(\d+)"/.exec(strBearing);
        if (matches !== null) {
            this._degrees = matches[1];
            this._minutes = matches[2];
            this._seconds = matches[3];
        }
    }
    ngAfterViewInit() {
        if (!this._mdInputChildren) {
            throw new material_1.MdInputContainerMissingMdInputError();
        }
        this._mdInputChildren.forEach(child => this._focusChild ? this._focusChild = child : null);
    }
    ngAfterContentInit() {
        this._processHints();
        // Re-validate when things change.
        this._hintChildren.changes.subscribe(() => this._processHints());
    }
    /** Focuses the underlying input. */
    _focusInput() {
        this._mdInputChildren.forEach(child => child.focused ? this._focusChild = child : null);
    }
    /**
     * Does any extra processing that is required when handling the hints.
     */
    _processHints() {
        this._validateHints();
        this._syncAriaDescribedby();
    }
    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    _validateHints() {
        if (this._hintChildren) {
            let startHint = null;
            let endHint = null;
            this._hintChildren.forEach((hint) => {
                if (hint.align == 'start') {
                    if (startHint || this.hintLabel) {
                        throw new material_1.MdInputContainerDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint) {
                        throw new material_1.MdInputContainerDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            });
        }
    }
    /**
     * Sets the child input's `aria-describedby` to a space-separated list of the ids
     * of the currently-specified hints, as well as a generated id for the hint label.
     */
    _syncAriaDescribedby() {
        let ids = [];
        let startHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'start') : null;
        let endHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'end') : null;
        if (startHint) {
            ids.push(startHint.id);
        }
        else if (this._hintLabel) {
            ids.push(this._hintLabelId);
        }
        if (endHint) {
            ids.push(endHint.id);
        }
        this._mdInputChildren ? this._mdInputChildren.forEach(child => child.ariaDescribedby = ids.join(' ')) : null;
    }
    _onFocussed() {
        if (this._focusChild) {
            this._focusChild._onFocus();
        }
    }
    isFocussed() {
        return this._mdInputChildren
            .filter(child => child.focused)
            .length > 0;
    }
    _shouldForward(prop) {
        return this._mdInputChildren
            .map(child => child._ngControl ? child._ngControl : null)
            .filter(control => control && control[prop])
            .length > 0;
    }
    onKeypress(event, source) {
        if (event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
        }
    }
};
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