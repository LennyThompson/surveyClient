// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {TraverseMeasurementSummary} from "../types/TraverseMeasurementSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../types";

import { CurrentSurveyMeasurementProvider, CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class TraverseMeasurementSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
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
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }



    loadTraverseMeasurementSummaryFromDatabase(nID : number) : Observable<TraverseMeasurementSummary>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseMeasurementSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseMeasurementSummarys";
        return strPath;
    }
}


@Injectable()
export class TraverseMeasurementSummarySubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>;

    private _mapPathSummaries: Map<string, BehaviorSubject<TraverseMeasurementSummary[]>>;
    constructor
    (
        private _TraverseMeasurementSummaryService : TraverseMeasurementSummaryServiceHttp
        , private _SurveyMeasurementCurrent: CurrentSurveyMeasurementProvider
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _SurveyPointCurrent: CurrentSurveyPointProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<TraverseMeasurementSummary[]>>();
        this._mapPathSummaries = new Map<string, BehaviorSubject<TraverseMeasurementSummary[]>>();
    }

    getTraverseMeasurementSummary(keyID?: number): Observable<TraverseMeasurementSummary[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<TraverseMeasurementSummary[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

    getForPath(Traverses: number, ID: number): Observable<TraverseMeasurementSummary[]>
    {
        let strKey: string = this.buildKeyForPath(Traverses, ID);
        if(!this._mapPathSummaries.has(strKey))
        {
            this._mapPathSummaries.set(strKey, new BehaviorSubject<TraverseMeasurementSummary[]>([]));
            this.updateForPath(Traverses, ID);
        }
        return this._mapPathSummaries.get(strKey).asObservable();
    }

    updateForPath(Traverses: number, ID: number)
    {
        let strKey: string = this.buildKeyForPath(Traverses, ID);
        if(this._mapPathSummaries.has(strKey))
        {
            this._TraverseMeasurementSummaryService.loadForPathFromDatabase(Traverses, ID)
                .subscribe(
                    result => this._mapPathSummaries.get(strKey).next(result)
                );
        }
    }

    buildKeyForPath(Traverses: number, ID: number): string
    {
        return JSON.stringify({ Traverses: Traverses, ID: ID});
    }
    updateForSurveyMeasurement(updatedSurveyMeasurement: SurveyMeasurement)
    {
        let keyID: number = this._SurveyMeasurementCurrent.SurveyMeasurement ? this._SurveyMeasurementCurrent.SurveyMeasurement.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }
    updateForSurveyPoint(updatedSurveyPoint: SurveyPoint)
    {
        let keyID: number = this._SurveyPointCurrent.SurveyPoint ? this._SurveyPointCurrent.SurveyPoint.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
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
            this._TraverseMeasurementSummaryService.loadTraverseMeasurementSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._TraverseMeasurementSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }


}
