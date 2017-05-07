// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {SurveySummary} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveySummarySubjectAccessor } from "./SurveySummarySubjectAccessor";
import { Survey, SurveyPoint, Projection, SurveyReference, Traverse, SurveyPointType } from "./../../types";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";
import { CurrentSurveyPointProvider } from "./../survey-point-service/SurveyPointSimpleProvider";
import { CurrentProjectionProvider } from "./../projection-service/ProjectionSimpleProvider";
import { CurrentSurveyReferenceProvider } from "./../survey-reference-service/SurveyReferenceSimpleProvider";
import { CurrentSurveyPointTypeProvider } from "./../survey-point-type-service/SurveyPointTypeSimpleProvider";
import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class SurveySummaryServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectAccessor
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
