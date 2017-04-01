// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017
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
var Traverse_1 = require("./../../../../services/surveyDb/types/Traverse");
require("./Traverse.scss");
var TraverseComponent = (function () {
    function TraverseComponent() {
        this._Traverse = new Traverse_1.Traverse();
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
    __metadata("design:type", Traverse_1.Traverse),
    __metadata("design:paramtypes", [Traverse_1.Traverse])
], TraverseComponent.prototype, "Traverse", null);
TraverseComponent = __decorate([
    core_1.Component({
        selector: "traverse-form",
        templateUrl: "./Traverse.html"
    }),
    __metadata("design:paramtypes", [])
], TraverseComponent);
exports.TraverseComponent = TraverseComponent;
//# sourceMappingURL=Traverse.js.map