
import {Component, Input, OnChanges, SimpleChanges, ElementRef, asNativeElements} from "@angular/core";
import {TraverseMeasurementSummaryServiceHttp} from "../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {
    TraverseMeasurementSummary,
    TraverseMeasurementSummary_SurvMeas, SurvMeas_PtFrom
} from "../../../services/surveyDb/types/TraverseMeasurementSummary";
import * as d3 from "d3";
import * as lodash from "lodash";
import {interpolate} from "@angular/core/src/linker/view_utils";
import {CoordFormat} from "../pipes/format-coord";
import {BearingFormat} from "../pipes/format-bearing";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {AddTraverseComponent} from "./add/add-traverse";
import {TraverseServiceHttp} from "../../../services/surveyDb/webAPI/TraverseServiceHttp";

require("./traverse-summary.scss");

interface IPoint
{
    x: number;
    y: number;
}

class PointImpl implements IPoint
{
    x: number;
    y: number;
    constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }
}

interface ILineData
{
    ptFrom: IPoint;
    ptTo: IPoint;
    distance: string;
    bearing: string;
}

interface ISize
{
    cx: number;
    cy: number;
}

class LineImpl implements ILineData
{
    ptFrom: IPoint;
    ptTo: IPoint;
    distance: string;
    bearing: string;
    rotation: number;
    length: number;

    constructor
    (
        xFrom: number,
        yFrom: number,
        xTo: number,
        yTo: number,
        distance: string,
        bearing: string,
        rotation: number
    )
    {
        this.ptFrom = new PointImpl(xFrom, yFrom);
        this.ptTo = new PointImpl(xTo, yTo);
        this.distance = distance;
        this.bearing = bearing;
        this.rotation = rotation;
    }

    appendTo(svgContainer: any, xScale: any, yScale: any)
    {
        let deltaX = xScale(this.ptFrom.x) - xScale(this.ptTo.x);
        let deltaY = yScale(this.ptFrom.y) - yScale(this.ptTo.y);
        let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        let gContainer = svgContainer.append("g");
        gContainer.append("line")
            .attr("x1", 2)
            .attr("y1", 0)
            .attr("x2", length - 4)
            .attr("y2", 0)
            .attr("stroke", "blue")
            .attr("fill", "none");
        gContainer.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 4)
            .attr("stroke", "red")
            .attr("fill", "none");

        let textSize = this.getTextExtents(this.bearing, gContainer);
        gContainer.append("text")
            .attr(
                "transform",
                "translate(" + (length - textSize.cx) / 2 + ", " + (-textSize.cy + 5) + ")"
            )
            .text(this.bearing);
        textSize = this.getTextExtents(this.distance, gContainer);
        gContainer.append("text")
            .attr(
                "transform",
                "translate(" + (length - textSize.cx) / 2 + ", " + (textSize.cy + 5) + ")"
            )
            .text(this.distance);

        gContainer
            .attr("transform", "translate(" + xScale(this.ptFrom.x) + "," + yScale(this.ptFrom.y) + ") rotate(" + this.rotation +")");

    }

    getTextExtents(text: string, svgContainer: any) : ISize
    {
        // A slightly dodgy method to get the display length of the text...

        let textSize: ISize = { cx: 0, cy: 0 };
        svgContainer.append("g")
            .selectAll(".dummyText")
            .data([text])
            .enter()
            .append("text")
            .text(function(d) { return d})
            .each((datum, index, group) =>
            {
                let rectBox = group[index].getBBox();
                textSize.cx =  rectBox.width / 2;
                textSize.cy = rectBox.height / 2;
            })
            .remove();
        return textSize;
    }
}

@Component(
    {
        selector: "traverse-summary",
        templateUrl: "./traverse-summary.html"
    }
)
export class TraverseSummaryComponent implements OnChanges
{
    m_traverse: TraverseMeasurementSummary;
    constructor
    (
        private element: ElementRef,
        private distPipe: CoordFormat,
        private bearingPipe: BearingFormat,
        private traveService: TraverseServiceHttp,
        private dialog: MdDialog
    )
    {
    }

    ngOnChanges(changes: SimpleChanges): void
    {
    }

    @Input("Traverse")
    set Traverse(traverse: TraverseMeasurementSummary)
    {
        console.log("traverse set");
        this.m_traverse = traverse;
        this.drawTraverse();
    }

    get Traverse(): TraverseMeasurementSummary
    {
        return this.m_traverse;
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

        let lineData = lodash(this.m_traverse.SurvMeass)
                .map(meas => { return new LineImpl(
                    meas.PtFrom.PtFromX,
                    meas.PtFrom.PtFromY,
                    meas.PtTo.PtToX,
                    meas.PtTo.PtToY,
                    this.distPipe.transform(meas.Horizontal),
                    this.bearingPipe.transform(meas.Bearing),
                    this.getDrawRotation(meas)
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

