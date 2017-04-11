// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveyPoint} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./..";

import { CurrentSurveyPointProvider } from "./..";

import { CurrentSurveyProvider } from "./..";


import { SurveyPointServiceHttp } from "./..";

@Injectable()
export class SurveyPointSubjectProvider
{
    private _summary: BehaviorSubject<SurveyPoint[]>;
    private _SurveyPointSummaries: Map<number, BehaviorSubject<SurveyPoint>>;

    constructor
    (
        private _SurveyPointService : SurveyPointServiceHttp
        , private _SurveyPointCurrent: CurrentSurveyPointProvider

    )
    {
    }

    getSurveyPointSummaries(): Observable<SurveyPoint[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPoint[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyPointSummary(): Observable<SurveyPoint>
    {
        if(this._SurveyPointCurrent.SurveyPoint)
        {
            let key: number = this._SurveyPointCurrent.SurveyPoint.ID;
            if(!this._SurveyPointSummaries)
            {
                this._SurveyPointSummaries = new Map<number, BehaviorSubject<SurveyPoint>>();
            }
            if(!this._SurveyPointSummaries.has(key))
            {
                this._SurveyPointSummaries.set(key, new BehaviorSubject<SurveyPoint>(null));
            }

            this.update();
            return this._SurveyPointSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPoint current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointCurrent.SurveyPoint
            &&
            this._SurveyPointSummaries.has(this._SurveyPointCurrent.SurveyPoint.ID)
        )
        {
            this._SurveyPointService.loadSurveyPointFromDatabase(this._SurveyPointCurrent.SurveyPoint.ID)
                .subscribe(
                    result => this._SurveyPointSummaries.get(this._SurveyPointCurrent.SurveyPoint.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyPointService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
