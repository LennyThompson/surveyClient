// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016

import {Survey} from "../types/Survey";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurvey : Survey) : Observable<Survey[]>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        let strJsonBody : string = typeSurvey.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Survey.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    loadAllFromDatabase() : Observable<Survey[]>
    {
        let strPath : string = SurveyServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Survey.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyServiceFromDatabase(nID : number) : Observable<Survey[]>
    {
        let strPath : string = SurveyServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => Survey.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Surveys";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
