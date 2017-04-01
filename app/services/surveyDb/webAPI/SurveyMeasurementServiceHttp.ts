// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveyMeasurement} from "../types/SurveyMeasurement";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseMeasurementSummarySubjectProvider } from "./";



@Injectable()
export class SurveyMeasurementServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _TraverseProvider: CurrentTraverseProvider

        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    saveSurveyMeasurementForTraverse(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
            let strPath : string = SurveyMeasurementServiceHttp.buildPath();
            strPath += "/addSurveyMeasurementToTraverse";
            let strJsonBody : string = "{ \"ID\": " + this._TraverseProvider.Traverse.ID + ", SurveyMeasurement: " + typeSurveyMeasurement.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => this.notifyObservers(SurveyMeasurement.fromJsonObject(resp.json()), ID))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    private notifyObservers(updateSurveyMeasurement: SurveyMeasurement): SurveyMeasurement
    {
        this._TraverseMeasurementSummarySubject.updateForSurveyMeasurement(updateSurveyMeasurement);

        return updateSurveyMeasurement;
    }

    loadAllFromDatabase() : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyMeasurementFromDatabase(nID : number) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyMeasurements";
        return strPath;
    }
}


@Injectable()
export class SurveyMeasurementSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<SurveyMeasurement[]>>;

    constructor
    (
        private _SurveyMeasurementService : SurveyMeasurementServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyMeasurement[]>>();
    }

    getSurveyMeasurement(keyID?: number): Observable<SurveyMeasurement[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyMeasurement[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyMeasurementService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
