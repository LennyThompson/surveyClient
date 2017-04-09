// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyMeasurement} from "../types/SurveyMeasurement";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { TraverseMeasurementSummarySubjectProvider } from "./";

import { CurrentSurveyMeasurementProvider } from "./../../../components/survey/simple-providers";

import { CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



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
                             .map((resp : Response) => this.notifyObservers(SurveyMeasurement.fromJsonObject(resp.json())))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    private notifyObservers(updateSurveyMeasurement: SurveyMeasurement): SurveyMeasurement
    {
        this._TraverseMeasurementSummarySubject.updateForSurveyMeasurement();

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
    private _summary: BehaviorSubject<SurveyMeasurement[]>;
    private _SurveyMeasurementSummaries: Map<number, BehaviorSubject<SurveyMeasurement>>;

    constructor
    (
        private _SurveyMeasurementService : SurveyMeasurementServiceHttp
        , private _SurveyMeasurementCurrent: CurrentSurveyMeasurementProvider

    )
    {
    }

    getSurveyMeasurementSummaries(): Observable<SurveyMeasurement[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyMeasurement[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyMeasurementSummary(): Observable<SurveyMeasurement>
    {
        if(this._SurveyMeasurementCurrent.SurveyMeasurement)
        {
            let key: number = this._SurveyMeasurementCurrent.SurveyMeasurement.ID;
            if(!this._SurveyMeasurementSummaries)
            {
                this._SurveyMeasurementSummaries = new Map<number, BehaviorSubject<SurveyMeasurement>>();
            }
            if(!this._SurveyMeasurementSummaries.has(key))
            {
                this._SurveyMeasurementSummaries.set(key, new BehaviorSubject<SurveyMeasurement>(null));
            }

            this.update();
            return this._SurveyMeasurementSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyMeasurement current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyMeasurementCurrent.SurveyMeasurement
            &&
            this._SurveyMeasurementSummaries.has(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
        )
        {
            this._SurveyMeasurementService.loadSurveyMeasurementFromDatabase(this._SurveyMeasurementCurrent.SurveyMeasurement.ID)
                .subscribe(
                    result => this._SurveyMeasurementSummaries.get(this._SurveyMeasurementCurrent.SurveyMeasurement.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyMeasurementService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
