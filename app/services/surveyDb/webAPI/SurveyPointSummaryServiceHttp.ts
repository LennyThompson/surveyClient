// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {SurveyPointSummary} from "../types/SurveyPointSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyPointSummaryServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    loadAllFromDatabase() : Observable<SurveyPointSummary[]>
    {
        let strPath : string = SurveyPointSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPointSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyPointSummaryFromDatabase(nID : number) : Observable<SurveyPointSummary>
    {
        let strPath : string = SurveyPointSummaryServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyPointSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPointSummarys";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
