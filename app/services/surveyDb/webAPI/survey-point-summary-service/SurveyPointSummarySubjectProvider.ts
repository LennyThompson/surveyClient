// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {SurveyPointSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { Survey, SurveyPoint, SurveyReference, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";


import { SurveyPointSummaryServiceHttp } from "./SurveyPointSummaryServiceHttp";

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
