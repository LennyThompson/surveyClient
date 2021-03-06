// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Apr 13 07:50:47 AEST 2017

import {TraverseSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    loadAllFromDatabase() : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseSummary.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadForPathFromDatabase(surveyID: number, travID: number) : Observable<TraverseSummary[]>
    {
        let strPath : string = TraverseSummaryServiceHttp.buildPath();
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
