// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {SurveyMeasurement} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyMeasurementProvider }from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";

import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";


import { SurveyMeasurementServiceHttp } from "./SurveyMeasurementServiceHttp";

@Injectable()
export class SurveyMeasurementSubjectProvider
{
    private _summary: BehaviorSubject<SurveyMeasurement[]>;
    private _SurveyMeasurementSummaries: Map<number, BehaviorSubject<SurveyMeasurement>>;

    constructor
    (
        private _SurveyMeasurementService : SurveyMeasurementServiceHttp
        , private _SurveyMeasurementCurrent: CurrentSurveyMeasurementProvider

    )
    {
    }

    getSurveyMeasurementSummaries(): Observable<SurveyMeasurement[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyMeasurement[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyMeasurementSummary(): Observable<SurveyMeasurement>
    {
        if(this._SurveyMeasurementCurrent.SurveyMeasurement)
        {
            let key: number = this._SurveyMeasurementCurrent.SurveyMeasurement.ID;
            if(!this._SurveyMeasurementSummaries)
            {
                this._SurveyMeasurementSummaries = new Map<number, BehaviorSubject<SurveyMeasurement>>();
            }
            if(!this._SurveyMeasurementSummaries.has(key))
            {
                this._SurveyMeasurementSummaries.set(key, new BehaviorSubject<SurveyMeasurement>(null));
            }

            this.update();
            return this._SurveyMeasurementSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyMeasurement current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyMeasurementCurrent.SurveyMeasurement
            &&
            this._SurveyMeasurementSummaries.has(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
        )
        {
            this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
                .subscribe(
                    result => this._SurveyMeasurementSummaries.get(this._SurveyMeasurementCurrent.SurveyMeasurement.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyMeasurementService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
