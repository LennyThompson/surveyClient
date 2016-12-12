// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016

import {SurveyPoint} from "../types/SurveyPoint";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyPointServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyPoint : SurveyPoint) : Observable<SurveyPoint[]>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyPoint.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyPoint.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    loadAllFromDatabase() : Observable<SurveyPoint[]>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPoint.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyPointServiceFromDatabase(nID : number) : Observable<SurveyPoint[]>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPoint.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPoints";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
