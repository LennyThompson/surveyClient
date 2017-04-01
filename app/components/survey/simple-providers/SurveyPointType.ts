// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {SurveyPointType} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type SurveyPointType

@Injectable()
export class CurrentSurveyPointTypeProvider
{
    m_SurveyPointType: SurveyPointType;

    get SurveyPointType(): SurveyPointType
    {
        if(!this.m_SurveyPointType)
        {
            this.m_SurveyPointType = new SurveyPointType();
        }
        return this.m_SurveyPointType;
    }

    set SurveyPointType(value: SurveyPointType)
    {
        this.m_SurveyPointType = value;
    }

    hasExistingSurveyPointType(): boolean
    {
        return !!this.m_SurveyPointType;
    }
}

// Declare injectable provider for id context of type SurveyPointType

@Injectable()
export class SurveyPointTypeContextProvider
{
    m_ID: number;

    get SurveyPointTypeID(): number
    {
        return this.m_ID;
    }

    set SurveyPointTypeID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type SurveyPointType

@Injectable()
export class CurrentSurveyPointTypeListProvider
{
    m_listSurveyPointType: SurveyPointType[];

    get SurveyPointTypes(): SurveyPointType[]
    {
        if(!this.m_listSurveyPointType)
        {
            this.m_listSurveyPointType = new Array<SurveyPointType>();
        }
        return this.m_listSurveyPointType;
    }

    set SurveyPointTypes(value: SurveyPointType[])
    {
        this.m_listSurveyPointType = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditSurveyPointTypeProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _SurveyPointTypeHttp: SurveyPointTypeServiceHttp,
        private _SurveyPointTypeProvider: CurrentSurveyPointTypeProvider
    )
    {
    }

    edit(ID: number)
    {
        this._SurveyPointTypeHttp.loadSurveyPointTypeFromDatabase(ID)
        .subscribe(
                (localSurveyPointType: SurveyPointType) => edit(localSurveyPointType)
        );
    }

    edit(editSurveyPointType: SurveyPointType)
    {
        this._SurveyPointTypeProvider.SurveyPointType = editSurveyPointType;
        this._dialogService.open(EditSurveyPointTypeComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._SurveyPointTypeHttp.updateToDatabase(result)
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
