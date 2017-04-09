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
var rxjs_1 = require("rxjs");
require("./traverse-measurement-summary-list.scss");
var TraverseMeasurementSummaryListComponent = (function () {
    function TraverseMeasurementSummaryListComponent() {
    }
    TraverseMeasurementSummaryListComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TraverseMeasurementSummaryListComponent.prototype, "TraverseMeasurementSummary", {
        get: function () {
            return this._TraverseMeasurementSummary;
        },
        set: function (value) {
            this._TraverseMeasurementSummary = value;
        },
        enumerable: true,
        configurable: true
    });
    return TraverseMeasurementSummaryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", rxjs_1.Observable),
    __metadata("design:paramtypes", [rxjs_1.Observable])
], TraverseMeasurementSummaryListComponent.prototype, "TraverseMeasurementSummary", null);
TraverseMeasurementSummaryListComponent = __decorate([
    core_1.Component({
        selector: "traverse-measurement-summary-list",
        templateUrl: "./traverse-measurement-summary-list.html"
    }),
    __metadata("design:paramtypes", [])
], TraverseMeasurementSummaryListComponent);
exports.TraverseMeasurementSummaryListComponent = TraverseMeasurementSummaryListComponent;
//# sourceMappingURL=TraverseMeasurementSummaryList.js.map