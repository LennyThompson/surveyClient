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
var SurveyPointTypeServiceHttp_1 = require("./../../../services/surveyDb/webAPI/SurveyPointTypeServiceHttp");
var lodash = require("lodash");
var SurveyPointTypeSelectComponent = SurveyPointTypeSelectComponent_1 = (function (_super) {
    __extends(SurveyPointTypeSelectComponent, _super);
    function SurveyPointTypeSelectComponent(validators, asyncValidators, serviceSurveyPointType) {
        var _this = _super.call(this, validators, asyncValidators) || this;
        _this.serviceSurveyPointType = serviceSurveyPointType;
        serviceSurveyPointType.loadAllFromDatabase().subscribe(function (listSurveyPointType) {
            _this.listSurveyPointType = listSurveyPointType;
            _this.updateValue();
        });
        return _this;
    }
    Object.defineProperty(SurveyPointTypeSelectComponent.prototype, "SurveyPointType", {
        get: function () {
            return this.listSurveyPointType;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPointTypeSelectComponent.prototype.updateValue = function () {
        var _this = this;
        if (this.listSurveyPointType && this.currentSurveyPointType) {
            var currentType = lodash(this.listSurveyPointType).find(function (type) { return type.ID === _this.currentSurveyPointType.ID; });
            _super.prototype.writeValue.call(this, currentType);
        }
    };
    SurveyPointTypeSelectComponent.prototype.writeValue = function (value) {
        this.currentSurveyPointType = value;
        this.updateValue();
    };
    return SurveyPointTypeSelectComponent;
}(element_base_1.ElementBase));
__decorate([
    core_1.ViewChild(material_1.MdSelect),
    __metadata("design:type", material_1.MdSelect)
], SurveyPointTypeSelectComponent.prototype, "select", void 0);
__decorate([
    core_1.ViewChildren(material_1.MdOption),
    __metadata("design:type", core_1.QueryList)
], SurveyPointTypeSelectComponent.prototype, "options", void 0);
__decorate([
    core_1.ViewChild(forms_1.NgModel),
    __metadata("design:type", forms_1.NgModel)
], SurveyPointTypeSelectComponent.prototype, "model", void 0);
SurveyPointTypeSelectComponent = SurveyPointTypeSelectComponent_1 = __decorate([
    core_1.Component({
        selector: "survey-point-type-select",
        templateUrl: "./SurveyPointType.html",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: SurveyPointTypeSelectComponent_1,
                multi: true,
            }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Inject(forms_1.NG_VALIDATORS)),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(forms_1.NG_ASYNC_VALIDATORS)),
    __metadata("design:paramtypes", [Array,
        Array,
        SurveyPointTypeServiceHttp_1.SurveyPointTypeServiceHttp])
], SurveyPointTypeSelectComponent);
exports.SurveyPointTypeSelectComponent = SurveyPointTypeSelectComponent;
var SurveyPointTypeSelectComponent_1;
//# sourceMappingURL=SurveyPointType.js.map