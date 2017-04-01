// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {Pt_PtType} from "./../../../services/surveyDb/types/";
// Declare injectable provider for simple objects of type Pt_PtType

@Injectable()
export class CurrentPt_PtTypeProvider
{
    m_Pt_PtType: Pt_PtType;

    get Pt_PtType(): Pt_PtType
    {
        return this.m_Pt_PtType;
    }

    set Pt_PtType(value: Pt_PtType)
    {
        this.m_Pt_PtType = value;
    }

    hasExistingPt_PtType(): boolean
    {
        return !!this.m_Pt_PtType;
    }
}

// Declare injectable provider for array of objects of type Pt_PtType

@Injectable()
export class CurrentPt_PtTypeListProvider
{
    m_listPt_PtType: Pt_PtType[];

    get Pt_PtTypes(): Pt_PtType[]
    {
        return this.m_listPt_PtType;
    }

    set Pt_PtTypes(value: Pt_PtType[])
    {
        this.m_listPt_PtType = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditPt_PtTypeProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _Pt_PtTypeHttp: Pt_PtTypeServiceHttp,
        private _Pt_PtTypeProvider: CurrentPt_PtTypeProvider
    )
    {
    }

    edit(ID: number)
    {
        this._Pt_PtTypeHttp.loadPt_PtTypeFromDatabase(ID)
        .subscribe(
                (localPt_PtType: Pt_PtType) => edit(localPt_PtType)
        );
    }

    edit(editPt_PtType: Pt_PtType)
    {
        this._Pt_PtTypeProvider.Pt_PtType = editPt_PtType;
        this._dialogService.open(EditPt_PtTypeComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._Pt_PtTypeHttp.updateToDatabase(result)
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
