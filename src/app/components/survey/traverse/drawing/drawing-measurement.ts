import * as lodash from "lodash";
import * as d3 from "d3";

export interface IStyleSource
{
    target: string;
    styleClass: string;
}

export interface IPoint
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

export interface ILineData
{
    ptFrom: IPoint;
    ptTo: IPoint;
    distance: string;
    bearing: string;
    rotation: number;

    appendTo(svgContainer: any, xScale: any, yScale: any);
}

export function buildLine
(
    xFrom: number,
    yFrom: number,
    xTo: number,
    yTo: number,
    distance: string,
    bearing: string,
    ptToName: string,
    rotation: number,
    styles?: IStyleSource[]
): ILineData
{
    return new LineImpl(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles);
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
    ptToName: string;
    styles: IStyleSource[];

    constructor
    (
        xFrom: number,
        yFrom: number,
        xTo: number,
        yTo: number,
        distance: string,
        bearing: string,
        ptToName: string,
        rotation: number,
        styles: IStyleSource[]
    )
    {
        this.ptFrom = new PointImpl(xFrom, yFrom);
        this.ptTo = new PointImpl(xTo, yTo);
        this.distance = distance;
        this.bearing = bearing;
        this.ptToName = ptToName;
        this.rotation = rotation;
        this.styles = styles;
    }

    appendTo(svgContainer: any, xScale: any, yScale: any)
    {
        let deltaX = xScale(this.ptFrom.x) - xScale(this.ptTo.x);
        let deltaY = yScale(this.ptFrom.y) - yScale(this.ptTo.y);
        let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        let lineStyle: IStyleSource = this.styles ? lodash(this.styles)
                                    .filter((style: IStyleSource) => style.target === "line").first() : null;

        let gContainer = svgContainer.append("g");
        let lineAppend = gContainer.append("line")
            .attr("x1", 2)
            .attr("y1", 0)
            .attr("x2", length - 4)
            .attr("y2", 0);
        if(lineStyle)
        {
            lineAppend.classed(lineStyle.styleClass, true);
        }
        else
        {
            lineAppend.style("stroke", "blue");
            lineAppend.style("fill", "none");
        }
        gContainer
            .on("mouseover", () => {
                    lineAppend.style("stroke", "red");
                }
            )
            .on("mouseout", () => {
                    lineAppend.style("stroke", "blue");
                }
            );

        let symbolStyle: IStyleSource = this.styles ? lodash(this.styles)
                .filter((style: IStyleSource) => style.target === "point").first() : null;

        let symbolAppend = gContainer.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 4);
        if(symbolStyle)
        {
            symbolAppend.classed(symbolStyle.styleClass, true);
        }
        else
        {
            symbolAppend.style("stroke", "red");
            symbolAppend.style("fill", "none");
        }

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

        gContainer = svgContainer.append("g");
        let textStyle: IStyleSource = this.styles ? lodash(this.styles)
                .filter((style: IStyleSource) => style.target === "name").first() : null;

        let textAppend = gContainer.append("text")
            .attr(
                "transform",
                "translate(0, " + (-textSize.cy + 5) + ")"
            )
            .text(this.ptToName);
        if(textStyle)
        {
            textAppend.classed(textStyle.styleClass, true);
        }

        gContainer
            .attr("transform", "translate(" + xScale(this.ptFrom.x) + "," + yScale(this.ptFrom.y) + ")");

    }

    private getTextExtents(text: string, svgContainer: any) : ISize
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

