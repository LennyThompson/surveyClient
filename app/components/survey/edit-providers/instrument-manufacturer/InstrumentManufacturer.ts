// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../services/surveyDb/types";
import {EditInstrumentManufacturerComponent} from "./../../form";
import {InstrumentManufacturerServiceHttp, CurrentInstrumentManufacturerProvider} from "./../../../../services/surveyDb/webAPI";

@Injectable()
export class EditInstrumentManufacturerProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _InstrumentManufacturerHttp: InstrumentManufacturerServiceHttp,
        private _InstrumentManufacturerProvider: CurrentInstrumentManufacturerProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._InstrumentManufacturerHttp.loadInstrumentManufacturerFromDatabase(ID)
        .subscribe(
                (localInstrumentManufacturer: InstrumentManufacturer) => this.editInstrumentManufacturer(localInstrumentManufacturer)
        );
    }

    public editInstrumentManufacturer(editInstrumentManufacturer: InstrumentManufacturer)
    {
        this._InstrumentManufacturerProvider.InstrumentManufacturer = editInstrumentManufacturer;
        this._dialogService.open(EditInstrumentManufacturerComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._InstrumentManufacturerHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("this.pointService.updateToDatabase", result);
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
}