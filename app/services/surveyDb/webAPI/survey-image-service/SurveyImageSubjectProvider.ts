// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Apr 12 07:31:47 AEST 2017

import {SurveyImage} from "./../../types";

import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs/Rx";
import { CurrentSurveyImageProvider } from "./..";


import { SurveyImageServiceHttp } from "./..";

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
