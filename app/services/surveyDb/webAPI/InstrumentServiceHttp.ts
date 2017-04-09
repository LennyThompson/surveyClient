// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Instrument} from "../types/Instrument";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentInstrumentProvider } from "./../../../components/survey/simple-providers";

import { CurrentSurveyProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class InstrumentServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyProvider: CurrentSurveyProvider

    )
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
                         .map(obsInstrument => this.notifyObservers(obsInstrument))
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
                         .map(obsInstrument => this.notifyObservers(obsInstrument))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    saveInstrumentForSurvey(typeInstrument : Instrument) : Observable<Instrument>
    {
            let strPath : string = InstrumentServiceHttp.buildPath();
            strPath += "/addInstrumentToSurvey";
            let strJsonBody : string = "{ \"ID\": " + this._SurveyProvider.Survey.ID + ", Instrument: " + typeInstrument.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => this.notifyObservers(Instrument.fromJsonObject(resp.json())))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }

    private notifyObservers(updateInstrument: Instrument): Instrument
    {
        return updateInstrument;
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


@Injectable()
export class InstrumentSubjectProvider
{
    private _summary: BehaviorSubject<Instrument[]>;
    private _InstrumentSummaries: Map<number, BehaviorSubject<Instrument>>;

    constructor
    (
        private _InstrumentService : InstrumentServiceHttp
        , private _InstrumentCurrent: CurrentInstrumentProvider

    )
    {
    }

    getInstrumentSummaries(): Observable<Instrument[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<Instrument[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getInstrumentSummary(): Observable<Instrument>
    {
        if(this._InstrumentCurrent.Instrument)
        {
            let key: number = this._InstrumentCurrent.Instrument.ID;
            if(!this._InstrumentSummaries)
            {
                this._InstrumentSummaries = new Map<number, BehaviorSubject<Instrument>>();
            }
            if(!this._InstrumentSummaries.has(key))
            {
                this._InstrumentSummaries.set(key, new BehaviorSubject<Instrument>(null));
            }

            this.update();
            return this._InstrumentSummaries.get(key).asObservable();
        }
        throw new Error("No Instrument current context is provided");
    }


    update()
    {
        if
        (
            this._InstrumentCurrent.Instrument
            &&
            this._InstrumentSummaries.has(this._InstrumentCurrent.Instrument.ID)
        )
        {
            this._InstrumentService.loadInstrumentFromDatabase(this._InstrumentCurrent.Instrument.ID)
                .subscribe(
                    result => this._InstrumentSummaries.get(this._InstrumentCurrent.Instrument.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._InstrumentService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
