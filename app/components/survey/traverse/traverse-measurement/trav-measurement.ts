import {Component, Input, OnInit} from "@angular/core";
import {TraverseMeasurementSummary_SurvMeas} from "../../../../services/surveyDb/types/TraverseMeasurementSummary";

require("./trav-measurement.scss");

@Component(
    {
        selector: "trav-measurement",
        templateUrl: "./trav-measurement.html"
    }
)
export class TraverseMeasurementComponent implements OnInit
{
    m_travMeasurement: TraverseMeasurementSummary_SurvMeas;
    constructor()
    {
    }

    ngOnInit(): void
    {
        console.log(JSON.stringify(this.m_travMeasurement));
    }


    @Input("measurement")
    set TravMeasurement(value: TraverseMeasurementSummary_SurvMeas)
    {
        this.m_travMeasurement = value;
    }

    get TravMeasurement(): TraverseMeasurementSummary_SurvMeas
    {
        return this.m_travMeasurement;
    }
}
