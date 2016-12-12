import {Projection} from "./Projection";
import {SurveyPoint} from "./SurveyPoint";
import {Instrument} from "./Instrument";
import {Traverse} from "./Traverse";
import {SurveyMeasurement} from "./SurveyMeasurement";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";

export class Survey
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;
    private m_Projection : Projection;
    private m_SurveyPoint : SurveyPoint[];
    private m_Instrument : Instrument[];
    private m_Traverse : Traverse[];
    private m_SurveyMeasurement : SurveyMeasurement[];

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bProjectionUpdated : boolean;
    private m_bSurveyPointUpdated : boolean;
    private m_bInstrumentUpdated : boolean;
    private m_bTraverseUpdated : boolean;
    private m_bSurveyMeasurementUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Projection = new Projection();
        this.m_SurveyPoint = [];
        this.m_Instrument = [];
        this.m_Traverse = [];
        this.m_SurveyMeasurement = [];

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bProjectionUpdated = true;
        this.m_bSurveyPointUpdated = true;
        this.m_bInstrumentUpdated = true;
        this.m_bTraverseUpdated = true;
        this.m_bSurveyMeasurementUpdated = true;
    }

    get ID() : number
    {
        return this.m_ID;
    }
    get Created() : Date
    {
        return this.m_Created;
    }
    get Updated() : Date
    {
        return this.m_Updated;
    }
    get Name() : string
    {
        return this.m_Name;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get Projection() : Projection
    {
        return this.m_Projection;
    }
    get SurveyPoint() : SurveyPoint[]
    {
        return this.m_SurveyPoint;
    }
    get Instrument() : Instrument[]
    {
        return this.m_Instrument;
    }
    get Traverse() : Traverse[]
    {
        return this.m_Traverse;
    }
    get SurveyMeasurement() : SurveyMeasurement[]
    {
        return this.m_SurveyMeasurement;
    }

    set Name(Name : string)
    {
        this.m_Name = Name;
        this.m_bNameUpdated = true;
    }
    set Description(Description : string)
    {
        this.m_Description = Description;
        this.m_bDescriptionUpdated = true;
    }
    set Projection(Projection : Projection)
    {
        this.m_Projection = Projection;
        this.m_bProjectionUpdated = true;
    }

    addSurveyPoint(addSurveyPoint : SurveyPoint)
    {
        this.m_SurveyPoint.push(addSurveyPoint);
        this.m_bSurveyPointUpdated = true;
    }
    addInstrument(addInstrument : Instrument)
    {
        this.m_Instrument.push(addInstrument);
        this.m_bInstrumentUpdated = true;
    }
    addTraverse(addTraverse : Traverse)
    {
        this.m_Traverse.push(addTraverse);
        this.m_bTraverseUpdated = true;
    }
    addSurveyMeasurement(addSurveyMeasurement : SurveyMeasurement)
    {
        this.m_SurveyMeasurement.push(addSurveyMeasurement);
        this.m_bSurveyMeasurementUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bNameUpdated)
        {
            objUpdated["Name"] = this.m_Name;
        }
        if (this.m_bDescriptionUpdated)
        {
            objUpdated["Description"] = this.m_Description;
        }
        if (this.m_bProjectionUpdated)
        {
            objUpdated["ProjectionID"] = this.m_Projection.toJsonObject();
        }
        if (this.m_bSurveyPointUpdated)
        {
            objUpdated["SurveyPoint"] = lodash.map(
                this.m_SurveyPoint,
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bInstrumentUpdated)
        {
            objUpdated["Instrument"] = lodash.map(
                this.m_Instrument,
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bTraverseUpdated)
        {
            objUpdated["Traverse"] = lodash.map(
                this.m_Traverse,
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }
        if (this.m_bSurveyMeasurementUpdated)
        {
            objUpdated["SurveyMeasurement"] = lodash.map(
                this.m_SurveyMeasurement,
                (arrayMember) =>
                {
                    return arrayMember.toJsonObject();
                }
            );
        }

        return objUpdated;
    }


    toFirebase() : any
    {

        let objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            ProjectionID: this.m_Projection.toFirebase(),
            SurveyPoint: lodash.map(
                    this.m_SurveyPoint,
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Instrument: lodash.map(
                    this.m_Instrument,
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            Traverse: lodash.map(
                    this.m_Traverse,
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                ),
            SurveyMeasurement: lodash.map(
                    this.m_SurveyMeasurement,
                    (arrayMember) =>
                    {
                        return arrayMember.toFirebase();
                    }
                )

        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bProjectionUpdated = false;
        this.m_bSurveyPointUpdated = false;
        this.m_bInstrumentUpdated = false;
        this.m_bTraverseUpdated = false;
        this.m_bSurveyMeasurementUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Survey
    {
        let objSurvey = new Survey();
        objSurvey.m_ID = firebaseObj.ID;
        objSurvey.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurvey.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurvey.m_Name = firebaseObj.Name;
        objSurvey.m_Description = firebaseObj.Description;
        objSurvey.m_Projection = Projection.fromFirebase(firebaseObj.ProjectionID);
        objSurvey.m_SurveyPoint = lodash.map(
                firebaseObj.SurveyPoint,
                (arrayMember) =>
                {
                    return SurveyPoint.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_Instrument = lodash.map(
                firebaseObj.Instrument,
                (arrayMember) =>
                {
                    return Instrument.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_Traverse = lodash.map(
                firebaseObj.Traverse,
                (arrayMember) =>
                {
                    return Traverse.fromFirebase(arrayMember);
                }
            );
        objSurvey.m_SurveyMeasurement = lodash.map(
                firebaseObj.SurveyMeasurement,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromFirebase(arrayMember);
                }
            );

        objSurvey.setSaved();
        return objSurvey;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : Survey[]
    {
        return lodash.map(objJson, (objSurveyJson) => Survey.fromJsonObject(objSurveyJson));
    }

    static fromJson(strJson) : Survey
    {
        let objJson = JSON.parse(strJson);
        return Survey.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Survey
    {
        let objSurvey = new Survey();
        objSurvey.m_ID = objJson.ID;
        objSurvey.m_Created = TimeConversion.toDate(objJson.created);
        objSurvey.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurvey.m_Name = objJson.Name;
        objSurvey.m_Description = objJson.Description;
        objSurvey.m_Projection = Projection.fromJsonObject(objJson.ProjectionID);
        objSurvey.m_SurveyPoint = lodash.map(
                objJson.SurveyPoint,
                (arrayMember) =>
                {
                    return SurveyPoint.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_Instrument = lodash.map(
                objJson.Instrument,
                (arrayMember) =>
                {
                    return Instrument.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_Traverse = lodash.map(
                objJson.Traverse,
                (arrayMember) =>
                {
                    return Traverse.fromJsonObject(arrayMember);
                }
            );
        objSurvey.m_SurveyMeasurement = lodash.map(
                objJson.SurveyMeasurement,
                (arrayMember) =>
                {
                    return SurveyMeasurement.fromJsonObject(arrayMember);
                }
            );

        return objSurvey;
    }

    toJson() : string
    {
        return JSON.stringify(this.toJsonObject());
    }

    toJsonObject() : any
    {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            ProjectionID: this.m_Projection.toJsonObject(),
            SurveyPoint: lodash.map(
                    this.m_SurveyPoint,
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Instrument: lodash.map(
                    this.m_Instrument,
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            Traverse: lodash.map(
                    this.m_Traverse,
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                ),
            SurveyMeasurement: lodash.map(
                    this.m_SurveyMeasurement,
                    (arrayMember) =>
                    {
                        return arrayMember.toJsonObject();
                    }
                )

        };
    }
}