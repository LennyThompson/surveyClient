// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017
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
var core_1 = require("@angular/core");
var TraverseClosure_1 = require("./../../../../services/surveyDb/types/TraverseClosure");
require("./TraverseClosure.scss");
var TraverseClosureComponent = (function () {
    function TraverseClosureComponent() {
        this._TraverseClosure = new TraverseClosure_1.TraverseClosure();
    }
    TraverseClosureComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TraverseClosureComponent.prototype, "TraverseClosure", {
        get: function () {
            return this._TraverseClosure;
        },
        set: function (value) {
            this._TraverseClosure = value;
        },
        enumerable: true,
        configurable: true
    });
    return TraverseClosureComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", TraverseClosure_1.TraverseClosure),
    __metadata("design:paramtypes", [TraverseClosure_1.TraverseClosure])
], TraverseClosureComponent.prototype, "TraverseClosure", null);
TraverseClosureComponent = __decorate([
    core_1.Component({
        selector: "traverse-closure-form",
        templateUrl: "./TraverseClosure.html"
    }),
    __metadata("design:paramtypes", [])
], TraverseClosureComponent);
exports.TraverseClosureComponent = TraverseClosureComponent;
//# sourceMappingURL=TraverseClosure.js.map