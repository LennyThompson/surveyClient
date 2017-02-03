
import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {TraverseMeasurementSummaryServiceHttp} from "../../../services/surveyDb/webAPI/TraverseMeasurementSummaryServiceHttp";
import {
    TraverseMeasurementSummary,
    TraverseMeasurementSummary_SurvMeas
} from "../../../services/surveyDb/types/TraverseMeasurementSummary";

require("./traverse.scss");

@Component(
    {
        selector: "traverse",
        templateUrl: "./traverse.html"
    }
)
export class TraverseSummaryComponent implements OnChanges
{
    m_traverse: TraverseMeasurementSummary;
    constructor()
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
    }

    get Traverse(): TraverseMeasurementSummary
    {
        return this.m_traverse;
    }
}