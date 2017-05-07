"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const INV_180 = 1 / 180;
const TO_RADIANS = Math.PI * INV_180;
const FROM_RADIANS = 180.0 / Math.PI;
class PolarImpl {
    constructor(survMeasFrom) {
        if (survMeasFrom) {
            this.HDistance = survMeasFrom.HorizDistance;
            this.RadiansBearing = PolarImpl.toRadians(survMeasFrom.Bearing);
            this.VDistance = survMeasFrom.VertDistance;
        }
    }
    static toRadians(degBearing) {
        return degBearing * TO_RADIANS;
    }
    static fromRadians(radians) {
        return radians * FROM_RADIANS;
    }
    toRectangular() {
        let rectReturn = new RectangularImpl();
        rectReturn.X = this.HDistance * Math.sin(this.RadiansBearing);
        rectReturn.Y = this.HDistance * Math.cos(this.RadiansBearing);
        rectReturn.Z = this.VDistance;
        return rectReturn;
    }
}
class RectangularImpl {
    toPolar() {
        let polarReturn = new PolarImpl();
        polarReturn.VDistance = this.Z;
        polarReturn.HDistance = Math.sqrt(this.X * this.X + this.Y * this.Y);
        polarReturn.RadiansBearing = Math.atan2(this.Y, this.X);
        if (polarReturn.RadiansBearing < 0) {
            polarReturn.RadiansBearing += 2 * Math.PI;
        }
        return polarReturn;
    }
}
const core_1 = require("@angular/core");
const SurveyPoint_1 = require("../surveyDb/types/SurveyPoint");
let SurveyCalculator = class SurveyCalculator {
    convertMeasurementToPolar(survMeas) {
        return new PolarImpl(survMeas);
    }
    toDegrees(degMinSec) {
        let degrees = Math.floor(degMinSec);
        let minutes = Math.floor((degMinSec - degrees) * 100);
        let seconds = Math.floor(((degMinSec - degrees) * 100 - minutes) * 100);
        return degrees + minutes / 60 + seconds / 3600;
    }
    toDMS(degrees) {
        let degs = Math.floor(degrees);
        let minutes = Math.floor((degrees - degs) * 60);
        let seconds = Math.floor(((degrees - degs) * 60 - minutes) * 60);
        return degrees + minutes / 100 + seconds / 10000;
    }
    updateMeasurement(meas) {
        let polarPt = this.convertMeasurementToPolar(meas);
        let rectPt = polarPt.toRectangular();
        let newSurveyPt = new SurveyPoint_1.SurveyPoint();
        if (!meas.PointTo) {
            meas.PointTo = new SurveyPoint_1.SurveyPoint();
        }
        meas.PointTo.X = meas.PointFrom.X + rectPt.X;
        meas.PointTo.Y = meas.PointFrom.Y + rectPt.Y;
        meas.PointTo.Z = meas.PointFrom.Z + rectPt.Z;
        return true;
    }
};
SurveyCalculator = __decorate([
    core_1.Injectable()
], SurveyCalculator);
exports.SurveyCalculator = SurveyCalculator;
//# sourceMappingURL=surveyCalculator.js.map