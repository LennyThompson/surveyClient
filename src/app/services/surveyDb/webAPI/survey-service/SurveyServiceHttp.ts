// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {Survey} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveySubjectAccessor } from "./SurveySubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyProvider }from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class SurveyServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySubject: SurveySubjectAccessor
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
        this._SurveySubject.signalUpdate();
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
