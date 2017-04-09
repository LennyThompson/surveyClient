// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var types_1 = require("./../../../../services/surveyDb/types");
// Declare injectable provider for simple objects of type Projection
var CurrentProjectionProvider = (function () {
    function CurrentProjectionProvider() {
    }
    Object.defineProperty(CurrentProjectionProvider.prototype, "Projection", {
        get: function () {
            if (!this._Projection) {
                this._Projection = new types_1.Projection();
            }
            return this._Projection;
        },
        set: function (value) {
            this._Projection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentProjectionProvider.prototype, "Projection_ID", {
        get: function () {
            if (this.Projection) {
                return this.Projection.ID;
            }
            return this._ID;
        },
        set: function (ID) {
            this.reset();
            this._ID = ID;
        },
        enumerable: true,
        configurable: true
    });
    CurrentProjectionProvider.prototype.reset = function () {
        if (this.Projection) {
            this.Projection = null;
        }
        this._ID = -1;
    };
    CurrentProjectionProvider.prototype.hasExistingProjection = function () {
        return !!this._Projection;
    };
    return CurrentProjectionProvider;
}());
CurrentProjectionProvider = __decorate([
    core_1.Injectable()
], CurrentProjectionProvider);
exports.CurrentProjectionProvider = CurrentProjectionProvider;
// Declare injectable provider for array of objects of type Projection
var CurrentProjectionListProvider = (function () {
    function CurrentProjectionListProvider() {
    }
    Object.defineProperty(CurrentProjectionListProvider.prototype, "Projections", {
        get: function () {
            if (!this.m_listProjection) {
                this.m_listProjection = new Array();
            }
            return this.m_listProjection;
        },
        set: function (value) {
            this.m_listProjection = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentProjectionListProvider;
}());
CurrentProjectionListProvider = __decorate([
    core_1.Injectable()
], CurrentProjectionListProvider);
exports.CurrentProjectionListProvider = CurrentProjectionListProvider;
//# sourceMappingURL=Projection.js.map