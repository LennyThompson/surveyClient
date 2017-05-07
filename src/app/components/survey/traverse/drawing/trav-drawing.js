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
const d3 = require("d3");
const lodash = require("lodash");
const format_coord_1 = require("../../pipes/format-coord");
const format_bearing_1 = require("../../pipes/format-bearing");
const drawing_measurement_1 = require("./drawing-measurement");
require("./trav-drawing.scss");
let TraverseDrawingComponent = class TraverseDrawingComponent {
    constructor(element, distPipe, bearingPipe) {
        this.element = element;
        this.distPipe = distPipe;
        this.bearingPipe = bearingPipe;
    }
    set Measurements(value) {
        this._travMeasurements = value;
        this.drawTraverse();
    }
    drawTraverse() {
        let widthX = 400;
        let offsetX = 100;
        let heightY = 250;
        let offsetY = 25;
        let drawWidthX = widthX - 2 * offsetX;
        let drawHeightY = heightY - 2 * offsetY;
        let svgContainer = d3.select(this.element.nativeElement)
            .append("svg")
            .attr("width", widthX)
            .attr("height", heightY);
        let styles = [
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
        let lineData = lodash(this._travMeasurements)
            .map(meas => {
            return drawing_measurement_1.buildLine(meas.PtFrom.PtFromX, meas.PtFrom.PtFromY, meas.PtTo.PtToX, meas.PtTo.PtToY, this.distPipe.transform(meas.Horizontal), this.bearingPipe.transform(meas.Bearing), meas.PtTo.PtToName, this.getDrawRotation(meas), styles);
        })
            .value();
        let xDomain = [
            d3.min(lineData, line => d3.min([line.ptFrom.x, line.ptTo.x])),
            d3.max(lineData, line => d3.max([line.ptFrom.x, line.ptTo.x]))
        ];
        let yDomain = [
            d3.min(lineData, line => d3.min([line.ptFrom.y, line.ptTo.y])),
            d3.max(lineData, line => d3.max([line.ptFrom.y, line.ptTo.y]))
        ];
        let xScaleFact = xDomain[1] - xDomain[0] ? drawWidthX / (xDomain[1] - xDomain[0]) : 0.0;
        let yScaleFact = yDomain[1] - yDomain[0] ? drawHeightY / (yDomain[1] - yDomain[0]) : 0.0;
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
        let xScale = d3.scaleLinear()
            .domain(xDomain).range([offsetX, offsetX + drawWidthX]);
        let yScale = d3.scaleLinear()
            .domain(yDomain).range([drawHeightY + offsetY, offsetY]);
        lodash(lineData).forEach(point => point.appendTo(svgContainer, xScale, yScale));
    }
    getDrawRotation(measSummary) {
        return measSummary.Bearing - 90;
    }
};
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