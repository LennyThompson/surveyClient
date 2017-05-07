// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import {SurveyMeasurement} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveyMeasurementSubjectAccessor } from "./SurveyMeasurementSubjectAccessor";
import { TraverseMeasurementSummarySubjectProvider } from "./../traverse-measurement-summary-service/TraverseMeasurementSummarySubjectProvider";

import { CurrentSurveyMeasurementProvider }from "./../survey-measurement-service/SurveyMeasurementSimpleProvider";

import { CurrentTraverseProvider } from "./../traverse-service/TraverseSimpleProvider";



@Injectable()
export class SurveyMeasurementServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _TraverseProvider: CurrentTraverseProvider

        , private _SurveyMeasurementSubject: SurveyMeasurementSubjectAccessor
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyMeasurement.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
                         .map(obsSurveyMeasurement => this.notifyObservers(obsSurveyMeasurement))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    saveSurveyMeasurementForTraverse(typeSurveyMeasurement : SurveyMeasurement) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        strPath += "/addSurveyMeasurementToTraverse";
        let parentID: number = this._TraverseProvider.Traverse ? this._TraverseProvider.Traverse.ID : this._TraverseProvider.Traverse_ID;
        if(parentID > 0)
        {
            let strJsonBody : string = "{ \"ID\": " + parentID + ", SurveyMeasurement: " + typeSurveyMeasurement.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => this.notifyObservers(SurveyMeasurement.fromJsonObject(resp.json())))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
        }
        throw new Error("Traverse not set for SurveyMeasurement, unable to save");
    }

    private notifyObservers(updateSurveyMeasurement: SurveyMeasurement): SurveyMeasurement
    {
        this._SurveyMeasurementSubject.signalUpdate();
        this._TraverseMeasurementSummarySubject.updateForSurveyMeasurement();

        return updateSurveyMeasurement;
    }

    loadAllFromDatabase() : Observable<SurveyMeasurement[]>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyMeasurement.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyMeasurementFromDatabase(nID : number) : Observable<SurveyMeasurement>
    {
        let strPath : string = SurveyMeasurementServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyMeasurement.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyMeasurements";
        return strPath;
    }
}
