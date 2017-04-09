// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Traverse} from "../types/Traverse";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider, TraverseSummarySubjectProvider, TraverseMeasurementSummarySubjectProvider } from "./";

import { CurrentTraverseProvider } from "./../../../components/survey/simple-providers";



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
        this._SurveySummarySubject.updateForTraverse();
        this._TraverseSummarySubject.updateForTraverse();
        this._TraverseMeasurementSummarySubject.updateForTraverse();

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
    private _summary: BehaviorSubject<Traverse[]>;
    private _TraverseSummaries: Map<number, BehaviorSubject<Traverse>>;

    constructor
    (
        private _TraverseService : TraverseServiceHttp
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseSummaries(): Observable<Traverse[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Traverse[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseSummary(): Observable<Traverse>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse.ID;
            if(!this._TraverseSummaries)
            {
                this._TraverseSummaries = new Map<number, BehaviorSubject<Traverse>>();
            }
            if(!this._TraverseSummaries.has(key))
            {
                this._TraverseSummaries.set(key, new BehaviorSubject<Traverse>(null));
            }

            this.update();
            return this._TraverseSummaries.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseCurrent.Traverse
            &&
            this._TraverseSummaries.has(this._TraverseCurrent.Traverse.ID)
        )
        {
            this._TraverseService.loadTraverseFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummaries.get(this._TraverseCurrent.Traverse.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._TraverseService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
