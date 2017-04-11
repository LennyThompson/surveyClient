// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {Projection} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { SurveySummarySubjectProvider } from "./..";

import { CurrentProjectionProvider } from "./..";



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
