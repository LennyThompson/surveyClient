// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Survey} from "../types/Survey";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";

import { CurrentSurveyProvider } from "./../../../components/survey/simple-providers";



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
        this._SurveyPointSummarySubject.updateForSurvey();
        this._SurveySummarySubject.updateForSurvey();

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
    private _summary: BehaviorSubject<Survey[]>;
    private _SurveySummaries: Map<number, BehaviorSubject<Survey>>;

    constructor
    (
        private _SurveyService : SurveyServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider

    )
    {
    }

    getSurveySummaries(): Observable<Survey[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Survey[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveySummary(): Observable<Survey>
    {
        if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey.ID;
            if(!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<Survey>>();
            }
            if(!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<Survey>(null));
            }

            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }
        throw new Error("No Survey current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyCurrent.Survey
            &&
            this._SurveySummaries.has(this._SurveyCurrent.Survey.ID)
        )
        {
            this._SurveyService.loadSurveyFromDatabase(this._SurveyCurrent.Survey.ID)
                .subscribe(
                    result => this._SurveySummaries.get(this._SurveyCurrent.Survey.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
