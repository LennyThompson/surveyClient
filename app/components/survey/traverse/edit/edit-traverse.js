"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var add_edit_traverse_1 = require("../add/add-edit-traverse");
var material_1 = require("@angular/material");
var surveyCalculator_1 = require("../../../../services/surveyCalc/surveyCalculator");
var SurveyPointServiceHttp_1 = require("../../../../services/surveyDb/webAPI/SurveyPointServiceHttp");
var simple_providers_1 = require("../../simple-providers");
require("./../add/add-traverse.scss");
var EditTraverseComponent = (function (_super) {
    __extends(EditTraverseComponent, _super);
    function EditTraverseComponent(_dialog, _dialogService, surveyCalc, travProvider, editPointProvider, measProvider, pointService) {
        var _this = _super.call(this, _dialogService, surveyCalc, travProvider, editPointProvider, measProvider, pointService) || this;
        _this._dialog = _dialog;
        return _this;
    }
    return EditTraverseComponent;
}(add_edit_traverse_1.TraverseEditBaseComponent));
EditTraverseComponent = __decorate([
    core_1.Component({
        selector: "add-traverse-dialog",
        templateUrl: "./../add/add-traverse.html"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        material_1.MdDialog,
        surveyCalculator_1.SurveyCalculator,
        simple_providers_1.CurrentTraverseProvider,
        simple_providers_1.CurrentSurveyPointProvider,
        simple_providers_1.CurrentSurveyMeasurementProvider,
        SurveyPointServiceHttp_1.SurveyPointServiceHttp])
], EditTraverseComponent);
exports.EditTraverseComponent = EditTraverseComponent;
//# sourceMappingURL=edit-traverse.js.map