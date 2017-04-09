"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = require("lodash");
var PointImpl = (function () {
    function PointImpl(x, y) {
        this.x = x;
        this.y = y;
    }
    return PointImpl;
}());
function buildLine(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles) {
    return new LineImpl(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles);
}
exports.buildLine = buildLine;
var LineImpl = (function () {
    function LineImpl(xFrom, yFrom, xTo, yTo, distance, bearing, ptToName, rotation, styles) {
        this.ptFrom = new PointImpl(xFrom, yFrom);
        this.ptTo = new PointImpl(xTo, yTo);
        this.distance = distance;
        this.bearing = bearing;
        this.ptToName = ptToName;
        this.rotation = rotation;
        this.styles = styles;
    }
    LineImpl.prototype.appendTo = function (svgContainer, xScale, yScale) {
        var deltaX = xScale(this.ptFrom.x) - xScale(this.ptTo.x);
        var deltaY = yScale(this.ptFrom.y) - yScale(this.ptTo.y);
        var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        var lineStyle = this.styles ? lodash(this.styles)
            .filter(function (style) { return style.target === "line"; }).first() : null;
        var gContainer = svgContainer.append("g");
        var lineAppend = gContainer.append("line")
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
            .on("mouseover", function () {
            lineAppend.style("stroke", "red");
        })
            .on("mouseout", function () {
            lineAppend.style("stroke", "blue");
        });
        var symbolStyle = this.styles ? lodash(this.styles)
            .filter(function (style) { return style.target === "point"; }).first() : null;
        var symbolAppend = gContainer.append("circle")
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
        var textSize = this.getTextExtents(this.bearing, gContainer);
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
        var textStyle = this.styles ? lodash(this.styles)
            .filter(function (style) { return style.target === "name"; }).first() : null;
        var textAppend = gContainer.append("text")
            .attr("transform", "translate(0, " + (-textSize.cy + 5) + ")")
            .text(this.ptToName);
        if (textStyle) {
            textAppend.classed(textStyle.styleClass, true);
        }
        gContainer
            .attr("transform", "translate(" + xScale(this.ptFrom.x) + "," + yScale(this.ptFrom.y) + ")");
    };
    LineImpl.prototype.getTextExtents = function (text, svgContainer) {
        // A slightly dodgy method to get the display length of the text...
        var textSize = { cx: 0, cy: 0 };
        svgContainer.append("g")
            .selectAll(".dummyText")
            .data([text])
            .enter()
            .append("text")
            .text(function (d) { return d; })
            .each(function (datum, index, group) {
            var rectBox = group[index].getBBox();
            textSize.cx = rectBox.width / 2;
            textSize.cy = rectBox.height / 2;
        })
            .remove();
        return textSize;
    };
    return LineImpl;
}());
//# sourceMappingURL=drawing-measurement.js.map