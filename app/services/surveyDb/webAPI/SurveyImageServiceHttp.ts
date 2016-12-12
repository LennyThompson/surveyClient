// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016

import {SurveyImage} from "../types/SurveyImage";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyImageServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    loadAllFromDatabase() : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyImageServiceFromDatabase(nID : number) : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyImages";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
