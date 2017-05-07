// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {SurveyReference} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveyReferenceSubjectAccessor } from "./SurveyReferenceSubjectAccessor";
import { SurveyPointSummarySubjectProvider } from "./../survey-point-summary-service/SurveyPointSummarySubjectProvider";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { CurrentSurveyReferenceProvider }from "./../survey-reference-service/SurveyReferenceSimpleProvider";



@Injectable()
export class SurveyReferenceServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyReferenceSubject: SurveyReferenceSubjectAccessor
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
        this._SurveyReferenceSubject.signalUpdate();
        this._SurveyPointSummarySubject.updateForSurveyReference();
        this._SurveySummarySubject.updateForSurveyReference();

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
