// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Feb 05 15:39:20 AEST 2017

import {Instrument} from "../types/Instrument";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class InstrumentServiceHttp
{
    constructor(private httpService : Http)
    {
    }

    saveToDatabase(typeInstrument : Instrument) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        let strJsonBody : string = typeInstrument.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    updateToDatabase(typeInstrument : Instrument) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        let strJsonBody : string = typeInstrument.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    saveInstrumentForSurvey(typeInstrument : Instrument, ID: number) : Observable<Instrument>
    {
            let strPath : string = InstrumentServiceHttp.buildPath();
            strPath += "/addInstrumentToSurvey";
            let strJsonBody : string = "{ \"ID\": " + ID + ", Instrument: " + typeInstrument.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    loadAllFromDatabase() : Observable<Instrument[]>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => Instrument.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadInstrumentFromDatabase(nID : number) : Observable<Instrument>
    {
        let strPath : string = InstrumentServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => Instrument.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/Instruments";
        return strPath;
    }
}
