// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Instrument} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentInstrumentProvider } from "./..";

import { CurrentSurveyProvider } from "./..";


import { InstrumentServiceHttp } from "./..";

@Injectable()
export class InstrumentSubjectProvider
{
    private _summary: BehaviorSubject<Instrument[]>;
    private _InstrumentSummaries: Map<number, BehaviorSubject<Instrument>>;

    constructor
    (
        private _InstrumentService : InstrumentServiceHttp
        , private _InstrumentCurrent: CurrentInstrumentProvider

    )
    {
    }

    getInstrumentSummaries(): Observable<Instrument[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Instrument[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getInstrumentSummary(): Observable<Instrument>
    {
        if(this._InstrumentCurrent.Instrument)
        {
            let key: number = this._InstrumentCurrent.Instrument.ID;
            if(!this._InstrumentSummaries)
            {
                this._InstrumentSummaries = new Map<number, BehaviorSubject<Instrument>>();
            }
            if(!this._InstrumentSummaries.has(key))
            {
                this._InstrumentSummaries.set(key, new BehaviorSubject<Instrument>(null));
            }

            this.update();
            return this._InstrumentSummaries.get(key).asObservable();
        }
        throw new Error("No Instrument current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentCurrent.Instrument
            &&
            this._InstrumentSummaries.has(this._InstrumentCurrent.Instrument.ID)
        )
        {
            this._InstrumentService.loadInstrumentFromDatabase(this._InstrumentCurrent.Instrument.ID)
                .subscribe(
                    result => this._InstrumentSummaries.get(this._InstrumentCurrent.Instrument.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._InstrumentService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
