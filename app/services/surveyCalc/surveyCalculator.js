"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var INV_180 = 1 / 180;
var TO_RADIANS = Math.PI * INV_180;
var FROM_RADIANS = 180.0 / Math.PI;
var PolarImpl = (function () {
    function PolarImpl(survMeasFrom) {
        if (survMeasFrom) {
            this.HDistance = survMeasFrom.HorizDistance;
            this.RadiansBearing = PolarImpl.toRadians(survMeasFrom.Bearing);
            this.VDistance = survMeasFrom.VertDistance;
        }
    }
    PolarImpl.toRadians = function (degBearing) {
        return degBearing * TO_RADIANS;
    };
    PolarImpl.fromRadians = function (radians) {
        return radians * FROM_RADIANS;
    };
    PolarImpl.prototype.toRectangular = function () {
        var rectReturn = new RectangularImpl();
        rectReturn.X = this.HDistance * Math.sin(this.RadiansBearing);
        rectReturn.Y = this.HDistance * Math.cos(this.RadiansBearing);
        rectReturn.Z = this.VDistance;
        return rectReturn;
    };
    return PolarImpl;
}());
var RectangularImpl = (function () {
    function RectangularImpl() {
    }
    RectangularImpl.prototype.toPolar = function () {
        var polarReturn = new PolarImpl();
        polarReturn.VDistance = this.Z;
        polarReturn.HDistance = Math.sqrt(this.X * this.X + this.Y * this.Y);
        polarReturn.RadiansBearing = Math.atan2(this.Y, this.X);
        if (polarReturn.RadiansBearing < 0) {
            polarReturn.RadiansBearing += 2 * Math.PI;
        }
        return polarReturn;
    };
    return RectangularImpl;
}());
var core_1 = require("@angular/core");
var SurveyPoint_1 = require("../surveyDb/types/SurveyPoint");
var SurveyCalculator = (function () {
    function SurveyCalculator() {
    }
    SurveyCalculator.prototype.convertMeasurementToPolar = function (survMeas) {
        return new PolarImpl(survMeas);
    };
    SurveyCalculator.prototype.toDegrees = function (degMinSec) {
        var degrees = Math.floor(degMinSec);
        var minutes = Math.floor((degMinSec - degrees) * 100);
        var seconds = Math.floor(((degMinSec - degrees) * 100 - minutes) * 100);
        return degrees + minutes / 60 + seconds / 3600;
    };
    SurveyCalculator.prototype.toDMS = function (degrees) {
        var degs = Math.floor(degrees);
        var minutes = Math.floor((degrees - degs) * 60);
        var seconds = Math.floor(((degrees - degs) * 60 - minutes) * 60);
        return degrees + minutes / 100 + seconds / 10000;
    };
    SurveyCalculator.prototype.updateMeasurement = function (meas) {
        var polarPt = this.convertMeasurementToPolar(meas);
        var rectPt = polarPt.toRectangular();
        var newSurveyPt = new SurveyPoint_1.SurveyPoint();
        if (!meas.PointTo) {
            meas.PointTo = new SurveyPoint_1.SurveyPoint();
        }
        meas.PointTo.X = meas.PointFrom.X + rectPt.X;
        meas.PointTo.Y = meas.PointFrom.Y + rectPt.Y;
        meas.PointTo.Z = meas.PointFrom.Z + rectPt.Z;
        return true;
    };
    return SurveyCalculator;
}());
SurveyCalculator = __decorate([
    core_1.Injectable()
], SurveyCalculator);
exports.SurveyCalculator = SurveyCalculator;
//# sourceMappingURL=surveyCalculator.js.map