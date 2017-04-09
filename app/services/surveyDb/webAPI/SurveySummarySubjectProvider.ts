import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {SurveySummary} from "../types/SurveySummary";
import {SurveySummaryServiceHttp} from "./SurveySummaryServiceHttp";


@Injectable()
export class SurveySummarySubjectProvider
{
    private _summary: BehaviorSubject<SurveySummary[]>;
    constructor
    (
        private _SurveySummaryService : SurveySummaryServiceHttp
    )
    {
    }

    getSurveySummarySummaries(): Observable<SurveySummary[]>
    {
        if(!this._summary)
        {
            this._summary = new BehaviorSubject<SurveySummary[]>([]);
        }
        this.update();
        return this._summary.asObservable();
    }

    update()
    {
        if(this._summary)
        {
            this._SurveySummaryService.loadAllFromDatabase()
                .subscribe(
                    result => this._summary.next(result)
                );
        }
    }

    public updateForSurvey()
    {
        this.update();
    }
    public updateForSurveyPoint()
    {
        this.update();
    }
    public updateForProjection()
    {
        this.update();
    }
    public updateForSurveyReference()
    {
        this.update();
    }
    public updateForTraverse()
    {
        this.update();
    }
    public updateForSurveyPointType()
    {
        this.update();
    }

}
