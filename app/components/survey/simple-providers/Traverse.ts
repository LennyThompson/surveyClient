// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Mar 26 15:41:09 AEST 2017

import {Injectable} from "@angular/core";
import {Traverse} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type Traverse

@Injectable()
export class CurrentTraverseProvider
{
    m_Traverse: Traverse;

    get Traverse(): Traverse
    {
        if(!this.m_Traverse)
        {
            this.m_Traverse = new Traverse();
        }
        return this.m_Traverse;
    }

    set Traverse(value: Traverse)
    {
        this.m_Traverse = value;
    }

    hasExistingTraverse(): boolean
    {
        return !!this.m_Traverse;
    }
}

// Declare injectable provider for id context of type Traverse

@Injectable()
export class TraverseContextProvider
{
    m_ID: number;

    get TraverseID(): number
    {
        return this.m_ID;
    }

    set TraverseID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type Traverse

@Injectable()
export class CurrentTraverseListProvider
{
    m_listTraverse: Traverse[];

    get Traverses(): Traverse[]
    {
        if(!this.m_listTraverse)
        {
            this.m_listTraverse = new Array<Traverse>();
        }
        return this.m_listTraverse;
    }

    set Traverses(value: Traverse[])
    {
        this.m_listTraverse = value;
    }
}

// Declare injectable provider for editing a form provider type
import {MdDialogConfig, MdDialog} from "@angular/material";

@Injectable()
export class EditTraverseProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _TraverseHttp: TraverseServiceHttp,
        private _TraverseProvider: CurrentTraverseProvider
    )
    {
    }

    edit(ID: number)
    {
        this._TraverseHttp.loadTraverseFromDatabase(ID)
        .subscribe(
                (localTraverse: Traverse) => edit(localTraverse)
        );
    }

    edit(editTraverse: Traverse)
    {
        this._TraverseProvider.Traverse = editTraverse;
        this._dialogService.open(EditTraverseComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._TraverseHttp.updateToDatabase(result)
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
