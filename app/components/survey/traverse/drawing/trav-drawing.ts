
import {Component, ElementRef, Input} from "@angular/core";
import {
    TraverseMeasurementSummary_SurvMeas
} from "../../../../services/surveyDb/types/TraverseMeasurementSummary";
import * as d3 from "d3";
import * as lodash from "lodash";
import {CoordFormat} from "../../pipes/format-coord";
import {BearingFormat} from "../../pipes/format-bearing";
import {buildLine, IStyleSource} from "./drawing-measurement";

require("./trav-drawing.scss");

@Component(
    {
        selector: "traverse-drawing",
        templateUrl: "trav-drawing.html"
    }
)
export class TraverseDrawingComponent
{
    private _travMeasurements: TraverseMeasurementSummary_SurvMeas[];

    constructor
    (
        private element: ElementRef,
        private distPipe: CoordFormat,
        private bearingPipe: BearingFormat
    )
    {
    }

    @Input()
    set Measurements(value: TraverseMeasurementSummary_SurvMeas[])
    {
        this._travMeasurements = value;
        this.drawTraverse();
    }

    drawTraverse()
    {
        let widthX: number = 400;
        let offsetX: number = 100;
        let heightY: number = 250;
        let offsetY: number = 25;
        let drawWidthX: number = widthX - 2 * offsetX;
        let drawHeightY: number = heightY - 2 * offsetY;

        let svgContainer = d3.select(this.element.nativeElement)
            .append("svg")
            .attr("width", widthX)
            .attr("height", heightY);

        let styles: IStyleSource[] = [
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
            .map(meas => { return buildLine(
                meas.PtFrom.PtFromX,
                meas.PtFrom.PtFromY,
                meas.PtTo.PtToX,
                meas.PtTo.PtToY,
                this.distPipe.transform(meas.Horizontal),
                this.bearingPipe.transform(meas.Bearing),
                meas.PtTo.PtToName,
                this.getDrawRotation(meas),
                styles
            )
            })
            .value();

        let xDomain: number[] = [
            d3.min(lineData, line => d3.min([line.ptFrom.x, line.ptTo.x])),
            d3.max(lineData, line => d3.max([line.ptFrom.x, line.ptTo.x]))
        ];
        let yDomain: number[] = [
            d3.min(lineData, line => d3.min([line.ptFrom.y, line.ptTo.y])),
            d3.max(lineData, line => d3.max([line.ptFrom.y, line.ptTo.y]))
        ];

        let xScaleFact = xDomain[1] - xDomain[0] ? drawWidthX / (xDomain[1] - xDomain[0]) : 0.0;
        let yScaleFact = yDomain[1] - yDomain[0] ? drawHeightY / (yDomain[1] - yDomain[0]) : 0.0;
        if(xScaleFact && xScaleFact <= yScaleFact)
        {
            yDomain = [
                (yDomain[1] + yDomain[0]) / 2 - (drawHeightY / 2) / xScaleFact,
                (yDomain[1] + yDomain[0]) / 2 + (drawHeightY / 2) / xScaleFact
            ];
        }
        else if(yScaleFact)
        {
            xDomain = [
                (xDomain[1] + xDomain[0]) / 2 - (drawWidthX / 2) / yScaleFact,
                (xDomain[1] + xDomain[0]) / 2 + (drawWidthX / 2) / yScaleFact
            ];
        }


        let xScale = d3.scaleLinear()
            .domain(xDomain).range([offsetX, offsetX + drawWidthX]);

        let yScale = d3.scaleLinear()
            .domain(yDomain).range([drawHeightY + offsetY, offsetY]);

        lodash(lineData).forEach(
            point =>
                point.appendTo(svgContainer, xScale, yScale)

        );
    }

    getDrawRotation(measSummary: TraverseMeasurementSummary_SurvMeas): number
    {
        return measSummary.Bearing - 90;
    }
}

