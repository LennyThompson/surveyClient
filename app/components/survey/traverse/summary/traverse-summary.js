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
var TraverseMeasurementSummary_1 = require("../../../../services/surveyDb/types/TraverseMeasurementSummary");
var material_1 = require("@angular/material");
var TraverseServiceHttp_1 = require("../../../../services/surveyDb/webAPI/TraverseServiceHttp");
var edit_traverse_1 = require("../edit/edit-traverse");
var simple_providers_1 = require("../../simple-providers");
require("./traverse-summary.scss");
var TraverseSummaryComponent = (function () {
    function TraverseSummaryComponent(traveService, dialog, travProvider) {
        this.traveService = traveService;
        this.dialog = dialog;
        this.travProvider = travProvider;
    }
    TraverseSummaryComponent.prototype.ngOnChanges = function (changes) {
    };
    Object.defineProperty(TraverseSummaryComponent.prototype, "Traverse", {
        get: function () {
            return this.m_traverse;
        },
        set: function (traverse) {
            this.m_traverse = traverse;
        },
        enumerable: true,
        configurable: true
    });
    TraverseSummaryComponent.prototype.onEditTraverse = function () {
        var _this = this;
        this.traveService.loadTraverseFromDatabase(this.m_traverse.ID)
            .first()
            .subscribe(function (traverse) {
            _this.travProvider.Traverse = traverse;
            var config = new material_1.MdDialogConfig();
            _this.dialog.open(edit_traverse_1.EditTraverseComponent, config)
                .afterClosed()
                .subscribe(function (result) {
                if (result) {
                    console.log(JSON.stringify(result));
                    _this.traveService.updateToDatabase(result)
                        .subscribe(function (result) {
                        // this.onUpdatePointEvent.emit(result);
                        // // Tell parent to update...
                        // console.log("this.pointService.updateToDatabase", result);
                    });
                }
                else {
                    console.log("Cancel");
                }
            });
        });
    };
    return TraverseSummaryComponent;
}());
__decorate([
    core_1.Input("Traverse"),
    __metadata("design:type", TraverseMeasurementSummary_1.TraverseMeasurementSummary),
    __metadata("design:paramtypes", [TraverseMeasurementSummary_1.TraverseMeasurementSummary])
], TraverseSummaryComponent.prototype, "Traverse", null);
TraverseSummaryComponent = __decorate([
    core_1.Component({
        selector: "traverse-summary",
        templateUrl: "traverse-summary.html"
    }),
    __metadata("design:paramtypes", [TraverseServiceHttp_1.TraverseServiceHttp,
        material_1.MdDialog,
        simple_providers_1.CurrentTraverseProvider])
], TraverseSummaryComponent);
exports.TraverseSummaryComponent = TraverseSummaryComponent;
//# sourceMappingURL=traverse-summary.js.map