// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Survey} from "../types/Survey";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";



@Injectable()
export class SurveyServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurvey : Survey) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let strJsonBody : string = typeSurvey.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Survey.fromJsonObject(resp.json()))
                         .map(obsSurvey => this.notifyObservers(obsSurvey))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurvey : Survey) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let strJsonBody : string = typeSurvey.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => Survey.fromJsonObject(resp.json()))
                         .map(obsSurvey => this.notifyObservers(obsSurvey))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurvey: Survey): Survey
    {
        this._SurveyPointSummarySubject.updateForSurvey(updateSurvey);
        this._SurveySummarySubject.updateForSurvey(updateSurvey);

        return updateSurvey;
    }

    loadAllFromDatabase() : Observable<Survey[]>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Survey.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyFromDatabase(nID : number) : Observable<Survey>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => Survey.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Surveys";
        return strPath;
    }
}


@Injectable()
export class SurveySubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<Survey[]>>;

    constructor
    (
        private _SurveyService : SurveyServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<Survey[]>>();
    }

    getSurvey(keyID?: number): Observable<Survey[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<Survey[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyService.loadSurveyFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
