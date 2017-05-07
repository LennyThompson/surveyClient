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
const core_1 = require("@angular/core");
const webAPI_1 = require("./../../../../../services/surveyDb/webAPI");
const material_1 = require("@angular/material");
const add_traverse_1 = require("./../../add/add-traverse");
require("./traverse-summary-list.scss");
let TravserseSummaryListComponent = class TravserseSummaryListComponent {
    constructor(surveyContext, travMeasService, travService, dialog) {
        this.surveyContext = surveyContext;
        this.travMeasService = travMeasService;
        this.travService = travService;
        this.dialog = dialog;
        this._traverseList = this.travMeasService.getTraverseMeasurementSummarySummaries();
    }
    get Traverses() {
        if (!this._traverseList) {
            console.log("Lodaing traverse list");
            this.updateTraverseList();
        }
        return this._traverseList;
    }
    updateTraverseList() {
    }
    onAddTraverse() {
        let config = new material_1.MdDialogConfig();
        this.dialog.open(add_traverse_1.AddTraverseComponent, config)
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                result.SurveyID = this.surveyContext.Survey.ID;
                if (!result.EndPoint || !result.EndPoint.ID) {
                    result.EndPoint = result.SurveyMeasurement[result.SurveyMeasurement.length - 1].PointTo;
                }
                this.travService.saveToDatabase(result)
                    .subscribe(() => {
                    // this.travMeasService.updateTraverseSummaries(this.surveyContext.SurveyID);
                });
            }
            else {
                console.log("Cancel");
            }
        });
    }
};
TravserseSummaryListComponent = __decorate([
    core_1.Component({
        selector: "traverse-summary-list",
        templateUrl: "traverse-summary-list.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentSurveyProvider,
        webAPI_1.TraverseMeasurementSummarySubjectProvider,
        webAPI_1.TraverseServiceHttp,
        material_1.MdDialog])
], TravserseSummaryListComponent);
exports.TravserseSummaryListComponent = TravserseSummaryListComponent;
//# sourceMappingURL=travserse-summary-list.js.map