// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:30:12 AEST 2017
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
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
require("./edit-projection-dialog.scss");
var EditProjectionComponent = (function () {
    function EditProjectionComponent(_ProjectionProvider) {
        this._ProjectionProvider = _ProjectionProvider;
    }
    Object.defineProperty(EditProjectionComponent.prototype, "title", {
        get: function () {
            return "Edit Projection";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProjectionComponent.prototype, "Projection", {
        get: function () {
            return this._ProjectionProvider.Projection;
        },
        set: function (value) {
            this._ProjectionProvider.Projection = value;
        },
        enumerable: true,
        configurable: true
    });
    return EditProjectionComponent;
}());
EditProjectionComponent = __decorate([
    core_1.Component({
        selector: "edit-projection-dialog",
        templateUrl: "./edit-projection-dialog.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentProjectionProvider])
], EditProjectionComponent);
exports.EditProjectionComponent = EditProjectionComponent;
//# sourceMappingURL=edit-projection-dialog.js.map