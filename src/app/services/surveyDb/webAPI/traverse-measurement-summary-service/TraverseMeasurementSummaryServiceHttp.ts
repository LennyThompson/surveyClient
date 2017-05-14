// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {TraverseMeasurementSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { TraverseMeasurementSummarySubjectAccessor } from "./TraverseMeasurementSummarySubjectAccessor";
import { SurveyMeasurement, SurveyPoint, Traverse } from "./../../types";

import { CurrentSurveyMeasurementProvider } from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";
import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class TraverseMeasurementSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectAccessor
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
        if (surveyID > 0)
        {
            params.set('surveyID', surveyID.toString());
        }
        if (travID > 0)
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
