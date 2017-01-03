// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {SurveyAdjustment} from "../types/SurveyAdjustment";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyAdjustmentServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment[]>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyAdjustment.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
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
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyAdjustments";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
