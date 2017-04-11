// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017
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
var TraverseMeasurementSummary_1 = require("./../../../../services/surveyDb/types/TraverseMeasurementSummary");
var edit_providers_1 = require("./../../edit-providers");
require("./traverse-measurement-summary-list-row.scss");
var TraverseMeasurementSummaryListRowComponent = (function () {
    function TraverseMeasurementSummaryListRowComponent(_editProvider) {
        this._editProvider = _editProvider;
    }
    TraverseMeasurementSummaryListRowComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TraverseMeasurementSummaryListRowComponent.prototype, "SurvMeass", {
        get: function () {
            return this._SurvMeass;
        },
        set: function (value) {
            this._SurvMeass = value;
        },
        enumerable: true,
        configurable: true
    });
    TraverseMeasurementSummaryListRowComponent.prototype.onEdit = function () {
        this._editProvider.editID(this._SurvMeass.MeasID);
    };
    return TraverseMeasurementSummaryListRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", TraverseMeasurementSummary_1.TraverseMeasurementSummary_SurvMeas),
    __metadata("design:paramtypes", [TraverseMeasurementSummary_1.TraverseMeasurementSummary_SurvMeas])
], TraverseMeasurementSummaryListRowComponent.prototype, "SurvMeass", null);
TraverseMeasurementSummaryListRowComponent = __decorate([
    core_1.Component({
        selector: "traverse-measurement-summary",
        templateUrl: "./traverse-measurement-summary-list-row.html"
    }),
    __metadata("design:paramtypes", [edit_providers_1.EditSurveyMeasurementProvider])
], TraverseMeasurementSummaryListRowComponent);
exports.TraverseMeasurementSummaryListRowComponent = TraverseMeasurementSummaryListRowComponent;
//# sourceMappingURL=TraverseMeasurementSummary.js.map