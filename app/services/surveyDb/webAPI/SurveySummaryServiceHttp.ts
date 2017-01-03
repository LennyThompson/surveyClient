// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {SurveySummary} from "../types/SurveySummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveySummaryServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    loadAllFromDatabase() : Observable<SurveySummary[]>
    {
        let strPath : string = SurveySummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveySummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveySummaryFromDatabase(nID : number) : Observable<SurveySummary>
    {
        let strPath : string = SurveySummaryServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveySummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveySummarys";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
