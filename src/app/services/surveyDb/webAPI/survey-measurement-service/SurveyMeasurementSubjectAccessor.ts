// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {SurveyMeasurement} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

// This type is attempting to break the circular dependency between the SurveyMeasurementServiceHttp and
// the subject provider SurveyMeasurementSubjectProvider.

@Injectable()
export class SurveyMeasurementSubjectAccessor
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