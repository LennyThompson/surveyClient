// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveySummary} from "../types/SurveySummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentProjectionProvider, CurrentSurveyReferenceProvider, CurrentSurveyPointTypeProvider, CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveySummaryServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    loadAllFromDatabase() : Observable<SurveySummary[]>
    {
        let strPath : string = SurveySummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveySummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveySummaryFromDatabase(nID : number) : Observable<SurveySummary>
    {
        let strPath : string = SurveySummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveySummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveySummarys";
        return strPath;
    }
}


@Injectable()
export class SurveySummarySubjectProvider
{
    private _summary: BehaviorSubject<SurveySummary[]>;
    private _mapSummary: Map<number, BehaviorSubject<SurveySummary>>;

    constructor
    (
        private _SurveySummaryService : SurveySummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider

    )
    {
        this._mapSummary = new Map<number, BehaviorSubject<SurveySummary>>();
    }

    getSurveySummary(keyID?: number): Observable<SurveySummary>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummary.has(keyLocal))
        {
            this._mapSummary.set(keyLocal, new BehaviorSubject<SurveySummary>(null));
            this.update(keyLocal);
        }
        return this._mapSummary.get(keyLocal).asObservable();
    }

    getSurveySummaries(): Observable<SurveySummary[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveySummary[]>([]);
            this.update(0);
        }
        return this._summary;
    }

    private update(keyID: number)
    {
        if(keyID)
        {
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummary.get(keyID).next(result)
                );
        }
        else
        {
            this._SurveySummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    updateForSurvey(updatedSurvey?: Survey)
    {
        this.update(this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey.ID : 0);
    }
    updateForSurveyPoint(updatedSurveyPoint: SurveyPoint)
    {
        let keyID: number = this._SurveyPointCurrent.SurveyPoint ? this._SurveyPointCurrent.SurveyPoint.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }
    updateForProjection(updatedProjection: Projection)
    {
        let keyID: number = this._ProjectionCurrent.Projection ? this._ProjectionCurrent.Projection.ID : 0;
        if(keyID && this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadAllFromDatabase()
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
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadAllFromDatabase()
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
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadAllFromDatabase()
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
            this._SurveySummaryService.loadSurveySummaryFromDatabase(keyID)
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
        if(this._mapSummaries.has(keyID))
        {
            this._SurveySummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyID).next(result)
                );
        }
    }


}
