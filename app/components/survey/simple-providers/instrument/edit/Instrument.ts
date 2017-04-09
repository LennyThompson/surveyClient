// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Instrument} from "./../../../../../services/surveyDb/types";
import {EditInstrumentComponent} from "./../../../form";
import {InstrumentServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {CurrentInstrumentProvider} from "./../Instrument";

@Injectable()
export class EditInstrumentProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _InstrumentHttp: InstrumentServiceHttp,
        private _InstrumentProvider: CurrentInstrumentProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._InstrumentHttp.loadInstrumentFromDatabase(ID)
        .subscribe(
                (localInstrument: Instrument) => this.editInstrument(localInstrument)
        );
    }

    public editInstrument(editInstrument: Instrument)
    {
        this._InstrumentProvider.Instrument = editInstrument;
        this._dialogService.open(EditInstrumentComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._InstrumentHttp.updateToDatabase(result)
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