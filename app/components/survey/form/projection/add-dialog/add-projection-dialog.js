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
require("./add-projection-dialog.scss");
var AddProjectionComponent = (function () {
    function AddProjectionComponent(_ProjectionProvider) {
        this._ProjectionProvider = _ProjectionProvider;
    }
    Object.defineProperty(AddProjectionComponent.prototype, "title", {
        get: function () {
            return "Add Projection";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddProjectionComponent.prototype, "Projection", {
        get: function () {
            return this._ProjectionProvider.Projection;
        },
        set: function (value) {
            this._ProjectionProvider.Projection = value;
        },
        enumerable: true,
        configurable: true
    });
    return AddProjectionComponent;
}());
AddProjectionComponent = __decorate([
    core_1.Component({
        selector: "add-projection-dialog",
        templateUrl: "add-projection-dialog.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentProjectionProvider])
], AddProjectionComponent);
exports.AddProjectionComponent = AddProjectionComponent;
//# sourceMappingURL=add-projection-dialog.js.map