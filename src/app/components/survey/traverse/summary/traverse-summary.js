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
const types_1 = require("../../../../services/surveyDb/types");
const material_1 = require("@angular/material");
const webAPI_1 = require("../../../../services/surveyDb/webAPI");
const edit_traverse_1 = require("../edit/edit-traverse");
require("./traverse-summary.scss");
let TraverseSummaryComponent = class TraverseSummaryComponent {
    constructor(traveService, dialog, travProvider) {
        this.traveService = traveService;
        this.dialog = dialog;
        this.travProvider = travProvider;
    }
    ngOnChanges(changes) {
    }
    set Traverse(traverse) {
        this.m_traverse = traverse;
    }
    get Traverse() {
        return this.m_traverse;
    }
    onEditTraverse() {
        this.traveService.loadTraverseFromDatabase(this.m_traverse.ID)
            .first()
            .subscribe((traverse) => {
            this.travProvider.Traverse = traverse;
            let config = new material_1.MdDialogConfig();
            this.dialog.open(edit_traverse_1.EditTraverseComponent, config)
                .afterClosed()
                .subscribe((result) => {
                if (result) {
                    console.log(JSON.stringify(result));
                    this.traveService.updateToDatabase(result)
                        .subscribe((result) => {
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
    }
};
__decorate([
    core_1.Input("Traverse"),
    __metadata("design:type", types_1.TraverseMeasurementSummary),
    __metadata("design:paramtypes", [types_1.TraverseMeasurementSummary])
], TraverseSummaryComponent.prototype, "Traverse", null);
TraverseSummaryComponent = __decorate([
    core_1.Component({
        selector: "traverse-summary",
        templateUrl: "traverse-summary.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.TraverseServiceHttp,
        material_1.MdDialog,
        webAPI_1.CurrentTraverseProvider])
], TraverseSummaryComponent);
exports.TraverseSummaryComponent = TraverseSummaryComponent;
//# sourceMappingURL=traverse-summary.js.map