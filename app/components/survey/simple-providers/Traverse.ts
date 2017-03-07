// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:08 AEST 2017

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
