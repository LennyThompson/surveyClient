// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types
export class TraverseSummary_PtStart
{
    private m_PtStartID : number;
    private m_PtStartName : string;
    private m_PtStartX : number;
    private m_PtStartY : number;
    private m_PtStartZ : number;

    constructor()
    {
        this.m_PtStartID = 0;
        this.m_PtStartName = "";
        this.m_PtStartX = 0;
        this.m_PtStartY = 0;
        this.m_PtStartZ = 0;
    }

    get PtStartID() : number
    {
        return this.m_PtStartID;
    }
    get PtStartName() : string
    {
        return this.m_PtStartName;
    }
    get PtStartX() : number
    {
        return this.m_PtStartX;
    }
    get PtStartY() : number
    {
        return this.m_PtStartY;
    }
    get PtStartZ() : number
    {
        return this.m_PtStartZ;
    }


    static fromJson(strJson) : TraverseSummary_PtStart
    {
        let objJson = JSON.parse(strJson);
        return TraverseSummary_PtStart.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseSummary_PtStart
    {
        let objTraverseSummary_PtStart = new TraverseSummary_PtStart();
        objTraverseSummary_PtStart.m_PtStartID = objJson.ptStartID;
        objTraverseSummary_PtStart.m_PtStartName = objJson.ptStartName;
        objTraverseSummary_PtStart.m_PtStartX = objJson.ptStartX;
        objTraverseSummary_PtStart.m_PtStartY = objJson.ptStartY;
        objTraverseSummary_PtStart.m_PtStartZ = objJson.ptStartZ;

        return objTraverseSummary_PtStart;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptStartID: this.m_PtStartID,
            ptStartName: this.m_PtStartName,
            ptStartX: this.m_PtStartX,
            ptStartY: this.m_PtStartY,
            ptStartZ: this.m_PtStartZ

        };
    }
}
export class TraverseSummary_PtEnd
{
    private m_PtEndID : number;
    private m_PtEndName : string;
    private m_PtEndX : number;
    private m_PtEndY : number;
    private m_PtEndZ : number;

    constructor()
    {
        this.m_PtEndID = 0;
        this.m_PtEndName = "";
        this.m_PtEndX = 0;
        this.m_PtEndY = 0;
        this.m_PtEndZ = 0;
    }

    get PtEndID() : number
    {
        return this.m_PtEndID;
    }
    get PtEndName() : string
    {
        return this.m_PtEndName;
    }
    get PtEndX() : number
    {
        return this.m_PtEndX;
    }
    get PtEndY() : number
    {
        return this.m_PtEndY;
    }
    get PtEndZ() : number
    {
        return this.m_PtEndZ;
    }


    static fromJson(strJson) : TraverseSummary_PtEnd
    {
        let objJson = JSON.parse(strJson);
        return TraverseSummary_PtEnd.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseSummary_PtEnd
    {
        let objTraverseSummary_PtEnd = new TraverseSummary_PtEnd();
        objTraverseSummary_PtEnd.m_PtEndID = objJson.ptEndID;
        objTraverseSummary_PtEnd.m_PtEndName = objJson.ptEndName;
        objTraverseSummary_PtEnd.m_PtEndX = objJson.ptEndX;
        objTraverseSummary_PtEnd.m_PtEndY = objJson.ptEndY;
        objTraverseSummary_PtEnd.m_PtEndZ = objJson.ptEndZ;

        return objTraverseSummary_PtEnd;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptEndID: this.m_PtEndID,
            ptEndName: this.m_PtEndName,
            ptEndX: this.m_PtEndX,
            ptEndY: this.m_PtEndY,
            ptEndZ: this.m_PtEndZ

        };
    }
}


export class TraverseSummary
{
    private m_ID : number;
    private m_SurveyID : number;
    private m_Name : string;
    private m_Updated : number;
    private m_Description : string;
    private m_PtStart : TraverseSummary_PtStart;
    private m_PtEnd : TraverseSummary_PtEnd;


    constructor()
    {
        this.m_ID = 0;
        this.m_SurveyID = 0;
        this.m_Name = "";
        this.m_Updated = 0;
        this.m_Description = "";
        this.m_PtStart = new TraverseSummary_PtStart();
        this.m_PtEnd = new TraverseSummary_PtEnd();
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get SurveyID() : number
    {
        return this.m_SurveyID;
    }
    get Name() : string
    {
        return this.m_Name;
    }
    get Updated() : number
    {
        return this.m_Updated;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get PtStart() : TraverseSummary_PtStart
    {
        return this.m_PtStart;
    }
    get PtEnd() : TraverseSummary_PtEnd
    {
        return this.m_PtEnd;
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

    static arrayFromJson(objJson) : TraverseSummary[]
    {
        return lodash.map(objJson, (objTraverseSummaryJson) => TraverseSummary.fromJsonObject(objTraverseSummaryJson));
    }

    static fromJson(strJson) : TraverseSummary
    {
        let objJson = JSON.parse(strJson);
        return TraverseSummary.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseSummary
    {
        let objTraverseSummary = new TraverseSummary();
        objTraverseSummary.m_ID = objJson.ID;
        objTraverseSummary.m_SurveyID = objJson.SurveyID;
        objTraverseSummary.m_Name = objJson.Name;
        objTraverseSummary.m_Updated = objJson.Updated;
        objTraverseSummary.m_Description = objJson.Description;
        objTraverseSummary.m_PtStart = TraverseSummary_PtStart.fromJsonObject(objJson.ptStart);
        objTraverseSummary.m_PtEnd = TraverseSummary_PtEnd.fromJsonObject(objJson.ptEnd);

        return objTraverseSummary;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: this.m_ID,
            SurveyID: this.m_SurveyID,
            Name: this.m_Name,
            Updated: this.m_Updated,
            Description: this.m_Description,
            ptStart: this.m_PtStart.toJsonObject(),
            ptEnd: this.m_PtEnd.toJsonObject()

        };
    }
}