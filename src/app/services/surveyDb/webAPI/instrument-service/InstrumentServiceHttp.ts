// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 14 18:02:31 AEST 2017

import {Instrument} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { InstrumentSubjectAccessor } from "./InstrumentSubjectAccessor";
import { CurrentInstrumentProvider }from "./../instrument-service/InstrumentSimpleProvider";

import { CurrentSurveyProvider } from "./../survey-service/SurveySimpleProvider";



@Injectable()
export class InstrumentServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyProvider: CurrentSurveyProvider

        , private _InstrumentSubject: InstrumentSubjectAccessor
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
        let parentID: number = this._SurveyProvider.Survey ? this._SurveyProvider.Survey.ID : this._SurveyProvider.Survey_ID;
        if (parentID > 0)
        {
            let strJsonBody : string = "{ \"ID\": " + parentID + ", Instrument: " + typeInstrument.toJson() + " }";
            let headers = new Headers({ "Content-Type": "application/json" });
            let options = new RequestOptions({ headers: headers });

            return this.httpService.post(strPath, strJsonBody, options)
                             .map((resp : Response) => this.notifyObservers(Instrument.fromJsonObject(resp.json())))
                             .catch((error : any) => Observable.throw(error.json().error || "Server error"));
        }
        throw new Error("Survey not set for Instrument, unable to save");
    }

    private notifyObservers(updateInstrument: Instrument): Instrument
    {
        this._InstrumentSubject.signalUpdate();
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
