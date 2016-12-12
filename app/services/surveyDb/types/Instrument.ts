import {InstrumentManufacturer} from "./InstrumentManufacturer";

import { TimeConversion } from "./../TimeConversion";
import * as lodash from "lodash";

export class Instrument
{
    private m_ID : number;
    private m_Created : Date;
    private m_Updated : Date;
    private m_Name : string;
    private m_Description : string;
    private m_Manufacturer : InstrumentManufacturer;

    private m_bNameUpdated : boolean;
    private m_bDescriptionUpdated : boolean;
    private m_bManufacturerUpdated : boolean;


    constructor()
    {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Manufacturer = new InstrumentManufacturer();

        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bManufacturerUpdated = true;
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
    get Manufacturer() : InstrumentManufacturer
    {
        return this.m_Manufacturer;
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
    set Manufacturer(Manufacturer : InstrumentManufacturer)
    {
        this.m_Manufacturer = Manufacturer;
        this.m_bManufacturerUpdated = true;
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
        if (this.m_bManufacturerUpdated)
        {
            objUpdated["ManufacturerID"] = this.m_Manufacturer.toJsonObject();
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
            ManufacturerID: this.m_Manufacturer.toFirebase()

        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bManufacturerUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Instrument
    {
        let objInstrument = new Instrument();
        objInstrument.m_ID = firebaseObj.ID;
        objInstrument.m_Created = TimeConversion.toDate(firebaseObj.created);
        objInstrument.m_Updated = TimeConversion.toDate(firebaseObj.updated);
        objInstrument.m_Name = firebaseObj.Name;
        objInstrument.m_Description = firebaseObj.Description;
        objInstrument.m_Manufacturer = InstrumentManufacturer.fromFirebase(firebaseObj.ManufacturerID);

        objInstrument.setSaved();
        return objInstrument;
    }

    // Generate static insterface to de-serialise from response JSON

    static arrayFromJson(objJson) : Instrument[]
    {
        return lodash.map(objJson, (objInstrumentJson) => Instrument.fromJsonObject(objInstrumentJson));
    }

    static fromJson(strJson) : Instrument
    {
        let objJson = JSON.parse(strJson);
        return Instrument.fromJsonObject(objJson);
    }

    static fromJsonObject(objJson) : Instrument
    {
        let objInstrument = new Instrument();
        objInstrument.m_ID = objJson.ID;
        objInstrument.m_Created = TimeConversion.toDate(objJson.created);
        objInstrument.m_Updated = TimeConversion.toDate(objJson.updated);
        objInstrument.m_Name = objJson.Name;
        objInstrument.m_Description = objJson.Description;
        objInstrument.m_Manufacturer = InstrumentManufacturer.fromJsonObject(objJson.ManufacturerID);

        return objInstrument;
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
            ManufacturerID: this.m_Manufacturer.toJsonObject()

        };
    }
}