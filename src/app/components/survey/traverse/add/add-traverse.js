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
const material_1 = require("@angular/material");
const surveyCalculator_1 = require("../../../../services/surveyCalc/surveyCalculator");
const webAPI_1 = require("../../../../services/surveyDb/webAPI");
const add_edit_traverse_1 = require("./add-edit-traverse");
require("./add-traverse.scss");
let AddTraverseComponent = class AddTraverseComponent extends add_edit_traverse_1.TraverseEditBaseComponent {
    constructor(_dialog, _dialogService, surveyCalc, traverseProvider, measProvider, pointProvider, pointService) {
        super(_dialogService, surveyCalc, traverseProvider, pointProvider, measProvider, pointService);
        this._dialog = _dialog;
    }
};
AddTraverseComponent = __decorate([
    core_1.Component({
        selector: "add-traverse-dialog",
        templateUrl: "add-traverse.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        material_1.MdDialog,
        surveyCalculator_1.SurveyCalculator,
        webAPI_1.CurrentTraverseProvider,
        webAPI_1.CurrentSurveyMeasurementProvider,
        webAPI_1.CurrentSurveyPointProvider,
        webAPI_1.SurveyPointServiceHttp])
], AddTraverseComponent);
exports.AddTraverseComponent = AddTraverseComponent;
//# sourceMappingURL=add-traverse.js.map