// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat May 06 11:26:23 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";
import { Observable } from "rxjs/Rx";

import {Projection} from "./../../../../services/surveyDb/types";
import {ProjectionSubjectProvider} from "./../../../../services/surveyDb/webAPI";
import {EditProjectionProvider} from "./../../edit-providers"

import * as lodash from "lodash";

@Component(
    {
        selector: "projection-select",
        templateUrl: "./Projection.html",
        styleUrls: ["./Projection.scss"],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: ProjectionSelectComponent,
                multi: true,
            }
        ]

    }
)
export class ProjectionSelectComponent extends ElementBase<Projection>
{
    protected _listProjection: Observable<Projection[]>;
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected _currentProjection: Projection;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private _serviceProjection: ProjectionSubjectProvider
        , private _addProjection: EditProjectionProvider

    )
    {
        super(validators, asyncValidators);
        this._listProjection = this._serviceProjection.getProjectionSummaries();
    }

    get Projection(): Observable<Projection[]>
    {
        return this._listProjection;
    }

    updateValue()
    {
        if(this._listProjection && this._currentProjection)
        {
            let subscriber = this._listProjection.subscribe(
                (list) => {
                    let currentType = lodash(list).find(type => type.ID === this._currentProjection.ID);
                    super.writeValue(currentType);
                    subscriber.unsubscribe();
                }
            );
        }
    }

    writeValue(value: Projection)
    {
        this._currentProjection = value;
        this.updateValue();
    }

    private onAddNewProjection()
    {
        this._addProjection.addProjection();
    }

}