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
var core_1 = require("@angular/core");
var d3 = require("d3");
var lodash = require("lodash");
var format_coord_1 = require("../../pipes/format-coord");
var format_bearing_1 = require("../../pipes/format-bearing");
var drawing_measurement_1 = require("./drawing-measurement");
require("./trav-drawing.scss");
var TraverseDrawingComponent = (function () {
    function TraverseDrawingComponent(element, distPipe, bearingPipe) {
        this.element = element;
        this.distPipe = distPipe;
        this.bearingPipe = bearingPipe;
    }
    Object.defineProperty(TraverseDrawingComponent.prototype, "Measurements", {
        set: function (value) {
            this._travMeasurements = value;
            this.drawTraverse();
        },
        enumerable: true,
        configurable: true
    });
    TraverseDrawingComponent.prototype.drawTraverse = function () {
        var _this = this;
        var widthX = 400;
        var offsetX = 100;
        var heightY = 250;
        var offsetY = 25;
        var drawWidthX = widthX - 2 * offsetX;
        var drawHeightY = heightY - 2 * offsetY;
        var svgContainer = d3.select(this.element.nativeElement)
            .append("svg")
            .attr("width", widthX)
            .attr("height", heightY);
        var styles = [
            {
                target: "line",
                styleClass: "traverse-line"
            },
            {
                target: "point",
                styleClass: "traverse-point"
            },
            {
                target: "name",
                styleClass: "traverse-point-name"
            }
        ];
        var lineData = lodash(this._travMeasurements)
            .map(function (meas) {
            return drawing_measurement_1.buildLine(meas.PtFrom.PtFromX, meas.PtFrom.PtFromY, meas.PtTo.PtToX, meas.PtTo.PtToY, _this.distPipe.transform(meas.Horizontal), _this.bearingPipe.transform(meas.Bearing), meas.PtTo.PtToName, _this.getDrawRotation(meas), styles);
        })
            .value();
        var xDomain = [
            d3.min(lineData, function (line) { return d3.min([line.ptFrom.x, line.ptTo.x]); }),
            d3.max(lineData, function (line) { return d3.max([line.ptFrom.x, line.ptTo.x]); })
        ];
        var yDomain = [
            d3.min(lineData, function (line) { return d3.min([line.ptFrom.y, line.ptTo.y]); }),
            d3.max(lineData, function (line) { return d3.max([line.ptFrom.y, line.ptTo.y]); })
        ];
        var xScaleFact = xDomain[1] - xDomain[0] ? drawWidthX / (xDomain[1] - xDomain[0]) : 0.0;
        var yScaleFact = yDomain[1] - yDomain[0] ? drawHeightY / (yDomain[1] - yDomain[0]) : 0.0;
        if (xScaleFact && xScaleFact <= yScaleFact) {
            yDomain = [
                (yDomain[1] + yDomain[0]) / 2 - (drawHeightY / 2) / xScaleFact,
                (yDomain[1] + yDomain[0]) / 2 + (drawHeightY / 2) / xScaleFact
            ];
        }
        else if (yScaleFact) {
            xDomain = [
                (xDomain[1] + xDomain[0]) / 2 - (drawWidthX / 2) / yScaleFact,
                (xDomain[1] + xDomain[0]) / 2 + (drawWidthX / 2) / yScaleFact
            ];
        }
        var xScale = d3.scaleLinear()
            .domain(xDomain).range([offsetX, offsetX + drawWidthX]);
        var yScale = d3.scaleLinear()
            .domain(yDomain).range([drawHeightY + offsetY, offsetY]);
        lodash(lineData).forEach(function (point) {
            return point.appendTo(svgContainer, xScale, yScale);
        });
    };
    TraverseDrawingComponent.prototype.getDrawRotation = function (measSummary) {
        return measSummary.Bearing - 90;
    };
    return TraverseDrawingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TraverseDrawingComponent.prototype, "Measurements", null);
TraverseDrawingComponent = __decorate([
    core_1.Component({
        selector: "traverse-drawing",
        templateUrl: "trav-drawing.html"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        format_coord_1.CoordFormat,
        format_bearing_1.BearingFormat])
], TraverseDrawingComponent);
exports.TraverseDrawingComponent = TraverseDrawingComponent;
//# sourceMappingURL=trav-drawing.js.map