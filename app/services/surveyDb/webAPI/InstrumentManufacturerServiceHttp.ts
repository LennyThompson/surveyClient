// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {InstrumentManufacturer} from "../types/InstrumentManufacturer";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class InstrumentManufacturerServiceHttp
{
    constructor
    (
        private httpService : Http
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


@Injectable()
export class InstrumentManufacturerSubjectProvider
{
    private _mapSummaries: Map<number, BehaviorSubject<InstrumentManufacturer[]>>;

    constructor
    (
        private _InstrumentManufacturerService : InstrumentManufacturerServiceHttp
    )
    {
        this._mapSummaries = new Map<number, BehaviorSubject<InstrumentManufacturer[]>>();
    }

    getInstrumentManufacturer(keyID?: number): Observable<InstrumentManufacturer[]>
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(!this._mapSummaries.has(keyLocal))
        {
            this._mapSummaries.set(keyLocal, new BehaviorSubject<InstrumentManufacturer[]>([]));
            this.update(keyLocal);
        }
        return this._mapSummaries.get(keyLocal).asObservable();
    }

    update(keyID?: number)
    {
        let keyLocal: number = keyID ? keyID : 0;
        if(keyID)
        {
            this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(keyLocal)
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next([result])
                );
        }
        else
        {
            this._InstrumentManufacturerService.loadAllFromDatabase()
                .subscribe(
                    result => this._mapSummaries.get(keyLocal).next(result)
                );
        }
    }

}
