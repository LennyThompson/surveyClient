// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {TraverseMeasurementSummary} from "../types/TraverseMeasurementSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
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

    loadForPathKeyDatabase(ID: number, SurveyID: number) : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
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
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadTraverseMeasurementSummaryFromDatabase(nID : number) : Observable<TraverseMeasurementSummary>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseMeasurementSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseMeasurementSummarys";
        return strPath;
    }
}
