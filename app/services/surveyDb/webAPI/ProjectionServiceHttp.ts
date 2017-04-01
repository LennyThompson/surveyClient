// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Projection} from "../types/Projection";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./";



@Injectable()
export class ProjectionServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveySummarySubject: SurveySummarySubjectProvider


    )
    {
    }

    saveToDatabase(typeProjection : Projection) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let strJsonBody : string = typeProjection.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Projection.fromJsonObject(resp.json()))
                         .map(obsProjection => this.notifyObservers(obsProjection))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeProjection : Projection) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let strJsonBody : string = typeProjection.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => Projection.fromJsonObject(resp.json()))
                         .map(obsProjection => this.notifyObservers(obsProjection))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateProjection: Projection): Projection
    {
        this._SurveySummarySubject.updateForProjection(updateProjection);

        return updateProjection;
    }

    loadAllFromDatabase() : Observable<Projection[]>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Projection.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadProjectionFromDatabase(nID : number) : Observable<Projection>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => Projection.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Projections";
        return strPath;
    }
}


@Injectable()
export class ProjectionSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<Projection[]>>;

    constructor
    (
        private _ProjectionService : ProjectionServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<Projection[]>>();
    }

    getProjection(keyID?: number): Observable<Projection[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<Projection[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._ProjectionService.loadProjectionFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._ProjectionService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
