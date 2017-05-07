
import {Component, Input, OnChanges, SimpleChanges, ElementRef} from "@angular/core";
import {
    Traverse,
    TraverseMeasurementSummary
} from "../../../../services/surveyDb/types";
import * as d3 from "d3";
import * as lodash from "lodash";
import {CoordFormat} from "../../pipes/format-coord";
import {BearingFormat} from "../../pipes/format-bearing";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {TraverseServiceHttp, CurrentTraverseProvider} from "../../../../services/surveyDb/webAPI";
import {EditTraverseComponent} from "../edit/edit-traverse";

@Component(
    {
        selector: "traverse-summary",
        templateUrl: "traverse-summary.html",
        styleUrls: ["./traverse-summary.scss"]
    }
)
export class TraverseSummaryComponent implements OnChanges
{
    m_traverse: TraverseMeasurementSummary;
    constructor
    (
        private traveService: TraverseServiceHttp,
        private dialog: MdDialog,
        private travProvider: CurrentTraverseProvider
    )
    {
    }

    ngOnChanges(changes: SimpleChanges): void
    {
    }

    @Input("Traverse")
    set Traverse(traverse: TraverseMeasurementSummary)
    {
        this.m_traverse = traverse;
    }

    get Traverse(): TraverseMeasurementSummary
    {
        return this.m_traverse;
    }

    onEditTraverse()
    {
        this.traveService.loadTraverseFromDatabase(this.m_traverse.ID)
            .first()
            .subscribe(
                (traverse: Traverse) =>
                {
                    this.travProvider.Traverse = traverse;
                    let config = new MdDialogConfig();
                    this.dialog.open(EditTraverseComponent, config)
                        .afterClosed()
                        .subscribe(
                            (result) =>
                            {
                                if(result)
                                {
                                    console.log(JSON.stringify(result));
                                    this.traveService.updateToDatabase(result)
                                        .subscribe(
                                            (result) =>
                                            {
                                                // this.onUpdatePointEvent.emit(result);
                                                // // Tell parent to update...
                                                // console.log("this.pointService.updateToDatabase", result);
                                            }
                                        );
                                }
                                else
                                {
                                    console.log("Cancel");
                                }
                            }
                        );
                }
            )
    }

}

