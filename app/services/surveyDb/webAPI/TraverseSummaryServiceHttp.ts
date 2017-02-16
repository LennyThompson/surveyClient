// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {TraverseSummary} from "../types/TraverseSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
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

    loadForPathKeyDatabase(ID: number, SurveyID: number) : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        if(ID > 0)
        {
            params.set('ID', ID.toString());
        }
        if(SurveyID > 0)
        {
            params.set('SurveyID', SurveyID.toString());
        }

        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadTraverseSummaryFromDatabase(nID : number) : Observable<TraverseSummary>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseSummarys";
        return strPath;
    }
}
