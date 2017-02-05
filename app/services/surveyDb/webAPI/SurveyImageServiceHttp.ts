// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Feb 05 15:39:20 AEST 2017

import {SurveyImage} from "../types/SurveyImage";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyImageServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    updateToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    loadAllFromDatabase() : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyImageFromDatabase(nID : number) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyImages";
        return strPath;
    }
}
