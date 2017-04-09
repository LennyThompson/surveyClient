// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Traverse} from "./../../../../../services/surveyDb/types";
import {EditTraverseComponent} from "./../../../form";
import {TraverseServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {CurrentTraverseProvider} from "./../Traverse";

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

    public editID(ID: number)
    {
        this._TraverseHttp.loadTraverseFromDatabase(ID)
        .subscribe(
                (localTraverse: Traverse) => this.editTraverse(localTraverse)
        );
    }

    public editTraverse(editTraverse: Traverse)
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