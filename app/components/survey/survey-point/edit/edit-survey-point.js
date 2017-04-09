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
var add_edit_survey_point_1 = require("../add/add-edit-survey-point");
var simple_providers_1 = require("../../simple-providers");
var material_1 = require("@angular/material");
require("./../add/add-survey-point.scss");
var EditSurveyPointComponent = (function (_super) {
    __extends(EditSurveyPointComponent, _super);
    function EditSurveyPointComponent(pointProvider, m_dlgPoint) {
        var _this = _super.call(this, pointProvider) || this;
        _this.m_dlgPoint = m_dlgPoint;
        return _this;
    }
    EditSurveyPointComponent.prototype.ngOnInit = function () {
    };
    return EditSurveyPointComponent;
}(add_edit_survey_point_1.AddEditSurveyPoint));
EditSurveyPointComponent = __decorate([
    core_1.Component({
        selector: "edit-survey-point",
        templateUrl: "./../add/add-survey-point.html"
    }),
    __metadata("design:paramtypes", [simple_providers_1.CurrentSurveyPointProvider,
        material_1.MdDialogRef])
], EditSurveyPointComponent);
exports.EditSurveyPointComponent = EditSurveyPointComponent;
//# sourceMappingURL=edit-survey-point.js.map