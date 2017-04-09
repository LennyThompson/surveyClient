// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {CurrentInstrumentProvider} from "./../../../simple-providers";
import {InstrumentServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditInstrumentComponent} from "./../../";


@Injectable (
)
export class EditInstrumentProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _Instrument: CurrentInstrumentProvider,
        private _InstrumentService: InstrumentServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._InstrumentService.loadInstrumentFromDatabase(keyId)
            .subscribe(
                (result: Instrument) => this.doEdit(result)
            );
    }

    private doEdit(editInstrument: Instrument)
    {
        this._Instrument.Instrument = editInstrument;
        this._dialogService.open(EditInstrumentComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._InstrumentService.updateToDatabase(result)
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
        this._InstrumentService.loadInstrumentFromDatabase(keyId)
            .subscribe(
                (result: Instrument) => this.doDelete(result)
            );
    }

    private doDelete(editInstrument: Instrument)
    {
        console.log("no yet implemented");
    }
}