// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {CurrentTraverseProvider} from "./../../../simple-providers";
import {TraverseServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditTraverseComponent} from "./../../";


@Injectable (
)
export class EditTraverseProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _Traverse: CurrentTraverseProvider,
        private _TraverseService: TraverseServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._TraverseService.loadTraverseFromDatabase(keyId)
            .subscribe(
                (result: Traverse) => this.doEdit(result)
            );
    }

    private doEdit(editTraverse: Traverse)
    {
        this._Traverse.Traverse = editTraverse;
        this._dialogService.open(EditTraverseComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._TraverseService.updateToDatabase(result)
                            .subscribe(
                                (result) =>
                                {
                                }
                            );
                    }
                    else
                    {
                    }
                }
            );
    }

    delete(keyId: number)
    {
        this._TraverseService.loadTraverseFromDatabase(keyId)
            .subscribe(
                (result: Traverse) => this.doDelete(result)
            );
    }

    private doDelete(editTraverse: Traverse)
    {
        console.log("no yet implemented");
    }
}