// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyReference} from "../types/SurveyReference";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveyPointSummarySubjectProvider, SurveySummarySubjectProvider } from "./";

import { CurrentSurveyReferenceProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveyReferenceServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyPointSummarySubject: SurveyPointSummarySubjectProvider
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyReference : SurveyReference) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyReference.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
                         .map(obsSurveyReference => this.notifyObservers(obsSurveyReference))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyReference: SurveyReference): SurveyReference
    {
        this._SurveyPointSummarySubject.updateForSurveyReference();
        this._SurveySummarySubject.updateForSurveyReference();

        return updateSurveyReference;
    }

    loadAllFromDatabase() : Observable<SurveyReference[]>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyReference.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyReferenceFromDatabase(nID : number) : Observable<SurveyReference>
    {
        let strPath : string = SurveyReferenceServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyReference.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyReferences";
        return strPath;
    }
}


@Injectable()
export class SurveyReferenceSubjectProvider
{
    private _summary: BehaviorSubject<SurveyReference[]>;
    private _SurveyReferenceSummaries: Map<number, BehaviorSubject<SurveyReference>>;

    constructor
    (
        private _SurveyReferenceService : SurveyReferenceServiceHttp
        , private _SurveyReferenceCurrent: CurrentSurveyReferenceProvider

    )
    {
    }

    getSurveyReferenceSummaries(): Observable<SurveyReference[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyReference[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyReferenceSummary(): Observable<SurveyReference>
    {
        if(this._SurveyReferenceCurrent.SurveyReference)
        {
            let key: number = this._SurveyReferenceCurrent.SurveyReference.ID;
            if(!this._SurveyReferenceSummaries)
            {
                this._SurveyReferenceSummaries = new Map<number, BehaviorSubject<SurveyReference>>();
            }
            if(!this._SurveyReferenceSummaries.has(key))
            {
                this._SurveyReferenceSummaries.set(key, new BehaviorSubject<SurveyReference>(null));
            }

            this.update();
            return this._SurveyReferenceSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyReference current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyReferenceCurrent.SurveyReference
            &&
            this._SurveyReferenceSummaries.has(this._SurveyReferenceCurrent.SurveyReference.ID)
        )
        {
            this._SurveyReferenceService.loadSurveyReferenceFromDatabase(this._SurveyReferenceCurrent.SurveyReference.ID)
                .subscribe(
                    result => this._SurveyReferenceSummaries.get(this._SurveyReferenceCurrent.SurveyReference.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyReferenceService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
