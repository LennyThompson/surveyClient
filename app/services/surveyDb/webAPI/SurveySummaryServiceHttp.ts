// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveySummary} from "../types/SurveySummary";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../types";

import { CurrentSurveyProvider, CurrentSurveyPointProvider, CurrentProjectionProvider, CurrentSurveyReferenceProvider, CurrentSurveyPointTypeProvider, CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveySummaryServiceHttp
{
    constructor
    (
        private httpService : Http
    )
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
        let strPath : string = SurveySummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveySummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveySummarys";
        return strPath;
    }
}


