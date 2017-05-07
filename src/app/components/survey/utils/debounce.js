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
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const forms_1 = require("@angular/forms");
let Debounce = class Debounce {
    constructor(elementRef, model) {
        this.elementRef = elementRef;
        this.model = model;
        this.delay = 300;
        this.func = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        rxjs_1.Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
            .debounceTime(this.delay)
            .subscribe((input) => {
            console.log("debouncing: " + input.target.value);
            // this.model.value = input.target.value;
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Debounce.prototype, "delay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Debounce.prototype, "func", void 0);
Debounce = __decorate([
    core_1.Directive({
        selector: "[debounce]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        forms_1.NgModel])
], Debounce);
exports.Debounce = Debounce;
//# sourceMappingURL=debounce.js.map