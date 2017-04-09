// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {InstrumentManufacturer} from "../types/InstrumentManufacturer";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentInstrumentManufacturerProvider } from "./../../../components/survey/simple-providers";



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
    private _summary: BehaviorSubject<InstrumentManufacturer[]>;
    private _InstrumentManufacturerSummaries: Map<number, BehaviorSubject<InstrumentManufacturer>>;

    constructor
    (
        private _InstrumentManufacturerService : InstrumentManufacturerServiceHttp
        , private _InstrumentManufacturerCurrent: CurrentInstrumentManufacturerProvider

    )
    {
    }

    getInstrumentManufacturerSummaries(): Observable<InstrumentManufacturer[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<InstrumentManufacturer[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getInstrumentManufacturerSummary(): Observable<InstrumentManufacturer>
    {
        if(this._InstrumentManufacturerCurrent.InstrumentManufacturer)
        {
            let key: number = this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID;
            if(!this._InstrumentManufacturerSummaries)
            {
                this._InstrumentManufacturerSummaries = new Map<number, BehaviorSubject<InstrumentManufacturer>>();
            }
            if(!this._InstrumentManufacturerSummaries.has(key))
            {
                this._InstrumentManufacturerSummaries.set(key, new BehaviorSubject<InstrumentManufacturer>(null));
            }

            this.update();
            return this._InstrumentManufacturerSummaries.get(key).asObservable();
        }
        throw new Error("No InstrumentManufacturer current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentManufacturerCurrent.InstrumentManufacturer
            &&
            this._InstrumentManufacturerSummaries.has(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
        )
        {
            this._InstrumentManufacturerService.loadInstrumentManufacturerFromDatabase(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID)
                .subscribe(
                    result => this._InstrumentManufacturerSummaries.get(this._InstrumentManufacturerCurrent.InstrumentManufacturer.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._InstrumentManufacturerService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
