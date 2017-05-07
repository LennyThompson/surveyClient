// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {SurveyPointSummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveyPointSummarySubjectAccessor } from "./SurveyPointSummarySubjectAccessor";
import { SurveySummarySubjectProvider } from "./../survey-summary-service/SurveySummarySubjectProvider";

import { Survey, SurveyPoint, SurveyReference, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";



@Injectable()
export class SurveyPointSummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectAccessor
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
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
        let strPath : string = SurveyPointSummaryServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyPointSummary.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyPointSummarys";
        return strPath;
    }
}
