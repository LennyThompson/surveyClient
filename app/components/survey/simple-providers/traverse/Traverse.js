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
// Declare injectable provider for simple objects of type Traverse
var CurrentTraverseProvider = (function () {
    function CurrentTraverseProvider() {
    }
    Object.defineProperty(CurrentTraverseProvider.prototype, "Traverse", {
        get: function () {
            if (!this._Traverse) {
                this._Traverse = new types_1.Traverse();
            }
            return this._Traverse;
        },
        set: function (value) {
            this._Traverse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentTraverseProvider.prototype, "Traverse_ID", {
        get: function () {
            if (this.Traverse) {
                return this.Traverse.ID;
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
    CurrentTraverseProvider.prototype.reset = function () {
        if (this.Traverse) {
            this.Traverse = null;
        }
        this._ID = -1;
    };
    CurrentTraverseProvider.prototype.hasExistingTraverse = function () {
        return !!this._Traverse;
    };
    return CurrentTraverseProvider;
}());
CurrentTraverseProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseProvider);
exports.CurrentTraverseProvider = CurrentTraverseProvider;
// Declare injectable provider for array of objects of type Traverse
var CurrentTraverseListProvider = (function () {
    function CurrentTraverseListProvider() {
    }
    Object.defineProperty(CurrentTraverseListProvider.prototype, "Traverses", {
        get: function () {
            if (!this.m_listTraverse) {
                this.m_listTraverse = new Array();
            }
            return this.m_listTraverse;
        },
        set: function (value) {
            this.m_listTraverse = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentTraverseListProvider;
}());
CurrentTraverseListProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseListProvider);
exports.CurrentTraverseListProvider = CurrentTraverseListProvider;
//# sourceMappingURL=Traverse.js.map