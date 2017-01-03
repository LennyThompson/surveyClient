// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017
"use strict";
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var InstrumentManufacturer = (function () {
    function InstrumentManufacturer() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
    }
    Object.defineProperty(InstrumentManufacturer.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstrumentManufacturer.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstrumentManufacturer.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstrumentManufacturer.prototype, "Name", {
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
    Object.defineProperty(InstrumentManufacturer.prototype, "Description", {
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
    InstrumentManufacturer.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = this.m_Description;
        }
        return objUpdated;
    };
    InstrumentManufacturer.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
    };
    InstrumentManufacturer.prototype.toFirebase = function () {
        var objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description
        };
        return objFirebase;
    };
    InstrumentManufacturer.fromFirebase = function (firebaseObj) {
        var objInstrumentManufacturer = new InstrumentManufacturer();
        objInstrumentManufacturer.m_ID = firebaseObj.ID;
        objInstrumentManufacturer.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objInstrumentManufacturer.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objInstrumentManufacturer.m_Name = firebaseObj.Name;
        objInstrumentManufacturer.m_Description = firebaseObj.Description;
        objInstrumentManufacturer.setSaved();
        return objInstrumentManufacturer;
    };
    // Generate static insterface to de-serialise from response JSON
    InstrumentManufacturer.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objInstrumentManufacturerJson) { return InstrumentManufacturer.fromJsonObject(objInstrumentManufacturerJson); });
    };
    InstrumentManufacturer.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return InstrumentManufacturer.fromJsonObject(objJson);
    };
    InstrumentManufacturer.fromJsonObject = function (objJson) {
        var objInstrumentManufacturer = new InstrumentManufacturer();
        objInstrumentManufacturer.m_ID = objJson.ID;
        objInstrumentManufacturer.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objInstrumentManufacturer.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objInstrumentManufacturer.m_Name = objJson.Name;
        objInstrumentManufacturer.m_Description = objJson.Description;
        return objInstrumentManufacturer;
    };
    InstrumentManufacturer.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    InstrumentManufacturer.prototype.toJsonObject = function () {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description
        };
    };
    return InstrumentManufacturer;
}());
exports.InstrumentManufacturer = InstrumentManufacturer;
//# sourceMappingURL=InstrumentManufacturer.js.map