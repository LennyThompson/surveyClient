// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveyAdjustment} from "../types/SurveyAdjustment";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class SurveyAdjustmentServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    saveToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyAdjustment: SurveyAdjustment): SurveyAdjustment
    {
        return updateSurveyAdjustment;
    }

    loadAllFromDatabase() : Observable<SurveyAdjustment[]>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyAdjustment.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyAdjustmentFromDatabase(nID : number) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyAdjustments";
        return strPath;
    }
}


@Injectable()
export class SurveyAdjustmentSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<SurveyAdjustment[]>>;

    constructor
    (
        private _SurveyAdjustmentService : SurveyAdjustmentServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyAdjustment[]>>();
    }

    getSurveyAdjustment(keyID?: number): Observable<SurveyAdjustment[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyAdjustment[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyAdjustmentService.loadSurveyAdjustmentFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyAdjustmentService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
