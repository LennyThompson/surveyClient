// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Dec 04 21:12:49 AEST 2016

import {SurveyMeasurement} from "../types/SurveyMeasurement";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class SurveyMeasurementServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    loadAllFromDatabase() : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadSurveyMeasurementServiceFromDatabase(nID : number) : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyMeasurements";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
