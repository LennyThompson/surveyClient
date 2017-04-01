// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {TraverseSummary} from "../types/TraverseSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./";

import { SurveyPoint, Traverse } from "./../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class TraverseSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        if(surveyID > 0)
        {
            params.set('surveyID', surveyID.toString());
        }
        if(travID > 0)
        {
            params.set('travID', travID.toString());
        }

        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }



    loadTraverseSummaryFromDatabase(nID : number) : Observable<TraverseSummary>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseSummarys";
        return strPath;
    }
}


@Injectable()
export class TraverseSummarySubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<TraverseSummary[]>>;

    private _mapPathSummaries: Map<string, BehaviorSubject<TraverseSummary[]>>;
    constructor
    (
        private _TraverseSummaryService : TraverseSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _SurveyPointCurrent: CurrentSurveyPointProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<TraverseSummary[]>>();
        this._mapPathSummaries = new Map<string, BehaviorSubject<TraverseSummary[]>>();
    }

    getTraverseSummary(keyID?: number): Observable<TraverseSummary[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<TraverseSummary[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._TraverseSummaryService.loadTraverseSummaryFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._TraverseSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

    getForPath(Traverses: number, ID: number): Observable<TraverseSummary[]>
    {
        let strKey: string = this.buildKeyForPath(Traverses, ID);
        if(!this._mapPathSummaries.has(strKey))
        {
            this._mapPathSummaries.set(strKey, new BehaviorSubject<TraverseSummary[]>([]));
            this.updateForPath(Traverses, ID);
        }
        return this._mapPathSummaries.get(strKey).asObservable();
    }

    updateForPath(Traverses: number, ID: number)
    {
        let strKey: string = this.buildKeyForPath(Traverses, ID);
        if(this._mapPathSummaries.has(strKey))
        {
            this._TraverseSummaryService.loadForPathFromDatabase(Traverses, ID)
                .subscribe(
                    result => this._mapPathSummaries.get(strKey).next(result)
                );
        }
    }

    buildKeyForPath(Traverses: number, ID: number): string
    {
        return JSON.stringify({ Traverses: Traverses, ID: ID});
    }
    updateForSurveyPoint(updatedSurveyPoint: SurveyPoint)
    {
        let keyID: number = this._SurveyPointCurrent.SurveyPoint ? this._SurveyPointCurrent.SurveyPoint.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._TraverseSummaryService.loadTraverseSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._TraverseSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }
    updateForTraverse(updatedTraverse: Traverse)
    {
        let keyID: number = this._TraverseCurrent.Traverse ? this._TraverseCurrent.Traverse.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._TraverseSummaryService.loadTraverseSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._TraverseSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }


}
