"use strict";
var InstrumentManufacturer_1 = require("./InstrumentManufacturer");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
var Instrument = (function () {
    function Instrument() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Manufacturer = new InstrumentManufacturer_1.InstrumentManufacturer();
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bManufacturerUpdated = true;
    }
    Object.defineProperty(Instrument.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "Name", {
        get: function () {
            return this.m_Name;
        },
        set: function (Name) {
            this.m_Name = Name;
            this.m_bNameUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "Description", {
        get: function () {
            return this.m_Description;
        },
        set: function (Description) {
            this.m_Description = Description;
            this.m_bDescriptionUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instrument.prototype, "Manufacturer", {
        get: function () {
            return this.m_Manufacturer;
        },
        set: function (Manufacturer) {
            this.m_Manufacturer = Manufacturer;
            this.m_bManufacturerUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Instrument.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = this.m_Description;
        }
        if (this.m_bManufacturerUpdated) {
            objUpdated["ManufacturerID"] = this.m_Manufacturer.toJsonObject();
        }
        return objUpdated;
    };
    Instrument.prototype.toFirebase = function () {
        var objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            ManufacturerID: this.m_Manufacturer.toFirebase()
        };
        return objFirebase;
    };
    Instrument.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bManufacturerUpdated = false;
    };
    Instrument.fromFirebase = function (firebaseObj) {
        var objInstrument = new Instrument();
        objInstrument.m_ID = firebaseObj.ID;
        objInstrument.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objInstrument.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objInstrument.m_Name = firebaseObj.Name;
        objInstrument.m_Description = firebaseObj.Description;
        objInstrument.m_Manufacturer = InstrumentManufacturer_1.InstrumentManufacturer.fromFirebase(firebaseObj.ManufacturerID);
        objInstrument.setSaved();
        return objInstrument;
    };
    // Generate static insterface to de-serialise from response JSON
    Instrument.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objInstrumentJson) { return Instrument.fromJsonObject(objInstrumentJson); });
    };
    Instrument.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return Instrument.fromJsonObject(objJson);
    };
    Instrument.fromJsonObject = function (objJson) {
        var objInstrument = new Instrument();
        objInstrument.m_ID = objJson.ID;
        objInstrument.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objInstrument.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objInstrument.m_Name = objJson.Name;
        objInstrument.m_Description = objJson.Description;
        objInstrument.m_Manufacturer = InstrumentManufacturer_1.InstrumentManufacturer.fromJsonObject(objJson.ManufacturerID);
        return objInstrument;
    };
    Instrument.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    Instrument.prototype.toJsonObject = function () {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            ManufacturerID: this.m_Manufacturer.toJsonObject()
        };
    };
    return Instrument;
}());
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map