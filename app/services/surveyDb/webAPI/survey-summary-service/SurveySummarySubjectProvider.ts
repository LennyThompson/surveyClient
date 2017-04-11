// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveySummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentProjectionProvider, CurrentSurveyReferenceProvider, CurrentSurveyPointTypeProvider, CurrentTraverseProvider } from "./..";


import { SurveySummaryServiceHttp } from "./..";

@Injectable()
export class SurveySummarySubjectProvider
{
    private _summary: BehaviorSubject<SurveySummary[]>;
    constructor
    (
        private _SurveySummaryService : SurveySummaryServiceHttp
    )
    {
    }

    getSurveySummarySummaries(): Observable<SurveySummary[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveySummary[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    update()
    {
        if(this._summary)
        {
            this._SurveySummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurvey()
    {
        this.update();
    }
    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForProjection()
    {
        this.update();
    }
    public updateForSurveyReference()
    {
        this.update();
    }
    public updateForTraverse()
    {
        this.update();
    }
    public updateForSurveyPointType()
    {
        this.update();
    }

}
