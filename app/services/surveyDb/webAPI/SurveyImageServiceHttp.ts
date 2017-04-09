// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {SurveyImage} from "../types/SurveyImage";

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentSurveyImageProvider } from "./../../../components/survey/simple-providers";



@Injectable()
export class SurveyImageServiceHttp
{
    constructor
    (
        private httpService : Http
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


@Injectable()
export class SurveyImageSubjectProvider
{
    private _summary: BehaviorSubject<SurveyImage[]>;
    private _SurveyImageSummaries: Map<number, BehaviorSubject<SurveyImage>>;

    constructor
    (
        private _SurveyImageService : SurveyImageServiceHttp
        , private _SurveyImageCurrent: CurrentSurveyImageProvider

    )
    {
    }

    getSurveyImageSummaries(): Observable<SurveyImage[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveyImage[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getSurveyImageSummary(): Observable<SurveyImage>
    {
        if(this._SurveyImageCurrent.SurveyImage)
        {
            let key: number = this._SurveyImageCurrent.SurveyImage.ID;
            if(!this._SurveyImageSummaries)
            {
                this._SurveyImageSummaries = new Map<number, BehaviorSubject<SurveyImage>>();
            }
            if(!this._SurveyImageSummaries.has(key))
            {
                this._SurveyImageSummaries.set(key, new BehaviorSubject<SurveyImage>(null));
            }

            this.update();
            return this._SurveyImageSummaries.get(key).asObservable();
        }
        throw new Error("No SurveyImage current context is provided");
    }


    update()
    {
        if
        (
            this._SurveyImageCurrent.SurveyImage
            &&
            this._SurveyImageSummaries.has(this._SurveyImageCurrent.SurveyImage.ID)
        )
        {
            this._SurveyImageService.loadSurveyImageFromDatabase(this._SurveyImageCurrent.SurveyImage.ID)
                .subscribe(
                    result => this._SurveyImageSummaries.get(this._SurveyImageCurrent.SurveyImage.ID).next(result)
                );
        }
        if(this._summary)
        {
            this._SurveyImageService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

}
