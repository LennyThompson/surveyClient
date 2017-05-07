// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun May 07 13:59:00 AEST 2017

import {SurveyImage} from "./../../types";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { SurveyImageSubjectAccessor } from "./SurveyImageSubjectAccessor";
import { CurrentSurveyImageProvider }from "./../survey-image-service/SurveyImageSimpleProvider";



@Injectable()
export class SurveyImageServiceHttp
{
    constructor
    (
        private httpService : Http
        , private _SurveyImageSubject: SurveyImageSubjectAccessor
    )
    {
    }

    saveToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .map(obsSurveyImage => this.notifyObservers(obsSurveyImage))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));

    }
    updateToDatabase(typeSurveyImage : SurveyImage) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let strJsonBody : string = typeSurveyImage.toJson();
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.httpService.put(strPath, strJsonBody, options)
                         .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
                         .map(obsSurveyImage => this.notifyObservers(obsSurveyImage))
                         .catch((error : any) => Observable.throw(error.json().error || "Server error"));
    }
    private notifyObservers(updateSurveyImage: SurveyImage): SurveyImage
    {
        this._SurveyImageSubject.signalUpdate();
        return updateSurveyImage;
    }

    loadAllFromDatabase() : Observable<SurveyImage[]>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        return this.httpService.get(strPath)
            .map((resp : Response) => SurveyImage.arrayFromJson(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }


    loadSurveyImageFromDatabase(nID : number) : Observable<SurveyImage>
    {
        let strPath : string = SurveyImageServiceHttp.buildPath();
        let params = new URLSearchParams();
        params.set('ID', nID.toString());
        return this.httpService.get(strPath, { search: params })
            .map((resp : Response) => SurveyImage.fromJsonObject(resp.json()))
            .catch((error : any) => Observable.throw("error"));
    }

    static buildPath() : string
    {
        let strPath : string = "http://localhost:49876/api" + "/SurveyImages";
        return strPath;
    }
}
