// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017

import {TraverseClosure} from "../types/TraverseClosure";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class TraverseClosureServiceHttp
{
    constructor(private httpService : Http)
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
