import {Survey} from "./Survey";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";

export class SurveyImage
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Path : string;
    private m_Description : string;
    private m_Survey : Survey;
    private m_PointAtID : number;

    private m_bPathUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bSurveyUpdated : boolean;
    private m_bPointAtIDUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Path = "";
        this.m_Description = "";
        this.m_Survey = new Survey();
        this.m_PointAtID = 0;

        this.m_bPathUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bSurveyUpdated = true;
        this.m_bPointAtIDUpdated = true;
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
    get Path() : string
    {
        return this.m_Path;
    }
    get Description() : string
    {
        return this.m_Description;
    }
    get Survey() : Survey
    {
        return this.m_Survey;
    }
    get PointAtID() : number
    {
        return this.m_PointAtID;
    }

    set Path(Path : string)
    {
        this.m_Path = Path;
        this.m_bPathUpdated = true;
    }
    set Description(Description : string)
    {
        this.m_Description = Description;
        this.m_bDescriptionUpdated = true;
    }
    set Survey(Survey : Survey)
    {
        this.m_Survey = Survey;
        this.m_bSurveyUpdated = true;
    }
    set PointAtID(PointAtID : number)
    {
        this.m_PointAtID = PointAtID;
        this.m_bPointAtIDUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bPathUpdated)
        {
            objUpdated["Path"] = this.m_Path;
        }
        if (this.m_bDescriptionUpdated)
        {
            objUpdated["Description"] = this.m_Description;
        }
        if (this.m_bSurveyUpdated)
        {
            objUpdated["SurveyID"] = this.m_Survey.toJsonObject();
        }
        if (this.m_bPointAtIDUpdated)
        {
            objUpdated["PointAtID"] = this.m_PointAtID;
        }

        return objUpdated;
    }


    toFirebase() : any
    {

        let objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Path: this.m_Path,
            Description: this.m_Description,
            SurveyID: this.m_Survey.toFirebase(),
            PointAtID: this.m_PointAtID

        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bPathUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bSurveyUpdated = false;
        this.m_bPointAtIDUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : SurveyImage
    {
        let objSurveyImage = new SurveyImage();
        objSurveyImage.m_ID = firebaseObj.ID;
        objSurveyImage.m_Created = TimeConversion.toDate(firebaseObj.created);
        objSurveyImage.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objSurveyImage.m_Path = firebaseObj.Path;
        objSurveyImage.m_Description = firebaseObj.Description;
        objSurveyImage.m_Survey = Survey.fromFirebase(firebaseObj.SurveyID);
        objSurveyImage.m_PointAtID = firebaseObj.PointAtID;

        objSurveyImage.setSaved();
        return objSurveyImage;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : SurveyImage[]
    {
        return lodash.map(objJson, (objSurveyImageJson) => SurveyImage.fromJsonObject(objSurveyImageJson));
    }

    static fromJson(strJson) : SurveyImage
    {
        let objJson = JSON.parse(strJson);
        return SurveyImage.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : SurveyImage
    {
        let objSurveyImage = new SurveyImage();
        objSurveyImage.m_ID = objJson.ID;
        objSurveyImage.m_Created = TimeConversion.toDate(objJson.created);
        objSurveyImage.m_Updated = TimeConversion.toDate(objJson.updated);
        objSurveyImage.m_Path = objJson.Path;
        objSurveyImage.m_Description = objJson.Description;
        objSurveyImage.m_Survey = Survey.fromJsonObject(objJson.SurveyID);
        objSurveyImage.m_PointAtID = objJson.PointAtID;

        return objSurveyImage;
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
            Path: this.m_Path,
            Description: this.m_Description,
            SurveyID: this.m_Survey.toJsonObject(),
            PointAtID: this.m_PointAtID

        };
    }
}