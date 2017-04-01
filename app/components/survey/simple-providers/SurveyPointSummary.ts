// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointSummary} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryProvider
{
    m_SurveyPointSummary: SurveyPointSummary;

    get SurveyPointSummary(): SurveyPointSummary
    {
        return this.m_SurveyPointSummary;
    }

    set SurveyPointSummary(value: SurveyPointSummary)
    {
        this.m_SurveyPointSummary = value;
    }

    hasExistingSurveyPointSummary(): boolean
    {
        return !!this.m_SurveyPointSummary;
    }
}

// Declare injectable provider for array of objects of type SurveyPointSummary

@Injectable()
export class CurrentSurveyPointSummaryListProvider
{
    m_listSurveyPointSummary: SurveyPointSummary[];

    get SurveyPointSummarys(): SurveyPointSummary[]
    {
        return this.m_listSurveyPointSummary;
    }

    set SurveyPointSummarys(value: SurveyPointSummary[])
    {
        this.m_listSurveyPointSummary = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyPointSummaryProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyPointSummaryHttp: SurveyPointSummaryServiceHttp,
        private _SurveyPointSummaryProvider: CurrentSurveyPointSummaryProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyPointSummaryHttp.loadSurveyPointSummaryFromDatabase(ID)
        .subscribe(
                (localSurveyPointSummary: SurveyPointSummary) => edit(localSurveyPointSummary)
        );
    }

    edit(editSurveyPointSummary: SurveyPointSummary)
    {
        this._SurveyPointSummaryProvider.SurveyPointSummary = editSurveyPointSummary;
        this._dialogService.open(EditSurveyPointSummaryComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointSummaryHttp.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                    // Tell parent to update...
                                    console.log("this.pointService.updateToDatabase", result);
                                }
                            );
                    }
                    else
                    {
                        console.log("Cancel");
                    }
                }
            );
    }
}
