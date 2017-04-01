// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveyReference} from "../types/SurveyReference";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";



@Injectable()
export class SurveyReferenceServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyReference: SurveyReference): SurveyReference
    {
        this._SurveyPointSummarySubject.updateForSurveyReference(updateSurveyReference);
        this._SurveySummarySubject.updateForSurveyReference(updateSurveyReference);

        return updateSurveyReference;
    }

    loadAllFromDatabase() : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyReferenceFromDatabase(nID : number) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyReferences";
        return strPath;
    }
}


@Injectable()
export class SurveyReferenceSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<SurveyReference[]>>;

    constructor
    (
        private _SurveyReferenceService : SurveyReferenceServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyReference[]>>();
    }

    getSurveyReference(keyID?: number): Observable<SurveyReference[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyReference[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyReferenceService.loadSurveyReferenceFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyReferenceService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
