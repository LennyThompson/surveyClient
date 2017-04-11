// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveyAdjustment} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentSurveyAdjustmentProvider } from "./..";


import { SurveyAdjustmentServiceHttp } from "./..";

@Injectable()
export class SurveyAdjustmentSubjectProvider
{
    private _summary: BehaviorSubject<SurveyAdjustment[]>;
    private _SurveyAdjustmentSummaries: Map<number, BehaviorSubject<SurveyAdjustment>>;

    constructor
    (
        private _SurveyAdjustmentService : SurveyAdjustmentServiceHttp
        , private _SurveyAdjustmentCurrent: CurrentSurveyAdjustmentProvider

    )
    {
    }

    getSurveyAdjustmentSummaries(): Observable<SurveyAdjustment[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyAdjustment[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyAdjustmentSummary(): Observable<SurveyAdjustment>
    {
        if(this._SurveyAdjustmentCurrent.SurveyAdjustment)
        {
            let key: number = this._SurveyAdjustmentCurrent.SurveyAdjustment.ID;
            if(!this._SurveyAdjustmentSummaries)
            {
                this._SurveyAdjustmentSummaries = new Map<number, BehaviorSubject<SurveyAdjustment>>();
            }
            if(!this._SurveyAdjustmentSummaries.has(key))
            {
                this._SurveyAdjustmentSummaries.set(key, new BehaviorSubject<SurveyAdjustment>(null));
            }

            this.update();
            return this._SurveyAdjustmentSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyAdjustment current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyAdjustmentCurrent.SurveyAdjustment
            &&
            this._SurveyAdjustmentSummaries.has(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
        )
        {
            this._SurveyAdjustmentService.loadSurveyAdjustmentFromDatabase(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
                .subscribe(
                    result => this._SurveyAdjustmentSummaries.get(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyAdjustmentService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
