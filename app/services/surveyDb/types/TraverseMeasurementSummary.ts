// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";
// declare internal types
export class SurvMeas_PtTo
{
    private m_PtToID : number;
    private m_PtToName : string;
    private m_PtToX : number;
    private m_PtToY : number;
    private m_PtToZ : number;

    constructor()
    {
        this.m_PtToID = 0;
        this.m_PtToName = "";
        this.m_PtToX = 0;
        this.m_PtToY = 0;
        this.m_PtToZ = 0;
    }

    get PtToID() : number
    {
        return this.m_PtToID;
    }
    get PtToName() : string
    {
        return this.m_PtToName;
    }
    get PtToX() : number
    {
        return this.m_PtToX;
    }
    get PtToY() : number
    {
        return this.m_PtToY;
    }
    get PtToZ() : number
    {
        return this.m_PtToZ;
    }


    static fromJson(strJson) : SurvMeas_PtTo
    {
        let objJson = JSON.parse(strJson);
        return SurvMeas_PtTo.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurvMeas_PtTo
    {
        let objSurvMeas_PtTo = new SurvMeas_PtTo();
        objSurvMeas_PtTo.m_PtToID = objJson.ptToID;
        objSurvMeas_PtTo.m_PtToName = objJson.ptToName;
        objSurvMeas_PtTo.m_PtToX = objJson.ptToX;
        objSurvMeas_PtTo.m_PtToY = objJson.ptToY;
        objSurvMeas_PtTo.m_PtToZ = objJson.ptToZ;

        return objSurvMeas_PtTo;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptToID: this.m_PtToID,
            ptToName: this.m_PtToName,
            ptToX: this.m_PtToX,
            ptToY: this.m_PtToY,
            ptToZ: this.m_PtToZ

        };
    }
}
export class SurvMeas_PtFrom
{
    private m_PtFromID : number;
    private m_PtFromName : string;
    private m_PtFromX : number;
    private m_PtFromY : number;
    private m_PtFromZ : number;

    constructor()
    {
        this.m_PtFromID = 0;
        this.m_PtFromName = "";
        this.m_PtFromX = 0;
        this.m_PtFromY = 0;
        this.m_PtFromZ = 0;
    }

    get PtFromID() : number
    {
        return this.m_PtFromID;
    }
    get PtFromName() : string
    {
        return this.m_PtFromName;
    }
    get PtFromX() : number
    {
        return this.m_PtFromX;
    }
    get PtFromY() : number
    {
        return this.m_PtFromY;
    }
    get PtFromZ() : number
    {
        return this.m_PtFromZ;
    }


    static fromJson(strJson) : SurvMeas_PtFrom
    {
        let objJson = JSON.parse(strJson);
        return SurvMeas_PtFrom.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurvMeas_PtFrom
    {
        let objSurvMeas_PtFrom = new SurvMeas_PtFrom();
        objSurvMeas_PtFrom.m_PtFromID = objJson.ptFromID;
        objSurvMeas_PtFrom.m_PtFromName = objJson.ptFromName;
        objSurvMeas_PtFrom.m_PtFromX = objJson.ptFromX;
        objSurvMeas_PtFrom.m_PtFromY = objJson.ptFromY;
        objSurvMeas_PtFrom.m_PtFromZ = objJson.ptFromZ;

        return objSurvMeas_PtFrom;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ptFromID: this.m_PtFromID,
            ptFromName: this.m_PtFromName,
            ptFromX: this.m_PtFromX,
            ptFromY: this.m_PtFromY,
            ptFromZ: this.m_PtFromZ

        };
    }
}
export class TraverseMeasurementSummary_SurvMeas
{
    private m_MeasID : number;
    private m_Horizontal : number;
    private m_Vertical : number;
    private m_Bearing : number;
    private m_PtFrom : SurvMeas_PtFrom;
    private m_PtTo : SurvMeas_PtTo;

    constructor()
    {
        this.m_MeasID = 0;
        this.m_Horizontal = 0;
        this.m_Vertical = 0;
        this.m_Bearing = 0;
        this.m_PtFrom = new SurvMeas_PtFrom();
        this.m_PtTo = new SurvMeas_PtTo();
    }

    get MeasID() : number
    {
        return this.m_MeasID;
    }
    get Horizontal() : number
    {
        return this.m_Horizontal;
    }
    get Vertical() : number
    {
        return this.m_Vertical;
    }
    get Bearing() : number
    {
        return this.m_Bearing;
    }
    get PtFrom() : SurvMeas_PtFrom
    {
        return this.m_PtFrom;
    }
    get PtTo() : SurvMeas_PtTo
    {
        return this.m_PtTo;
    }


    static fromJson(strJson) : TraverseMeasurementSummary_SurvMeas
    {
        let objJson = JSON.parse(strJson);
        return TraverseMeasurementSummary_SurvMeas.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseMeasurementSummary_SurvMeas
    {
        let objTraverseMeasurementSummary_SurvMeas = new TraverseMeasurementSummary_SurvMeas();
        objTraverseMeasurementSummary_SurvMeas.m_MeasID = objJson.measID;
        objTraverseMeasurementSummary_SurvMeas.m_Horizontal = objJson.Horizontal;
        objTraverseMeasurementSummary_SurvMeas.m_Vertical = objJson.Vertical;
        objTraverseMeasurementSummary_SurvMeas.m_Bearing = objJson.Bearing;
        objTraverseMeasurementSummary_SurvMeas.m_PtFrom = SurvMeas_PtFrom.fromJsonObject(objJson.ptFrom);
        objTraverseMeasurementSummary_SurvMeas.m_PtTo = SurvMeas_PtTo.fromJsonObject(objJson.ptTo);

        return objTraverseMeasurementSummary_SurvMeas;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            measID: this.m_MeasID,
            Horizontal: this.m_Horizontal,
            Vertical: this.m_Vertical,
            Bearing: this.m_Bearing,
            ptFrom: this.m_PtFrom.toJsonObject(),
            ptTo: this.m_PtTo.toJsonObject()

        };
    }
}


export class TraverseMeasurementSummary
{
    private m_ID : number;
    private m_SurveyID : number;
    private m_SurvMeass : TraverseMeasurementSummary_SurvMeas;


    constructor()
    {
        this.m_ID = 0;
        this.m_SurveyID = 0;
        this.m_SurvMeass = new TraverseMeasurementSummary_SurvMeas();
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get SurveyID() : number
    {
        return this.m_SurveyID;
    }
    get SurvMeass() : TraverseMeasurementSummary_SurvMeas
    {
        return this.m_SurvMeass;
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

    static arrayFromJson(objJson) : TraverseMeasurementSummary[]
    {
        return lodash.map(objJson, (objTraverseMeasurementSummaryJson) => TraverseMeasurementSummary.fromJsonObject(objTraverseMeasurementSummaryJson));
    }

    static fromJson(strJson) : TraverseMeasurementSummary
    {
        let objJson = JSON.parse(strJson);
        return TraverseMeasurementSummary.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : TraverseMeasurementSummary
    {
        let objTraverseMeasurementSummary = new TraverseMeasurementSummary();
        objTraverseMeasurementSummary.m_ID = objJson.ID;
        objTraverseMeasurementSummary.m_SurveyID = objJson.SurveyID;
        objTraverseMeasurementSummary.m_SurvMeass = TraverseMeasurementSummary_SurvMeas.fromJsonObject(objJson.survMeas);

        return objTraverseMeasurementSummary;
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
            survMeas: this.m_SurvMeass.toJsonObject()

        };
    }
}