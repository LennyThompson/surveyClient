// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {InstrumentManufacturer} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { InstrumentManufacturerSubjectAccessor } from "./InstrumentManufacturerSubjectAccessor";
import { CurrentInstrumentManufacturerProvider }from "./../instrument-manufacturer-service/InstrumentManufacturerSimpleProvider";



@Injectable()
export class InstrumentManufacturerServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _InstrumentManufacturerSubject: InstrumentManufacturerSubjectAccessor
    )
    {
    }

    saveToDatabase(typeInstrumentManufacturer : InstrumentManufacturer) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let strJsonBody : string = typeInstrumentManufacturer.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
                         .map(obsInstrumentManufacturer => this.notifyObservers(obsInstrumentManufacturer))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeInstrumentManufacturer : InstrumentManufacturer) : Observable<InstrumentManufacturer>
    {
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let strJsonBody : string = typeInstrumentManufacturer.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
                         .map(obsInstrumentManufacturer => this.notifyObservers(obsInstrumentManufacturer))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateInstrumentManufacturer: InstrumentManufacturer): InstrumentManufacturer
    {
        this._InstrumentManufacturerSubject.signalUpdate();
        return updateInstrumentManufacturer;
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
        let strPath : string = InstrumentManufacturerServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => InstrumentManufacturer.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/InstrumentManufacturers";
        return strPath;
    }
}
