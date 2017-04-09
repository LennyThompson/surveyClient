// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyPointSummary} from "../types/SurveyPointSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./";

import { Survey, SurveyPoint, SurveyReference, SurveyPointType } from "./../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentSurveyReferenceProvider, CurrentSurveyPointTypeProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveyPointSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    loadAllFromDatabase() : Observable<SurveyPointSummary[]>
    {
        let strPath : string = SurveyPointSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPointSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyPointSummaryFromDatabase(nID : number) : Observable<SurveyPointSummary>
    {
        let strPath : string = SurveyPointSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyPointSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPointSummarys";
        return strPath;
    }
}


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
