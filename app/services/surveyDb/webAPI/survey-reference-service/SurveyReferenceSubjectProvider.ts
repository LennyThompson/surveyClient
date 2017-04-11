// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveyReference} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./..";

import { CurrentSurveyReferenceProvider } from "./..";


import { SurveyReferenceServiceHttp } from "./..";

@Injectable()
export class SurveyReferenceSubjectProvider
{
    private _summary: BehaviorSubject<SurveyReference[]>;
    private _SurveyReferenceSummaries: Map<number, BehaviorSubject<SurveyReference>>;

    constructor
    (
        private _SurveyReferenceService : SurveyReferenceServiceHttp
        , private _SurveyReferenceCurrent: CurrentSurveyReferenceProvider

    )
    {
    }

    getSurveyReferenceSummaries(): Observable<SurveyReference[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyReference[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyReferenceSummary(): Observable<SurveyReference>
    {
        if(this._SurveyReferenceCurrent.SurveyReference)
        {
            let key: number = this._SurveyReferenceCurrent.SurveyReference.ID;
            if(!this._SurveyReferenceSummaries)
            {
                this._SurveyReferenceSummaries = new Map<number, BehaviorSubject<SurveyReference>>();
            }
            if(!this._SurveyReferenceSummaries.has(key))
            {
                this._SurveyReferenceSummaries.set(key, new BehaviorSubject<SurveyReference>(null));
            }

            this.update();
            return this._SurveyReferenceSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyReference current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyReferenceCurrent.SurveyReference
            &&
            this._SurveyReferenceSummaries.has(this._SurveyReferenceCurrent.SurveyReference.ID)
        )
        {
            this._SurveyReferenceService.loadSurveyReferenceFromDatabase(this._SurveyReferenceCurrent.SurveyReference.ID)
                .subscribe(
                    result => this._SurveyReferenceSummaries.get(this._SurveyReferenceCurrent.SurveyReference.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyReferenceService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
