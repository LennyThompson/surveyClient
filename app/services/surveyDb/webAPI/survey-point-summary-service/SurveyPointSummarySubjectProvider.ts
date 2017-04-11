// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveyPointSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./..";

import { Survey, SurveyPoint, SurveyReference, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentSurveyReferenceProvider, CurrentSurveyPointTypeProvider } from "./..";


import { SurveyPointSummaryServiceHttp } from "./..";

@Injectable()
export class SurveyPointSummarySubjectProvider
{
    private _summary: BehaviorSubject<SurveyPointSummary[]>;
    constructor
    (
        private _SurveyPointSummaryService : SurveyPointSummaryServiceHttp
    )
    {
    }

    getSurveyPointSummarySummaries(): Observable<SurveyPointSummary[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPointSummary[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    update()
    {
        if(this._summary)
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
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
    public updateForSurveyReference()
    {
        this.update();
    }
    public updateForSurveyPointType()
    {
        this.update();
    }

}
