// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyAdjustment} from "../types/SurveyAdjustment";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentSurveyAdjustmentProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveyAdjustmentServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    saveToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyAdjustment : SurveyAdjustment) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyAdjustment.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
                         .map(obsSurveyAdjustment => this.notifyObservers(obsSurveyAdjustment))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyAdjustment: SurveyAdjustment): SurveyAdjustment
    {
        return updateSurveyAdjustment;
    }

    loadAllFromDatabase() : Observable<SurveyAdjustment[]>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyAdjustment.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyAdjustmentFromDatabase(nID : number) : Observable<SurveyAdjustment>
    {
        let strPath : string = SurveyAdjustmentServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyAdjustment.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyAdjustments";
        return strPath;
    }
}


@Injectable()
export class SurveyAdjustmentSubjectProvider
{
    private _summary: BehaviorSubject<SurveyAdjustment[]>;
    private _SurveyAdjustmentSummaries: Map<number, BehaviorSubject<SurveyAdjustment>>;

    constructor
    (
        private _SurveyAdjustmentService : SurveyAdjustmentServiceHttp
        , private _SurveyAdjustmentCurrent: CurrentSurveyAdjustmentProvider

    )
    {
    }

    getSurveyAdjustmentSummaries(): Observable<SurveyAdjustment[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyAdjustment[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyAdjustmentSummary(): Observable<SurveyAdjustment>
    {
        if(this._SurveyAdjustmentCurrent.SurveyAdjustment)
        {
            let key: number = this._SurveyAdjustmentCurrent.SurveyAdjustment.ID;
            if(!this._SurveyAdjustmentSummaries)
            {
                this._SurveyAdjustmentSummaries = new Map<number, BehaviorSubject<SurveyAdjustment>>();
            }
            if(!this._SurveyAdjustmentSummaries.has(key))
            {
                this._SurveyAdjustmentSummaries.set(key, new BehaviorSubject<SurveyAdjustment>(null));
            }

            this.update();
            return this._SurveyAdjustmentSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyAdjustment current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyAdjustmentCurrent.SurveyAdjustment
            &&
            this._SurveyAdjustmentSummaries.has(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
        )
        {
            this._SurveyAdjustmentService.loadSurveyAdjustmentFromDatabase(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID)
                .subscribe(
                    result => this._SurveyAdjustmentSummaries.get(this._SurveyAdjustmentCurrent.SurveyAdjustment.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyAdjustmentService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
