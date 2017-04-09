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
// Declare injectable provider for simple objects of type TraverseClosure
var CurrentTraverseClosureProvider = (function () {
    function CurrentTraverseClosureProvider() {
    }
    Object.defineProperty(CurrentTraverseClosureProvider.prototype, "TraverseClosure", {
        get: function () {
            if (!this._TraverseClosure) {
                this._TraverseClosure = new types_1.TraverseClosure();
            }
            return this._TraverseClosure;
        },
        set: function (value) {
            this._TraverseClosure = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentTraverseClosureProvider.prototype, "TraverseClosure_ID", {
        get: function () {
            if (this.TraverseClosure) {
                return this.TraverseClosure.ID;
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
    CurrentTraverseClosureProvider.prototype.reset = function () {
        if (this.TraverseClosure) {
            this.TraverseClosure = null;
        }
        this._ID = -1;
    };
    CurrentTraverseClosureProvider.prototype.hasExistingTraverseClosure = function () {
        return !!this._TraverseClosure;
    };
    return CurrentTraverseClosureProvider;
}());
CurrentTraverseClosureProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseClosureProvider);
exports.CurrentTraverseClosureProvider = CurrentTraverseClosureProvider;
// Declare injectable provider for array of objects of type TraverseClosure
var CurrentTraverseClosureListProvider = (function () {
    function CurrentTraverseClosureListProvider() {
    }
    Object.defineProperty(CurrentTraverseClosureListProvider.prototype, "TraverseClosures", {
        get: function () {
            if (!this.m_listTraverseClosure) {
                this.m_listTraverseClosure = new Array();
            }
            return this.m_listTraverseClosure;
        },
        set: function (value) {
            this.m_listTraverseClosure = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentTraverseClosureListProvider;
}());
CurrentTraverseClosureListProvider = __decorate([
    core_1.Injectable()
], CurrentTraverseClosureListProvider);
exports.CurrentTraverseClosureListProvider = CurrentTraverseClosureListProvider;
//# sourceMappingURL=TraverseClosure.js.map