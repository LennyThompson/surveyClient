// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {TraverseClosure} from "../types/TraverseClosure";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentTraverseClosureProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class TraverseClosureServiceHttp
{
    constructor
    (
        private httpService : Http
    )
    {
    }

    saveToDatabase(typeTraverseClosure : TraverseClosure) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let strJsonBody : string = typeTraverseClosure.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
                         .map(obsTraverseClosure => this.notifyObservers(obsTraverseClosure))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeTraverseClosure : TraverseClosure) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let strJsonBody : string = typeTraverseClosure.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
                         .map(obsTraverseClosure => this.notifyObservers(obsTraverseClosure))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateTraverseClosure: TraverseClosure): TraverseClosure
    {
        return updateTraverseClosure;
    }

    loadAllFromDatabase() : Observable<TraverseClosure[]>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseClosure.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadTraverseClosureFromDatabase(nID : number) : Observable<TraverseClosure>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseClosures";
        return strPath;
    }
}


@Injectable()
export class TraverseClosureSubjectProvider
{
    private _summary: BehaviorSubject<TraverseClosure[]>;
    private _TraverseClosureSummaries: Map<number, BehaviorSubject<TraverseClosure>>;

    constructor
    (
        private _TraverseClosureService : TraverseClosureServiceHttp
        , private _TraverseClosureCurrent: CurrentTraverseClosureProvider

    )
    {
    }

    getTraverseClosureSummaries(): Observable<TraverseClosure[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseClosure[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseClosureSummary(): Observable<TraverseClosure>
    {
        if(this._TraverseClosureCurrent.TraverseClosure)
        {
            let key: number = this._TraverseClosureCurrent.TraverseClosure.ID;
            if(!this._TraverseClosureSummaries)
            {
                this._TraverseClosureSummaries = new Map<number, BehaviorSubject<TraverseClosure>>();
            }
            if(!this._TraverseClosureSummaries.has(key))
            {
                this._TraverseClosureSummaries.set(key, new BehaviorSubject<TraverseClosure>(null));
            }

            this.update();
            return this._TraverseClosureSummaries.get(key).asObservable();
        }
        throw new Error("No TraverseClosure current context is provided");
    }


    update()
    {
        if
        (
            this._TraverseClosureCurrent.TraverseClosure
            &&
            this._TraverseClosureSummaries.has(this._TraverseClosureCurrent.TraverseClosure.ID)
        )
        {
            this._TraverseClosureService.loadTraverseClosureFromDatabase(this._TraverseClosureCurrent.TraverseClosure.ID)
                .subscribe(
                    result => this._TraverseClosureSummaries.get(this._TraverseClosureCurrent.TraverseClosure.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._TraverseClosureService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
