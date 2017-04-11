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
var SurveyPointSummary_1 = require("../../../services/surveyDb/types/SurveyPointSummary");
var material_1 = require("@angular/material");
var webAPI_1 = require("../../../services/surveyDb/webAPI");
var edit_survey_point_1 = require("./edit/edit-survey-point");
var async_1 = require("@angular/common/src/facade/async");
require("./survey-point.scss");
var SurveyPointComponent = (function () {
    function SurveyPointComponent(dialog, pointService, pointSummayService, pointProvider) {
        this.dialog = dialog;
        this.pointService = pointService;
        this.pointSummayService = pointSummayService;
        this.pointProvider = pointProvider;
        this.onUpdatePointEvent = new async_1.EventEmitter();
    }
    Object.defineProperty(SurveyPointComponent.prototype, "Point", {
        get: function () {
            return this.m_point;
        },
        set: function (point) {
            this.m_point = point;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPointComponent.prototype.onEditPoint = function () {
        var _this = this;
        this.pointService.loadSurveyPointFromDatabase(this.Point.PtID)
            .subscribe(function (point) {
            var config = new material_1.MdDialogConfig();
            _this.pointProvider.SurveyPoint = point;
            _this.dialog.open(edit_survey_point_1.EditSurveyPointComponent, config)
                .afterClosed()
                .subscribe(function (result) {
                if (result) {
                    console.log(JSON.stringify(result));
                    _this.pointService.updateToDatabase(result)
                        .subscribe(function (result) {
                        _this.onUpdatePointEvent.emit(result);
                        // Tell parent to update...
                        console.log("this.pointService.updateToDatabase", result);
                    });
                }
                else {
                    console.log("Cancel");
                }
            });
        });
    };
    SurveyPointComponent.prototype.onDeletePoint = function () {
        console.log("Delete point");
    };
    return SurveyPointComponent;
}());
__decorate([
    core_1.Output("update"),
    __metadata("design:type", async_1.EventEmitter)
], SurveyPointComponent.prototype, "onUpdatePointEvent", void 0);
__decorate([
    core_1.Input("point"),
    __metadata("design:type", SurveyPointSummary_1.SurveyPointSummary_Pt),
    __metadata("design:paramtypes", [SurveyPointSummary_1.SurveyPointSummary_Pt])
], SurveyPointComponent.prototype, "Point", null);
SurveyPointComponent = __decorate([
    core_1.Component({
        selector: "survey-point",
        templateUrl: "./survey-point.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialog,
        webAPI_1.SurveyPointServiceHttp,
        webAPI_1.SurveyPointSummaryServiceHttp,
        webAPI_1.CurrentSurveyPointProvider])
], SurveyPointComponent);
exports.SurveyPointComponent = SurveyPointComponent;
//# sourceMappingURL=survey-point.js.map