// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {TraverseMeasurementSummary} from "../types/TraverseMeasurementSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class TraverseMeasurementSummaryServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    loadAllFromDatabase() : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadTraverseMeasurementSummaryFromDatabase(nID : number) : Observable<TraverseMeasurementSummary>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseMeasurementSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseMeasurementSummarys";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
