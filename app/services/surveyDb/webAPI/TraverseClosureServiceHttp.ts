// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {TraverseClosure} from "../types/TraverseClosure";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class TraverseClosureServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeTraverseClosure : TraverseClosure) : Observable<TraverseClosure[]>
    {
        let strPath : string = TraverseClosureServiceHttp.buildPath();
        let strJsonBody : string = typeTraverseClosure.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => TraverseClosure.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
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
        let strPath : string = TraverseClosureServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => TraverseClosure.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/TraverseClosures";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
