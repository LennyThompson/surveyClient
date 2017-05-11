// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon May 08 11:01:26 AEST 2017

import {InstrumentManufacturer} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

// This type is attempting to break the circular dependency between the InstrumentManufacturerServiceHttp and
// the subject provider InstrumentManufacturerSubjectProvider.

@Injectable()
export class InstrumentManufacturerSubjectAccessor
{
    private _accessUpdate: BehaviorSubject<any>;
    constructor
    (
    )
    {
        this._accessUpdate = new BehaviorSubject(false);
    }

    public get updateSubject(): Observable<any>
    {
        return this._accessUpdate.asObservable();
    }

    public signalUpdate()
    {
        this._accessUpdate.next(true);
    }
}