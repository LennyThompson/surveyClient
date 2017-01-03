// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {TraverseSummary} from "../types/TraverseSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class TraverseSummaryServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    loadAllFromDatabase() : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadTraverseSummaryFromDatabase(nID : number) : Observable<TraverseSummary>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseSummarys";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
