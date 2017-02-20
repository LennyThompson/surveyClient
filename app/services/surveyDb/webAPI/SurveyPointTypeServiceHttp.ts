// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Feb 17 10:21:57 AEST 2017

import {SurveyPointType} from "../types/SurveyPointType";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyPointTypeServiceHttp
{
    constructor(private httpService : Http)
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
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
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
