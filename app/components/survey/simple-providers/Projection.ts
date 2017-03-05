// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Mar 01 20:56:07 AEST 2017

import {Injectable} from "@angular/core";
import {Projection} from "./../../../services/surveyDb/types";

// Declare injectable provider for simple objects of type Projection

@Injectable()
export class CurrentProjectionProvider
{
    m_Projection: Projection;

    get Projection(): Projection
    {
        if(!this.m_Projection)
        {
            this.m_Projection = new Projection();
        }
        return this.m_Projection;
    }

    set Projection(value: Projection)
    {
        this.m_Projection = value;
    }

    hasExistingProjection(): boolean
    {
        return !!this.m_Projection;
    }
}

// Declare injectable provider for id context of type Projection

@Injectable()
export class ProjectionContextProvider
{
    m_ID: number;

    get ProjectionID(): number
    {
        return this.m_ID;
    }

    set ProjectionID(value: number)
    {
        this.m_ID = value;
    }
}

// Declare injectable provider for array of objects of type Projection

@Injectable()
export class CurrentProjectionListProvider
{
    m_listProjection: Projection[];

    get Projections(): Projection[]
    {
        if(!this.m_listProjection)
        {
            this.m_listProjection = new Array<Projection>();
        }
        return this.m_listProjection;
    }

    set Projections(value: Projection[])
    {
        this.m_listProjection = value;
    }
}
