"use strict";
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
var Projection = (function () {
    function Projection() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Date = new Date();
        this.m_Description = "";
        this.m_bIDUpdated = true;
        this.m_bNameUpdated = true;
        this.m_bDateUpdated = true;
        this.m_bDescriptionUpdated = true;
    }
    Object.defineProperty(Projection.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        set: function (ID) {
            this.m_ID = ID;
            this.m_bIDUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projection.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projection.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projection.prototype, "Name", {
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
    Object.defineProperty(Projection.prototype, "Date", {
        get: function () {
            return this.m_Date;
        },
        set: function (Date) {
            this.m_Date = Date;
            this.m_bDateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Projection.prototype, "Description", {
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
    Projection.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bIDUpdated) {
            objUpdated["ID"] = this.m_ID;
        }
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = this.m_Name;
        }
        if (this.m_bDateUpdated) {
            objUpdated["Date"] = this.m_Date.toISOString();
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = this.m_Description;
        }
        return objUpdated;
    };
    Projection.prototype.toFirebase = function () {
        var objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Date: this.m_Date.toISOString(),
            Description: this.m_Description
        };
        return objFirebase;
    };
    Projection.prototype.setSaved = function () {
        this.m_bIDUpdated = false;
        this.m_bNameUpdated = false;
        this.m_bDateUpdated = false;
        this.m_bDescriptionUpdated = false;
    };
    Projection.fromFirebase = function (firebaseObj) {
        var objProjection = new Projection();
        objProjection.m_ID = firebaseObj.ID;
        objProjection.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objProjection.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objProjection.m_Name = firebaseObj.Name;
        objProjection.m_Date = TimeConversion_1.TimeConversion.toDate(firebaseObj.Date);
        objProjection.m_Description = firebaseObj.Description;
        objProjection.setSaved();
        return objProjection;
    };
    // Generate static insterface to de-serialise from response JSON
    Projection.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objProjectionJson) { return Projection.fromJsonObject(objProjectionJson); });
    };
    Projection.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return Projection.fromJsonObject(objJson);
    };
    Projection.fromJsonObject = function (objJson) {
        var objProjection = new Projection();
        objProjection.m_ID = objJson.ID;
        objProjection.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objProjection.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objProjection.m_Name = objJson.Name;
        objProjection.m_Date = TimeConversion_1.TimeConversion.toDate(objJson.Date);
        objProjection.m_Description = objJson.Description;
        return objProjection;
    };
    Projection.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    Projection.prototype.toJsonObject = function () {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Date: this.m_Date.toISOString(),
            Description: this.m_Description
        };
    };
    return Projection;
}());
exports.Projection = Projection;
//# sourceMappingURL=Projection.js.map