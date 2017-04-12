// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {SurveySummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentProjectionProvider } from "./../projection-service/ProjectionSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";


import { SurveySummaryServiceHttp } from "./SurveySummaryServiceHttp";

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
