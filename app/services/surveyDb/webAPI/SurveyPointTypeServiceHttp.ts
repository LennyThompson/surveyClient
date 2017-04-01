// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {SurveyPointType} from "../types/SurveyPointType";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";



@Injectable()
export class SurveyPointTypeServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyPointType : SurveyPointType) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPointType.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
                         .map(obsSurveyPointType => this.notifyObservers(obsSurveyPointType))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyPointType : SurveyPointType) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPointType.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
                         .map(obsSurveyPointType => this.notifyObservers(obsSurveyPointType))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyPointType: SurveyPointType): SurveyPointType
    {
        this._SurveyPointSummarySubject.updateForSurveyPointType(updateSurveyPointType);
        this._SurveySummarySubject.updateForSurveyPointType(updateSurveyPointType);

        return updateSurveyPointType;
    }

    loadAllFromDatabase() : Observable<SurveyPointType[]>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPointType.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyPointTypeFromDatabase(nID : number) : Observable<SurveyPointType>
    {
        let strPath : string = SurveyPointTypeServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyPointType.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPointTypes";
        return strPath;
    }
}


@Injectable()
export class SurveyPointTypeSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<SurveyPointType[]>>;

    constructor
    (
        private _SurveyPointTypeService : SurveyPointTypeServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<SurveyPointType[]>>();
    }

    getSurveyPointType(keyID?: number): Observable<SurveyPointType[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<SurveyPointType[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
