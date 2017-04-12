// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {SurveyPointType} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyPointTypeProvider }from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";


import { SurveyPointTypeServiceHttp } from "./SurveyPointTypeServiceHttp";

@Injectable()
export class SurveyPointTypeSubjectProvider
{
    private _summary: BehaviorSubject<SurveyPointType[]>;
    private _SurveyPointTypeSummaries: Map<number, BehaviorSubject<SurveyPointType>>;

    constructor
    (
        private _SurveyPointTypeService : SurveyPointTypeServiceHttp
        , private _SurveyPointTypeCurrent: CurrentSurveyPointTypeProvider

    )
    {
    }

    getSurveyPointTypeSummaries(): Observable<SurveyPointType[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPointType[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyPointTypeSummary(): Observable<SurveyPointType>
    {
        if(this._SurveyPointTypeCurrent.SurveyPointType)
        {
            let key: number = this._SurveyPointTypeCurrent.SurveyPointType.ID;
            if(!this._SurveyPointTypeSummaries)
            {
                this._SurveyPointTypeSummaries = new Map<number, BehaviorSubject<SurveyPointType>>();
            }
            if(!this._SurveyPointTypeSummaries.has(key))
            {
                this._SurveyPointTypeSummaries.set(key, new BehaviorSubject<SurveyPointType>(null));
            }

            this.update();
            return this._SurveyPointTypeSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPointType current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointTypeCurrent.SurveyPointType
            &&
            this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType.ID)
        )
        {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(this._SurveyPointTypeCurrent.SurveyPointType.ID)
                .subscribe(
                    result => this._SurveyPointTypeSummaries.get(this._SurveyPointTypeCurrent.SurveyPointType.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
