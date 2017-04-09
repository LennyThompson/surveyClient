// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:48 AEST 2017

import {Injectable} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Projection} from "./../../../../../services/surveyDb/types";
import {CurrentProjectionProvider} from "./../../../simple-providers";
import {ProjectionServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {EditProjectionComponent} from "./../../";


@Injectable (
)
export class EditProjectionProvider
{
    constructor
    (
        private _dialogService: MdDialog,
        private _Projection: CurrentProjectionProvider,
        private _ProjectionService: ProjectionServiceHttp
    )
    {
    }

    edit(keyId: number)
    {
        this._ProjectionService.loadProjectionFromDatabase(keyId)
            .subscribe(
                (result: Projection) => this.doEdit(result)
            );
    }

    private doEdit(editProjection: Projection)
    {
        this._Projection.Projection = editProjection;
        this._dialogService.open(EditProjectionComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        this._ProjectionService.updateToDatabase(result)
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
        this._ProjectionService.loadProjectionFromDatabase(keyId)
            .subscribe(
                (result: Projection) => this.doDelete(result)
            );
    }

    private doDelete(editProjection: Projection)
    {
        console.log("no yet implemented");
    }
}