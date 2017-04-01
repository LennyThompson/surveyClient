// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

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
    private _mapSummaries: Map<number, BehaviorSubject<SurveyPointSummary[]>>;

    constructor
    (
        private _SurveyPointSummaryService : SurveyPointSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _SurveyPointCurrent: CurrentSurveyPointProvider
        , private _SurveyReferenceCurrent: CurrentSurveyReferenceProvider
        , private _SurveyPointTypeCurrent: CurrentSurveyPointTypeProvider

    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyPointSummary[]>>();
    }

    getSurveyPointSummary(keyID?: number): Observable<SurveyPointSummary[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyPointSummary[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyPointSummaryService.loadSurveyPointSummaryFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

    updateForSurvey(updatedSurvey: Survey)
    {
        let keyID: number = this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadSurveyPointSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
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
            this._SurveyPointSummaryService.loadSurveyPointSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }
    updateForSurveyReference(updatedSurveyReference: SurveyReference)
    {
        let keyID: number = this._SurveyReferenceCurrent.SurveyReference ? this._SurveyReferenceCurrent.SurveyReference.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadSurveyPointSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }
    updateForSurveyPointType(updatedSurveyPointType: SurveyPointType)
    {
        let keyID: number = this._SurveyPointTypeCurrent.SurveyPointType ? this._SurveyPointTypeCurrent.SurveyPointType.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadSurveyPointSummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveyPointSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }


}
