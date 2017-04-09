// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyPoint} from "../types/SurveyPoint";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./";

import { CurrentSurveyPointProvider } from "./../../../components/survey/simple-providers";

import { CurrentSurveyProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveyPointServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyProvider: CurrentSurveyProvider

        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider
        , private _TraverseSummarySubject: TraverseSummarySubjectProvider
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPoint.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
                         .map(obsSurveyPoint => this.notifyObservers(obsSurveyPoint))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPoint.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
                         .map(obsSurveyPoint => this.notifyObservers(obsSurveyPoint))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    saveSurveyPointForSurvey(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint>
    {
            let strPath : string = SurveyPointServiceHttp.buildPath();
            strPath += "/addSurveyPointToSurvey";
            let strJsonBody : string = "{ \"ID\": " + this._SurveyProvider.Survey.ID + ", SurveyPoint: " + typeSurveyPoint.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => this.notifyObservers(SurveyPoint.fromJsonObject(resp.json())))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    private notifyObservers(updateSurveyPoint: SurveyPoint): SurveyPoint
    {
        this._SurveyPointSummarySubject.updateForSurveyPoint();
        this._SurveySummarySubject.updateForSurveyPoint();
        this._TraverseSummarySubject.updateForSurveyPoint();
        this._TraverseMeasurementSummarySubject.updateForSurveyPoint();

        return updateSurveyPoint;
    }

    loadAllFromDatabase() : Observable<SurveyPoint[]>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPoint.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyPointFromDatabase(nID : number) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPoints";
        return strPath;
    }
}


@Injectable()
export class SurveyPointSubjectProvider
{
    private _summary: BehaviorSubject<SurveyPoint[]>;
    private _SurveyPointSummaries: Map<number, BehaviorSubject<SurveyPoint>>;

    constructor
    (
        private _SurveyPointService : SurveyPointServiceHttp
        , private _SurveyPointCurrent: CurrentSurveyPointProvider

    )
    {
    }

    getSurveyPointSummaries(): Observable<SurveyPoint[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPoint[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyPointSummary(): Observable<SurveyPoint>
    {
        if(this._SurveyPointCurrent.SurveyPoint)
        {
            let key: number = this._SurveyPointCurrent.SurveyPoint.ID;
            if(!this._SurveyPointSummaries)
            {
                this._SurveyPointSummaries = new Map<number, BehaviorSubject<SurveyPoint>>();
            }
            if(!this._SurveyPointSummaries.has(key))
            {
                this._SurveyPointSummaries.set(key, new BehaviorSubject<SurveyPoint>(null));
            }

            this.update();
            return this._SurveyPointSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPoint current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointCurrent.SurveyPoint
            &&
            this._SurveyPointSummaries.has(this._SurveyPointCurrent.SurveyPoint.ID)
        )
        {
            this._SurveyPointService.loadSurveyPointFromDatabase(this._SurveyPointCurrent.SurveyPoint.ID)
                .subscribe(
                    result => this._SurveyPointSummaries.get(this._SurveyPointCurrent.SurveyPoint.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyPointService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
