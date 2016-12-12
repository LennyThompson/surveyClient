// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016

import {SurveyReference} from "../types/SurveyReference";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyReferenceServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    loadAllFromDatabase() : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyReferenceServiceFromDatabase(nID : number) : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyReferences";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
