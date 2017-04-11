// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Traverse} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./..";

import { CurrentTraverseProvider } from "./..";


import { TraverseServiceHttp } from "./..";

@Injectable()
export class TraverseSubjectProvider
{
    private _summary: BehaviorSubject<Traverse[]>;
    private _TraverseSummaries: Map<number, BehaviorSubject<Traverse>>;

    constructor
    (
        private _TraverseService : TraverseServiceHttp
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseSummaries(): Observable<Traverse[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Traverse[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseSummary(): Observable<Traverse>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse.ID;
            if(!this._TraverseSummaries)
            {
                this._TraverseSummaries = new Map<number, BehaviorSubject<Traverse>>();
            }
            if(!this._TraverseSummaries.has(key))
            {
                this._TraverseSummaries.set(key, new BehaviorSubject<Traverse>(null));
            }

            this.update();
            return this._TraverseSummaries.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseCurrent.Traverse
            &&
            this._TraverseSummaries.has(this._TraverseCurrent.Traverse.ID)
        )
        {
            this._TraverseService.loadTraverseFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummaries.get(this._TraverseCurrent.Traverse.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._TraverseService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
