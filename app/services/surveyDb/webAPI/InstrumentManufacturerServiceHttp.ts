// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import {InstrumentManufacturer} from "../types/InstrumentManufacturer";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class InstrumentManufacturerServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeInstrumentManufacturer : InstrumentManufacturer) : Observable<InstrumentManufacturer[]>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let strJsonBody : string = typeInstrumentManufacturer.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => InstrumentManufacturer.arrayFromJson(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    loadAllFromDatabase() : Observable<InstrumentManufacturer[]>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => InstrumentManufacturer.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    loadInstrumentManufacturerFromDatabase(nID : number) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath(nID);
        return this.httpService.get(strPath)
            .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath(nID? : number) : string
    {
        let strPath : string = "http://localhost:49876/api" + "/InstrumentManufacturers";
        if (nID)
        {
            strPath += "?ID=" + nID;
        }
        return strPath;
    }
}
