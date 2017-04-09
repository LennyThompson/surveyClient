// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var element_base_1 = require("./../utils/element-base");
var forms_1 = require("@angular/forms");
var SurveyReferenceServiceHttp_1 = require("./../../../services/surveyDb/webAPI/SurveyReferenceServiceHttp");
var lodash = require("lodash");
var SurveyReferenceSelectComponent = SurveyReferenceSelectComponent_1 = (function (_super) {
    __extends(SurveyReferenceSelectComponent, _super);
    function SurveyReferenceSelectComponent(validators, asyncValidators, serviceSurveyReference) {
        var _this = _super.call(this, validators, asyncValidators) || this;
        _this.serviceSurveyReference = serviceSurveyReference;
        serviceSurveyReference.loadAllFromDatabase().subscribe(function (listSurveyReference) {
            _this.listSurveyReference = listSurveyReference;
            _this.updateValue();
        });
        return _this;
    }
    Object.defineProperty(SurveyReferenceSelectComponent.prototype, "SurveyReference", {
        get: function () {
            return this.listSurveyReference;
        },
        enumerable: true,
        configurable: true
    });
    SurveyReferenceSelectComponent.prototype.updateValue = function () {
        var _this = this;
        if (this.listSurveyReference && this.currentSurveyReference) {
            var currentType = lodash(this.listSurveyReference).find(function (type) { return type.ID === _this.currentSurveyReference.ID; });
            _super.prototype.writeValue.call(this, currentType);
        }
    };
    SurveyReferenceSelectComponent.prototype.writeValue = function (value) {
        this.currentSurveyReference = value;
        this.updateValue();
    };
    return SurveyReferenceSelectComponent;
}(element_base_1.ElementBase));
__decorate([
    core_1.ViewChild(material_1.MdSelect),
    __metadata("design:type", material_1.MdSelect)
], SurveyReferenceSelectComponent.prototype, "select", void 0);
__decorate([
    core_1.ViewChildren(material_1.MdOption),
    __metadata("design:type", core_1.QueryList)
], SurveyReferenceSelectComponent.prototype, "options", void 0);
__decorate([
    core_1.ViewChild(forms_1.NgModel),
    __metadata("design:type", forms_1.NgModel)
], SurveyReferenceSelectComponent.prototype, "model", void 0);
SurveyReferenceSelectComponent = SurveyReferenceSelectComponent_1 = __decorate([
    core_1.Component({
        selector: "survey-reference-select",
        templateUrl: "./SurveyReference.html",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: SurveyReferenceSelectComponent_1,
                multi: true,
            }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(forms_1.NG_VALIDATORS)),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(forms_1.NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array,
        Array,
        SurveyReferenceServiceHttp_1.SurveyReferenceServiceHttp])
], SurveyReferenceSelectComponent);
exports.SurveyReferenceSelectComponent = SurveyReferenceSelectComponent;
var SurveyReferenceSelectComponent_1;
//# sourceMappingURL=SurveyReference.js.map