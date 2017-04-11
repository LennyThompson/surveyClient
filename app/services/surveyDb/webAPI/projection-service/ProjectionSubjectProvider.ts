// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Projection} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./..";

import { CurrentProjectionProvider } from "./..";


import { ProjectionServiceHttp } from "./..";

@Injectable()
export class ProjectionSubjectProvider
{
    private _summary: BehaviorSubject<Projection[]>;
    private _ProjectionSummaries: Map<number, BehaviorSubject<Projection>>;

    constructor
    (
        private _ProjectionService : ProjectionServiceHttp
        , private _ProjectionCurrent: CurrentProjectionProvider

    )
    {
    }

    getProjectionSummaries(): Observable<Projection[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Projection[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getProjectionSummary(): Observable<Projection>
    {
        if(this._ProjectionCurrent.Projection)
        {
            let key: number = this._ProjectionCurrent.Projection.ID;
            if(!this._ProjectionSummaries)
            {
                this._ProjectionSummaries = new Map<number, BehaviorSubject<Projection>>();
            }
            if(!this._ProjectionSummaries.has(key))
            {
                this._ProjectionSummaries.set(key, new BehaviorSubject<Projection>(null));
            }

            this.update();
            return this._ProjectionSummaries.get(key).asObservable();
        }
        throw new Error("No Projection current context is provided");
    }


    update()
    {
        if
        (
            this._ProjectionCurrent.Projection
            &&
            this._ProjectionSummaries.has(this._ProjectionCurrent.Projection.ID)
        )
        {
            this._ProjectionService.loadProjectionFromDatabase(this._ProjectionCurrent.Projection.ID)
                .subscribe(
                    result => this._ProjectionSummaries.get(this._ProjectionCurrent.Projection.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._ProjectionService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
