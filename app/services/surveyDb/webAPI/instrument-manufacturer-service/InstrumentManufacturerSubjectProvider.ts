// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {InstrumentManufacturer} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentInstrumentManufacturerProvider } from "./..";


import { InstrumentManufacturerServiceHttp } from "./..";

@Injectable()
export class InstrumentManufacturerSubjectProvider
{
    private _summary: BehaviorSubject<InstrumentManufacturer[]>;
    private _InstrumentManufacturerSummaries: Map<number, BehaviorSubject<InstrumentManufacturer>>;

    constructor
    (
        private _InstrumentManufacturerService : InstrumentManufacturerServiceHttp
        , private _InstrumentManufacturerCurrent: CurrentInstrumentManufacturerProvider

    )
    {
    }

    getInstrumentManufacturerSummaries(): Observable<InstrumentManufacturer[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<InstrumentManufacturer[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getInstrumentManufacturerSummary(): Observable<InstrumentManufacturer>
    {
        if(this._InstrumentManufacturerCurrent.InstrumentManufacturer)
        {
            let key: number = this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID;
            if(!this._InstrumentManufacturerSummaries)
            {
                this._InstrumentManufacturerSummaries = new Map<number, BehaviorSubject<InstrumentManufacturer>>();
            }
            if(!this._InstrumentManufacturerSummaries.has(key))
            {
                this._InstrumentManufacturerSummaries.set(key, new BehaviorSubject<InstrumentManufacturer>(null));
            }

            this.update();
            return this._InstrumentManufacturerSummaries.get(key).asObservable();
        }
        throw new Error("No InstrumentManufacturer current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentManufacturerCurrent.InstrumentManufacturer
            &&
            this._InstrumentManufacturerSummaries.has(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
        )
        {
            this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
                .subscribe(
                    result => this._InstrumentManufacturerSummaries.get(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._InstrumentManufacturerService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
