// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyPointType} from "../types/SurveyPointType";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";

import { CurrentSurveyPointTypeProvider } from "./../../../components/survey/simple-providers";



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
        this._SurveyPointSummarySubject.updateForSurveyPointType();
        this._SurveySummarySubject.updateForSurveyPointType();

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
    private _summary: BehaviorSubject<SurveyPointType[]>;
    private _SurveyPointTypeSummaries: Map<number, BehaviorSubject<SurveyPointType>>;

    constructor
    (
        private _SurveyPointTypeService : SurveyPointTypeServiceHttp
        , private _SurveyPointTypeCurrent: CurrentSurveyPointTypeProvider

    )
    {
    }

    getSurveyPointTypeSummaries(): Observable<SurveyPointType[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyPointType[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyPointTypeSummary(): Observable<SurveyPointType>
    {
        if(this._SurveyPointTypeCurrent.SurveyPointType)
        {
            let key: number = this._SurveyPointTypeCurrent.SurveyPointType.ID;
            if(!this._SurveyPointTypeSummaries)
            {
                this._SurveyPointTypeSummaries = new Map<number, BehaviorSubject<SurveyPointType>>();
            }
            if(!this._SurveyPointTypeSummaries.has(key))
            {
                this._SurveyPointTypeSummaries.set(key, new BehaviorSubject<SurveyPointType>(null));
            }

            this.update();
            return this._SurveyPointTypeSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyPointType current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyPointTypeCurrent.SurveyPointType
            &&
            this._SurveyPointTypeSummaries.has(this._SurveyPointTypeCurrent.SurveyPointType.ID)
        )
        {
            this._SurveyPointTypeService.loadSurveyPointTypeFromDatabase(this._SurveyPointTypeCurrent.SurveyPointType.ID)
                .subscribe(
                    result => this._SurveyPointTypeSummaries.get(this._SurveyPointTypeCurrent.SurveyPointType.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyPointTypeService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
