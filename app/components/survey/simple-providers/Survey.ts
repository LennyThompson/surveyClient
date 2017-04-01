// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {Survey} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type Survey

@Injectable()
export class CurrentSurveyProvider
{
    m_Survey: Survey;

    get Survey(): Survey
    {
        if(!this.m_Survey)
        {
            this.m_Survey = new Survey();
        }
        return this.m_Survey;
    }

    set Survey(value: Survey)
    {
        this.m_Survey = value;
    }

    hasExistingSurvey(): boolean
    {
        return !!this.m_Survey;
    }
}

// Declare injectable provider for id context of type Survey

@Injectable()
export class SurveyContextProvider
{
    m_ID: number;

    get SurveyID(): number
    {
        return this.m_ID;
    }

    set SurveyID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type Survey

@Injectable()
export class CurrentSurveyListProvider
{
    m_listSurvey: Survey[];

    get Surveys(): Survey[]
    {
        if(!this.m_listSurvey)
        {
            this.m_listSurvey = new Array<Survey>();
        }
        return this.m_listSurvey;
    }

    set Surveys(value: Survey[])
    {
        this.m_listSurvey = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyHttp: SurveyServiceHttp,
        private _SurveyProvider: CurrentSurveyProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyHttp.loadSurveyFromDatabase(ID)
        .subscribe(
                (localSurvey: Survey) => edit(localSurvey)
        );
    }

    edit(editSurvey: Survey)
    {
        this._SurveyProvider.Survey = editSurvey;
        this._dialogService.open(EditSurveyComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyHttp.updateToDatabase(result)
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
