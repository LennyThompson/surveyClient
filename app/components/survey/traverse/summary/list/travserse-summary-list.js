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
var simple_providers_1 = require("./../../../simple-providers");
var webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
var material_1 = require("@angular/material");
var add_traverse_1 = require("./../../add/add-traverse");
var webAPI_2 = require("../../../../../services/surveyDb/webAPI");
require("./traverse-summary-list.scss");
var TravserseSummaryListComponent = (function () {
    function TravserseSummaryListComponent(surveyContext, travMeasService, travService, dialog) {
        this.surveyContext = surveyContext;
        this.travMeasService = travMeasService;
        this.travService = travService;
        this.dialog = dialog;
        this._traverseList = this.travMeasService.getTraverseMeasurementSummarySummaries();
    }
    Object.defineProperty(TravserseSummaryListComponent.prototype, "Traverses", {
        get: function () {
            if (!this._traverseList) {
                console.log("Lodaing traverse list");
                this.updateTraverseList();
            }
            return this._traverseList;
        },
        enumerable: true,
        configurable: true
    });
    TravserseSummaryListComponent.prototype.updateTraverseList = function () {
    };
    TravserseSummaryListComponent.prototype.onAddTraverse = function () {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        this.dialog.open(add_traverse_1.AddTraverseComponent, config)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                result.SurveyID = _this.surveyContext.Survey.ID;
                if (!result.EndPoint || !result.EndPoint.ID) {
                    result.EndPoint = result.SurveyMeasurement[result.SurveyMeasurement.length - 1].PointTo;
                }
                _this.travService.saveToDatabase(result)
                    .subscribe(function () {
                    // this.travMeasService.updateTraverseSummaries(this.surveyContext.SurveyID);
                });
            }
            else {
                console.log("Cancel");
            }
        });
    };
    return TravserseSummaryListComponent;
}());
TravserseSummaryListComponent = __decorate([
    core_1.Component({
        selector: "traverse-summary-list",
        templateUrl: "traverse-summary-list.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentSurveyProvider, typeof (_a = typeof webAPI_2.TraverseMeasurementSummarySubjectProvider !== "undefined" && webAPI_2.TraverseMeasurementSummarySubjectProvider) === "function" && _a || Object, webAPI_1.TraverseServiceHttp,
        material_1.MdDialog])
], TravserseSummaryListComponent);
exports.TravserseSummaryListComponent = TravserseSummaryListComponent;
var _a;
//# sourceMappingURL=travserse-summary-list.js.map