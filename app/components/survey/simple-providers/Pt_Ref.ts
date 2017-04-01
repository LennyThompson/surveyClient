// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {Pt_Ref} from "./../../../services/surveyDb/types/";
// Declare injectable provider for simple objects of type Pt_Ref

@Injectable()
export class CurrentPt_RefProvider
{
    m_Pt_Ref: Pt_Ref;

    get Pt_Ref(): Pt_Ref
    {
        return this.m_Pt_Ref;
    }

    set Pt_Ref(value: Pt_Ref)
    {
        this.m_Pt_Ref = value;
    }

    hasExistingPt_Ref(): boolean
    {
        return !!this.m_Pt_Ref;
    }
}

// Declare injectable provider for array of objects of type Pt_Ref

@Injectable()
export class CurrentPt_RefListProvider
{
    m_listPt_Ref: Pt_Ref[];

    get Pt_Refs(): Pt_Ref[]
    {
        return this.m_listPt_Ref;
    }

    set Pt_Refs(value: Pt_Ref[])
    {
        this.m_listPt_Ref = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditPt_RefProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _Pt_RefHttp: Pt_RefServiceHttp,
        private _Pt_RefProvider: CurrentPt_RefProvider
    )
    {
    }

    edit(ID: number)
    {
        this._Pt_RefHttp.loadPt_RefFromDatabase(ID)
        .subscribe(
                (localPt_Ref: Pt_Ref) => edit(localPt_Ref)
        );
    }

    edit(editPt_Ref: Pt_Ref)
    {
        this._Pt_RefProvider.Pt_Ref = editPt_Ref;
        this._dialogService.open(EditPt_RefComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._Pt_RefHttp.updateToDatabase(result)
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
