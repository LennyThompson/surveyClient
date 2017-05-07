// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {SurveyAdjustment} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveyAdjustmentSubjectAccessor } from "./SurveyAdjustmentSubjectAccessor";
import { CurrentSurveyAdjustmentProvider }from "./../survey-adjustment-service/SurveyAdjustmentSimpleProvider";



@Injectable()
export class SurveyAdjustmentServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyAdjustmentSubject: SurveyAdjustmentSubjectAccessor
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
        this._SurveyAdjustmentSubject.signalUpdate();
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