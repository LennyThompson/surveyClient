// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {SurveyPoint} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";

// This type is attempting to break the circular dependency between the SurveyPointServiceHttp and
// the subject provider SurveyPointSubjectProvider.

@Injectable()
export class SurveyPointSubjectAccessor
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