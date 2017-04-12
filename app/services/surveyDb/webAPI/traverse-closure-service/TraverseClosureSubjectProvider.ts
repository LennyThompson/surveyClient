// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {TraverseClosure} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentTraverseClosureProvider }from "./../traverse-closure-service/TraverseClosureSimpleProvider";


import { TraverseClosureServiceHttp } from "./TraverseClosureServiceHttp";

@Injectable()
export class TraverseClosureSubjectProvider
{
    private _summary: BehaviorSubject<TraverseClosure[]>;
    private _TraverseClosureSummaries: Map<number, BehaviorSubject<TraverseClosure>>;

    constructor
    (
        private _TraverseClosureService : TraverseClosureServiceHttp
        , private _TraverseClosureCurrent: CurrentTraverseClosureProvider

    )
    {
    }

    getTraverseClosureSummaries(): Observable<TraverseClosure[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseClosure[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseClosureSummary(): Observable<TraverseClosure>
    {
        if(this._TraverseClosureCurrent.TraverseClosure)
        {
            let key: number = this._TraverseClosureCurrent.TraverseClosure.ID;
            if(!this._TraverseClosureSummaries)
            {
                this._TraverseClosureSummaries = new Map<number, BehaviorSubject<TraverseClosure>>();
            }
            if(!this._TraverseClosureSummaries.has(key))
            {
                this._TraverseClosureSummaries.set(key, new BehaviorSubject<TraverseClosure>(null));
            }

            this.update();
            return this._TraverseClosureSummaries.get(key).asObservable();
        }
        throw new Error("No TraverseClosure current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseClosureCurrent.TraverseClosure
            &&
            this._TraverseClosureSummaries.has(this._TraverseClosureCurrent.TraverseClosure.ID)
        )
        {
            this._TraverseClosureService.loadTraverseClosureFromDatabase(this._TraverseClosureCurrent.TraverseClosure.ID)
                .subscribe(
                    result => this._TraverseClosureSummaries.get(this._TraverseClosureCurrent.TraverseClosure.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._TraverseClosureService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
