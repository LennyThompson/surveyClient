// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {TraverseMeasurementSummary} from "../types/TraverseMeasurementSummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../types";

import { CurrentSurveyMeasurementProvider, CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class TraverseMeasurementSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseMeasurementSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseMeasurementSummary[]>
    {
        let strPath : string = TraverseMeasurementSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        if(surveyID > 0)
        {
            params.set('surveyID', surveyID.toString());
        }
        if(travID > 0)
        {
            params.set('travID', travID.toString());
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

