// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017
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
var types_1 = require("./../../../../services/surveyDb/types");
require("./traverse-form.scss");
var TraverseComponent = (function () {
    function TraverseComponent() {
        this._Traverse = new types_1.Traverse();
    }
    TraverseComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TraverseComponent.prototype, "Traverse", {
        get: function () {
            return this._Traverse;
        },
        set: function (value) {
            this._Traverse = value;
        },
        enumerable: true,
        configurable: true
    });
    return TraverseComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", types_1.Traverse),
    __metadata("design:paramtypes", [types_1.Traverse])
], TraverseComponent.prototype, "Traverse", null);
TraverseComponent = __decorate([
    core_1.Component({
        selector: "traverse-form",
        templateUrl: "./traverse-form.html"
    }),
    __metadata("design:paramtypes", [])
], TraverseComponent);
exports.TraverseComponent = TraverseComponent;
//# sourceMappingURL=traverse-form.js.map