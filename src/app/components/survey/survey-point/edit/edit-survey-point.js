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
const add_edit_survey_point_1 = require("../add/add-edit-survey-point");
const material_1 = require("@angular/material");
const webAPI_1 = require("../../../../services/surveyDb/webAPI");
require("./../add/add-survey-point.scss");
let EditSurveyPointComponent = class EditSurveyPointComponent extends add_edit_survey_point_1.AddEditSurveyPoint {
    constructor(pointProvider, m_dlgPoint) {
        super(pointProvider);
        this.m_dlgPoint = m_dlgPoint;
    }
    ngOnInit() {
    }
};
EditSurveyPointComponent = __decorate([
    core_1.Component({
        selector: "edit-survey-point",
        templateUrl: "./../add/add-survey-point.html"
    }),
    __metadata("design:paramtypes", [webAPI_1.CurrentSurveyPointProvider,
        material_1.MdDialogRef])
], EditSurveyPointComponent);
exports.EditSurveyPointComponent = EditSurveyPointComponent;
//# sourceMappingURL=edit-survey-point.js.map