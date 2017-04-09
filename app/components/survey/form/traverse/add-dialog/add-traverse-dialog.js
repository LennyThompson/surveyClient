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
var simple_providers_1 = require("../../../simple-providers");
require("./add-traverse-dialog.scss");
var AddTraverseComponent = (function () {
    function AddTraverseComponent(_TraverseProvider) {
        this._TraverseProvider = _TraverseProvider;
    }
    Object.defineProperty(AddTraverseComponent.prototype, "title", {
        get: function () {
            return "Add Traverse";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddTraverseComponent.prototype, "Traverse", {
        get: function () {
            return this._TraverseProvider.Traverse;
        },
        set: function (value) {
            this._TraverseProvider.Traverse = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddTraverseComponent;
}());
AddTraverseComponent = __decorate([
    core_1.Component({
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse-dialog.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentTraverseProvider])
], AddTraverseComponent);
exports.AddTraverseComponent = AddTraverseComponent;
//# sourceMappingURL=add-traverse-dialog.js.map