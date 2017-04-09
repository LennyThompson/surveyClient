

import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {TraverseSummary} from "../types/TraverseSummary";
import {TraverseSummaryServiceHttp} from "./TraverseSummaryServiceHttp";
import {CurrentSurveyProvider} from "../../../components/survey/simple-providers/survey/Survey";
import {CurrentTraverseProvider} from "../../../components/survey/simple-providers/traverse/Traverse";

@Injectable()
export class TraverseSummarySubjectProvider
{
    private _summary: BehaviorSubject<TraverseSummary[]>;
    _SurveySummaries: Map<number, BehaviorSubject<TraverseSummary[]>>;
    _TraverseSummary: Map<number, BehaviorSubject<TraverseSummary>>;

    constructor
    (
        private _TraverseSummaryService : TraverseSummaryServiceHttp
        , private _SurveyCurrent: CurrentSurveyProvider
        , private _TraverseCurrent: CurrentTraverseProvider

    )
    {
    }

    getTraverseSummarySummaries(): Observable<TraverseSummary[]>
    {
        if(this._SurveyCurrent.Survey)
        {
            let key: number = this._SurveyCurrent.Survey_ID;
            if(!this._SurveySummaries)
            {
                this._SurveySummaries = new Map<number, BehaviorSubject<TraverseSummary[]>>();
            }
            if(!this._SurveySummaries.has(key))
            {
                this._SurveySummaries.set(key, new BehaviorSubject<TraverseSummary[]>([]));
            }
            this.update();
            return this._SurveySummaries.get(key).asObservable();
        }


        if(!this._summary)
        {
            this._summary = new BehaviorSubject<TraverseSummary[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    getTraverseSummarySummary(): Observable<TraverseSummary>
    {
        if(this._TraverseCurrent.Traverse)
        {
            let key: number = this._TraverseCurrent.Traverse_ID;
            if(!this._TraverseSummary)
            {
                this._TraverseSummary = new Map<number, BehaviorSubject<TraverseSummary>>();
            }
            if(!this._TraverseSummary.has(key))
            {
                this._TraverseSummary.set(key, new BehaviorSubject<TraverseSummary>(null));
            }

            this.update();
            return this._TraverseSummary.get(key).asObservable();
        }
        throw new Error("No Traverse current context is provided");
    }

    update()
    {
        if
        (
            this._TraverseCurrent.Traverse
            &&
            this._TraverseSummary.has(this._TraverseCurrent.Traverse_ID)
        )
        {
            this._TraverseSummaryService.loadTraverseSummaryFromDatabase(this._TraverseCurrent.Traverse.ID)
                .subscribe(
                    result => this._TraverseSummary.get(this._TraverseCurrent.Traverse_ID).next(result)
                );
        }

        this._TraverseSummaryService.loadForPathFromDatabase(
            this._SurveyCurrent.Survey ? this._SurveyCurrent.Survey_ID : -1,
            -1
            )
            .subscribe(
                result => {
                    this._SurveySummaries.get(this._SurveyCurrent.Survey_ID).next(result);

                }
            );

        if(this._summary)
        {
            this._TraverseSummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForTraverse()
    {
        this.update();
    }

}
