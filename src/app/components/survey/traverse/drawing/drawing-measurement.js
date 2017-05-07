"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
class PointImpl {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function buildLine(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles) {
    return new LineImpl(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles);
}
exports.buildLine = buildLine;
class LineImpl {
    constructor(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles) {
        this.ptFrom = new PointImpl(xFrom, yFrom);
        this.ptTo = new PointImpl(xTo, yTo);
        this.distance = distance;
        this.bearing = bearing;
        this.ptToName = ptToName;
        this.rotation = rotation;
        this.styles = styles;
    }
    appendTo(svgContainer, xScale, yScale) {
        let deltaX = xScale(this.ptFrom.x) - xScale(this.ptTo.x);
        let deltaY = yScale(this.ptFrom.y) - yScale(this.ptTo.y);
        let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        let lineStyle = this.styles ? lodash(this.styles)
            .filter((style) => style.target === "line").first() : null;
        let gContainer = svgContainer.append("g");
        let lineAppend = gContainer.append("line")
            .attr("x1", 2)
            .attr("y1", 0)
            .attr("x2", length - 4)
            .attr("y2", 0);
        if (lineStyle) {
            lineAppend.classed(lineStyle.styleClass, true);
        }
        else {
            lineAppend.style("stroke", "blue");
            lineAppend.style("fill", "none");
        }
        gContainer
            .on("mouseover", () => {
            lineAppend.style("stroke", "red");
        })
            .on("mouseout", () => {
            lineAppend.style("stroke", "blue");
        });
        let symbolStyle = this.styles ? lodash(this.styles)
            .filter((style) => style.target === "point").first() : null;
        let symbolAppend = gContainer.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 4);
        if (symbolStyle) {
            symbolAppend.classed(symbolStyle.styleClass, true);
        }
        else {
            symbolAppend.style("stroke", "red");
            symbolAppend.style("fill", "none");
        }
        let textSize = this.getTextExtents(this.bearing, gContainer);
        gContainer.append("text")
            .attr("transform", "translate(" + (length - textSize.cx) / 2 + ", " + (-textSize.cy + 5) + ")")
            .text(this.bearing);
        textSize = this.getTextExtents(this.distance, gContainer);
        gContainer.append("text")
            .attr("transform", "translate(" + (length - textSize.cx) / 2 + ", " + (textSize.cy + 5) + ")")
            .text(this.distance);
        gContainer
            .attr("transform", "translate(" + xScale(this.ptFrom.x) + "," + yScale(this.ptFrom.y) + ") rotate(" + this.rotation + ")");
        gContainer = svgContainer.append("g");
        let textStyle = this.styles ? lodash(this.styles)
            .filter((style) => style.target === "name").first() : null;
        let textAppend = gContainer.append("text")
            .attr("transform", "translate(0, " + (-textSize.cy + 5) + ")")
            .text(this.ptToName);
        if (textStyle) {
            textAppend.classed(textStyle.styleClass, true);
        }
        gContainer
            .attr("transform", "translate(" + xScale(this.ptFrom.x) + "," + yScale(this.ptFrom.y) + ")");
    }
    getTextExtents(text, svgContainer) {
        // A slightly dodgy method to get the display length of the text...
        let textSize = { cx: 0, cy: 0 };
        svgContainer.append("g")
            .selectAll(".dummyText")
            .data([text])
            .enter()
            .append("text")
            .text(function (d) { return d; })
            .each((datum, index, group) => {
            let rectBox = group[index].getBBox();
            textSize.cx = rectBox.width / 2;
            textSize.cy = rectBox.height / 2;
        })
            .remove();
        return textSize;
    }
}
//# sourceMappingURL=drawing-measurement.js.map