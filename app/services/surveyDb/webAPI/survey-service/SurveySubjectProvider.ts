// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Survey} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./..";

import { CurrentSurveyProvider } from "./..";


import { SurveyServiceHttp } from "./..";

@Injectable()
export class SurveySubjectProvider
{
    private _summary: BehaviorSubject<Survey[]>;
    private _SurveySummaries: Map<number, BehaviorSubject<Survey>>;

    constructor
    (
        private _SurveyService : SurveyServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider

    )
    {
    }

    getSurveySummaries(): Observable<Survey[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Survey[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveySummary(): Observable<Survey>
    {
        if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey.ID;
            if(!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<Survey>>();
            }
            if(!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<Survey>(null));
            }

            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }
        throw new Error("No Survey current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyCurrent.Survey
            &&
            this._SurveySummaries.has(this._SurveyCurrent.Survey.ID)
        )
        {
            this._SurveyService.loadSurveyFromDatabase(this._SurveyCurrent.Survey.ID)
                .subscribe(
                    result => this._SurveySummaries.get(this._SurveyCurrent.Survey.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
