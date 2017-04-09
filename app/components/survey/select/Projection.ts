// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017

import { Component, ViewChild, ViewChildren, QueryList, Inject, Optional} from "@angular/core";
import {MdSelect, MdOption} from "@angular/material";
import {ElementBase} from "./../utils/element-base";
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NgModel, NG_VALUE_ACCESSOR} from "@angular/forms";

import {Projection} from "./../../../services/surveyDb/types/Projection";
import {ProjectionServiceHttp} from "./../../../services/surveyDb/webAPI/ProjectionServiceHttp";

import * as lodash from "lodash";

@Component(
    {
        selector: "projection-select",
        templateUrl: "./Projection.html",
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
    listProjection: Projection[];
    @ViewChild(MdSelect) select: MdSelect;
    @ViewChildren(MdOption) options: QueryList<MdOption>;

    @ViewChild(NgModel) model: NgModel;

    protected currentProjection: Projection;

    constructor
    (
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
        private serviceProjection: ProjectionServiceHttp
    )
    {
        super(validators, asyncValidators);
        serviceProjection.loadAllFromDatabase().subscribe(
            (listProjection) =>
            {
                this.listProjection = listProjection;
                this.updateValue();
            }
        );
    }

    get Projection(): Projection[]
    {
        return this.listProjection;
    }

    updateValue()
    {
        if(this.listProjection && this.currentProjection)
        {
            let currentType = lodash(this.listProjection).find(type => type.ID === this.currentProjection.ID);
            super.writeValue(currentType);
        }
    }

    writeValue(value: Projection)
    {
        this.currentProjection = value;
        this.updateValue();
    }
}