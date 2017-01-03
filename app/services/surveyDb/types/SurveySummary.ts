// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types
export class SurveySummary_Trav
{
    private m_TravID : number;
    private m_TravName : string;
    private m_TravUpdated : number;
    private m_PtTravStart : string;
    private m_PtTravEnd : string;

    constructor()
    {
        this.m_TravID = 0;
        this.m_TravName = "";
        this.m_TravUpdated = 0;
        this.m_PtTravStart = "";
        this.m_PtTravEnd = "";
    }

    get TravID() : number
    {
        return this.m_TravID;
    }
    get TravName() : string
    {
        return this.m_TravName;
    }
    get TravUpdated() : number
    {
        return this.m_TravUpdated;
    }
    get PtTravStart() : string
    {
        return this.m_PtTravStart;
    }
    get PtTravEnd() : string
    {
        return this.m_PtTravEnd;
    }


    static fromJson(strJson) : SurveySummary_Trav
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_Trav.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_Trav
    {
        let objSurveySummary_Trav = new SurveySummary_Trav();
        objSurveySummary_Trav.m_TravID = objJson.travID;
        objSurveySummary_Trav.m_TravName = objJson.travName;
        objSurveySummary_Trav.m_TravUpdated = objJson.travUpdated;
        objSurveySummary_Trav.m_PtTravStart = objJson.ptTravStart;
        objSurveySummary_Trav.m_PtTravEnd = objJson.ptTravEnd;

        return objSurveySummary_Trav;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            travID: this.m_TravID,
            travName: this.m_TravName,
            travUpdated: this.m_TravUpdated,
            ptTravStart: this.m_PtTravStart,
            ptTravEnd: this.m_PtTravEnd

        };
    }
}
export class SurveySummary_PtSurv
{
    private m_PtID : number;
    private m_PtName : string;
    private m_PtX : number;
    private m_PtY : number;
    private m_PtZ : number;

    constructor()
    {
        this.m_PtID = 0;
        this.m_PtName = "";
        this.m_PtX = 0;
        this.m_PtY = 0;
        this.m_PtZ = 0;
    }

    get PtID() : number
    {
        return this.m_PtID;
    }
    get PtName() : string
    {
        return this.m_PtName;
    }
    get PtX() : number
    {
        return this.m_PtX;
    }
    get PtY() : number
    {
        return this.m_PtY;
    }
    get PtZ() : number
    {
        return this.m_PtZ;
    }


    static fromJson(strJson) : SurveySummary_PtSurv
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_PtSurv.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_PtSurv
    {
        let objSurveySummary_PtSurv = new SurveySummary_PtSurv();
        objSurveySummary_PtSurv.m_PtID = objJson.ptID;
        objSurveySummary_PtSurv.m_PtName = objJson.ptName;
        objSurveySummary_PtSurv.m_PtX = objJson.ptX;
        objSurveySummary_PtSurv.m_PtY = objJson.ptY;
        objSurveySummary_PtSurv.m_PtZ = objJson.ptZ;

        return objSurveySummary_PtSurv;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptID: this.m_PtID,
            ptName: this.m_PtName,
            ptX: this.m_PtX,
            ptY: this.m_PtY,
            ptZ: this.m_PtZ

        };
    }
}
export class SurveySummary_Proj
{
    private m_ProjID : number;
    private m_ProjName : string;

    constructor()
    {
        this.m_ProjID = 0;
        this.m_ProjName = "";
    }

    get ProjID() : number
    {
        return this.m_ProjID;
    }
    get ProjName() : string
    {
        return this.m_ProjName;
    }


    static fromJson(strJson) : SurveySummary_Proj
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary_Proj.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary_Proj
    {
        let objSurveySummary_Proj = new SurveySummary_Proj();
        objSurveySummary_Proj.m_ProjID = objJson.projID;
        objSurveySummary_Proj.m_ProjName = objJson.projName;

        return objSurveySummary_Proj;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            projID: this.m_ProjID,
            projName: this.m_ProjName

        };
    }
}


export class SurveySummary
{
    private m_ID : number;
    private m_Name : string;
    private m_Created : number;
    private m_Updated : number;
    private m_Description : string;
    private m_Proj : SurveySummary_Proj;
    private m_Travs : SurveySummary_Trav;
    private m_PtSurvs : SurveySummary_PtSurv;


    constructor()
    {
        this.m_ID = 0;
        this.m_Name = "";
        this.m_Created = 0;
        this.m_Updated = 0;
        this.m_Description = "";
        this.m_Proj = new SurveySummary_Proj();
        this.m_Travs = new SurveySummary_Trav();
        this.m_PtSurvs = new SurveySummary_PtSurv();
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get Name() : string
    {
        return this.m_Name;
    }
    get Created() : number
    {
        return this.m_Created;
    }
    get Updated() : number
    {
        return this.m_Updated;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get Proj() : SurveySummary_Proj
    {
        return this.m_Proj;
    }
    get Travs() : SurveySummary_Trav
    {
        return this.m_Travs;
    }
    get PtSurvs() : SurveySummary_PtSurv
    {
        return this.m_PtSurvs;
    }


    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        return objUpdated;
    }


    setSaved() : void
    {
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveySummary[]
    {
        return lodash.map(objJson, (objSurveySummaryJson) => SurveySummary.fromJsonObject(objSurveySummaryJson));
    }

    static fromJson(strJson) : SurveySummary
    {
        let objJson = JSON.parse(strJson);
        return SurveySummary.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveySummary
    {
        let objSurveySummary = new SurveySummary();
        objSurveySummary.m_ID = objJson.ID;
        objSurveySummary.m_Name = objJson.Name;
        objSurveySummary.m_Created = objJson.created;
        objSurveySummary.m_Updated = objJson.updated;
        objSurveySummary.m_Description = objJson.Description;
        objSurveySummary.m_Proj = SurveySummary_Proj.fromJsonObject(objJson.proj);
        objSurveySummary.m_Travs = SurveySummary_Trav.fromJsonObject(objJson.trav);
        objSurveySummary.m_PtSurvs = SurveySummary_PtSurv.fromJsonObject(objJson.ptSurv);

        return objSurveySummary;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: this.m_ID,
            Name: this.m_Name,
            created: this.m_Created,
            updated: this.m_Updated,
            Description: this.m_Description,
            proj: this.m_Proj.toJsonObject(),
            trav: this.m_Travs.toJsonObject(),
            ptSurv: this.m_PtSurvs.toJsonObject()

        };
    }
}