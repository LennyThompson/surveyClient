// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {Traverse} from "../types/Traverse";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class TraverseServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeTraverse : Traverse) : Observable<Traverse[]>
    {
        let strPath : string = TraverseServiceHttp.buildPath();
        let strJsonBody : string = typeTraverse.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Traverse.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
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
        let strPath : string = TraverseServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => Traverse.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Traverses";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
