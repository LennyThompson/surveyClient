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
const TraverseMeasurementSummary_1 = require("../../../../../services/surveyDb/types/TraverseMeasurementSummary");
require("./trav-measurement.scss");
let TraverseMeasurementSummaryComponent = class TraverseMeasurementSummaryComponent {
    constructor() {
    }
    ngOnInit() {
        console.log(JSON.stringify(this.m_travMeasurement));
    }
    set TravMeasurement(value) {
        this.m_travMeasurement = value;
    }
    get TravMeasurement() {
        return this.m_travMeasurement;
    }
};
__decorate([
    core_1.Input("measurement"),
    __metadata("design:type", TraverseMeasurementSummary_1.TraverseMeasurementSummary_SurvMeas),
    __metadata("design:paramtypes", [TraverseMeasurementSummary_1.TraverseMeasurementSummary_SurvMeas])
], TraverseMeasurementSummaryComponent.prototype, "TravMeasurement", null);
TraverseMeasurementSummaryComponent = __decorate([
    core_1.Component({
        selector: "trav-measurement",
        templateUrl: "trav-measurement.html"
    }),
    __metadata("design:paramtypes", [])
], TraverseMeasurementSummaryComponent);
exports.TraverseMeasurementSummaryComponent = TraverseMeasurementSummaryComponent;
//# sourceMappingURL=trav-measurement.js.map