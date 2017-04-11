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
var SurveySummary_1 = require("./../../../../services/surveyDb/types/SurveySummary");
var edit_providers_1 = require("./../../edit-providers");
require("./survey-summary-list-row.scss");
var SurveySummaryListRowComponent = (function () {
    function SurveySummaryListRowComponent(_editProvider) {
        this._editProvider = _editProvider;
    }
    SurveySummaryListRowComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SurveySummaryListRowComponent.prototype, "SurveySummary", {
        get: function () {
            return this._SurveySummary;
        },
        set: function (value) {
            this._SurveySummary = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveySummaryListRowComponent.prototype.onEdit = function () {
        this._editProvider.editID(this._SurveySummary.ID);
    };
    return SurveySummaryListRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", SurveySummary_1.SurveySummary),
    __metadata("design:paramtypes", [SurveySummary_1.SurveySummary])
], SurveySummaryListRowComponent.prototype, "SurveySummary", null);
SurveySummaryListRowComponent = __decorate([
    core_1.Component({
        selector: "survey-summary",
        templateUrl: "./survey-summary-list-row.html"
    }),
    __metadata("design:paramtypes", [edit_providers_1.EditSurveyProvider])
], SurveySummaryListRowComponent);
exports.SurveySummaryListRowComponent = SurveySummaryListRowComponent;
//# sourceMappingURL=SurveySummary.js.map