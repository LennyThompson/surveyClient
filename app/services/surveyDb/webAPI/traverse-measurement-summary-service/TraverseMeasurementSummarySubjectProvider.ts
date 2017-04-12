// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {TraverseMeasurementSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyMeasurementProvider } from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";
import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";


import { TraverseMeasurementSummaryServiceHttp } from "./TraverseMeasurementSummaryServiceHttp";

@Injectable()
export class TraverseMeasurementSummarySubjectProvider
{
    private _summary: BehaviorSubject<TraverseMeasurementSummary[]>;
    _SurveySummaries: Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>;
    _TraverseSummary: Map<number, BehaviorSubject<TraverseMeasurementSummary>>;

    constructor
    (
        private _TraverseMeasurementSummaryService : TraverseMeasurementSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseMeasurementSummarySummaries(): Observable<TraverseMeasurementSummary[]>
    {
         if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey_ID;
            if(!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>();
            }
            if(!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<TraverseMeasurementSummary[]>([]));
            }
            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }


        if(!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseMeasurementSummary[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseMeasurementSummarySummary(): Observable<TraverseMeasurementSummary>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse_ID;
            if(!this._TraverseSummary)
            {
                this._TraverseSummary = new Map<number, BehaviorSubject<TraverseMeasurementSummary>>();
            }
            if(!this._TraverseSummary.has(key))
            {
                this._TraverseSummary.set(key, new BehaviorSubject<TraverseMeasurementSummary>(null));
            }

            this.update();
            return this._TraverseSummary.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }

    update()
    {
        if
        (
            this._TraverseCurrent.Traverse
            &&
            this._TraverseSummary.has(this._TraverseCurrent.Traverse_ID)
        )
        {
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummary.get(this._TraverseCurrent.Traverse_ID).next(result)
                );
        }

        this._TraverseMeasurementSummaryService.loadForPathFromDatabase(
                this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey_ID : -1,
                -1
            )
            .subscribe(
                result => {
                    this._SurveySummaries.get(this._SurveyCurrent.Survey_ID).next(result);

                }
            );

        if(this._summary)
        {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyMeasurement()
    {
        this.update();
    }
    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForTraverse()
    {
        this.update();
    }

}
