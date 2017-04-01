// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveyPoint} from "../types/SurveyPoint";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./";



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
                             .map((resp : Response) => this.notifyObservers(SurveyPoint.fromJsonObject(resp.json()), ID))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    private notifyObservers(updateSurveyPoint: SurveyPoint): SurveyPoint
    {
        this._SurveyPointSummarySubject.updateForSurveyPoint(updateSurveyPoint);
        this._SurveySummarySubject.updateForSurveyPoint(updateSurveyPoint);
        this._TraverseSummarySubject.updateForSurveyPoint(updateSurveyPoint);
        this._TraverseMeasurementSummarySubject.updateForSurveyPoint(updateSurveyPoint);

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
    private _mapSummaries: Map<number, BehaviorSubject<SurveyPoint[]>>;

    constructor
    (
        private _SurveyPointService : SurveyPointServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyPoint[]>>();
    }

    getSurveyPoint(keyID?: number): Observable<SurveyPoint[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyPoint[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyPointService.loadSurveyPointFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyPointService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
