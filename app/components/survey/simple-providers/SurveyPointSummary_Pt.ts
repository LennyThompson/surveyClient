// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointSummary_Pt} from "./../../../services/surveyDb/types/SurveyPointSummary";
// Declare injectable provider for simple objects of type SurveyPointSummary_Pt

@Injectable()
export class CurrentSurveyPointSummary_PtProvider
{
    m_SurveyPointSummary_Pt: SurveyPointSummary_Pt;

    get SurveyPointSummary_Pt(): SurveyPointSummary_Pt
    {
        return this.m_SurveyPointSummary_Pt;
    }

    set SurveyPointSummary_Pt(value: SurveyPointSummary_Pt)
    {
        this.m_SurveyPointSummary_Pt = value;
    }

    hasExistingSurveyPointSummary_Pt(): boolean
    {
        return !!this.m_SurveyPointSummary_Pt;
    }
}

// Declare injectable provider for array of objects of type SurveyPointSummary_Pt

@Injectable()
export class CurrentSurveyPointSummary_PtListProvider
{
    m_listSurveyPointSummary_Pt: SurveyPointSummary_Pt[];

    get SurveyPointSummary_Pts(): SurveyPointSummary_Pt[]
    {
        return this.m_listSurveyPointSummary_Pt;
    }

    set SurveyPointSummary_Pts(value: SurveyPointSummary_Pt[])
    {
        this.m_listSurveyPointSummary_Pt = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyPointSummary_PtProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyPointSummary_PtHttp: SurveyPointSummary_PtServiceHttp,
        private _SurveyPointSummary_PtProvider: CurrentSurveyPointSummary_PtProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyPointSummary_PtHttp.loadSurveyPointSummary_PtFromDatabase(ID)
        .subscribe(
                (localSurveyPointSummary_Pt: SurveyPointSummary_Pt) => edit(localSurveyPointSummary_Pt)
        );
    }

    edit(editSurveyPointSummary_Pt: SurveyPointSummary_Pt)
    {
        this._SurveyPointSummary_PtProvider.SurveyPointSummary_Pt = editSurveyPointSummary_Pt;
        this._dialogService.open(EditSurveyPointSummary_PtComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointSummary_PtHttp.updateToDatabase(result)
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
