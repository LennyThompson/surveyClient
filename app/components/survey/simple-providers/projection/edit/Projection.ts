// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

// Declare injectable provider for editing a form provider type
import {Injectable} from "@angular/core";
import {MdDialogConfig, MdDialog} from "@angular/material";
import {Projection} from "./../../../../../services/surveyDb/types";
import {EditProjectionComponent} from "./../../../form";
import {ProjectionServiceHttp} from "./../../../../../services/surveyDb/webAPI";
import {CurrentProjectionProvider} from "./../Projection";

@Injectable()
export class EditProjectionProvider
{
    constructor(
        private _dialogService: MdDialog,
        private _ProjectionHttp: ProjectionServiceHttp,
        private _ProjectionProvider: CurrentProjectionProvider
    )
    {
    }

    public editID(ID: number)
    {
        this._ProjectionHttp.loadProjectionFromDatabase(ID)
        .subscribe(
                (localProjection: Projection) => this.editProjection(localProjection)
        );
    }

    public editProjection(editProjection: Projection)
    {
        this._ProjectionProvider.Projection = editProjection;
        this._dialogService.open(EditProjectionComponent)
            .afterClosed()
            .subscribe(
                (result) =>
                {
                    if(result)
                    {
                        console.log(JSON.stringify(result));
                        this._ProjectionHttp.updateToDatabase(result)
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