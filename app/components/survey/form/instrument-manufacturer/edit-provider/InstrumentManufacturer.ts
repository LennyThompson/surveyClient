// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {InstrumentManufacturer} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentManufacturerProvider} from "./../../../simple-providers";
import {InstrumentManufacturerServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditInstrumentManufacturerComponent} from "./../../";


@Injectable (
)
export class EditInstrumentManufacturerProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _InstrumentManufacturer: CurrentInstrumentManufacturerProvider,
        private _InstrumentManufacturerService: InstrumentManufacturerServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(keyId)
            .subscribe(
                (result: InstrumentManufacturer) => this.doEdit(result)
            );
    }

    private doEdit(editInstrumentManufacturer: InstrumentManufacturer)
    {
        this._InstrumentManufacturer.InstrumentManufacturer = editInstrumentManufacturer;
        this._dialogService.open(EditInstrumentManufacturerComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._InstrumentManufacturerService.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                }
                            );
                    }
                    else
                    {
                    }
                }
            );
    }

    delete(keyId: number)
    {
        this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(keyId)
            .subscribe(
                (result: InstrumentManufacturer) => this.doDelete(result)
            );
    }

    private doDelete(editInstrumentManufacturer: InstrumentManufacturer)
    {
        console.log("no yet implemented");
    }
}