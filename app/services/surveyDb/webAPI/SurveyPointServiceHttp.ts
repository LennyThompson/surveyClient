// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

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

    loadSurveyPointFromDatabase(nID : number) : Observable<SurveyPoint>
    {
        let strPath : string = SurveyPointServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPoint.fromJsonObject(resp.json()))
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
