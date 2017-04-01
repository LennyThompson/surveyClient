// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Traverse} from "../types/Traverse";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./";



@Injectable()
export class TraverseServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectProvider
        , private _TraverseSummarySubject: TraverseSummarySubjectProvider
        , private _TraverseMeasurementSummarySubject: TraverseMeasurementSummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeTraverse : Traverse) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let strJsonBody : string = typeTraverse.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
                         .map(obsTraverse => this.notifyObservers(obsTraverse))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeTraverse : Traverse) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let strJsonBody : string = typeTraverse.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
                         .map(obsTraverse => this.notifyObservers(obsTraverse))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateTraverse: Traverse): Traverse
    {
        this._SurveySummarySubject.updateForTraverse(updateTraverse);
        this._TraverseSummarySubject.updateForTraverse(updateTraverse);
        this._TraverseMeasurementSummarySubject.updateForTraverse(updateTraverse);

        return updateTraverse;
    }

    loadAllFromDatabase() : Observable<Traverse[]>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Traverse.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadTraverseFromDatabase(nID : number) : Observable<Traverse>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Traverses";
        return strPath;
    }
}


@Injectable()
export class TraverseSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<Traverse[]>>;

    constructor
    (
        private _TraverseService : TraverseServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<Traverse[]>>();
    }

    getTraverse(keyID?: number): Observable<Traverse[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<Traverse[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._TraverseService.loadTraverseFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._TraverseService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
