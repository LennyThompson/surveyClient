// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Projection} from "../types/Projection";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./";

import { CurrentProjectionProvider } from "./../../../components/survey/simple-providers";



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
        this._SurveySummarySubject.updateForProjection();

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
    private _summary: BehaviorSubject<Projection[]>;
    private _ProjectionSummaries: Map<number, BehaviorSubject<Projection>>;

    constructor
    (
        private _ProjectionService : ProjectionServiceHttp
        , private _ProjectionCurrent: CurrentProjectionProvider

    )
    {
    }

    getProjectionSummaries(): Observable<Projection[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Projection[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getProjectionSummary(): Observable<Projection>
    {
        if(this._ProjectionCurrent.Projection)
        {
            let key: number = this._ProjectionCurrent.Projection.ID;
            if(!this._ProjectionSummaries)
            {
                this._ProjectionSummaries = new Map<number, BehaviorSubject<Projection>>();
            }
            if(!this._ProjectionSummaries.has(key))
            {
                this._ProjectionSummaries.set(key, new BehaviorSubject<Projection>(null));
            }

            this.update();
            return this._ProjectionSummaries.get(key).asObservable();
        }
        throw new Error("No Projection current context is provided");
    }


    update()
    {
        if
        (
            this._ProjectionCurrent.Projection
            &&
            this._ProjectionSummaries.has(this._ProjectionCurrent.Projection.ID)
        )
        {
            this._ProjectionService.loadProjectionFromDatabase(this._ProjectionCurrent.Projection.ID)
                .subscribe(
                    result => this._ProjectionSummaries.get(this._ProjectionCurrent.Projection.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._ProjectionService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
