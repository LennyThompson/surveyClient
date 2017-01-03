// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {Projection} from "../types/Projection";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class ProjectionServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeProjection : Projection) : Observable<Projection[]>
    {
        let strPath : string = ProjectionServiceHttp.buildPath();
        let strJsonBody : string = typeProjection.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Projection.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
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
        let strPath : string = ProjectionServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => Projection.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Projections";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
